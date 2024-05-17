import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Tienda',
  description: 'Description',
  keywords: ['Next', 'store'],
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
