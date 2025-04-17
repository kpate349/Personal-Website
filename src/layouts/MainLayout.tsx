
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedPage } from "@/components/AnimatedPage";
import { ThemeProvider } from "@/context/ThemeContext";

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <AnimatedPage>
          <main className="flex-1">
            {children}
          </main>
        </AnimatedPage>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
