"use client";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container flex flex-col min-h-screen">
      <Provider store={store}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Provider>
    </section>
  );
}
