"use client";

interface PageLayoutProps {
  children?: React.ReactNode;
  title: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
} 