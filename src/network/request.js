import axios from 'axios'
export function request(config){
    //1.chuangjian实例化对象
    const instance = axios.create({
        basuurl: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    //2axios的拦截器
    instance.interceptors.request.use(config =>{
        return config
    },err ={

    })
    //2.2响应拦截
    instance.interceptors.response.use(res =>{
        return res.data
    },err => {

    })

    //3.发送真正的请求
    return instance(config)
}