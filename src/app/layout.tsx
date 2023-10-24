import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Heart from "@/components/icons/heart";
import Link from "next/link";
import cloudinary from "cloudinary";
import { Folder } from "./albums/page";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photo Album",
  description: "Photo Album",
};
async function SideMenu() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };

  return (
    <div className="pb-12 w-1/5">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2"
            >
              <Link href={"/gallery"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                Gallery
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2"
            >
              <Link href={"/albums"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
                Albums
              </Link>
            </Button>
            {folders.map((folder) => (
              <Button
                variant={"ghost"}
                asChild
                key={folder.name}
                className="w-full justify-start flex gap-2"
              >
                <Link className="pl-14" href={`/albums/${folder.path}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909.47.47a.75.75 0 11-1.06 1.06L6.53 8.091a.75.75 0 00-1.06 0l-2.97 2.97zM12 7a1 1 0 11-2 0 1 1 0 012 0z"
                      clipRule="evenodd"
                    />
                  </svg>

                  {folder.name}
                </Link>
              </Button>
            ))}
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start flex gap-2"
            >
              <Link href={"/favorite"}>
                <Heart />
                Favorites
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="border-b">
          <div className="flex h-16 items-center px-4 py-2">
            <Image
              className="rounded-full"
              src="/logo-photo.jpeg"
              width="50"
              height="50"
              alt="Photo"
            />
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  width="50"
                  height="50"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex">
          <SideMenu />
          <div className="w-full px-4 pt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
