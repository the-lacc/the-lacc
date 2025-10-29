"use client";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import Loader from "@components/ui/Loader/Loader";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useAppDispatch } from "@store/hook";
import Aos from "aos";
import "aos/dist/aos.css";
import { Montserrat } from "next/font/google";
import { hideLoader } from "@store/slices/loaderSlice";
import useOnlineStatus from "@hooks/useOnlineStatus";
import useHasWindow from "@hooks/useHasWindows";
import LostConnection from "@components/sections/LostConnection/LostConnection";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

const MontserratFont = Montserrat({
  subsets: ["cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const Layout: FC<Props> = ({ children }) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(0);

  const headerRef: any = useRef<HTMLElement>(null);

  const dispatch = useAppDispatch();

  const isOnline = useOnlineStatus();
  const hasWindow = useHasWindow();

  const currentPath = usePathname();

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideLoader());
      Aos.init({ duration: 500, once: true });
      window.scrollTo(0, 0);
      localStorage.removeItem("isApplicationSent");

      window.addEventListener("scroll", () => {
        setHeaderHeight(headerRef.current?.offsetHeight);

        if (window.scrollY > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      });
    }, 2000);
  }, [dispatch]);

  return (
    <div className={`next-layout ${MontserratFont.className}`}>
      <Loader />
      {isOnline && hasWindow && (
        <>
          <div style={{ flex: "1 0 auto" }}>
            <Header isSticky={isSticky} headerRef={headerRef} />
            <main
              style={{ zIndex: 99, paddingTop: isSticky ? headerHeight : 0 }}
            >
              {children}
            </main>
          </div>
          <Footer />
        </>
      )}

      {!isOnline && hasWindow && (
        <>
          <LostConnection />
        </>
      )}
    </div>
  );
};

export default Layout;