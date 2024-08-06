import { ModeToggle } from "@/components/themetoggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Posts from "@/components/Posts";
import ProjectCarousel from "@/components/projectcarousel";
import Image from "next/image";
import { Mail, MapPin, MouseIcon, ChevronRight } from "lucide-react";
import Post from "./posts/[postId]/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-background">
      <Separator />

      {/* Hero */}
      <div className="my-40 flex flex-col items-center">
        <h1 className="font-bold text-6xl text-accent">Web Developer</h1>
        <div className="mt-10 flex items-center">
          {/* Left part */}
          <div className="flex flex-col items-center mx-20">
            <Image src="/me.webp" width={150} height={150} className="rounded-full" alt="Sander Eikenes" />
            <h2 className="font-bold text-3xl mt-5">Sander</h2>
            <h3 className="font-medium text-xl my-3">Web Developer</h3>
            <p className="items-center flex w-full justify-between mx-5 my-2"><Mail className="text-accent" size={20}/>sandereikenes@proton.me</p>
            <p className="items-center flex w-full justify-between mx-5 my-2"><MapPin className="text-accent" size={20}/>Bergen / Norway</p>
          </div>

          {/* Middle part */}
          <div className="mx-20">
            <h2 className="font-bold text-4xl"><span className="text-lg text-accent">&#60;h1&#62;</span><br/>Hey<br /> I'm <span className="text-accent">Sander</span>,<br />Web developer <span className="text-lg text-accent">&#60;/h1&#62;</span></h2>
            <p className="mt-5"><span className=" text-accent">&#60;p&#62;</span><br/>I help businesses grow their customer base with websites!<br/><span className=" text-accent">&#60;/p&#62;</span></p>
            <h2 className="text-4xl text-accent mt-5 flex items-center">Let's get in contact! <Mail className="mx-2" size={30}/></h2>
          </div>
          {/* Right part */}
          <div className="w-auto h-full rounded-xl bg-secondary mx-20 flex flex-col items-center">
            <h3 className="text-3xl my-5 mx-10"><span className="text-accent">1. </span>NextJS</h3>
            <h3 className="text-3xl my-5 mx-10"><span className="text-accent">2. </span>NextJS</h3>
            <h3 className="text-3xl my-5 mx-10"><span className="text-accent">3. </span>NextJS</h3>
            <h3 className="text-3xl my-5 mx-10"><span className="text-accent">4. </span>NextJS</h3>
          </div>
        </div>
      </div>

      <Separator />

      {/* About me */}
      <div className="my-40 flex flex-col items-center mx-40">
        <MouseIcon className="h-10 w-10 text-accent" />
        <div className="flex mt-16">
          <div className="mr-40">
            <h1 className="text-6xl text-accent my-10">About me</h1>
            <div className="bg-secondary w-full p-4 rounded-lg">
              <p>
                <span className=" text-accent">&#60;p&#62;</span><br/>
                <span className="text-accent text-2xl">Hello!</span><br/>
                I'm a web developer from Norway, I love to create websites and applications that help businesses grow their customer base. I'm a big fan of NextJS and TailwindCSS, and I love to learn new things. I'm currently working on a project that will help businesses create websites faster and easier.
                <br/><span className=" text-accent">&#60;/p&#62;</span>
              </p>
            </div>
          </div>
          <Image src="/codingstock.jpg" width={500} height={600} className="rounded-lg" alt="Sander Eikenes" />
        </div>
      </div>

      <Separator />

      {/* Works */}
      <div className="my-40 flex flex-col items-center mx-40">
        <MouseIcon className="h-10 w-10 text-accent" />
        <h1 className="text-6xl text-accent my-10">My work</h1>
        <p className="text-xl">I have had the pleasure of working on these projects</p>
        <ProjectCarousel />
      </div>

      <Separator />

      {/* Blogs */}
      <div className="my-40 flex flex-col items-center mx-40">
        <MouseIcon className="h-10 w-10 text-accent" />
        <h1 className="text-6xl text-accent my-10">Blog Posts</h1>
        <Posts />
        <Button className="mt-10 rounded-full bg-accent text-black">View More<ChevronRight size={20}/></Button>
      </div>

      <Separator />

      {/* Contact */}
      <div className="my-40 flex flex-col items-center mx-40">
        <MouseIcon className="h-10 w-10 text-accent" />
        <h1 className="text-6xl text-accent my-10">Contact</h1>
        <p className="text-xl">I am currently available for freelance work!</p>
        <Button className="mt-10 rounded-full bg-accent text-black">Contact me<Mail className="ml-3" size={20}/></Button>
      </div>

      <Separator />

      
    </main>
  );
}
