import express from 'express';

const router = express.Router();

// will start with /claims

//route is localhost::5000/claims
router.get('/', (req, res) => {
    res.send("Default page")
});


export default router;