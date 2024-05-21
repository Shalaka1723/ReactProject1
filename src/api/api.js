import axios from "axios";

export const signupApi = async (v1,v2)=> {
    const sEntry = "http://localhost:4000/signup"

    let call = await axios.post(
        sEntry,
        {
            useremail: v1, 
            userpassword: v2
        },
        {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }}).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})

    console.log(call)
}


export const contactApi = async (name, email, message) => {

    const cEntry = "http://localhost:4000/contact"

    let call = await axios.post(
        cEntry,
        {
            userName: name,
            userEmail: email,
            userMessage: message
        },
        {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }}).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
    
}


