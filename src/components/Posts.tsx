import { sortedPostsData } from '@/lib/posts'
import ListItem from './ListItem'

export default function Posts() {
    const posts = sortedPostsData();
    return (
        <section className="flex justify-center">
            <div className='flex flex-col md:flex-row flex-wrap justify-center'>
                {posts.map((post) => (
                post.tag === "article" && <ListItem key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}