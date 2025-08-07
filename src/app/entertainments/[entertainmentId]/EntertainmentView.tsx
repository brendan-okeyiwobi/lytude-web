// app/entertainments/[entertainmentId]/EntertainmentView.tsx

'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { resolveContentURL } from '@/utils/resolveContentURL';
import MediaViewer from '@/components/MediaViewer';
import { HStack, VStack } from '@/components/stack-layout';
import Image from "next/image";

export interface Entertainment {
  name: string;
  logo: string;
  description: string;
  themeColor: string;
  heroImage: string;
  heroTextColor: string;
  features?: {
    title: string;
    description: string;
  }[];
  links?: {
    _id: string;
    type: string;
    link: string;
    description?: string;
    linkLabel?: string;
  }[];
  screenshots?: string[];
}

const WorkDetailHero = ({
  name,
  logo,
  description,
  themeColor,
  heroImage,
  heroTextColor,
}: Entertainment) => (
  <VStack
    justify="center"
    align="center"
    style={{
      backgroundImage: `linear-gradient(${themeColor}80, ${themeColor}), url("${resolveContentURL(heroImage)}")`,
      paddingTop: '70px',
      backgroundSize: 'cover',
      height: '256px',
      width: '100%',
    }}
  >
    <HStack
      className="inner-content"
      gap="20px"
      align="center"
      style={{ padding: '20px', opacity: '1' }}
    >
      <Image
        src={resolveContentURL(logo)}
        alt={name}
        height={128}
        width={128}
        style={{ height: "auto", width: "auto", maxWidth: '128px', maxHeight: '128px' }}
      />
      <VStack
        gap="0"
        justify="center"
        align="flex-start"
        style={{
          height: 'fit-content',
          padding: '0 12px',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h3 style={{ color: heroTextColor, fontWeight: 700, margin: 0 }}>
          {name}
        </h3>
        <p style={{ color: heroTextColor, textAlign: 'left', margin: 0 }}>
          {description}
        </p>
      </VStack>
    </HStack>
    <style>{`
      #header a {
        color: ${heroTextColor};
      }
      #header {
        background-color: ${themeColor}40;
      }
      .bar {
        background-color: ${heroTextColor};
      }
    `}</style>
  </VStack>
);

const WorkFeaturesSection = ({
  features,
  themeColor,
}: Pick<Entertainment, 'features' | 'themeColor'>) =>
  features && features.length > 0 ? (
    <VStack
      align="center"
      gap="30px"
      style={{ padding: '20px', backgroundColor: `${themeColor}40` }}
    >
      <h2>Features</h2>
      <HStack
        className="inner-content"
        justify="center"
        gap="30px"
        style={{ flexWrap: 'wrap' }}
      >
        {features.map((item, index) => (
          <div
            key={`WorkFeatures${index}`}
            className="white-black-background"
            style={{
              maxWidth: '300px',
              padding: '20px',
              borderRadius: '7.5px 7.5px 0 0',
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </HStack>
    </VStack>
  ) : null;

const WorkAvailableSection = ({
  links = [],
  name,
  themeColor,
  heroTextColor,
}: Pick<Entertainment, 'links' | 'name' | 'themeColor' | 'heroTextColor'>) => {
  const title = links.find((s) => s._id === '.title');
  const freshArray = links.filter((s) => s._id !== '.title');

  return (
    <VStack
      align="center"
      style={{ padding: '20px', backgroundColor: `${themeColor}BF` }}
    >
      {title && (
        <h2 style={{ color: heroTextColor, opacity: 0.8 }}>{title.type}</h2>
      )}
      {title?.description ? (
        <p
          style={{
            margin: 0,
            paddingBottom: '40px',
            color: heroTextColor,
          }}
        >
          {title.description}
        </p>
      ) : (
        <p>{name} is unavailable</p>
      )}
      <HStack
        justify="center"
        align="center"
        gap="20px"
        style={{ flexWrap: 'wrap' }}
      >
        {freshArray.map((item, index) => (
          <div
            key={`WorkAvailable${index}`}
            style={{
              maxWidth: '200px',
              borderRadius: '7.5px 7.5px 0 0',
            }}
          >
            {item.link && (
              <Link href={item.link} target="_blank">
                <VStack
                  className="scale-on-hover"
                  align="center"
                  style={{ borderRadius: '7.5px', overflow: 'hidden' }}
                >
                  {item.type === 'App Store' && (

                    <Image
                      src="/assets/images/available-on-the-app-store.png"
                      alt="App store"
                      height={512}
                      width={512}
                      style={{ height: "auto", width: "auto", maxWidth: '100%' }}
                    />
                  )}
                  {item.type === 'Play Store' && (
                    <Image
                      src="/assets/images/get-it-on-the-play-store.png"
                      alt="Google Play Store"
                      height={512}
                      width={512}
                      style={{ height: "auto", width: "auto", maxWidth: '100%' }}
                    />
                  )}
                  {item.type === 'Web' && <button className='button'>{item.linkLabel}</button>}
                </VStack>
              </Link>
            )}
          </div>
        ))}
      </HStack>
    </VStack>
  );
};

const WorkScreenshotsSection = ({
  screenshots,
  themeColor,
}: Pick<Entertainment, 'screenshots' | 'themeColor'>) =>
  screenshots && screenshots.length > 0 ? (
    <VStack
      align="center"
      gap="0px"
      style={{ padding: '20px 0', backgroundColor: `${themeColor}80` }}
    >
      <h2>Screenshots</h2>
      <HStack
        align="center"
        justify="flex-start"
        gap="0px"
        style={{
          padding: '10px',
          maxWidth: '100%',
          overflowX: 'scroll',
        }}
      >
        <MediaViewer media={screenshots} />
      </HStack>
    </VStack>
  ) : null;

const WorkDetailView = (props: Entertainment) => {
  const {
    name,
    logo,
    description,
    themeColor,
    heroImage,
    heroTextColor,
    features,
    links,
    screenshots,
  } = props;

  useEffect(() => {
    document.title = `${name} | Lytude`;
  }, [name]);

  return (
    <div
      className="white-black-background"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      {/* <Head>
        <title>{name} | Lytude</title>
        <meta name="description" content={description} />
      </Head> */}

      <WorkDetailHero
        {...{
          name,
          logo,
          description,
          themeColor,
          heroImage,
          heroTextColor,
        }}
      />
      <WorkAvailableSection
        {...{ links, name, themeColor, heroTextColor }}
      />
      <WorkFeaturesSection {...{ features, themeColor }} />
      <WorkScreenshotsSection {...{ screenshots, themeColor }} />
    </div>
  );
};

export default WorkDetailView;
