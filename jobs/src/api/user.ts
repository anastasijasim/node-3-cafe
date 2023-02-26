import axios from "axios"

const USERS_API_URL = "https://testapi.io/api/rokasandreikenas/resource/user"

//Visus any sukeisti realiomis reiksmemis

export const fetchUsers = (): Promise<any> => {
  return axios  
    .get(USERS_API_URL)
    .then((response) => response.data.data);

};

//Aprasyti kurimui skirta tipa Omit<User , "laukas">

export const createUser = (user:any):Promise<any>=>{
    return axios
    .post (USERS_API_URL, user)
    .then ((response) => response.data)
};


export const loginUser = async (loggingUser:any):Promise<any> => {
    const users = await fetchUsers();
    return new Promise ((resolve, reject) =>{
        const {email, password } = loggingUser;
        const userChecker = (u:any) => u.mail ===email && u.password ===password;
        const existingUser = users.find (userChecker);
        existingUser? resolve(existingUser) : reject("Invalid credentials");
        // if (userExists){
        //     resolve({authenticated: true})
        // } else{
        //     reject({authenticated: false})
        // }
    });
}