import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="rounded-lg p-4 bg-white ">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={200}
          height={200}
        />
        <h1 className="text-2xl">Em Construção...</h1>
      </div>
    </div>
  );
}
