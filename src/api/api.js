import axios from "axios";

 let signupApi = async (v1,v2)=> {
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


let contactApi = () => {}

export default signupApi;



