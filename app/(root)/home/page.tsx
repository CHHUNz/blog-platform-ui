
import React from "react";
import Navbar from "@/components/layout/Navbar";
import ArticleList from "@/components/ui/home/ArticleList";

const Page = () => {
    return (
        <main className="flex flex-col gap-10 ">
            <div >
                <Navbar/>
            </div>
            <div className=" container mt-20">
                <div className="grid grid-cols-2 gap-4">
                   <ArticleList/>
                </div>
            </div>
        </main>

    )
}
export default Page