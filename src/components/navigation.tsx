import { FilePenLine, Mail, Monitor, User } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
    return (
        <div className="fixed bg-secondary flex-col md:flex hidden p-4 rounded-full left-0 mx-16 mt-8 dark:border-white border-black border-solid border-2">
        <ul>
            <Link href={"/#hero"} >
                <li className="my-4 hover:text-accent">
                    <User size={30} />
                </li>
            </Link>

          <Link href={"/#about_me"} >
          <li className="my-4 hover:text-accent">
            <Monitor size={30} />
          </li>
          </Link>

          <Link href={"/#works"}>
            <li className="my-4 hover:text-accent">
                <FilePenLine size={30} />
            </li>
           </Link>

          <Link href={"/#contact"}>
          <li className="my-4 hover:text-accent">
            <Mail size={30} />
          </li>
          </Link>

        </ul>
      </div>
    );
}