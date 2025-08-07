// app/lytude-blog/components/BlogLandingPage.tsx

'use client';

import { Blog } from '@/types/blog';
import { VStack, HStack } from '@/components/stack-layout';
import AboutLytudeBlog from './AboutLytudeBlog';
import { BlogRepeaterView } from './BlogRepeaterViews';

interface BlogLandingPageViewProps {
    blogs: Blog[];
  }

const BlogLandingPageView: React.FC<BlogLandingPageViewProps> = ({ blogs }) => {
    return (
      <VStack className="inner-content" style={{ paddingBottom: '50px' }}>
        <VStack
          justify="flex-start"
          align="flex-start"
          style={{ width: '100%', backgroundColor: '#7099ff00', padding: '20px' }}
        >
          <div className="blog-view-content-about-top" />
          <HStack align="flex-start" justify="flex-start" gap="20px" style={{ width: '100%', flexWrap: 'wrap' }}>
            <div style={{ width: '100%', flex: '1', minWidth: '300px' }}>
              <h3 style={{ padding: '20px 0' }}>Recently Added</h3>
              <BlogRepeaterView blogsArray={blogs} style={{ paddingTop: '0px' }} />
            </div>
            <div className="blog-view-content-about-side">
              <AboutLytudeBlog />
            </div>
          </HStack>
        </VStack>
  
        <style>{`
          .blog-view-blog-content-content { min-width: 400px; }
          .blog-view-content-about-top { display: none }
          @media only screen and (max-width: 700px) {
            .blog-view-content-about-side { display: none; }
            .blog-view-content-about-top { display: block; }
          }
        `}</style>
      </VStack>
    );
  };

  export default BlogLandingPageView