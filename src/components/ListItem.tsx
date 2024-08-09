import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {
        const { id, title, image, date, tag} = post
        const formattedDate = getFormattedDate(date)
    return (
        <div className='mx-2 mt-4'>
            <Link href={`/posts/${id}`}>
                <Card className='w-60 h-96 relative bg-secondary rounded-lg flex flex-col items-center'>
                    <CardContent className='bg-cover bg-center bg-no-repeat p-4' style={{ backgroundImage: `url(${image})` }}>
                        <img className='object-cover h-52 w-52 opacity-0' src={image} alt={title} />
                    </CardContent>
                    <div className='items-left'>
                        <CardHeader>
                            <CardTitle className='text-sm'>{title}</CardTitle>
                        </CardHeader>
                        <CardFooter className='absolute p-2 bottom-0 right-0'>
                            <CardDescription className='text-accent'>{formattedDate}</CardDescription>
                        </CardFooter>
                    </div>
                </Card>
            </Link>
        </div>
    )
}