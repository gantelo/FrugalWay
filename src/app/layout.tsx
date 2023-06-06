import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const DynamicHeader = dynamic(() => import('../components/header/Header'));

export const metadata = {
	title: 'The Frugal Way',
	description: 'The frugal way to groceries',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<>
					<DynamicHeader />
					{children}
				</>
			</body>
		</html>
	);
}
