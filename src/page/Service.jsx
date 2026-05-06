import Footer from "../components/footer";




function Service() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#FFE6D2]">
        <div className="max-w-[1280px] mx-auto px-6 py-24 grid grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[4px] text-sm font-semibold text-[#232536] mb-5">
              Our Services
            </p>

            <h1 className="text-[#232536] text-[48px] leading-[58px] font-bold max-w-[620px]">
              We Build Software Solutionthat Solve Clients Business Challenges
            </h1>

            <p className="text-[#232536]/60 text-sm leading-7 mt-6 max-w-[620px]">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.
            </p>

            <button className="mt-8 bg-[#444CFC] text-white px-8 py-4 font-semibold">
              Request A Quote ⟶
            </button>
          </div>

          <div className="pl-20">
            <ul className="space-y-6 text-[#232536] text-2xl font-bold">
              <li>Technical support</li>
              <li>Development ⟶</li>
              <li>AWS/Azure</li>
              <li>Consulting</li>
              <li>Information Technology</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F9F9FF] py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="uppercase tracking-[4px] text-sm font-semibold text-[#232536] mb-5">
            Our Process
          </p>

          <h2 className="text-[42px] leading-[52px] font-bold text-[#232536] max-w-[700px]">
            The process we are working With Our client Worldwide
          </h2>

          <p className="text-[#232536]/60 text-sm leading-7 mt-6 max-w-[620px]">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable.
          </p>

          <div className="grid grid-cols-3 gap-8 mt-16">
            {/* CARD 1 */}
            <div className="bg-white border border-[#E5E5E5] p-8 relative">
              <span className="absolute right-6 top-6 text-2xl font-bold text-[#232536]/20">
                01
              </span>

              <h3 className="text-lg font-bold text-[#232536] mb-4">
                Discover
              </h3>

              <p className="text-sm leading-6 text-[#232536]/60">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </p>

              <div className="absolute bottom-0 left-0 flex w-full">
                <div className="h-1 w-1/3 bg-[#FFA155]"></div>
                <div className="h-1 w-1/3 bg-[#FFD3AF]"></div>
                <div className="h-1 w-1/3 bg-[#444CFC]"></div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white border border-[#E5E5E5] p-8 relative">
              <span className="absolute right-6 top-6 text-2xl font-bold text-[#232536]/20">
                02
              </span>

              <h3 className="text-lg font-bold text-[#232536] mb-4">
                Designing
              </h3>

              <p className="text-sm leading-6 text-[#232536]/60">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white border border-[#E5E5E5] p-8 relative">
              <span className="absolute right-6 top-6 text-2xl font-bold text-[#232536]/20">
                03
              </span>

              <h3 className="text-lg font-bold text-[#232536] mb-4">
                Development
              </h3>

              <p className="text-sm leading-6 text-[#232536]/60">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </p>

              <div className="absolute bottom-0 left-0 flex w-full">
                <div className="h-1 w-1/3 bg-[#FFA155]"></div>
                <div className="h-1 w-1/3 bg-[#FFD3AF]"></div>
                <div className="h-1 w-1/3 bg-[#444CFC]"></div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="bg-white border border-[#E5E5E5] p-8 relative">
              <span className="absolute right-6 top-6 text-2xl font-bold text-[#232536]/20">
                04
              </span>

              <h3 className="text-lg font-bold text-[#232536] mb-4">
                Testing
              </h3>

              <p className="text-sm leading-6 text-[#232536]/60">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </p>
            </div>

            {/* CARD 5 */}
            <div className="bg-white border border-[#E5E5E5] p-8 relative">
              <span className="absolute right-6 top-6 text-2xl font-bold text-[#232536]/20">
                05
              </span>

              <h3 className="text-lg font-bold text-[#232536] mb-4">
                Deployment
              </h3>

              <p className="text-sm leading-6 text-[#232536]/60">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
              </p>
            </div>

            {/* CARD 6 */}
            <div className="bg-white border border-[#E5E5E5] p-8 relative">
              <span className="absolute right-6 top-6 text-2xl font-bold text-[#232536]/20">
                06
              </span>

              <h3 className="text-lg font-bold text-[#232536] mb-4">
                Maintenance
              </h3>

              <p className="text-sm leading-6 text-[#232536]/60">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent.
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

      {/* SUPPORT */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm font-semibold text-[#232536] mb-5">
              Technical Support
            </p>

            <h2 className="text-[40px] leading-[54px] font-bold text-[#232536] max-w-[620px]">
              Best in class tech support for your company. We become your tech
              backbone
            </h2>

            <p className="text-[#232536]/60 text-sm leading-7 mt-6 max-w-[620px]">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic saw his
              giving Remain expense you position concluded.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>
      {/* AWS */}
<section className="py-24">
  <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 gap-20 items-center">
    <div>
      <p className="text-sm font-semibold text-[#232536] mb-5">AWS/Azure</p>

      <h2 className="text-[32px] leading-[44px] font-bold text-[#232536] max-w-[560px]">
        We help you deploy, manage and secure your application on leading web
        services
      </h2>

      <p className="text-[#232536]/60 text-sm leading-7 mt-6 max-w-[620px]">
        Through True Rich Attended does no end it his mother since real had half
        every him case in packages enquire we up ecstatic unsatiable saw his
        giving Remain expense you position concluded.
      </p>
    </div>

    <img
      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
      alt=""
      className="w-full h-[420px] object-cover"
    />
  </div>
</section>

{/* CONSULTING */}
<section className="bg-[#F9F9FF] py-24">
  <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 gap-20 items-center">
    <img
      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
      alt=""
      className="w-full h-[420px] object-cover"
    />

    <div>
      <p className="text-sm font-semibold text-[#232536] mb-5">Consulting</p>

      <h2 className="text-[32px] leading-[44px] font-bold text-[#232536] max-w-[560px]">
        Get advice from world class professionals
      </h2>

      <p className="text-[#232536]/60 text-sm leading-7 mt-6 max-w-[620px]">
        Through True Rich Attended does no end it his mother since real had half
        every him case in packages enquire we up ecstatic unsatiable saw his
        giving Remain expense you position concluded.
      </p>
    </div>
  </div>
</section>

{/* INFORMATION TECHNOLOGY */}
<section className="py-24">
  <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 gap-20 items-center">
    <div>
      <p className="text-sm font-semibold text-[#232536] mb-5">
        Information Technology
      </p>

      <h2 className="text-[32px] leading-[44px] font-bold text-[#232536] max-w-[560px]">
        We want to get local identification in every corner of the world in this
        era of global citizenship.
      </h2>

      <p className="text-[#232536]/60 text-sm leading-7 mt-6 max-w-[620px]">
        Through True Rich Attended does no end it his mother since real had half
        every him case in packages enquire we up ecstatic unsatiable saw his
        giving Remain expense you position concluded.
      </p>
    </div>

    <img
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
      alt=""
      className="w-full h-[420px] object-cover"
    />
  </div>
</section>
    </main>
  );
}

export default Service;