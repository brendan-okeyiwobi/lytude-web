// app/entertainments/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { resolveContentURL } from '@/utils/resolveContentURL';
import { Metadata } from 'next';
import { HStack, VStack, ZStack } from "@/components/stack-layout";
import NoItemsView from '@/components/NoItemsView';
import Image from "next/image";
import { fetchWithState } from '@/utils/fetchWithState';

interface Entertainment {
  _id: string;
  name: string;
  description: string;
  themeColor: string;
  screenshots: string[];
  mainLink: string;
  mainLinkLabel: string;
  heroImage: string;
  heroTextColor: string;
  features: Feature[];
  links: EntertainmentLink[];
  logo: string;
}

interface Feature {
  _id: string;
  title: string;
  description: string;
}

interface EntertainmentLink {
  _id: string;
  link: string;
  type: string;
  linkLabel: string;
  description: string;
}

const title = "Entertainments | Lytude";
const description = `Lytude is a creative entity founded by N. Brendan Okey-Iwobi that has grown into a multi-work entity over the past few years. Originally 
        started in early 2022, Lytude has undergone a significant restructuring in late 2024 to better align with its expanding vision. 
        What began as a passion project is now a space where music, digital content, and entertainment come together. While
         it's still in its developmental phase, Lytude continues to evolve by offering a mix of creative content and new works, 
         all designed to connect with a diverse audience.`;
const logo = "/assets/images/(fade) Favicon.png";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["Lytude", "creative entity", "Brendan", "Okey-Iwobi", "Nzubechukwu", "entertainment", 
    "music", "streaming", "creativity", "DJ bon26", "entertainment", "Soundlytude", "lytude news", "lytude blog"],
  openGraph: {
    title,
    description,
    url: "https://lytude.com",
    images: [logo],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [logo],
  },
  authors: [{ name: "Nzubechukwu Brendan Okey-iwobi" }]
};

export default async function EntertainmentsPage() {
  const { data, error, success } = await fetchWithState<Entertainment[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/get-entertainments?p=${process.env.NEXT_PUBLIC_ENTERTAINMENTS}`,
    {
      next: { revalidate: 60 },
      headers: {
        // carry the Supabase access token into your API route
        Authorization: `${process.env.NEXT_PUBLIC_AUTH}`,
      }
    }
  );

  if (!success || !data) {
    return <NoItemsView message={error ?? 'Unknown error occurred'} />;
  }

  if (data.length === 0) {
    notFound();
  }

  return (
    <div>
      <HeroSection />
      <WorksSection data={data} />
    </div>
  );
}
// export default async function EntertainmentsPage() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/get-entertainments`, {
//     next: { revalidate: 60 }, // same as before if needed
//   });

//   const { data, error, success } = await res.json();

//   if (!success || !data) {
//     return <NoItemsView message={error ?? 'Unknown error occurred'} />;
//   }

//   if (data.length === 0) {
//     notFound();
//   }

//   return (
//     <div>
//       <HeroSection />
//       <WorksSection data={data} />
//     </div>
//   );
// }


const HeroSection = () => (
  <ZStack justify="center" align="center" style={{
    height: "700px",
    backgroundImage: `linear-gradient(rgba(112, 153, 255, 0.5), rgba(112, 153, 255, 1)), url("assets/images/soundlytude_background.JPG")`,
    backgroundSize: "cover", padding: "0 20px"
  }}>
    <VStack gap="20px" align="center" style={{ textAlign: "center" }}>
      <div style={{ height: "100px" }}></div>

      <Image src={"/assets/images/logos/(cropped) Soundlytude full logo.png"} alt="Soundlytude"  width={500} 
      height={500} style={{ height: "auto", width: "clamp(100px, 50vw, 500px)" }} />

      <h1 style={{ color: "white" }}>A beautiful, beautiful space</h1>
      <p style={{ color: "white", fontSize: "1.2rem", maxWidth: "600px" }}>
        See the music streaming/entertainment work by Lytude showcasing DJ Bon26&apos;s music and media, plus a curated selection from talented artists
      </p>

      <Link href="https://soundlytude.lytude.com" target="_blank">
        <button className='button'>Listen</button>
      </Link>
    </VStack>
  </ZStack>
);


const WorksSection: React.FC<{ data: Entertainment[] }> = ({ data }) => {
  return (
    <VStack gap="40px" style={{ padding: "20px" }} align="center">
      <h2 style={{ fontSize: "2.5rem" }}>Works</h2>

      <HStack justify="center" gap="20px" style={{ flexWrap: "wrap" }}>
        {data.map((item) => (
          <Link key={item._id} href={`/entertainments/${item._id}`}>
            <WorkCard
              logo={item.logo}
              name={item.name}
              description={item.description}
              themeColor={item.themeColor}
              heroImage={item.heroImage}
              heroTextColor={item.heroTextColor}
            />
          </Link>
        ))}
      </HStack>
    </VStack>
  );
};

// ✅ FIXED prop typing — WorkCard doesn't need the full Entertainment object
interface WorkCardProps {
  logo: string;
  name: string;
  description: string;
  themeColor: string;
  heroImage: string;
  heroTextColor: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ logo, name, description, themeColor, heroImage, heroTextColor }) => (
  <VStack className="scale-on-hover" align="center" gap="5px" style={{
    padding: "20px",
    border: "none",
    maxWidth: "500px",
    backgroundImage: `linear-gradient(${themeColor}80, ${themeColor}), url("${resolveContentURL(heroImage)}")`,
    borderRadius: '7.5px 7.5px 0 0',
    backgroundSize: "cover"
  }}>
    <Image src={resolveContentURL(logo)} alt={name} height={1024} width={1024} style={{ height: "auto", width: "auto", maxWidth: "100%", 
      maxHeight: "100px", backgroundSize: "fit" }} />
    <h3 style={{ fontSize: "1.5rem", color: `${heroTextColor}` }}>{name}</h3>
    <p style={{ textAlign: "center", color: `${heroTextColor}` }}>{description}</p>
  </VStack>
);
