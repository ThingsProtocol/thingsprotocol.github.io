import OrbBackground from "@/components/OrbBackground";
import Link from "next/link";

export default function Home() {
  return (
    <OrbBackground hueRotationSpeed={0.5}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">Market Making for Everyone</h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto">
            Support your favorite crypto projects by providing liquidity and earn rewards. No technical expertise required.
          </p>
          
          <div className="flex gap-4 items-center flex-col sm:flex-row mt-6">
            <Link
              href="/about"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white gap-2 font-medium text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 sm:w-auto"
            >
              Learn More
            </Link>
            <Link
              href="/documentation"
              className="rounded-full border border-solid border-white/20 transition-colors flex items-center justify-center hover:bg-white/10 hover:border-transparent font-medium text-white text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto"
            >
              Documentation
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full">
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-xl border border-white/10">
              <div className="text-blue-400 text-4xl mb-4">01</div>
              <h3 className="text-xl font-semibold text-white mb-2">Simple Setup</h3>
              <p className="text-white/70">
                Get started in minutes with our user-friendly interface. No complex technical setup required.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-xl border border-white/10">
              <div className="text-blue-400 text-4xl mb-4">02</div>
              <h3 className="text-xl font-semibold text-white mb-2">Risk Management</h3>
              <p className="text-white/70">
                Advanced tools that help you manage your risk and maximize your returns.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-xl border border-white/10">
              <div className="text-blue-400 text-4xl mb-4">03</div>
              <h3 className="text-xl font-semibold text-white mb-2">Earn Rewards</h3>
              <p className="text-white/70">
                Generate income by providing liquidity to projects you believe in.
              </p>
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-white/70">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#"
          >
            About
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#"
          >
            Documentation
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#"
          >
            Contact
          </a>
        </footer>
      </div>
    </OrbBackground>
  );
}
