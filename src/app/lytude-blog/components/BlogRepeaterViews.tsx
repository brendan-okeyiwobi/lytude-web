// app/lytude-blog/components/BlogRepeaterView.tsx

'use client';

import React from 'react';
import { HStack, VStack } from '@/components/stack-layout';
import { BlogCardView, SBlogCardView } from './BlogCardView';
import Link from 'next/link';
import NoItemsView from '@/components/NoItemsView';

interface Blog {
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

interface BlogRepeaterProps {
  blogsArray?: Blog[];
  style?: React.CSSProperties;
}

const BlogRepeaterView: React.FC<BlogRepeaterProps> = ({ blogsArray, style = {} }) => (
  <VStack style={style} gap="20px">
    {Array.isArray(blogsArray) && blogsArray.length > 0 ? (blogsArray.map((item, index) => (
      <VStack key={`blogsArray${index}`}>
        <Link href={`/lytude-blog/${item.slug}`}>
          <BlogCardView blog={item} />
        </Link>
      </VStack>
    ))
    ) : (
      <NoItemsView />
    )}
  </VStack>
);

const BlockBlogRepeaterView: React.FC<BlogRepeaterProps> = ({ blogsArray }) => (
  <HStack className="inner-content" justify="center" gap="30px" style={{ flexWrap: 'wrap' }}>
    {Array.isArray(blogsArray) && blogsArray.length > 0 ? (
      blogsArray.map((item, index) => (
        <VStack key={`blogsArray${index}`} style={{ flex: '1' }}>
          <Link href={`/lytude-blog/${item.slug}`}>
            <BlogCardView blog={item} />
          </Link>
        </VStack>
      ))
    ) : (
      <NoItemsView />
    )}
  </HStack>
);

const HBlogRepeaterView: React.FC<{ blogsArray: Blog[] }> = ({ blogsArray }) => (
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
    {blogsArray.map((item, index) => (
      <div key={`blogsArray${index}`}>
        <Link href={`/lytude-blog/${item.slug}`}>
          <SBlogCardView blog={item} />
        </Link>
      </div>
    ))}
  </HStack>
);

export { BlogRepeaterView, HBlogRepeaterView, BlockBlogRepeaterView };
