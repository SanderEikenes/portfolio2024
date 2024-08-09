import Posts from "@/components/Posts";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "All my blog posts",
  description: "All articles written by me.",
};

export default function allArticles() {
    return (
        <div className="flex flex-col min-h-screen">
            <Separator />
            <h1 className="text-5xl text-accent text-center mt-8">All Articles</h1>
            <Posts />
        </div>
    )
}