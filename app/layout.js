import "./globals.css";

import Navbar from "./components/Navbar";

export const metadata = {
  title: "HexxanaSu",
  description: "Pagan rock band with a taste of folk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
