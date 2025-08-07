// app/about/page.tsx

import { HStack, VStack, ZStack } from "@/components/stack-layout";
import Image from "next/image";

function AboutView() {
    return (
        <div>
            {/* About Section */}
            <VStack
                className="inner-content"
                gap="10px"
                align="flex-start"
                style={{
                    width: "100%",
                    padding: "0px 20px",
                }}
            >
                <div style={{ height: "100px" }}></div>
                <h1>About</h1>
                <p style={{ textIndent: "30px" }}>
                    Lytude is a creative hub founded by N. Brendan Okey-Iwobi that has grown into a multi-purpose entity over the past few years. Originally
                    started in early 2022, Lytude has undergone a significant restructuring in late 2024 to better align with its expanding vision.
                    What began as a passion project is now a space where music, digital content, development and other forms of entertainment come together. While
                    it&apos;s still in its developmental phase, Lytude continues to evolve by offering a mix of creative content and new services,
                    all designed to connect with a diverse audience. <br /><br />

                    At its core, Lytude is about experimentation and exploration. Rather than
                    sticking to one narrow focus, the platform reflects a broad range of  interests—from technical tutorials on 3D design and
                    coding to discussions on various music styles. The approach is informal and honest, built on a belief that creativity comes
                    in many forms. Rather than aiming to be overly grand or revolutionary, Lytude focuses on delivering value and
                    genuine content for people who share these interests.
                </p>
                <VStack align="flex-start">
                    <h2>Works & Offerings</h2>
                    <p style={{ textIndent: "30px" }}>
                        One of the primary features of Lytude is its music streaming service, Soundlytude. This service is dedicated to showcasing
                        the music of DJ bon26 alongside musics from other artists who have provided permissions. Soundlytude isn&apos;t
                        just about playing music; it&apos;s designed to offer a personalized experience. Soon, listeners will be able to create their own
                        playlists, download tracks for offline listening, and explore detailed artist profiles. Currently, only licensed artists have
                        profiles on the platform, but there&apos;s room for growth as new partnerships form. <br /><br />

                        Beyond Soundlytude, Lytude also hosts a YouTube channel and a blog. The channel isn&apos;t solely focused on music content, it&apos;s
                        a place to learn about anything from how to create 3D designs to coding tutorials, and even discussions about different music
                        genres. The content is varied and practical, with each video aimed at providing tangible insights or tips. Similar on the blog,
                        you&apos;ll find a mix of content and more structured &quot;news&quot; posts about the business side of things, including updates on new features
                        and services. The blog serves as a candid look at how Lytude is evolving, offering a transparent view of the day-to-day developments
                        and ideas behind the operation.
                    </p>
                </VStack>
                <VStack align="flex-start">
                    <h2>Gaming & Interactive Experience</h2>
                    <p style={{ textIndent: "30px" }}>
                        Looking ahead, Lytude is gearing up to expand its offerings with a new venture: Gamelytude. This new branch will explore
                        the realm of gaming, primarily focusing on mobile and occasional PC games. There isn&apos;t a set genre in mind—rather, the goal
                        is to experiment and create interactive entertainment that complement the other services under the Lytude umbrella. Whether
                        it&apos;s a casual game to pass the time or a more involved interactive project, Gamelytude is intended to broaden the brand&apos;s
                        appeal and offer another way for users to engage.  <br /><br />

                        The gaming side of Lytude will be developed with a relaxed and experimental attitude. The aim is not to replicate any existing
                        successful formula but to see what resonates with the audience. This means testing ideas, gathering feedback, and being open
                        to evolving the platform based on what users enjoy.
                    </p>
                    {/* While the journey into gaming is just beginning, it represents a natural 
          extension of Lytude&apos;s overall commitment to exploring different facets of digital creativity.*/}
                </VStack>
            </VStack>

            {/* Founder Section */}
            <ZStack
                style={{
                    padding: "40px 20px",
                    backgroundColor: "rgba(255, 0, 0, 0.25)",
                    marginTop: "20px",
                }}
            >
                <HStack
                    className="inner-content"
                    gap="20px"
                    align="center"
                    style={{
                        flexDirection: "row", // This ensures it's side by side on larger screens
                        justifyContent: "center",
                        textAlign: "center",
                        flexWrap: "wrap", // Ensure it wraps on smaller screens
                    }}
                >
                    <VStack gap="20px" align="center" style={{ flex: 1, minWidth: "200px" }}>
                        <h2>Founder</h2>
                        <p>
                            Nzubechukwu Brendan Okey-Iwobi is the founder/owner of Lytude. With a rich variety of talents and experience in the business managing,
                            N. Brendan Okey-Iwobi has led Lytude to its current successful progress. More than the founder, Nzubechukwu is the solo developer and current
                            operator of the whole backend and frontend of what keeps Lytude running.
                        </p>
                    </VStack>

                    <div
                        style={{
                            width: "100%",
                            maxWidth: "175px",
                            borderRadius: "8px",
                            overflow: "hidden",
                            flex: "1 0 200px", // Allow image to take up space and wrap accordingly on small screens
                        }}
                    >
                        <Image
                            src="/assets/images/developer1.JPG"
                            alt="Founder"
                            width={256} // Specify width and height for better performance
                            height={256}
                            style={{
                                width: "auto",
                                height: "256px",
                                borderRadius: "7.5px 7.5px 0 0",
                            }}
                            priority={true}
                        />
                        
                    </div>
                </HStack>
            </ZStack>
        </div>
    );
}

const title = "About | Lytude";
const description = `Lytude is a creative entity founded by N. Brendan Okey-Iwobi that has grown into a multi-service entity over the past few years. Originally 
started in early 2022, Lytude has undergone a significant restructuring in late 2024 to better align with its expanding vision. 
What began as a passion project is now a space where music, digital content, and entertainment come together. While
it&apos;s still in its developmental phase, Lytude continues to evolve by offering a mix of creative content and new services, 
all designed to connect with a diverse audience.`;
const logo = "/assets/images/logos/(fade) Favicon.png";


export const metadata = {
    title: title,
    description: description,
    keywords: ["music", "streaming", "Lytude", "DJ bon26", "creative entity", "Brendan", "Okey-Iwobi", "Nzubechukwu", "entertainment"],
    openGraph: {
        title: title,
        description: description,
        url: "https://lytude.com/about",
        images: [logo],
    },
    twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        images: [logo],
    },
    authors: [{ name: "Nzubechukwu Brendan Okey-iwobi" }]
};


const About = () => {

    return (
        <AboutView />
    );
};

export default About;