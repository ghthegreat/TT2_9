import express from 'express';
import {create, delete} from "../controllers/controller"
const router = express.Router();

// will start with /claims

//route is localhost::5000/claims
router.get('/', (req, res) => {
    res.send("Default page")
});
router.post('/', create)
router.post('/', delete)


export default router;