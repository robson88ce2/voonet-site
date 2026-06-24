import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "VOONET Telecom",
  description: "Internet fibra óptica de alta velocidade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-black">

        <Navbar />

        {children}

      </body>
    </html>
  );
}