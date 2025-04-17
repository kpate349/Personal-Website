
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type AnimatedPageProps = {
  children: React.ReactNode;
};

export function AnimatedPage({ children }: AnimatedPageProps) {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      key={pathname}
      className="min-h-screen animate-fade-in"
    >
      {children}
    </div>
  );
}
