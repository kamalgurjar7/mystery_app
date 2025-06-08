import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import {ApiResponse} from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifycode:string 
):
Promise<ApiResponse>{
    try{
        return {success:true,
            message:'verification email sent successfully '
        }
    }
    catch (emailError){
        console.error("error sending verification email" , emailError)
        return {success: false , message:'failde to send verification email' }
    }
}