import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import enMessages from "../../messages/en.json";
import ptBRMessages from "../../messages/pt-BR.json";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Portifólio 2026",
	description: "Portifólio pessoal",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
				<LocaleProvider ptBRMessages={ptBRMessages} enMessages={enMessages}>
					{children}
				</LocaleProvider>
			</body>
		</html>
	);
}
