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
import DragDropImageUpload from "@/components/ui/home/DragDropImageUpload";
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

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
                        <div>
                            <div className="flex flex-col justify-center ">
                                <DragDropImageUpload/>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">

                                {/* Title */}
                                <Label htmlFor="title" className="text-left">
                                    Input Title
                                </Label>
                                <Input
                                    id="title"
                                    defaultValue=""
                                    className="col-span-3"
                                    placeholder="Title"
                                />

                                {/* Select category */}
                                <div>
                                    <Label htmlFor="description" className="text-left mt-4 ">
                                        Categories
                                    </Label>
                                    <Select>
                                        <SelectTrigger className="w-[280px]">
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>All types</SelectLabel>
                                                <SelectItem value="apple">Entertainment</SelectItem>
                                                <SelectItem value="banana">Education</SelectItem>
                                                <SelectItem value="blueberry">Sports</SelectItem>
                                                <SelectItem value="grapes">Tips and Tricks</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Description */}
                                <Label htmlFor="description" className="text-left mt-4">
                                    Description
                                </Label>
                                <Textarea
                                    id="description"
                                    placeholder="Type your message here."
                                    defaultValue=""
                                    className="col-span-3"
                                />

                            </div>
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