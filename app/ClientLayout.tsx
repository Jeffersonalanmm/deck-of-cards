// ClientLayout.tsx
"use client";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import styled from "styled-components"; // Importe styled-components

const LayoutSection = styled.section`
  display: flex;
  flex-direction: column; // Garante que Header, Main e Footer fiquem em coluna
  min-height: 100vh; // Define altura mínima para ocupar toda a tela
`;

const Main = styled.main`
  flex: 1; // Expande o Main para preencher o espaço disponível
  /* Outros estilos para o Main, como padding ou background */
`;

import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LayoutSection>
      <Provider store={store}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Provider>
    </LayoutSection>
  );
}
