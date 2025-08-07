// app/lytude-news/components/NewsRepeaterViews.tsx

'use client';

import React from 'react';
import { HStack, VStack } from '@/components/stack-layout';
import { NewsCardView, SNewsCardView } from './NewsCardView';
import Link from 'next/link';
import NoItemsView from '@/components/NoItemsView';

interface News {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  _createdDate: string;
  categories: { name: string }[];
  artistDetails: {
    _id?: string;
    firstName?: string;
    lastName?: string;
    artistName: string;
    profilePicture?: string;
  };
}

interface NewsRepeaterProps {
  newsArray?: News[];
  style?: React.CSSProperties;
}

const NewsRepeaterView: React.FC<NewsRepeaterProps> = ({ newsArray, style = {} }) => (
  <VStack style={style} gap="20px">
    {Array.isArray(newsArray) && newsArray.length > 0 ? (newsArray.map((item, index) => (
      <VStack key={`newsArray${index}`}>
        <Link href={`/lytude-news/${item.slug}`}>
          <NewsCardView news={item} />
        </Link>
      </VStack>
    ))
    ) : (
      <NoItemsView />
    )}
  </VStack>
);

const BlockNewsRepeaterView: React.FC<NewsRepeaterProps> = ({ newsArray }) => (
  <HStack className="inner-content" justify="center" gap="30px" style={{ flexWrap: 'wrap' }}>
    {Array.isArray(newsArray) && newsArray.length > 0 ? (
      newsArray.map((item, index) => (
        <VStack key={`newsArray${index}`} style={{ flex: '1' }}>
          <Link href={`/lytude-news/${item.slug}`}>
            <NewsCardView news={item} />
          </Link>
        </VStack>
      ))
    ) : (
      <NoItemsView />
    )}
  </HStack>
);

const HNewsRepeaterView: React.FC<{ newsArray: News[] }> = ({ newsArray }) => (
  <HStack
    className="fade-away"
    align="flex-start"
    gap="1.5rem"
    style={{
      width: '100%',
      height: 'fit-content',
      margin: '0',
      overflowX: 'scroll',
      overflowY: 'hidden',
      flexWrap: 'nowrap',
      padding: '0 20px 20px 20px',
    }}
  >
    {newsArray.map((item, index) => (
      <div key={`newsArray${index}`}>
        <Link href={`/lytude-news/${item.slug}`}>
          <SNewsCardView news={item} />
        </Link>
      </div>
    ))}
  </HStack>
);

export { NewsRepeaterView, HNewsRepeaterView, BlockNewsRepeaterView };
