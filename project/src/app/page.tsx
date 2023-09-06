import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8 bg-slate-50 text text-slate-900 h-screen flex felx-col items-center text-center">
      <div className="max-w-2xl">
        <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl flex items-center gap-3 before:w-0.5 before:h-8 before:bg-sky-500 before:flex">
          Hello Tailwind
        </h1>
        <h2>Hello World</h2>
        <p>Hello World</p>
        <button
          disabled
          className="bg-sky-500 px-2 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
