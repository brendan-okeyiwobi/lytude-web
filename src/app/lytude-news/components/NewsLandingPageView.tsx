// app/lytude-news/components/NewsLandingPageView.tsx
 
'use client';

import { News } from '@/types/news';
import { VStack, HStack } from '@/components/stack-layout';
import AboutLytudeNews from './AboutLytudeNews';
import { NewsRepeaterView } from './NewsRepeaterViews';

interface NewsLandingPageViewProps {
    news: News[];
  }

const NewsLandingPageView: React.FC<NewsLandingPageViewProps> = ({ news }) => {
    return (
      <VStack className="inner-content" style={{ paddingBottom: '50px' }}>
        <VStack
          justify="flex-start"
          align="flex-start"
          style={{ width: '100%', backgroundColor: '#7099ff00', padding: '20px' }}
        >
          <div className="news-view-content-about-top" />
          <HStack align="flex-start" justify="flex-start" gap="20px" style={{ width: '100%', flexWrap: 'wrap' }}>
            <div style={{ width: '100%', flex: '1', minWidth: '300px' }}>
              <h3 style={{ padding: '20px 0' }}>Recently Added</h3>
              <NewsRepeaterView newsArray={news} style={{ paddingTop: '0px' }} />
            </div>
            <div className="news-view-content-about-side">
              <AboutLytudeNews />
            </div>
          </HStack>
        </VStack>
  
        <style>{`
          .news-view-news-content-content { min-width: 400px; }
          .news-view-content-about-top { display: none }
          @media only screen and (max-width: 700px) {
            .news-view-content-about-side { display: none; }
            .news-view-content-about-top { display: block; }
          }
        `}</style>
      </VStack>
    );
  };

  export default NewsLandingPageView