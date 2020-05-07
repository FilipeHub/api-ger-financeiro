require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

const Registro = require('../models/Registro');

module.exports = {

    /**
     * @api {post} /registro Create a new Registro
     * @apiName CreateRegistro
     * @apiDescription This endpoint requires a authenticated user. See the Authentication session of this documentation
     * @apiGroup Registro
     * 
     * @apiHeader {String} token a Bearer token of the authorizaded user
     * 
     * @apiParam {String} descricao Registro descricao
     * @apiParam {String} tipo Registro tipo
     * @apiParam {Number} quantidade Registro quantidade
     * @apiParam {Number} valor Registro valor
     * @apiParam {Date} data Registro data
     * 
     * @apiParamExample JSON Body Example:
     * { 
     *   "descricao": "Sabonete Dove", 
     *   "tipo": "Venda", 
     *   "quantidade": 50, 
     *   "valor": 1.8,
     *   "data": "2020-04-19 10:18:24"
     **  }
     * 
     * @apiSuccess {ObjectId} _id Registro id.
     * @apiSuccess {String} descricao Registro descricao
     * @apiSuccess {String} tipo Registro tipo
     * @apiSuccess {Number} quantidade Registro quantidade
     * @apiSuccess {Number} valor Registro valor
     * @apiSuccess {Date} data Registro data
     * @apiSuccess {ObjectId} user Registro's owner.
     * 
     * @apiSuccessExample Successful Response:
     * HTTP/1.1 200 OK
     * 
     * {
     *   "_id": "5eb1afe51aca765c80ca4e76",
     *   "descricao": "Sabonete Dove",
     *   "tipo": "Venda",
     *   "quantidade": 50,
     *   "valor": 1.8,
     *   "data": "2020-04-19T13:18:24.000Z",
     *   "user": "5eb14084e0c6ad42459e1fa0",
     *   "createdAt": "2020-05-05T18:26:45.013Z",
     *   "updatedAt": "2020-05-05T18:26:45.013Z",
     *   "__v": 0
     *  }   
     * 
     * @apiError CreateRegistroFailed an unexpected error occurs in the storage of the Registro in the database
     * 
     * @apiErrorExample Error-response
     * HTTP/1.1 400 Error creating a new Registro
     * 
     * {
     *    error: "Error creating new Registro"
     * }
     * 
     * @apiVersion 1.0.0
     * 
     */
    async store(req, res){
        try {
            const user = req.userId;

            const { descricao, tipo, quantidade, valor, data } = req.body;

            const registro = await Registro.create({descricao, tipo, quantidade, valor, data, user});

            res.json(registro);
        } catch (error) {
            return res.status(400).send({ error : "Save registro failed"});
        }
    },

    /**
     * @api {get} /registro Mostra todos os registros do usuário
     * @apiName GetRegistro
     * @apiDescription This endpoint requires a authenticated user. See the Authentication session of this documentation
     * @apiGroup Registro
     * 
     * @apiHeader {String} token a Bearer token of the authorizaded user
     *
     * @apiSuccess {Object[]} list Id and name of the registro
     * 
     * 
     * @apiSuccessExample Successful Response:
     * HTTP/1.1 200 OK
     *
     * 
     *   [
     *       {
     *           "_id": "5eb1a26ecc20e350002029b7",
     *           "descricao": "Sabonete Dove",
     *           "tipo": "Compra",
     *           "quantidade": 200,
     *           "valor": 0.8,
     *           "data": "2020-04-13T11:18:30.000Z",
     *           "user": "5eb14084e0c6ad42459e1fa0",
     *           "createdAt": "2020-05-05T17:29:18.516Z",
     *           "updatedAt": "2020-05-05T17:29:18.516Z",
     *           "__v": 0
     *       },
     *       {
     *           "_id": "5eb1add41cba2a5a817009ba",
     *           "descricao": "Sabonete Dove",
     *           "tipo": "Venda",
     *           "quantidade": 100,
     *           "valor": 1.5,
     *           "data": "2020-04-13T21:18:30.000Z",
     *           "user": "5eb14084e0c6ad42459e1fa0",
     *           "createdAt": "2020-05-05T18:17:56.814Z",
     *           "updatedAt": "2020-05-05T18:17:56.814Z",
     *           "__v": 0
     *       },
     *       {
     *           "_id": "5eb1afe51aca765c80ca4e76",
     *           "descricao": "Sabonete Dove",
     *           "tipo": "Venda",
     *           "quantidade": 25,
     *           "valor": 1.8,
     *           "data": "2020-04-19T13:18:24.000Z",
     *           "user": "5eb14084e0c6ad42459e1fa0",
     *           "createdAt": "2020-05-05T18:26:45.013Z",
     *           "updatedAt": "2020-05-06T01:14:17.597Z",
     *           "__v": 0
     *       }
     *   ]
     *
     *  
     * @apiError GetRegistroFailed an unexpected error occurs getting the list of all user's registro
     * 
     * @apiErrorExample Error-response
     * HTTP/1.1 400 Error getting the registro' list
     * 
     * {
     *    error: "Error getting the registro"
     * }
     * 
     * @apiVersion 1.0.0
     * 
     */
    async show(req, res){
        try {
            const user_id = req.userId;

            const registros = await Registro.find({user : user_id});

            res.json(registros);
        } catch (error) {
            return res.status(400).send({ error : "Show registros failed"});
        }
    },

    /**
     * @api {put} /registro/:id Update a Registro
     * @apiName UpdateRegistro
     * @apiDescription This endpoint requires a authenticated user. See the Authentication session of this documentation
     * @apiGroup Registro
     * 
     * @apiHeader {String} token a Bearer token of the authorizaded user
     * 
     * @apiParam {String} descricao Registro descricao
     * @apiParam {String} tipo Registro tipo
     * @apiParam {Number} quantidade Registro quantidade
     * @apiParam {Number} valor Registro valor
     * @apiParam {Date} data Registro data
     * 
     * @apiParamExample JSON Body Example:
     * { 
     *   "descricao": "Sabonete Dove", 
     *   "tipo": "Venda", 
     *   "quantidade": 50, 
     *   "valor": 1.8,
     *   "data": "2020-04-19 10:18:24"
     **  }
     * 
     * @apiSuccess {ObjectId} _id Registro id.
     * @apiSuccess {String} descricao Registro descricao
     * @apiSuccess {String} tipo Registro tipo
     * @apiSuccess {Number} quantidade Registro quantidade
     * @apiSuccess {Number} valor Registro valor
     * @apiSuccess {Date} data Registro data
     * @apiSuccess {ObjectId} user Registro's owner.
     * 
     * @apiSuccessExample Successful Response:
     * HTTP/1.1 200 OK
     * 
     * {
     *   "_id": "5eb1afe51aca765c80ca4e76",
     *   "descricao": "Sabonete Dove",
     *   "tipo": "Venda",
     *   "quantidade": 50,
     *   "valor": 1.8,
     *   "data": "2020-04-19T13:18:24.000Z",
     *   "user": "5eb14084e0c6ad42459e1fa0",
     *   "createdAt": "2020-05-05T18:26:45.013Z",
     *   "updatedAt": "2020-05-05T18:26:45.013Z",
     *   "__v": 0
     *  }   
     *
     * 
     * @apiError  the registro doesn't exists in the user's account
     * 
     * @apiErrorExample Error-registro doesn't exists
     * HTTP/1.1 400 Error: registro doesn't exists
     * 
     * {
     *    error: "Doesn't exist this registro for this user"
     * }
     * 
     * 
     * @apiError UpdateRegistroFailed an unexpected error occurs updating the details of one user's registros
     * 
     * @apiErrorExample Error-response
     * HTTP/1.1 400 Error updating the attributes of one user's registros
     * 
     * {
     *    error: "Error updating the registro"
     * }
     * 
     * @apiVersion 1.0.0
     * 
     */
    async edit(req, res){
        try {
            const { id } = req.params;
            const user_id = req.userId;

            let registro = await Registro.findOne({_id: id, user: user_id });

            if(registro){
                const { descricao, tipo, quantidade, valor, data } = req.body;
                registro.descricao = descricao;
                registro.tipo = tipo; 
                registro.quantidade = quantidade; 
                registro.valor = valor; 
                registro.data = data; 
                registro.user = user_id;

                await registro.save();

                return res.json({registro});
            }else{
                return res.status(400).send({error : "Doesn't exist this registro for this user"});
            }
        } catch (error) {
            return res.status(400).send({error: "Error updating the registro"});
        }
    },

    /**
     * @api {delete} /registro/:id Delete the registro
     * @apiName DeleteRegistro
     * @apiDescription This endpoint requires a authenticated user. See the Authentication session of this documentation
     * @apiGroup Registros
     * 
     * 
     * @apiHeader {String} token a Bearer token of the authorizaded user 
     * 
     * @apiParam {String} id registro id, unique
     * 
     * @apiSuccess {String} message success message.
     * 
     * @apiSuccessExample Successful Response:
     * HTTP/1.1 200 OK
     * 
     * {
     *    "message": "The registro was successfuly removed."
     * }   
     * 
     * @apiError RegistroDoesNotExistsFailed the registro doesn't exists in the user's account
     * 
     * @apiErrorExample Error-registro doesn't exists
     * HTTP/1.1 400 Error: registro doesn't exists
     * 
     * {
     *    error: "Doesn't exist this registro for this user"
     * }
     * 
     * 
     * @apiError DeleteRegistroFailed an unexpected error occurs deleting one user's registro
     * 
     * @apiErrorExample Error-response
     * HTTP/1.1 400 Error deleting the user's registro
     * 
     * {
     *    error: "Error deleting the registro"
     * }
     * 
     * @apiVersion 1.0.0
     * 
     */
    async delete(req, res){
        try {
            const { id } = req.params;
            const user_id = req.userId;

            const registro = await Registro.findOne({_id: id, user: user_id });

            if(registro){
                await Registro.deleteOne({ _id : id, user: user_id});
                return res.json({"message": 'The Registro was successfuly removed.'});
            }else{
                message = "Doesn't exist this registro for this user";
            }          

        } catch (error) {
            return res.status(400).send({error: "Error deleting the registro"});
        }

    }


}