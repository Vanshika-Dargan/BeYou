import express from 'express'
import Page from '../models/Page.js'

export const createPage=async (req,res)=>{
const page=req.body;

const newPage=new Page(page);

try{
    await newPage.save();
    res.status(201).json(newPage)
}
catch(error){
    res.status(409).json({message:error.message})
}
}