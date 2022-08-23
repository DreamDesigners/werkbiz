export const accessToken = async () =>{
    const token = {
        headers:{
       "x-auth-token": localStorage.getItem('token')
        }
    }
   return token 
}
