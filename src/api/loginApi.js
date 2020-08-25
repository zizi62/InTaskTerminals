import axios from "axios"

export const instance = axios.create({
    baseURL : 'https://api.github.com/users'
 
})

let checkPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/

export const loginApi = {
    
    async getProfile (loginData){
      {
           try {
             if(checkPassword.test(loginData.password)) {
                let response = await instance.get(`/${loginData.userName}`)
                 return response.data
             }else {
                throw new Error()
             }
           } catch (error) {
                throw 'Неправильный логин или пароль'             
           }
       }
    }
}


