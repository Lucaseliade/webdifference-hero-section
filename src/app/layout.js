// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Agence Web - Créer un site web vraiment unique",
  description: "Expertise en design moderne, SEO solide et suivi complet pour construire un site qui retient vos visiteurs et apporte des résultats.",
  keywords: ["création site web", "SEO", "design moderne", "Web Difference"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased w-full h-screen">
        {children}
      </body>
    </html>
  );
}
