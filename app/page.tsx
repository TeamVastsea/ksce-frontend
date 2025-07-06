import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { ActivityDetailsSection } from "@/components/ActivityDetailsSection"
import { GameRulesSection } from "@/components/GameRulesSection"
import { ServerInfoSection } from "@/components/ServerInfoSection"
import { TeamsSection } from "@/components/TeamsSection"
import { AccountBindingSection } from "@/components/AccountBindingSection"
import { ImageGallerySection } from "@/components/ImageGallerySection"
import { SafetyRulesSection } from "@/components/SafetyRulesSection"
import { Footer } from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      <HeroSection />
      <ActivityDetailsSection />
      <GameRulesSection />
      <ServerInfoSection />
      <TeamsSection />
      <AccountBindingSection />
      <ImageGallerySection />
      <SafetyRulesSection />
      <Footer />
    </div>
  )
}
