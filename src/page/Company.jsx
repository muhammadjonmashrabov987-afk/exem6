import { workers } from "../data/workers";
import { Link } from "react-router-dom";

function Company() {
  return (
    <main>
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex justify-between">
            <div>
              <div className="w-4 h-4 bg-[#FFD3AF] mb-8"></div>

              <p className="uppercase tracking-[4px] text-sm font-semibold text-[#232536] mb-5">
                Company
              </p>

              <h1 className="text-[48px] leading-[58px] font-bold text-[#232536] max-w-[650px]">
                Award-winning Company seen and used by millions around the
                world.
              </h1>

              <p className="text-[#232536]/60 text-sm leading-7 mt-6 max-w-[700px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Maker is a decentralized.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <div className="w-4 h-4 bg-[#FFD3AF]"></div>
              <div className="w-4 h-4 bg-[#FFA155]"></div>
              <div className="w-4 h-4 bg-[#444CFC]"></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-16">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full h-[300px] object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full h-[300px] object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full h-[300px] object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-20 mt-20 items-center">
            <div>
              <p className="text-sm font-semibold text-[#444CFC] mb-4">
                Our Story 👇
              </p>

              <h2 className="text-[32px] leading-[44px] font-bold text-[#232536] max-w-[500px]">
                From Startups to Titans of Industry
              </h2>

              <p className="text-[#232536]/60 text-sm leading-7 mt-6 max-w-[620px]">
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic unsatiable saw his giving Remain expense you
                position concluded.
              </p>
            </div>

            <div className="bg-[#FFE6D2] p-14 grid grid-cols-2 gap-10">
              <div>
                <h3 className="text-[32px] font-bold text-[#232536]">1560+</h3>
                <p className="text-sm font-semibold mt-2">Project Delivered</p>
              </div>

              <div>
                <h3 className="text-[32px] font-bold text-[#232536]">100+</h3>
                <p className="text-sm font-semibold mt-2">Professional</p>
              </div>

              <div>
                <h3 className="text-[32px] font-bold text-[#232536]">950+</h3>
                <p className="text-sm font-semibold mt-2">Happy Client</p>
              </div>

              <div>
                <h3 className="text-[32px] font-bold text-[#232536]">10 yrs</h3>
                <p className="text-sm font-semibold mt-2">Experience</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FAFAFC] mt-20 py-10 px-12 flex justify-between items-center">
            <p className="font-bold text-[#232536]">logoipsum</p>
            <p className="font-bold text-[#232536]">logoipsum</p>
            <p className="font-bold text-[#232536]">logoipsum</p>
            <p className="font-bold text-[#232536]">logoipsum</p>
            <p className="font-bold text-[#232536]">logoipsum</p>
          </div>
        </div>
      </section>
      {/* EXPERTISE */}
<section className="bg-[#ECF8F9] py-24 mt-20">
  <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 gap-20 items-center">
    <div>
      <p className="uppercase tracking-[4px] text-sm font-semibold text-[#232536] mb-5">
        Our Expertise
      </p>

      <h2 className="text-[42px] leading-[52px] font-bold text-[#232536] max-w-[650px]">
        We want to get local identification in every corner of the world in this
        era of global citizenship
      </h2>

      <p className="text-[#232536]/60 text-sm leading-7 mt-6 max-w-[620px]">
        Through True Rich Attended does no end it his mother since real had half
        every him case in packages enquire we up ecstatic unsatiable saw his
        giving Remain expense you position concluded.
      </p>
    </div>

    <div className="space-y-4">
      <div className="bg-white p-8">
        <h3 className="font-bold text-[#232536]">On Time Delivery</h3>
        <p className="text-sm leading-6 text-[#232536]/60 mt-3">
          Through True Rich Attended does no end it his mother since real had
          half every him.
        </p>
      </div>

      <div className="bg-white p-8">
        <h3 className="font-bold text-[#232536]">Best Quality</h3>
        <p className="text-sm leading-6 text-[#232536]/60 mt-3">
          Through True Rich Attended does no end it his mother since real had
          half every him.
        </p>
      </div>

      <div className="bg-white p-8 relative">
        <h3 className="font-bold text-[#232536]">Support Assist</h3>
        <p className="text-sm leading-6 text-[#232536]/60 mt-3">
          Through True Rich Attended does no end it his mother since real had
          half every him.
        </p>

        <div className="absolute bottom-0 left-0 flex w-full">
          <div className="h-1 w-1/3 bg-[#FFA155]"></div>
          <div className="h-1 w-1/3 bg-[#FFD3AF]"></div>
          <div className="h-1 w-1/3 bg-[#444CFC]"></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* VISION */}
<section className="py-24">
  <div className="max-w-[1280px] mx-auto px-6">
    <p className="uppercase tracking-[4px] text-sm font-semibold text-[#232536] mb-5">
      Our Vision
    </p>

    <h2 className="text-[36px] leading-[48px] font-bold text-[#232536] max-w-[750px]">
      We want to get local identification in every corner of the world in this
      era of global citizenship.
    </h2>

    <p className="text-[#232536]/60 text-sm leading-7 mt-6 max-w-[700px]">
      Through True Rich Attended does no end it his mother since real had half
      every him case in packages enquire we up ecstatic unsatiable saw his
      giving Remain expense you position concluded.
    </p>

    <img
      src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop"
      alt=""
      className="w-full h-[420px] object-cover mt-16"
    />
  </div>
</section>
{/* TEAM */}
<section className="py-24">
  <div className="max-w-[1280px] mx-auto px-6">
    <p className="uppercase tracking-[4px] text-sm font-semibold text-[#232536] mb-5">
      Meet Our Team
    </p>

    <h2 className="text-[42px] leading-[52px] font-bold text-[#232536] max-w-[650px]">
      Teamwork is the only way we work
    </h2>

    <p className="text-[#232536]/60 text-sm leading-7 mt-6 max-w-[620px]">
      Through True Rich Attended does no end it his mother since real had half
      every him case in packages enquire we up ecstatic unsatiable.
    </p>

    <div className="grid grid-cols-4 mt-16">
      {workers.map((worker) => (
        <Link
          to={`/team/${worker.id}`}
          key={worker.id}
          className="relative group h-[320px] overflow-hidden"
        >
          <img
            src={worker.image}
            alt={worker.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#232536]/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-8">
            <h3 className="text-white text-xl font-bold">{worker.name}</h3>
            <p className="text-white/70 mt-2">{worker.job}</p>

            <div className="flex gap-4 text-white mt-5">
              <span>f</span>
              <span>t</span>
              <span>in</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}

export default Company;