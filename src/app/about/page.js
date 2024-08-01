import AboutCoverSection from "@/components/About/AboutCoverSection";
import Skills from "@/components/About/Skills";
import Link from "next/link";

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="m-8 font-semibold text-2xl self-start mx-20 text-dark">
        Have any suggestions? Please reach out to our team{" "}
        <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>
        !
      </h2>
    </>
  );
}
