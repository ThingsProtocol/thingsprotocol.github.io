import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "About | MM Intelligence",
  description: "Learn about our platform that democratizes market making for everyone",
};

export default function AboutPage() {
  return (
    <PageLayout title="About Us">
      <h2 className="text-2xl font-semibold mb-4">What is Market Making?</h2>
      <p className="mb-6">
        Market making is the process of providing liquidity to financial markets by continuously offering to buy and sell assets. 
        Market makers help ensure there's always someone to trade with, reducing price volatility and improving market efficiency.
        Traditionally, this role has been limited to large financial institutions and professional traders with significant capital.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="mb-6">
        We're democratizing market making by creating a platform that allows anyone to become a market maker and provide liquidity
        to their favorite crypto projects. Our platform simplifies the complex strategies and technical requirements, making market
        making accessible to everyone, from individuals to small teams.
      </p>

      <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
      <p className="mb-6">
        Our platform provides easy-to-use tools that handle the technical aspects of market making, including order placement, 
        risk management, and inventory balancing. You can set your preferred risk parameters, contribute the assets you want 
        to provide as liquidity, and our platform does the rest. Earn fees and support projects you believe in, all without
        needing to be a financial expert.
      </p>
    </PageLayout>
  );
} 