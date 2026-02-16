import { HeroSection } from "@/components/hero-section"
import { WhatsIncludedSection } from "@/components/whats-included-section"
import { RemoteWorkSection } from "@/components/remote-work-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ProcessSection } from "@/components/process-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { SiteFooter } from "@/components/site-footer"
import { StickyBottomBar } from "@/components/sticky-bottom-bar"

export default function Page() {
  return (
    <>
      <main className="pb-14">
        <HeroSection />
        <WhatsIncludedSection />
        <RemoteWorkSection />
        <PortfolioSection />
        <ProcessSection />
        <ContactFormSection />
        <SiteFooter />
      </main>
      <StickyBottomBar />
    </>
  )
}
