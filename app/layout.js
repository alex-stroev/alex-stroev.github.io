import "./globals.scss";

//
import { Arimo } from "next/font/google";
const ff = Arimo({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="ru-RU">
            <body className={ff.className}>{children}</body>
        </html>
    );
}
