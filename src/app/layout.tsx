import './globals.css';
import Navbar from '../components/organisms/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=SN+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
      </head>
      <body className="grain-overlay">
        <Navbar />
        {children}
      </body>
    </html>
  );
}