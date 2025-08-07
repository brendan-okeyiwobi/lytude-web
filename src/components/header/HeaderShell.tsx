// components/HeaderShell.tsx
import Link from 'next/link';
import { VStack, HStack } from "@/components/stack-layout";
import BurgerMenu from './BurgerMenu';
import "./lytude-header-style.css";
import Image from 'next/image';

export default function HeaderShell({ pageId }: { pageId: string }) {
  return (
    <header id="header" className="lytudeheader">
      <VStack align="center" justify="center" gap="0px">
        <Link href="/">
          <Image
            src="/assets/images/logos/(cropped) Lytude.png"
            alt="Lytude"
            height={12}
            width={512}
            style={{ width: "auto", height: "12px" }}
          />
        </Link>

        <div style={{ fontFamily: 'Futura', width: "fit-content" }}>
          <nav className="bigNav">
            <HStack gap="0px">
              <HStack className="links" gap="50px">
                <Link href="/lytude-news" className={`link ${pageId === "news" ? "active" : ""}`} style={{ fontSize: "clamp(1rem, 2vw, 18px)" }}>News</Link>
                <Link href="/entertainments" className={`link ${pageId === "entertainments" ? "active" : ""}`} style={{ fontSize: "clamp(1rem, 2vw, 18px)" }}>Entertainments</Link>
                <Link href="/about" className={`link ${pageId === "about" ? "active" : ""}`} style={{ fontSize: "clamp(1rem, 2vw, 18px)" }}>About</Link>
                <Link href="/contact" className={`link ${pageId === "contact" ? "active" : ""}`} style={{ fontSize: "clamp(1rem, 2vw, 18px)" }}>Contact</Link>
              </HStack>
            </HStack>
          </nav>

          {/* The interactive burger nav lives here */}
          <BurgerMenu pageId={pageId} />
        </div>
      </VStack>
    </header>
  );
}
