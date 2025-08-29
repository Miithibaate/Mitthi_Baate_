export const metadata = {
  title: "Mitthi Baate",
  description: "Homemade Chocolates | Pure Veg | Premium Quality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
