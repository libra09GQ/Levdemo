//用于请求首页内容的网络请求
import {request} from './request';

export function getHome(){
    return request({
        url : 'home/multidata'
    })
}