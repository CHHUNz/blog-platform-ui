'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button";
import useFetchArticles from "@/lib/hooks/use-fetch-articles";

const ArticleList = () => {
    const { articles } = useFetchArticles();
    console.log(articles?.data)
    return (
        <>
            {
                articles.data?.map((article:any, index:any) => (
                    <Card key={index}>
                        <CardHeader>
                            <div className=" flex flex-row items-center space-x-2 mb-3">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="text-[18px]">{article?.user?.username}</CardTitle>
                                    <CardDescription>{article?.user?.role}</CardDescription>
                                </div>
                            </div>
                            <CardTitle>{article?.title}</CardTitle>
                            <CardDescription>
                                {article?.description}
                            </CardDescription>


                        </CardHeader>
                        <CardContent>
                            {
                                article?.photo?.map((p: any) => (
                                    <img
                                        src={p.photo}
                                        alt="Card Image"
                                        className="w-full object-scale-down  rounded-xl"
                                    />
                                ))
                            }
                        </CardContent>
                        <CardFooter className="flex flex-row ">
                            <div className="flex space-x-2 w-full">
                            <div className="flex space-x-1 items-center">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7 text-gray-600 cursor-pointer hover:text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                </svg>
                            </span>
                                    <span>22</span>
                                </div>

                                <div className="flex space-x-1 items-center">
                                    <button>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <span>20</span>
                                </div>

                            </div>
                            <Button variant="default" className="bg-blue-500 hover:bg-blue-400">Read More</Button>
                        </CardFooter>
                    </Card>
                ))
            }

        </>
    )
}
export default ArticleList;