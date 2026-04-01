"use client";

import { NextIntlClientProvider } from "next-intl";
import { createContext, useContext, useState } from "react";

type Locale = "pt-BR" | "en";

type LocaleContextType = {
	locale: Locale;
	toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextType>({
	locale: "pt-BR",
	toggleLocale: () => {},
});

export function useLocaleToggle() {
	return useContext(LocaleContext);
}

type Messages = Record<string, unknown>;

export function LocaleProvider({
	children,
	ptBRMessages,
	enMessages,
}: {
	children: React.ReactNode;
	ptBRMessages: Messages;
	enMessages: Messages;
}) {
	const [locale, setLocale] = useState<Locale>("pt-BR");

	const toggleLocale = () => {
		setLocale((prev) => (prev === "pt-BR" ? "en" : "pt-BR"));
	};

	const messages = locale === "pt-BR" ? ptBRMessages : enMessages;

	return (
		<LocaleContext.Provider value={{ locale, toggleLocale }}>
			<NextIntlClientProvider locale={locale} messages={messages}>
				{children}
			</NextIntlClientProvider>
		</LocaleContext.Provider>
	);
}
