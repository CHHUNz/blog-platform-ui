'use client'
import Link from 'next/link';
import {buttonVariants} from '../ui/button';
import {HandMetal} from 'lucide-react';
import SelectProfile from "@/components/ui/home/SelectProfile";
import { Button } from "@/components/ui/button"
import {useUserStore} from "@/lib/store/store";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import DialogCreatePost from "@/components/ui/home/DialogCreatePost";
const Navbar = () => {
    const {open, setOpen} = useUserStore();
    return (
        <div className=' bg-neutral-50 py-2 border-s-zinc-200 fixed w-full z-10 top-0 pt-4 pb-4'>
            <div className='container flex items-end justify-between '>
                <Link href='/'>
                    <HandMetal/>
                </Link>
                <div className="flex space-x-12">
                    <DialogCreatePost/>
                    <SelectProfile/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;