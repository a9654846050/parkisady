import { HeroSection } from "@/components/hero-section"
import { WhyUsSection } from "@/components/why-us-section"
import { WhatsIncludedSection } from "@/components/whats-included-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ProcessSection } from "@/components/process-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <WhyUsSection />
      <WhatsIncludedSection />
      <PortfolioSection />
      <ProcessSection />
      <ContactFormSection />
      <SiteFooter />
    </main>
  )
}
