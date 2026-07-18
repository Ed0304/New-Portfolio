"use client";

import { useState } from "react";
import Image from "next/image";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
type ScreenshotCarouselProps = {
    screenshots: string[];
};



export default function ScreenshotCarousel({
    screenshots,
}: ScreenshotCarouselProps) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const previousImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? screenshots.length - 1 : prev - 1
        );
    };
    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === screenshots.length - 1 ? 0 : prev + 1
        );
    };

    if (screenshots.length === 0) {
        return (
            <div
                className="
                    relative
                    h-96
                    w-full
                    overflow-hidden
                    rounded-2xl
                "
            >
                No screenshots available
            </div>
        );
    }

    return (
            <div
                className="
                    relative
                    h-96
                    w-full
                    overflow-hidden
                    rounded-2xl
                "
            >
            <Image
                fill
                src={screenshots[currentIndex]}
                alt={`Screenshot ${currentIndex + 1}`}
                className="object-contain"
            />
            {/*left button*/}
            <button
                className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-black/50
                    p-3
                    text-white
                    transition
                    hover:bg-black/70
                    cursor-pointer
                "
                onClick={previousImage}
            >
                <ChevronLeft size={22} />
            </button>

            {/*right button*/}
            <button
                onClick={nextImage}
                className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-black/50
                    p-3
                    text-white
                    transition
                    hover:bg-black/70
                    cursor-pointer
                "
            >
                <ChevronRight size={22} />
            </button>
        </div>
    );
}