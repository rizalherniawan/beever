const { data } = require('../models');
const axios = require('axios');

class SystemController{
    static async getApi(req,res,next){
        try {
            const bool = [true,false]
            const getData = await axios.get('https://api.kanye.rest/')
            const dataCreated = await data.create({
                quotes: getData.data.quote,
                favorites: bool[Math.floor(Math.random() * bool.length)]
            })
            res.status(200).send(dataCreated)
        } catch (error) {
            next(error)
        }
    }
    static async viewData(req,res,next){
        try {
            const dataView = await data.findAll()
            return res.status(200).json({data:dataView})        
        } catch (error) {
            next(error)
        }
    }
    static async postData(req,res,next){
        try {
            const bool = [true,false]
            const createPost = await data.create({
                quotes: req.body.quotes,
                favorites: bool[Math.floor(Math.random() * bool.length)]
            })
            return res.status(200).json({data:createPost})
        } catch (error) {
            next(error)
        }
    }
    static async updateData(req,res,next){
        try {
            const { id } = req.params
            await data.update({
                favorites: req.body.favorites
            }, {
                where:{
                    id: id
                }
            })
            return res.status(200).json({message: "update success"})
        } catch (error) {
            next(error)
        }
    }
    static async deleteData(req,res,next){
        try {
            const { id } = req.params
            await data.destroy({
                where:{
                    id: id
                }
            })
            return res.status(200).json({message: "delete success"})
        } catch (error) {
            next(error)
        }
    }
}



module.exports = SystemController