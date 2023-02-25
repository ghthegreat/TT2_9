import mysql from 'mysql'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT_SECRET= 'asjkdlkajklsdjklsznxm,cnm,12839018293'
const JWT_EXPIRES= '90h'
const COOKIE_EXPIRES= 90

const db = mysql.createConnection({
    host: 'awshackathondb.cnpaqptltymp.ap-northeast-1.rds.amazonaws.com',
    user: 'root',
    password: 'hackathon',
    database: 'InsuranceData',
    port: 3306
})

export const register = (req,res) =>
{
    console.log(req.body)
    const{employeeid,password} = req.body

    if(!password || !employeeid) return res.status(400).json({message: "Please enter your id, email and password"})
    else
    {
        db.query('SELECT EmployeeID FROM user WHERE EmployeeID = ?',employeeid,async (err,results) =>
        {
            if(err)
                console.log(err.message)

            console.log('duplicate id is: '+ results)
            if(results[0]) return res.status(409).json({message: "id already exists"})
            let hashedPassword = await bcrypt.hash(password,10)
            console.log(hashedPassword)

            db.query('INSERT INTO User SET ?', {EmployeeID: employeeid,Password: hashedPassword}, (err,results) =>
            {
                if(err)
                {
                    console.log(err.message)
                    throw(err)
                }
                else
                {
                    console.log(results)
                    return res.status(200).json({message: "user created successfully"})
                }
                
            })
        })
    }
}

export const login = (req,res) =>
{
    console.log(req.body)
    var employeeid = req.body.employeeid
    var password = req.body.password

    console.log('id' + employeeid)
    if(!employeeid || !password) return res.status(400).json({message: "Please enter your id and password"})

    db.query('SELECT * FROM User WHERE EmployeeID = ?',[employeeid],async(err,results) =>
    {
        if(err) throw err
  
        //check if username is right
        if(!results[0]) return res.status(400).json({message: "incorrect id or password"})

        console.log(results[0].Password.length)
        //if > 20 means encrypted do decryption bcrypt check
        if(results[0].Password.length > 20 && await bcrypt.compare(password,results[0].Password))
        {
            console.log('decryption successful')
            password = results[0].Password
        }

        //if not just do normal password check
        if(password != results[0].Password)
        {
            console.log('didnt manage to do bcrypt check')
            return res.status(400).json({message: "incorrect id or password"})
        } 
 
        //succesful login
        const token = jwt.sign({id: results[0].EmployeeID },JWT_SECRET, {
             expiresIn: JWT_EXPIRES,
        })

        const cookieOptions ={
            expiresIn: new Date(Date.now() + COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly: false
        }

        res.cookie("userRegistered",token, cookieOptions);

        if(results[0].Password.length < 20)
        {
            console.log('this is the password i wanna ecrypt: ' + results[0].Password)
            let hashedPassword = await bcrypt.hash(results[0].Password,10)
            console.log(hashedPassword)
            db.query('update User set Password = ? where EmployeeID = ?',[hashedPassword,results[0].EmployeeID])
        }

        return res.status(200).json({message:"user has been logged in"})
    })

}

export const isLoggedIn = async (req, res, next) => {
    if (req.cookies.userRegistered) {
        try {
            // 1. Verify the token
            const decoded = await jwt.verify(req.cookies.userRegistered,
                JWT_SECRET
            );
            console.log(decoded);

            // 2. Check if the user still exist
            db.query('SELECT * FROM User WHERE EmployeeID = ?', [decoded.id], (err, results) => {
                console.log(results);
                if (!results) {
                    console.log("didn't manage to get verify token")
                    return next();
                }
                console.log('managed to decode token')
                console.log(req.user)
                req.user = results[0];
                return next();
            })
        } catch (err) {
            console.log(err)
            return next();
        }
    } else {
        next();
    }
}

export const logout = (req,res) =>
{
    res.cookie('userRegistered', 'logout', {
        expires: new Date(Date.now() - 2 * 1000),
        httpOnly: true
    });
    res.status(200).json({message: "successfully logged out"});
}

