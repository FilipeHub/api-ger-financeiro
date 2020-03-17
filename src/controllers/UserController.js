require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = {
    
    /**
     * @api {post} /users Create a new User
     * @apiName CreateUser
     * @apiGroup Users
     * 
     * @apiParam {String} name User name, not unique
     * @apiParam {String} email User email, unique
     * @apiParam {String} password User password, not unique
     
     * @apiParamExample JSON Body Example:
     * { 
     *       "name": "Filipe",
     *       "email" : "filipe@gmail.com", 
     *       "password": "123456", 
     *  }
     * 
     * @apiSuccess {ObjectId} _id User id.
     * @apiSuccess {String} name User name.
     * @apiSuccess {String} email User email.
     * @apiSuccess {String} password User password.
     * @apiSuccess {String} token token to the user authentication in the system
     * 
     * @apiSuccessExample Successful Response:
     * HTTP/1.1 200 OK
     * 
     *   {
     *       "user": {
     *           "_id": "5de2a86a929ae9080cb9160d",
     *           "name": "Filipe",
     *           "email": "filipe@gmail.com",
     *           "__v": 0
     *       },
     *       
     *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZTJhODZhOTI5YWU5MDgwY2I5MTYwZCIsImlhdCI6MTU3NTEzNTMzOCwiZXhwIjoxNTc1MjIxNzM4fQ.145vjji6eIC5jEogGoBk_SbcUMCGYTzbrXyWpe8t_iU"
     *   }
     * 
     * @apiError CreateUserFailed an unexpected error occurs in the storage of the user in the data base
     * 
     * @apiErrorExample Error-response
     * HTTP/1.1 400 Error creating a new user
     * 
     * {
     *    error: "Registration failed"
     * }
     * 
     * @apiError UserAlreadyExistsFailed the user already have an email storaged in the data base
     * 
     * @apiErrorExample Error-response
     * HTTP/1.1 400 Error user already exists
     * 
     * {
     *    error: "User already exists"
     * }
     * 
     * @apiVersion 1.0.0
     * 
     */
    async store(req, res) {
        try{
            const { name, email, password } = req.body;

            let user = await User.findOne({ email });

            if(!user){
                user = await User.create({
                    name,
                    email,
                    password
                });

                user.password = undefined;

                //creating the token
                const token = jwt.sign({id: user._id}, process.env.SECRET, {
                    expiresIn: process.env.EXPIRATION_TIME
                });

                res.json({user, token});
            }else{
                return res.status(400).send({ error : "User already exists"});    
            }
        }catch(err){
            return res.status(400).send({ error : "Registration failed"});
        }  
    },

    
    /**
    * @api {get} /user/:id Returns a user object
    * @apiName GetUser
    * @apiGroup Users
    * 
    * @apiParam {ObjectId} id User id, unique
    * 
    * @apiSuccess {ObjectId} _id User id.
    * @apiSuccess {String} name User name.
    * @apiSuccess {String} email User email.
    * @apiSuccess {String} password User password.
    * 
    * @apiSuccessExample Successful Response:
    * HTTP/1.1 200 OK
    * 
    *       "user": {
    *           "_id": "5de2a86a929ae9080cb9160d",
    *           "name": "Filipe",
    *           "email": "filipe@gmail.com",
    *           "__v": 0
    *       }
    * 
    * @apiError GetUserFailed an unexpected error occurs getting the user
    * 
    * @apiError UserNotFoundFailed the user doesn't have an email storaged in the data base
    * 
    * @apiErrorExample Error-response
    * HTTP/1.1 400 Error user not found
    * 
    * {
    *    error: "User doesn't exists"
    * }
    * 
    * @apiVersion 1.0.0
    * 
    */
    async detail(req, res) {
        try {
            const { id } = req.params;

            const user = await User.findOne({ _id : id });

            res.json({user});
        } catch (error) {
            return res.status(400).send({ error : "User doesn't exists"});
        }
    }

}
