import Navbar from "@/component/layout/Navbar";
import PostCard from "@/component/layout/PostCard";
import Link from "next/link";

const Page = () => {
    return(
        <>
            {/*<div className="navbar bg-base-200">*/}
            {/*    <div className="container ">*/}
            {/*        <div className="flex-1">*/}
            {/*            <Link href="/home">*/}
            {/*                ICON*/}
            {/*            </Link>*/}
            {/*        </div>*/}
            {/*        <div className="flex-none">*/}
            {/*            <Link href="create" className="btn btn-ghost">*/}
            {/*                CREATE POST*/}
            {/*            </Link>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="grid mt-10">
                <div className="p-6"><PostCard/></div>
            </div>
        </>
    )
}
export default Page