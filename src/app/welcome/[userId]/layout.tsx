import { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";

export default async function WelcomeLayout({
  children,
}: PropsWithChildren<{ params: Promise<{ userId: string }> }>) {
  return (
    <div className="w-full h-72 border-2 rounded flex bg-white">
      <div className="h-full w-[550px] relative">
        <Image
          src={"/img.png"}
          alt="A nice cat"
          fill
          className="border-2 rounded"
        />
      </div>
      <div className="flex flex-col p-4 h-full w-full justify-between">
        {children}
        <div className="flex w-full h-fit gap-4">
          <Link
            href=""
            className="w-full text-center border-2 border-green-700 text-white bg-green-700 rounded p-1"
          >
            SEE DETAILS
          </Link>
          <Link
            href=""
            className="w-full text-center border-2 border-green-700 text-green-700 rounded p-1"
          >
            EXIT DELIVERY
          </Link>
        </div>
      </div>
    </div>
  );
}
