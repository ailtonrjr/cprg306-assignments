import "./globals.css";

/* This is the title of the website*/
export const metadata = {
  title: "Web Development 2 - Assignments",
  description: "Web Development 2 - Assignments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
