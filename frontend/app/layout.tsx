import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<div>Logo</div>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;