import axios from "axios"
import Cookies from "js-cookie";
import joinUrl from 'url-join';
import endpoints from "../endpoints.config"


const createAxiosInstance = (baseURL, headers) => {
    let agent = axios.create({
        baseURL: baseURL || process.env.DATABASE_URL,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...headers
        }
    });

    const token = Cookies.get("token")


    if (token) {
        agent.defaults.headers["x-access-token"] = JSON.stringify(token)
    }

    // Add a response interceptor
    agent.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response?.status == 403 || error.response.status == 401) {
            try {
                Cookies.remove("token")
                if (window) {
                    // Redirect user to login
                    window.location = "" //Path to login screen

                }
            } catch (error) {
                Promise.reject(error)
            }
        }
        else if (error?.response?.status == 500) {
            Promise.reject(error)
        }
        else {
            Promise.reject(error)
        }

    });

    return agent
}





const APiMiddleWare = (method, base_name, path, body, config) => {
    let get_endpoint = endpoints[base_name]?.endpoint
    const url = joinUrl(get_endpoint, path)

    const agent = createAxiosInstance(url)

    switch (method) {
        case "post": return agent.post(url, { ...body.body }, { ...config });
            break;
        case "get": return agent.get(url, { ...body.body }, { ...config });
            break;
        case "del": return agent.delete(url, { ...body.body }, { ...config });
            break;
        case "put": return agent.put(url, { ...body.body }, { ...config });
            break;
        default:
        case "get": return agent.get(url, { ...body.body }, { ...config });
            break;
    }



}

export const API = {
    post: (base_name, path, body, config) => APiMiddleWare("post", base_name, path, body, config),
    get: (base_name, path, body, config) => APiMiddleWare("get", base_name, path, body, config),
    del: (base_name, path, body, config) => APiMiddleWare("del", base_name, path, body, config),
}