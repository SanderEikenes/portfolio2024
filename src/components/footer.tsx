import { Github, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mx-32 flex justify-between items-center">
            <p>&copy; 2024 Sander Eikenes. All rights reserved</p>
            <ul className="flex">
                <Link href="https://www.instagram.com/sandreikenes/">
                    <li className="bg-accent hover:bg-white rounded-full p-2 text-black mx-2">
                        <Instagram size={20} className="" />
                    </li>
                </Link>
                <Link href="https://github.com/SanderEikenes">
                    <li className="bg-accent hover:bg-white rounded-full p-2 text-black mx-2">
                        <Github size={20} className="" />
                    </li>
                </Link>

            </ul>
        </footer>
    )
}