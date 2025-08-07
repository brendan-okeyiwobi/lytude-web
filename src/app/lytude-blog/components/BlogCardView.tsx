// app/lytude-blog/components/BlogCardView.tsx

import React from 'react';
import { HStack, VStack } from '@/components/stack-layout'; 
import Sticker from '@/components/Sticker';
import DateUtil from '@/utils/dateUtil';
import { resolveContentURL } from '@/utils/resolveContentURL';
import Image from 'next/image';

// --- Types ---
interface Category {
  name: string;
}

interface ArtistDetails {
  _id?: string;
  firstName?: string;
  lastName?: string;
  artistName: string;
  profilePicture?: string;
}

interface Blog {
  title: string;
  excerpt: string;
  coverImage: string;
  _createdDate: string;
  categories: Category[];
  artistDetails: ArtistDetails;
}

interface BlogCardViewProps {
  blog: Blog;
  style?: React.CSSProperties;
}

const BlogCardView: React.FC<BlogCardViewProps> = ({ blog, style = {} }) => {
  return (
    <VStack className="" align="flex-start" style={{ width: '100%', backgroundColor: '#7099ff00', ...style }}>
      <Image
        src={resolveContentURL(blog.coverImage)}
        alt={blog.title}
        height={200}
        width={512}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <HStack style={{ padding: '10px 0px', margin: '0', flexWrap: 'wrap', maxWidth: '100%', overflowX: 'scroll' }} gap="5px">
        {blog.categories.map((item, index) => (
          <Sticker key={`blog_category_${index}`} label={item.name} />
        ))}
      </HStack>
      <div style={{ width: '100%' }}>
        <h2 className="text-limited-4" style={{ paddingBottom: '2.5px', marginBottom: '0', marginTop: '0' }}>{blog.title}</h2>
        <p style={{ paddingTop: '2.5px', marginTop: '0' }}>{blog.excerpt}</p>
      </div>
      <HStack gap="10px" style={{ paddingTop: '10px' }}>
        {blog.artistDetails._id && blog.artistDetails.profilePicture && (
          <Image
            src={resolveContentURL(blog.artistDetails.profilePicture, 'scaledToFill', { width: 64, height: 64 })}
            alt={blog.artistDetails.artistName}
            width={40}
            height={40}
            style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
          />
        )}
        <VStack align="flex-start" gap="0px" style={{ padding: '0px' }}>
          {blog.artistDetails._id && (
            <div>
              {blog.artistDetails.firstName && blog.artistDetails.lastName ? (
                <p style={{ padding: '0', margin: '0', fontFamily: 'FuturaBold' }}>
                  {blog.artistDetails.firstName} {blog.artistDetails.lastName} ({blog.artistDetails.artistName})
                </p>
              ) : (
                <p style={{ padding: '0', margin: '0', fontFamily: 'FuturaBold' }}>{blog.artistDetails.artistName}</p>
              )}
            </div>
          )}
          <p style={{ padding: '0', margin: '0', fontSize: '0.75rem' }}>{DateUtil.simpleDate(blog._createdDate)}</p>
        </VStack>
      </HStack>
    </VStack>
  );
};

const SBlogCardView: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <VStack className="" align="flex-start" style={{ width: '200px', backgroundColor: '#7099ff00' }}>
    <Image
      src={resolveContentURL(blog.coverImage)}
      alt={blog.title}
      height={100}
      width={512}
      style={{ width: '100%', height: '100px', objectFit: 'cover' }}
    />
      <HStack
        className="fade-away-right"
        align="flex-start"
        gap="1rem"
        style={{
          padding: '10px 0px',
          width: '100%',
          height: 'fit-content',
          margin: '0',
          overflow: 'hidden',
          flexWrap: 'nowrap',
        }}
      >
        {blog.categories.map((item, index) => (
          <Sticker key={`blog_category_${index}`} label={item.name} inline />
        ))}
      </HStack>
      <div style={{ width: '100%' }}>
        <p style={{ paddingBottom: '2.5px', marginBottom: '0', marginTop: '0' }}>
          <b>{blog.title}</b>
        </p>
        <p style={{ paddingTop: '2.5px', marginTop: '0' }}>{blog.excerpt}</p>
      </div>
      <HStack gap="10px" style={{ paddingTop: '10px' }}>
        <VStack align="flex-start" gap="0px" style={{ padding: '0px' }}>
          {blog.artistDetails._id && (
            <div>
              {blog.artistDetails.firstName && blog.artistDetails.lastName ? (
                <p style={{ padding: '0', margin: '0', fontFamily: 'FuturaBold' }}>
                  {blog.artistDetails.firstName} {blog.artistDetails.lastName} ({blog.artistDetails.artistName})
                </p>
              ) : (
                <p style={{ padding: '0', margin: '0', fontFamily: 'FuturaBold' }}>{blog.artistDetails.artistName}</p>
              )}
            </div>
          )}
          <p style={{ padding: '0', margin: '0', fontSize: '0.75rem' }}>{DateUtil.simpleDate(blog._createdDate)}</p>
        </VStack>
      </HStack>
    </VStack>
  );
};

export { BlogCardView, SBlogCardView };
