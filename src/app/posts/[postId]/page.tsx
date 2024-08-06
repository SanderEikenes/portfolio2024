import { sortedPostsData } from "@/lib/posts"
import { notFound } from "next/navigation"
import { getPostData } from "@/lib/posts"
import { Button } from "@/components/ui/button"
import getFormattedDate from "@/lib/getFormattedDate"
import { ArrowLeftIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function generateMetadata( { params }: { params : { postId: string }}) {

    const posts = sortedPostsData() // Deduped
    const { postId } = params

    const post = posts.find((post) => post.id === postId)

    if (!post) {
        return {
            title: 'Post not found'
        }
    }
    
    return {
        title: post.title,
    }
}

export default async function Post( { params }: { params : { postId: string }}) {

        const posts = sortedPostsData() // Deduped
        const { postId } = params

        if (!posts.find((post) => post.id === postId)) {
            return notFound()
        }

        const { title, image, date, tag, contentHtml } = await getPostData(postId)

        const pubDate = getFormattedDate(date)

    return (
        <main className="mx-2 md:mx-96">
            <Image src={image} alt={title} width={500} height={100} />
            <div className="bg-secondary rounded p-5">
                <h1 className="text-5xl">{title}</h1>
                <p>{pubDate}</p>
                <article className="prose flex flex-col jusify-center dark:prose-invert" dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
            <Button className="mt-10">
                <ArrowLeftIcon size={20} className="mr-2"/>
                <Link href="/">Go back home</Link>
            </Button>
        </main>
    )
}