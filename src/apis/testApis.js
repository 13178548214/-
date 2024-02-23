import httpInstance from "@/utils/http";

export function Category(){
    return httpInstance({
     url:'home/category/head'
    })
}