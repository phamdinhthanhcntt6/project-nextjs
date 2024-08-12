import Banner from "@/component/Banner";
import Content from "../component/Content";
import Header from "../component/Header";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
}
