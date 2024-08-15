import { ModeToggle } from "@/components/themetoggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Posts from "@/components/Posts";
import ProjectCarousel from "@/components/projectcarousel";
import Image from "next/image";
import { Mail, MapPin, MouseIcon, ChevronRight, User, Monitor, FilePenLine } from "lucide-react";
import Post from "./posts/[postId]/page";
import Navigation from "@/components/navigation";
import Contact from "@/components/contact";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-background">
      <Separator />

      
      <Navigation />

      {/* Hero */}
      <div id="hero" className="md:my-40 my-20 flex flex-col items-center">
        <div className="mt-8 flex items-center">
          {/* Left part */}
          <div className="md:flex hidden flex-col items-center mx-20">
            <Image src="/me.webp" width={150} height={150} className="rounded-full" alt="Sander Eikenes" />
            <h2 className="font-bold text-3xl mt-8">Sander</h2>
            <h3 className="font-medium text-xl my-4">Web Developer</h3>
            <p className="items-center flex w-full justify-between mx-4 my-2"><Mail className="text-accent" size={20}/>sandereikenes@proton.me</p>
            <p className="items-center flex w-full justify-between mx-4 my-2"><MapPin className="text-accent" size={20}/>Bergen / Norway</p>
          </div>

          {/* Middle part */}
          <div className="mx-20">
            <h2 className="font-bold text-4xl"><span className="text-lg text-accent">&#60;h1&#62;</span><br/>Hey<br /> I'm <span className="text-accent">Sander</span>,<br />Web developer <span className="text-lg text-accent">&#60;/h1&#62;</span></h2>
            <p className="mt-4"><span className=" text-accent">&#60;p&#62;</span><br/>I help businesses grow their customer base with websites!<br/><span className=" text-accent">&#60;/p&#62;</span></p>
            <Link href={"/#contact"}><h2 className="text-4xl text-accent mt-4 flex items-center">Let's get in contact! <Mail className="mx-2" size={30}/></h2></Link>
          </div>
          {/* Right part */}
          <div className="w-auto h-full rounded-xl bg-secondary mx-20 md:flex hidden flex-col items-center">
            <h3 className="text-3xl my-4 mx-8">How to get a website?</h3>
            <h3 className="text-3xl my-4 mx-8"><span className="text-accent">1. </span>Contact</h3>
            <h3 className="text-3xl my-4 mx-8"><span className="text-accent">2. </span>Meeting</h3>
            <h3 className="text-3xl my-4 mx-8"><span className="text-accent">3. </span>Building...</h3>
            <h3 className="text-3xl my-4 mx-8"><span className="text-accent">4. </span>Done!</h3>
          </div>
        </div>
      </div>

      <Separator />

      {/* About me */}
      <div id="about_me" className="md:my-40 my-20 flex flex-col items-center md:mx-40 mx-16">
        <MouseIcon className="h-8 w-8 text-accent" />
        <div className="md:flex md:flex-row flex-col mt-16">
          <div className="md:mr-40">
            <h1 className="text-6xl text-accent my-8">About me</h1>
            <div className="bg-secondary w-full p-4 rounded-lg">
              <p>
                <span className="text-accent">&#60;p&#62;</span><br/>
                <span className="text-accent text-2xl">Hello!</span><br/>
                I'm a web developer from Norway, I love to create websites and applications that help businesses grow their customer base. I'm a big fan of NextJS and TailwindCSS, and I love to learn new things.
                <br/><span className=" text-accent">&#60;/p&#62;</span>
              </p>
            </div>
          </div>
          <Image src="/codingstock.jpg" width={500} height={600} className="rounded-lg md:mt-0 mt-4" alt="Sander Eikenes" />
        </div>
      </div>

      <Separator />

      {/* Works */}
      <div id="works" className="md:my-40 my-20 flex flex-col items-center md:mx-40 mx-16">
        <MouseIcon className="h-8 w-8 text-accent" />
        <h1 className="text-6xl text-accent my-8">My work</h1>
        <p className="text-xl">I have had the pleasure of working on these projects</p>
        <ProjectCarousel />
      </div>

      <Separator />

      {/* Blogs */}
      <div id="blogs" className="md:my-40 my-20 flex flex-col items-center md:mx-40 mx-16">
        <MouseIcon className="h-8 w-8 text-accent" />
        <h1 className="text-6xl text-accent my-8">Blog Posts</h1>
        <Posts />
        <Button className="mt-8 rounded-full bg-accent text-black">View More<ChevronRight size={20}/></Button>
      </div>

      <Separator />

      {/* Contact */}
      <div id="contact" className="md:my-40 my-20 flex flex-col items-center">
        <MouseIcon className="h-8 w-8 text-accent" />
        <h1 className="text-6xl text-accent my-8">Contact</h1>
        <p className="text-xl">I am currently available for freelance work!</p>
        <div className="w-full"><Contact/></div>
        
      </div>

      <Separator />

      
    </main>
  );
}
