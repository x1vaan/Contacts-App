import { Router, Request, Response } from "express";
import User from "../models/User";

const router = Router()

router.get('/contacts', async (req: Request,res: Response): Promise<any | void> => {
    try {
        const id = req.user?.id
        const {name, phone} = req.body
        await User.updateOne({_id : id}, {
            $push: {
                contacts: {name,phone}
            }
        })
        res.status(200).send('Contact added')
    } catch (error) {
        res.status(500).send(error.message)
    }
})

export default router