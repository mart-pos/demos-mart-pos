import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1>
        <Image
          src="/logo-ligth.svg"
          alt="Logo"
          width={150}
          height={50}
          className="mx-auto invert dark:invert-0 my-4"
        />
        Demos of Mart POS
      </h1>
      <p className="text-center">
        This is a demo of the Mart POS system, showcasing various features and
        functionalities.
      </p>
      <div className="mt-6 space-x-4">
        <Link href="/dashboard" className="text-blue-500 hover:underline">
          Dashboard
        </Link>
        <Link href="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}
