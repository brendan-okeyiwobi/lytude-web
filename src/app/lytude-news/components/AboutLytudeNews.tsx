// app/lytude-news/components/AboutLytudeNews.tsx

'use client'

import React, { useEffect, useState } from "react";
import { VStack } from "@/components/stack-layout";
import useColorScheme from "@/components/UseColorScheme";
import Image from "next/image";

interface AboutLytudeNewsViewProps {
    style?: React.CSSProperties;
}

const AboutLytudeNewsView: React.FC<AboutLytudeNewsViewProps> = ({ style }) => {
    const scheme = useColorScheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // or a loader/skeleton if you want

    const logoFileName = `${scheme === "dark" ? "(yellow)" : "(black)"} Lytude News.png`;

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
                height={20}
                width={512}
                style={{ width: "auto", height: "auto", maxWidth: "75%", maxHeight: "20px" }}
            />
            <p>Official Lytude news. Stay up to date with latest talks, updates and more on Lytude</p>
        </VStack>
    );
};

export default AboutLytudeNewsView;
