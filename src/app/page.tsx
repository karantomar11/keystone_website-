import Header from '@/components/layout/header';
import HeroSection from '@/components/landing/hero-section';
import ProblemSolutionSection from '@/components/landing/problem-solution-section';
import FeatureGrid from '@/components/landing/feature-grid';
import TrustBanner from '@/components/landing/trust-banner';
import Footer from '@/components/layout/footer';
import AuditTimeline from '@/components/landing/audit-timeline';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSolutionSection />
        <FeatureGrid />
        <section className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">
              <span className="text-primary">[100% Transparent]</span>. No Black
              Boxes. Total Explainability.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Every redaction is forensically logged, hashed, and tracked. You
              know exactly what sensitive data was captured, which policy
              triggered it, and when it was mathematically restored. Your
              compliance team will love this.
            </p>
          </div>
          <AuditTimeline />
        </section>
        <TrustBanner />
      </main>
      <Footer />
    </div>
  );
}
