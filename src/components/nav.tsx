import { ModeToggle } from "./themetoggle";
import { Instagram } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react";

export default function Nav() {
    return (
        <div>
            {/* For desktop */}
            <nav className="md:flex hidden items-center justify-between w-full max-w-6xl p-4 mx-auto my-0">
                <a href="/" className="font-bold text-2xl"> <span className="text-accent">&#60;p/&#62; </span>Sander Eikenes</a>
                <div className="flex">
                    <ul className="flex items-center space-x-4">
                    <li>
                        <a href="/" className="font-medium hover:text-accent">Home</a>
                    </li>
                    <li>
                        <a href="/posts" className="font-medium hover:text-accent">Blogs</a>
                    </li>
                    <li>
                        <ModeToggle />
                    </li>
                    </ul>

                    <ul className="flex items-center ml-4">
                        <Link href="https://www.instagram.com/sandreikenes/">
                            <li className="flex items-center hover:text-accent">
                                <Instagram className="h-8 w-8 " />
                                <p className="mx-2">@SandrEikenes</p>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>

            {/* For mobile */}
            <nav className="flex md:hidden items-center justify-between w-full max-w-6xl p-4 mx-auto my-0">
                <a href="/" className="font-bold text-2xl"> <span className="text-accent">&#60;p/&#62; </span>Sander Eikenes</a>
                <div className="">
                <DropdownMenu>
                    <DropdownMenuTrigger><Menu size={30} className="text-accent"/></DropdownMenuTrigger>
                    <DropdownMenuContent className="text-center">
                        <DropdownMenuItem>
                            <a href="/" className="font-medium text-xl hover:text-accent">Home</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a href="/posts" className="font-medium text-xl hover:text-accent">Blogs</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <ModeToggle />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
            </nav>
        </div>
    );
}