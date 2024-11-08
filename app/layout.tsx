"use client";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import SidebarNav from "@/components/SidebarNav";
import { HiOutlineSearch } from "react-icons/hi";

interface UserData {
  name: string;
  last_name: string;
  email: string;
  avatar?: string;
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-[#f9f9f9] ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
        <div className="bg-white fixed top-0 left-0 w-full flex py-4 border-b border-gray-200 z-10">
          <div className="grid grid-cols-12 items-center flex px-10 w-[1200px] mx-auto">
            <Link href="/" className="col-span-3 block">
              <img src="/logo.png" className="w-[150px]" alt="Logo" />
            </Link>
            <div className="col-span-7">
              <div className="w-[300px] relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500">
                    <HiOutlineSearch />
                  </span>
                </div>
                <input
                  id="search"
                  name="search"
                  type="text"
                  placeholder="Поиск по сайту"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="col-span-2">
              {userData ? (
                <a
                  href={`/user/${userData.id}`}
                  className="flex items-center gap-x-3"
                >
                  <img
                    src={userData.avatar || "/default.png"}
                    className="w-[40px] h-[40px] rounded-full object-contain"
                    alt={`${userData.name} ${userData.last_name}`}
                  />
                  <div>
                    <div>{`${userData.name} ${userData.last_name}`}</div>
                    <div className="text-gray-500 text-sm">
                      @{userData.email.split("@")[0]}
                    </div>
                  </div>
                </a>
              ) : (
                <Link
                  href="/register"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Создать аккаунт
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-[90px] w-[1200px] mx-auto">
          <div className="col-span-3 sticky top-[80px] space-y-2 px-5 h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide">
            <SidebarNav />
          </div>
          <div className="col-span-9 overflow-y-auto max-h-[calc(100vh-80px)] scrollbar-hide">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
