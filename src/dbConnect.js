import { MongoClient } from "mongodb";
import dotenv from "dotenv"
import express from "express"
dotenv.config()

export function dbConnect() {
    const client = new MongoClient(process.env.URI);
    return client.db(process.env.DB)
}

