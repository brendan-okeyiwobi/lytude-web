// app/lytude-news/components/NewsHeader.tsx

'use client';

import React from 'react';
import { HStack, VStack } from '@/components/stack-layout'; // Update path if needed
import Link from 'next/link';
import NoItemsView from '@/components/NoItemsView';
import type { Category } from '@/types/category';
import Image from 'next/image';

interface NewsHeaderProps {
    categories: Category[];
}
const NewsHeader: React.FC<NewsHeaderProps> = ({ categories }) => {
    return (
        <VStack align="center" gap="0px" style={{ padding: "70px 0px 0px 0px" }}>
            <VStack className="inner-content" style={{ width: "100%", backgroundColor: `#7099ff00` }}>
                <HStack align="flex-start" style={{ width: "100%", padding: "20px" }}>
                    <Link href={`/lytude-news`}>
                        <div>
                            <Image
                                src="/assets/images/logos/(black) Lytude News.png"
                                className="logo-light"
                                alt="Lytude"
                                height={30}
                                width={512}
                                style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "30px" }}
                            />
                            <Image
                                src="/assets/images/logos/(yellow) Lytude News.png"
                                className="logo-dark"
                                alt="Lytude"
                                height={30}
                                width={512}
                                style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "30px" }}
                            />
                        </div>
                    </Link>
                </HStack>

                <HStack
                    className="categories-list fade-away hide-scrollbar"
                    align="center"
                    gap="1.5rem"
                    style={{
                        width: "100%",
                        height: "70px",
                        overflowX: "scroll",
                        overflowY: "hidden",
                        flexWrap: "nowrap",
                        padding: "0 20px",
                    }}
                >
                    {categories.length === 0 ? (
                        <NoItemsView title="" message="No categories yet" />
                    ) : (
                        categories.map((item, index) => (
                            <p
                                key={`category-${index}`}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    width: "fit-content",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <Link href={`/lytude-news/categories/${item._id}`}>{item.name}</Link>
                            </p>
                        ))
                    )}
                </HStack>
            </VStack>

            <VStack align="center">
                <div
                    className="divider-fade"
                    style={{
                        height: "1px",
                        width: "clamp(100px,75vw,2200px)",
                        justifyContent: "center",
                        backgroundColor: "red",
                    }}
                />
            </VStack>

            <style jsx global>{`
        :root {
          --a-color: rgb(61, 61, 61);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --a-color: #808080;
          }
        }

        .categories-list a {
          color: var(--a-color);
        }

        .logo-light {
          display: block;
        }
        .logo-dark {
          display: none;
        }

        @media (prefers-color-scheme: dark) {
          .logo-light {
            display: none;
          }
          .logo-dark {
            display: block;
          }
        }
      `}</style>
        </VStack>
    );
};

export default NewsHeader;
