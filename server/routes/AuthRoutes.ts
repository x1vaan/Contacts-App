import { Router, Request, Response } from "express";
import User from "../models/User";

const router = Router()

router.put('/addcontact', async (req: Request,res: Response):Promise<any | void> => {
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

router.get('/contacts', async (req: Request,res: Response):Promise<any | void > => {
    try {
        const id = req.user?.id
        const contacts = await User.findById(id).select('contacts');
        res.status(200).send(contacts?.contacts)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

export default router