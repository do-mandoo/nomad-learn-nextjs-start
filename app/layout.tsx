import SalesLayout from './about-us/company/jobs/sales/layout';
import Sales from './about-us/company/jobs/sales/page';
import AboutUsLayout from './about-us/layout';
import Navigation from './about-us/company/navigation';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Next Movies',
  },
  description: 'The best movies on the best framework',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
