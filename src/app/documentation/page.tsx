import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const metadata = {
  title: "Documentation | MM Intelligence",
  description: "Documentation and guides for our MM Intelligence",
};

export default function DocumentationPage() {
  return (
    <PageLayout title="Documentation">
      <div className="mb-8">
        <p className="mb-6">
          Our comprehensive documentation provides all the information you need to get started with market making
          on our platform. Whether you're a complete beginner or an experienced trader, you'll find guides, tutorials,
          and technical documentation to help you succeed.
        </p>
        
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Full Documentation</h2>
          <p className="mb-4">
            Our complete documentation is hosted on Notion for easy navigation and regular updates.
            Click the button below to access our documentation portal.
          </p>
          
          <a 
            href="https://detrip.notion.site/Document-1ded3f40254480678b36c8b479387ec9?pvs=4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            View Full Documentation →
          </a>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Quick Start Guides</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-medium mb-2">Setting Up Your Account</h3>
            <p className="mb-3 text-gray-300">Learn how to create and configure your market making account.</p>
            <Link href="/documentation#account-setup" className="text-blue-400 hover:text-blue-300">
              Read guide →
            </Link>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-medium mb-2">Market Making Strategies</h3>
            <p className="mb-3 text-gray-300">Understand different market making strategies and which one is right for you.</p>
            <Link href="/documentation#strategies" className="text-blue-400 hover:text-blue-300">
              Read guide →
            </Link>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-medium mb-2">Managing Risk</h3>
            <p className="mb-3 text-gray-300">Learn essential risk management techniques for successful market making.</p>
            <Link href="/documentation#risk-management" className="text-blue-400 hover:text-blue-300">
              Read guide →
            </Link>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-medium mb-2">Advanced Features</h3>
            <p className="mb-3 text-gray-300">Explore advanced tools and features to optimize your market making.</p>
            <Link href="/documentation#advanced" className="text-blue-400 hover:text-blue-300">
              Read guide →
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 