import {http} from "@/utils/http";


const ServiceId = {
    ARTICLE:'/article'
}

const getArticles = async () => {
    const  result = await http.get(ServiceId.ARTICLE);
    return result?.data
}

export const articleService = {
    getArticles
}