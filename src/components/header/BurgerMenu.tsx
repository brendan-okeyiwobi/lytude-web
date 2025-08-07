// components/BurgerMenu.tsx
'use client';

import { motion } from 'framer-motion';
import useHeaderScript from "@/components/header/headerScript";
import { VStack } from "@/components/stack-layout";
import Link from 'next/link';

export default function BurgerMenu({ pageId }: { pageId: string }) {
  const { menuOpen, toggleMenu } = useHeaderScript(pageId);

  return (
    <>
      <div className="burger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <motion.div
        className="miniNav"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -10 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        style={{ height: menuOpen ? "fit-content" : "0px" }}
      >
        <VStack className="links" gap="10px" align="center" justify="flex-start" style={{ overflow: "hidden" }}>
          <div className="divider-fade" style={{ width: "100%", height: "1px", margin: "10px", backgroundColor: "red" }}></div>
          <Link href="/lytude-news" className={`link ${pageId === "news" ? "active" : ""}`} style={{ fontSize: "clamp(1.5rem, 3vw, 21px)" }}>News</Link>
          <Link href="/entertainments" className={`link ${pageId === "entertainments" ? "active" : ""}`} style={{ fontSize: "clamp(1.5rem, 3vw, 21px)" }}>Entertainments</Link>
          <Link href="/about" className={`link ${pageId === "about" ? "active" : ""}`} style={{ fontSize: "clamp(1.5rem, 3vw, 21px)" }}>About</Link>
          <Link href="/contact" className={`link ${pageId === "contact" ? "active" : ""}`} style={{ fontSize: "clamp(1.5rem, 3vw, 21px)" }}>Contact</Link>
        </VStack>
      </motion.div>
    </>
  );
}
