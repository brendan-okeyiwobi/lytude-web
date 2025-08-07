// app/lytude-news/[newsSlug]/newsView.tsx

import React from 'react';
import { VStack, HStack } from '@/components/stack-layout';
import DateUtil from '@/utils/dateUtil';
import AboutLytudeNews from '../components/AboutLytudeNews';
import { resolveContentURL } from "@/utils/resolveContentURL";
import Link from 'next/link';
import Sticker from "@/components/Sticker";
import Image from 'next/image';

import { FullNews} from '@/types/news';

interface NewsViewProps {
    news?: FullNews;
}

const NewsView: React.FC<NewsViewProps> = ({ news }) => {
    if (!news) return <p className='inner-content' style={{ padding: "100px 20px" }}>Nothing found</p>;

    const {
        title,
        artistDetails,
        content,
        excerpt,
        coverImage,
        categories,
    } = news;

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className='content'>
                <VStack
                    justify="flex-end"
                    align="flex-start"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url("${resolveContentURL(coverImage)}")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "clamp(300px, 35vw, 500px)",
                        backgroundSize: "cover",
                        overflow: "hidden"
                    }}>
                        {null}
                    </VStack>
            </div>

            <h1 style={{ padding: "21px 21px 0px 21px" }} className="inner-content">{title}</h1>

            <div className='inner-content' style={{ padding: "15px" }}>
                <div className='news-view-content-excerpt-top' style={{ padding: "0 20px" }}>
                    <HStack style={{ padding: "10px 0px", margin: "0", flexWrap: "wrap", maxWidth: "100%", overflowX: "scroll" }} gap="5px">
                        {categories.map((item, index) => (
                            <Link key={`news-view-content-excerpt-top-${index}`} href={`/lytude-news/categories/${item._id}`} >
                                <Sticker label={item.name} />
                            </Link>
                        ))}
                    </HStack>
                    <p className="italic">{excerpt}</p>
                </div>

                {artistDetails?._id && (
                    <HStack gap="10px" style={{ padding: "0px 6px", paddingTop: "21px" }}>
                        <Image
                            src={resolveContentURL(artistDetails.profilePicture, "scaledToFill", { width: 64, height: 64 })}
                            alt={artistDetails.artistName}
                            width={40}
                            height={40}
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                objectFit: "cover"
                            }}
                        />
                        <VStack align="flex-start" gap="0px" style={{ padding: "0px" }}>
                            <p style={{ padding: "0", margin: "0", fontFamily: "FuturaBold" }}>
                                {artistDetails.firstName && artistDetails.lastName
                                    ? `${artistDetails.firstName} ${artistDetails.lastName} (${artistDetails.artistName})`
                                    : artistDetails.artistName}
                            </p>
                            <p style={{ padding: "0", margin: "0", fontSize: "0.75rem" }}>
                                {DateUtil.simpleDate(news._createdDate)}
                            </p>
                        </VStack>
                    </HStack>
                )}

                <VStack align='center'>
                    <div className="divider-fade" style={{ margin: "50px", height: "1px", width: "clamp(100px,75vw,2200px)", justifyContent: "center", backgroundColor: "red" }} />
                </VStack>

                <HStack align="flex-start" justify="flex-start" gap="20px" style={{ width: "100%", flexWrap: "wrap" }}>
                    <VStack className="news-view-news-content-content" style={{ width: "100%", flex: "1" }}>
                        <div className="news-view-news-content" dangerouslySetInnerHTML={{ __html: content }} />
                        <VStack align='center' style={{ width: "100%" }}>
                            <div className="divider-fade" style={{ margin: "50px", height: "1px", width: "clamp(100px,75vw,90%)", justifyContent: "center", backgroundColor: "red" }} />
                        </VStack>
                    </VStack>

                    <VStack style={{ maxWidth: "300px" }}>
                        <div className='news-view-content-excerpt-side' style={{ padding: "0 20px" }}>
                            <HStack style={{ padding: "10px 0px", margin: "0", flexWrap: "wrap", maxWidth: "100%", overflowX: "scroll" }} gap="5px">
                                {categories.map((item, index) => (
                                    <Link key={`news-view-content-excerpt-side-${index}`} href={`/lytude-news/categories/${item._id}`} >
                                        <Sticker label={item.name} />
                                    </Link>
                                ))}
                            </HStack>
                            <p className="italic">{excerpt}</p>
                        </div>
                        <AboutLytudeNews />
                    </VStack>
                </HStack>
            </div>

            <style>{`
                .news-view-news-content p, .news-view-news-content b {
                    font-size: 1.25rem;
                }

                .news-view-news-content h1 {
                    font-size: 2.5rem;
                }

                .news-view-news-content h2, .news-view-news-content h3 {
                    font-size: 2rem;
                }

                .news-view-news-content-content {
                    min-width: 400px;
                }

                .news-view-content-excerpt-top {
                    display: none;
                }

                @media only screen and (max-width: 700px) {
                    .news-view-news-content-content {
                        min-width: 100%;
                    }

                    .news-view-content-excerpt-side {
                        display: none;
                    }

                    .news-view-content-excerpt-top {
                        display: block;
                    }
                }
            `}</style>
        </div>
    );
};

export default NewsView;
