import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WelcomeModal } from "./WelcomeModal";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <WelcomeModal />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
