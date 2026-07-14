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
                alt="Screenshot"
                className="rounded-xl object-cover"
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
            >
                <ChevronLeft size={22} />
            </button>

            {/*right button*/}
            <button
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