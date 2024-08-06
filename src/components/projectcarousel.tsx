"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import * as React from "react"
import { Button } from "./ui/button"
import { Car, Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export default function ProjectCarousel() {
    const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

    return (
        <Carousel plugins={[plugin.current]} className="w-2/3" onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
            <CarouselContent>
                <CarouselItem>
                <Card className="border-0">
                    <CardContent className="text-center">
                        <h1 className="text-3xl my-5">Crystal media</h1>
                        <img src="/crystal.png" alt="crystal" className="w-full h-full object-cover rounded-lg" />
                    </CardContent>
                </Card>
                </CarouselItem>

                <CarouselItem>
                <Card className="border-0">
                    <CardContent className="text-center">
                        <h1 className="text-3xl my-5">Peachbonus</h1>
                        <img src="/peachbonus.png" alt="crystal" className="w-full h-full object-cover rounded-lg" />
                    </CardContent>
                </Card>
                </CarouselItem>
            </CarouselContent>
            <CarouselNext className="mr-10" />
            <CarouselPrevious className="ml-10"/>
        </Carousel>
    )
}