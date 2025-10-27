// app/page.tsx
 
import type { Metadata } from "next";
import Link from 'next/link';
import { HStack, VStack} from "@/components/stack-layout";

const title = "Lytude: Live your creativity"
const description = `Lytude is a creative hub for content, entertainment and development. Founded by Nzubechukwu Brendan Okey-iwobi, Lytude runs a music streaming
                    service called Soundlytude, where you can exclusively accesss DJ bon26's catalogue and music from other licensed artists. Alongside this,
                    Lytude features YouTube videos, blogs, and News. In the future, Lytude plans to expand into gaming through Gamelytude,
                    bringing new forms of interactive entertainment to its growing community.`
const logo = "/assets/images/logos/(fade) Favicon.png"

export const metadata: Metadata = {
    title: title,
    description: description,
    keywords: ["music", "streaming", "Lytude", "DJ bon26", "creative entity", "Brendan", "Okey-Iwobi", "Nzubechukwu", "entertainment"],
    openGraph: {
        title: title,
        description: description,
        url: "https://lytude.com",
        images: [logo],
    },
    twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        images: [logo],
    },
    authors: [{ name: "Nzubechukwu Brendan Okey-iwobi" }],
    other: {"google-site-verification": "fLf5p9tNjUwkjOvDncsHGx1ZkBdLGLVm09Tit_SKYrA"
}
};

// export const viewport = {
//     themeColor: [
//         { media: '(prefers-color-scheme: light)', color: '#FFF000' },
//         { media: '(prefers-color-scheme: dark)', color: '#FFF000' },
//     ],
// }

const Home = () => {
    return (
        <div>
            <HomeView />
        </div>
    );
};


function HomeView() {

    const heroStyle = {
        // backgroundColor: "#fff000",
        backgroundImage: `linear-gradient(rgba(255, 240, 0, 0.5), rgba(255, 240, 0, 1)), url("/assets/images/background8.JPG")`,
        borderRadius: "0px 0px 70vw 0px",
        backgroundSize: "cover",
        color: "white",
        fontSize: "30px",
        opacity: 0.9,
        height: "700px",
        padding: "20px",
        width: '100%'
    };

    return (
        <VStack className="content" gap="40px" justify="center" align="center" style={{ /*minHeight: "100vh"*/ }}>
            {/* Hero Section */}
            <VStack style={heroStyle}>
                <VStack className="inner-content" align="center" justify="flex-start" style={{ padding: "0px" }}>
                    <div style={{ height: "180px" }}></div>

                    <VStack align="flex-start" style={{ padding: 0, width: "fit-content" }}>
                        {/* First HStack */}
                        <HStack align="center">
                            <h1 style={{ letterSpacing: "3px", fontSize: "clamp(1.25rem, 3vw, 6rem)", margin: 0, padding: 0, color: "#000000" }}>
                                Don&apos;t Stop,
                            </h1>
                        </HStack>

                        {/* Second HStack */}
                        <HStack align="center">
                            <h2 style={{ letterSpacing: "3px", fontSize: "clamp(1.25rem, 3vw, 6rem)", margin: 0, padding: "0 0 0 clamp(1rem, 9vw, 9rem)", color: "#000000" }}>
                                Live your creativity
                            </h2>
                        </HStack>
                    </VStack>

                    <VStack align="center" style={{ width: "fit-content" }}>
                        <p className="cursive" style={{ fontSize: "clamp(0.9rem, 2vw, 2rem)", color: "red" }}>
                            Okey-Iwobi Owned
                        </p>
                    </VStack>
                </VStack>
            </VStack>

            <VStack className="inner-content" align="flext-start" justify="flex-end" style={{ width: "100%", padding: "0px 15px" }}>
                <h1 style={{ fontSize: "2.5rem" }}>Hello,</h1>
                <p> {description}</p>

                <Link href="/about" style={{ width: "fit-content" }}>
                    <button className="button"> Learn more </button>
                </Link>
            </VStack>
            <div style={{ height: "20px" }} />
        </VStack>
    );
}

export default Home;
