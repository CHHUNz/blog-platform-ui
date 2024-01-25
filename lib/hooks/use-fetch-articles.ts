import {useQuery} from "@tanstack/react-query";
import {articleService} from "@/service/article.service";

const useFetchArticles =  () => {
    const query = useQuery({
        queryKey:['articles'],
        queryFn: async async => await articleService.getArticles()
    })
    return {
        articles: query?.data ?? []
    }
}
export default useFetchArticles;