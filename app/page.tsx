import Image from "next/image";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <>
      {/* <NavigationBar /> */}
      <Header />
      <AboutSection />
    </>
  );
}
