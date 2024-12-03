"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

type ImageButton = {
  id: number;
  label: string;
  image: string;
}

const imageButtons: ImageButton[] = [
  { id: 1, label: "Nature", image: "/img1.png?height=300&width=300&text=Nature" },
  { id: 2, label: "City", image: "/Chrono.jpeg?height=300&width=300&text=City" },
  { id: 3, label: "Beach", image: "/img2.jpeg?height=300&width=300&text=Beach" },

]

export default function MultiImageHover() {
  const [currentImage, setCurrentImage] = useState("/placeholder.svg?height=300&width=300&text=Default+Image")

  return (
    <div className="flex flex-col ">
     <h1 className='bg-slate-200 rounded-xl mx-20 mb-5 text-red-600 font-bold p-1'>jogos</h1>
     <div className='flex flex-row items-center justify-between mx-20 gap-96 '>
      <div className="flex flex-col justify-center gap-5 w-full">
        {imageButtons.map((button) => (
          <Button
            key={button.id}
            onMouseEnter={() => setCurrentImage(button.image)}
            onMouseLeave={() => setCurrentImage("/Chrono.jpeg?height=300&width=300&text=Default+Image")}
            className="px-4 py-2 rounded-xl w-full hover:bg-slate-200"
          >
            {button.label}
          </Button>
        ))}
      </div>
      <div className="relative  h-60 w-full  mb-5">
        <Image
          src={currentImage}
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-xl transition-all duration-3000 ease-in-out mb-5"
        />
      </div>
    </div>
    </div>
  )
}

