import { Hero } from "@/components/home/Hero";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { AISolutionsSection } from "@/components/home/AISolutionsSection";
import { AutomationSection } from "@/components/home/AutomationSection";
import { SaaSSection } from "@/components/home/SaaSSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <AISolutionsSection />
      <AutomationSection />
      <SaaSSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <WhyUsSection />
      <FinalCTA />
    </>
  );
}