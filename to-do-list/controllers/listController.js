const List = require('../models/listModels');
const mongoose = require('mongoose')

const createList= async (req,res) => {
    try{
        const {title, description, dueDate } = req.body;
        const newlist = new List(req.body)
        await newlist.save()
        res.status(201).json(newlist)
    }catch(error){
        res.status(401).json({
            error: error.message
        })
    }
};

const getLists = async (req, res) => {
    try {
        const lists = await List.find();
        res.status(200).json(lists);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

const getList = async (req, res)=>{
    const { id } =req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such list"})

    }

    const list = await List.findById(id)
    if(!list){
        return res.status(404).json({error: "No such list"})
    }
    res.status(200).json(list)
};

const updateList = async (req,res) => {
    const { id } =req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such list"})

    }

    const list = await List.findOneAndUpdate({_id:id},{
        ...req.body})
    if(!list){
        return res.status(404).json({error: "No such list"})
    }
    res.status(200).json(list)
}

const deleteList = async (req, res) =>{
    const { id } =req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such list"})

    }

    const list = await List.findOneAndDelete({_id:id})
    if(!list){
        return res.status(404).json({error: "No such list"})
    }
    res.status(200).json(list)
}



   

module.exports = {
    createList,
    getLists,
    getList,
    updateList,
    deleteList
}