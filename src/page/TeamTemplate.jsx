import { useParams } from "react-router-dom";
import { workers } from "../data/workers";

function TeamTemplate() {
  const { id } = useParams();
  const worker = workers.find((item) => item.id === Number(id));

  if (!worker) {
    return <h1 className="text-center py-20 text-3xl">Worker topilmadi</h1>;
  }

  return (
    <main>
      <section className="py-24 text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <img
            src={worker.image}
            alt={worker.name}
            className="w-[180px] h-[180px] rounded-full object-cover mx-auto"
          />

          <h1 className="text-[28px] font-bold text-[#232536] mt-8">
            {worker.name}
          </h1>

          <p className="text-sm text-[#232536]/70 mt-2">{worker.job}</p>

          <p className="text-sm leading-6 text-[#232536]/60 mt-6 max-w-[430px] mx-auto">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable.
          </p>

          <div className="flex justify-center gap-5 mt-6 text-[#232536] text-sm">
            <span>f</span>
            <span>t</span>
            <span>in</span>
          </div>
        </div>
      </section>

      <section className="bg-[#ECF8F9] py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="w-3 h-3 bg-[#444CFC] mb-8"></div>

          <h2 className="text-[32px] font-bold text-[#232536] mb-12">
            Blog posts from {worker.name.split(" ")[0]}
          </h2>

          <div className="grid grid-cols-2 gap-10">
            <div className="bg-white flex">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
                alt=""
                className="w-[230px] h-[180px] object-cover"
              />

              <div className="p-8">
                <p className="text-xs text-[#232536]/50 mb-3">Jan 19, 2021</p>

                <h3 className="text-xl font-bold text-[#232536] leading-8">
                  Today’s best design trends for digital products
                </h3>

                <p className="text-[#444CFC] font-semibold mt-5">
                  Read More ⟶
                </p>
              </div>
            </div>

            <div className="bg-white flex">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
                alt=""
                className="w-[230px] h-[180px] object-cover"
              />

              <div className="p-8">
                <p className="text-xs text-[#232536]/50 mb-3">Jan 19, 2021</p>

                <h3 className="text-xl font-bold text-[#232536] leading-8">
                  A practical guide to building a brand strategy
                </h3>

                <p className="text-[#444CFC] font-semibold mt-5">
                  Read More ⟶
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TeamTemplate;