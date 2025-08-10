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
         await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'mystery message verification code',
      react: VerificationEmail({username,otp:verifycode }),
    });
        return {success:true,
            message:'verification email sent successfully '
        }
    }
    catch (emailError){
        console.error("error sending verification email" , emailError)
        return {success: false , message:'failde to send verification email' }
    }
}