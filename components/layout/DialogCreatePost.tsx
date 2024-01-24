'use client'
import {Button} from "@/components/ui/button"
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useUserStore} from "@/lib/store/store";
import DragDropImageUpload from "@/components/layout/DragDropImageUpload";
import InputForm from "@/components/layout/InputForm";

const DialogCreatePost = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild
                               className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent ">
                    <Button variant="outline">Create Post</Button>
                </DialogTrigger>
                <DialogContent className="lg:max-w-[800px] h-auto">
                    <DialogHeader>
                        <DialogTitle>Create Post</DialogTitle>
                        <DialogDescription>
                            Please complete the article
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div >
                            <div className="flex flex-col justify-center ">
                                <DragDropImageUpload/>
                                <InputForm/>
                            </div>
                            <div >
                                {/*<Input*/}
                                {/*    id="name"*/}
                                {/*    defaultValue=""*/}
                                {/*    className="col-span-3"*/}
                                {/*    placeholder="title"*/}
                                {/*/>*/}

                            </div>

                        {/*</div>*/}
                        {/*<div className="grid grid-cols-4 items-center gap-4">*/}
                        {/*    <Label htmlFor="username" className="text-right">*/}
                        {/*        Username*/}
                        {/*    </Label>*/}
                        {/*    <Input*/}
                        {/*        id="username"*/}
                        {/*        defaultValue=""*/}
                        {/*        className="col-span-3"*/}
                        {/*    />*/}
                        </div>
                    </div>
                    <DialogFooter>
                        <div className="flex space-x-4">
                            <DialogClose>
                                <Button variant="secondary">Cancel</Button>
                            </DialogClose>
                            <Button type="submit" className="w-32">Post</Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
export default DialogCreatePost