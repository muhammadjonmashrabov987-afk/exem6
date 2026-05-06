import Hero from "./components/hero.jsx";

function Hero() {
  return (
    <section className="relative pt-[70px] pb-[45px]">
      <div className="w-[18px] h-[18px] bg-[#ffd3af] mb-[18px]"></div>

      <div className="absolute top-[68px] right-[120px] w-[42px] h-[42px]">
        <span className="absolute w-[14px] h-[14px] bg-[#666dff] right-0 bottom-0"></span>

        <span className="absolute w-[18px] h-[18px] bg-[#ffa155] right-0 top-0"></span>

        <span className="absolute w-[14px] h-[14px] bg-[#ffd3af] right-[18px] top-0"></span>
      </div>

      <p className="text-[12px] tracking-[3px] text-[#232536] font-semibold mb-4">
        COMPANY
      </p>

      <h1 className="text-[48px] leading-[56px] max-w-[650px] text-[#232536] font-bold mb-6">
        Award-winning Company <br />
        seen and used by millions <br />
        around the world.
      </h1>
      

      <p className="text-[14px] leading-[22px] max-w-[720px] text-[#5d5f6d]">
        It is a long established fact that a reader will be distracted by the
        readable content of a <br />
        page when looking at its layout. The Maker is a decentralized.
      </p>
    </section>
  );
}

export default function App() {
  return (
    <main className="max-w-[1180px] mx-auto">
      <Hero />
    </main>
  );
}