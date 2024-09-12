import UsersInterface from "../components/Users/UserInterface";
import apiClient from "./apiClient";

class HttpService{
    url: string;

    constructor(url: string){
        this.url = url;
    }

    get<T>(){
        const controller = new AbortController();

        const request =  apiClient
        .get<T[]>(this.url, { signal: controller.signal })

        return {request, cancel: ()=> controller.abort()}
    }

    delete(id: number){
        return apiClient.delete(`${this.url}/${id}`);
    }

    createUser<T>(data: T){
        return apiClient.post(this.url, data)
    }

    updateUser<T>(data: T){
        return apiClient.patch(this.url, data)
    }
}

export default new HttpService()