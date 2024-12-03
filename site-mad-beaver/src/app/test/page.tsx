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
  { id: 1, label: "Nature", image: "/placeholder.svg?height=300&width=300&text=Nature" },
  { id: 2, label: "City", image: "/placeholder.svg?height=300&width=300&text=City" },
  { id: 3, label: "Beach", image: "/placeholder.svg?height=300&width=300&text=Beach" },
  { id: 4, label: "Mountain", image: "/placeholder.svg?height=300&width=300&text=Mountain" },
]

export default function MultiImageHover() {
  const [currentImage, setCurrentImage] = useState("/placeholder.svg?height=300&width=300&text=Default+Image")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <div className="relative w-72 h-72">
        <Image
          src={currentImage}
          alt="Hover Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {imageButtons.map((button) => (
          <Button
            key={button.id}
            onMouseEnter={() => setCurrentImage(button.image)}
            onMouseLeave={() => setCurrentImage("/placeholder.svg?height=300&width=300&text=Default+Image")}
            className="px-4 py-2"
          >
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

