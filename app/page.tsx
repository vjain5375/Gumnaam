import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import FeaturedPeople from "@/components/home/FeaturedPeople";
import DepartmentExplorer from "@/components/home/DepartmentExplorer";
import ClosingStatement from "@/components/home/ClosingStatement";
import { departments, getFeaturedPeople } from "@/lib/data";

export default function Home() {
  const featured = getFeaturedPeople();

  return (
    <>
      <Hero />
      <Intro />
      <FeaturedPeople people={featured} />
      <DepartmentExplorer departments={departments} />
      <ClosingStatement />
    </>
  );
}
