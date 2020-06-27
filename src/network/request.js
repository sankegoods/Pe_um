import axion from 'axios'

export function request(config) {
    //创建实例
    const instance = axion.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 2000
        })
        //返回
    return instance(config)
}