require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

const Message = require('../models/Message');
const QNT_MSGS = Number(process.env.MESSAGES_PER_PAGE);

module.exports = {
    
     /**
     * @api {post} /message Create a new message
     * @apiName CreateMessage
     * @apiGroup Messages
     * 
     * @apiParam {String} text Message text
     * @apiParam {ObjectId} userId User that sent the message
     * 
     * @apiError CreateMessageFailed an unexpected error occurs in the storage of the Message in the data base
     * 
     * @apiErrorExample Error-response
     * HTTP/1.1 400 Error creating a new Message
     * 
     * {
     *    error: "Save message failed"
     * }
     * 
     * 
     * @apiVersion 1.0.0
     * 
     */
    async save(message, userId) {
        try {
            await Message.create({text:message, user: userId});
        } catch (error) {
            return res.status(400).send({ error : "Save message failed"});
        }
    },

    /**
    *  
    * @api {get} /messages/:page Returns all the messages 
    * @apiName GetMessages
    * @apiGroup Messages
    * 
    * @apiParam {Number} page Page of the pagination
    * 
    * @apiSuccess {Message[]} messages Messages from database. (limited by the MESSAGES_PER_PAGE value of the .env file)
    * 
    * @apiSuccessExample Successful Response:
    * HTTP/1.1 200 OK
    * 
    *       {
    *        "messages": [
    *            {
    *            "_id": "5e70236415102c507c5b181b",
    *            "text": "how r u?",
    *            "user": {
    *                "_id": "5e6fe7bd07b5ba14e111f227",
    *                "name": "User1",
    *                "email": "user1@gmail.com",
    *                "__v": 0
    *            }
    *            },
    *            {
    *            "_id": "5e702155ce7e194ac9a87cc2",
    *            "text": "Hello",
    *            "user": {
    *                "_id": "5e6fe7f007b5ba14e111f229",
    *                "name": "User3",
    *                "email": "user3@gmail.com",
    *                "__v": 0
    *            }
    *            },
    *            {
    *            "_id": "5e702120ce7e194ac9a87cc1",
    *            "text": "Hi",
    *            "user": {
    *                "_id": "5e6fe7f007b5ba14e111f229",
    *                "name": "User3",
    *                "email": "user3@gmail.com",
    *                "__v": 0
    *            }
    *            }
    *        ]
    *        }
    * 
    * @apiError GetMessageFailed an unexpected error occurs getting the Messages
    * 
    * @apiErrorExample Error-response
    * HTTP/1.1 400 Error Message not found
    * 
    * {
    *    error: "Error getting the Messages"
    * }
    * 
    * @apiVersion 1.0.0
    * 
    */
    async show(req, res){
        try {
            const { page } = req.params;

            if(!page){
                page = 1;
            }

            const messages = await Message.find({})
                .sort({"createdAt" : -1})
                .limit(QNT_MSGS)
                .skip((page - 1)*QNT_MSGS)
                .populate('user');
            
            console.log(messages);

            res.json({messages});

        } catch (error) {
            return res.status(400).send({ error : "Error getting the Messages"});
        }
    }
}