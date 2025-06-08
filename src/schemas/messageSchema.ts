import {z} from "zod"

export const messageSchema = 
z.object (
    {
       content:z.string()
       .min(10,{message:'content must be at least 10 chars'})
       .max(300,'content no longer than 300 chars')
       
    }
)