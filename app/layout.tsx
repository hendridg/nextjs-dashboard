import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import CustomNav from '@/app/ui/custom-nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* <CustomNav /> */}
        {children}
      </body>
    </html>
  );
}
