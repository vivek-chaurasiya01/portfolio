import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundGlow from '../components/common/BackgroundGlow';
import ToastProvider from '../components/ToastProvider';

export const metadata = {
  title: "Vivek Chaurasiya | MERN Stack Developer Portfolio",
  description: "Personal portfolio of Vivek Chaurasiya - Dedicated MERN Stack Developer with 1.5+ years of experience building high-scale web applications at Digicoders Private Limited.",
  keywords: ["Vivek Chaurasiya", "MERN Stack Developer", "React Developer", "Node.js Developer", "Full Stack Engineer", "Portfolio"],
  authors: [{ name: "Vivek Chaurasiya" }],
  openGraph: {
    title: "Vivek Chaurasiya | MERN Stack Developer Portfolio",
    description: "Explore 12 key sections: Flagship Projects, Experience, Skills, Certifications, and Services.",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Roboto:wght@100..900&family=Fira+Code:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 selection:bg-emerald-600 selection:text-white overflow-x-hidden font-sans relative flex flex-col justify-between">
        <BackgroundGlow />
        <Navbar />
        <main className="relative z-10 flex-1 pt-20 sm:pt-24">
          {children}
        </main>
        <Footer />
        <ToastProvider />
      </body>
    </html>
  );
}
