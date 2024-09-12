import UsersInterface from "../components/Users/UserInterface";
import apiClient from "./apiClient";

class UserService{
    getAllUsers(){
        const controller = new AbortController();

        const request =  apiClient
        .get("/users", { signal: controller.signal })

        return {request, cancel: ()=> controller.abort()}
    }

    deleteUser(id: number){
        return apiClient.delete(`/users/${id}`);
    }

    createUser(newUser: UsersInterface){
        return apiClient.post("/users", newUser)
    }

    updateUser(id: number, updatedUser: any){
        return apiClient.patch(`/users/${id}`, updatedUser)
    }
}

export default new UserService