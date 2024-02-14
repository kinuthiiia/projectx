import localFont from "@next/font/local";

const canterbury = localFont({
  src: "../public/fonts/Canterbury.ttf",
  display: "swap",
});

export default function Home() {
  return (
    <div>
      <img src="/bg.jpg" className="object-cover relative w-full h-screen" />
      <div className="absolute top-[50%] translate-y-[-50%] mx-12">
        <p
          className={`${canterbury.className} text-black text-[3.5rem] font-[] font-bold tracking-tight`}
        >
          Tasha,
        </p>
        <br />

        <p className="text-slate-600 font-medium tracking-tight text-[1.2rem] space-y-4  ">
          <span className="block">
            Beautiful girls like you don&apos;t fall from the sky. You are
            special.
          </span>

          <span className="block">
            You are from my rib, my strength and weakness, my moon in my
            starless dark night, my LOVE.
          </span>
          <span className="block"> I love you.</span>
        </p>
        <br />
        <p className="text-[1.2rem] font-semibold text-black">-Kinut❤️</p>
      </div>
    </div>
  );
}
