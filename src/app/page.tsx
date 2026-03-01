import Header from '@/components/layout/header';
import HeroSection from '@/components/landing/hero-section';
import ProblemSolutionSection from '@/components/landing/problem-solution-section';
import FeatureGrid from '@/components/landing/feature-grid';
import TrustBanner from '@/components/landing/trust-banner';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSolutionSection />
        <FeatureGrid />
        <TrustBanner />
      </main>
      <Footer />
    </div>
  );
}
