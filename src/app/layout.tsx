import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";

import "aos/dist/aos.css";
import "swiper/css";
import "@styles/global.scss";

import { FC, ReactNode } from "react";

import ProviderLayout from "@components/layout/ProviderLayout";
import getConfig from "../../next-seo.config";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

type Props = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = getConfig();

export const viewport: Viewport = {
  themeColor: "#5C85FF",
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ProviderLayout>{children}</ProviderLayout>
      </body>
      <GoogleAnalytics gaId="G-EZSMPG007M" />
      <GoogleTagManager gtmId="GTM-P8RCHDHG" />
    </html>
  );
};

export default RootLayout;