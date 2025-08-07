// app/lytude-blog/components/AboutLytudeBlog.tsx

'use client'

import React, { useEffect, useState } from "react";
import { VStack } from "@/components/stack-layout";
import useColorScheme from "@/components/UseColorScheme";
import Image from "next/image";

interface AboutLytudeBlogViewProps {
    style?: React.CSSProperties;
}

const AboutLytudeBlogView: React.FC<AboutLytudeBlogViewProps> = ({ style }) => {
    const scheme = useColorScheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // or a loader/skeleton if you want

    const logoFileName = `${scheme === "dark" ? "(yellow)" : "(black)"} Lytude Blog.png`;

    return (
        <VStack
            align="flex-start"
            style={{
                minWidth: "100px",
                borderRadius: "8px",
                padding: "20px",
                maxWidth: "300px",
                ...style
            }}
        >
            <Image
                src={`/assets/images/logos/${logoFileName}`}
                alt="Lytude"
                width={512}
                height={20}
                style={{ maxWidth: "75%", maxHeight: "20px" }}
            />
            <p>Short stories, tutorials, tips and tricks and more. Dive into versatile content</p>
        </VStack>
    );
};

export default AboutLytudeBlogView;
