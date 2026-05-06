function Blog() {
  return (
    <main>
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 gap-20">
          <div>
            <div className="w-4 h-4 bg-[#FFD3AF] mb-8"></div>

            <p className="uppercase tracking-[4px] text-sm font-semibold text-[#232536] mb-5">
              Trending
            </p>

            <h1 className="text-[48px] leading-[58px] font-bold text-[#232536] max-w-[650px]">
              Breaking the code How did we build our Figma plugin
            </h1>

            <p className="text-[#232536]/60 text-sm leading-7 mt-6 max-w-[650px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized.
            </p>

            <button className="text-[#444CFC] font-semibold mt-6">
              Read More ⟶
            </button>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-10 h-10 rounded-full bg-[#FFD3AF]"></div>
              <p className="text-sm text-[#232536]">
                Andrew Jonson <span className="mx-3">|</span> Posted on 27th
                January 2021
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full h-[320px] object-cover mt-10"
            />
          </div>

          <div className="bg-[#FFE6D2] p-10 relative">
            <div className="absolute right-0 top-0 flex">
              <div className="w-4 h-4 bg-[#FFA155]"></div>
              <div className="w-4 h-4 bg-[#FFD3AF]"></div>
              <div className="w-4 h-4 bg-[#444CFC]"></div>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold text-[#232536] leading-8">
                  Great design expectations prejudice in digital products in
                  Next Year
                </h3>
                <p className="text-sm text-[#232536]/60 mt-4">
                  Andrew Jonson <br /> Jan 19, 2021
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#232536] leading-8">
                  Great design expectations prejudice in digital products in
                  Next Year
                </h3>
                <p className="text-sm text-[#232536]/60 mt-4">
                  Mathew Jonson <br /> Jan 19, 2021
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#232536] leading-8">
                  Great design expectations prejudice in digital products in
                  Next Year
                </h3>
                <p className="text-sm text-[#232536]/60 mt-4">
                  Joshep Andrew <br /> Jan 19, 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
  <div className="max-w-[1280px] mx-auto px-6">
    <h2 className="text-[32px] font-bold text-[#232536] mb-12">
      Read Recent Post
    </h2>

    <div className="grid grid-cols-2 gap-8">
      <div className="bg-[#F9F9FF] flex">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop"
          className="w-[240px] h-[170px] object-cover"
        />
        <div className="p-6">
          <h3 className="font-bold text-[#232536]">
            Today’s best design trends for digital products
          </h3>
          <p className="text-sm text-[#232536]/60 mt-5">
            Andrew Jonson <br /> Jan 19, 2021
          </p>
        </div>
      </div>

      <div className="bg-[#F9F9FF] flex">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop"
          className="w-[240px] h-[170px] object-cover"
        />
        <div className="p-6">
          <h3 className="font-bold text-[#232536]">
            Today’s best design trends for digital products
          </h3>
          <p className="text-sm text-[#232536]/60 mt-5">
            Andrew Jonson <br /> Jan 19, 2021
          </p>
        </div>
      </div>

      <div className="bg-[#F9F9FF] flex">
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
          className="w-[240px] h-[170px] object-cover"
        />
        <div className="p-6">
          <h3 className="font-bold text-[#232536]">
            Today’s best design trends for digital products
          </h3>
          <p className="text-sm text-[#232536]/60 mt-5">
            Andrew Jonson <br /> Jan 19, 2021
          </p>
        </div>
      </div>

      <div className="bg-[#F9F9FF] flex">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
          className="w-[240px] h-[170px] object-cover"
        />
        <div className="p-6">
          <h3 className="font-bold text-[#232536]">
            Today’s best design trends for digital products
          </h3>
          <p className="text-sm text-[#232536]/60 mt-5">
            Andrew Jonson <br /> Jan 19, 2021
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-[#F9F9FF] py-20">
  <div className="max-w-[1280px] mx-auto px-6">
    <h2 className="text-[32px] font-bold text-[#232536] mb-12">
      All posts
    </h2>

    <div className="grid grid-cols-3 gap-8">
      <div className="bg-white">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
          className="w-full h-[230px] object-cover"
        />
        <div className="p-8">
          <h3 className="text-xl font-bold text-[#232536]">
            We aim to attain the greatest satisfaction for our clients
          </h3>
          <p className="text-sm text-[#232536]/60 mt-4">
            It is a long established fact that a reader will be distracted.
          </p>
          <p className="text-sm text-[#232536]/60 mt-6">
            Andrew Jonson <br /> Jan 19, 2021
          </p>
        </div>
      </div>

      <div className="bg-white">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop"
          className="w-full h-[230px] object-cover"
        />
        <div className="p-8">
          <h3 className="text-xl font-bold text-[#232536]">
            We aim to attain the greatest satisfaction for our clients
          </h3>
          <p className="text-sm text-[#232536]/60 mt-4">
            It is a long established fact that a reader will be distracted.
          </p>
          <p className="text-sm text-[#232536]/60 mt-6">
            Andrew Jonson <br /> Jan 19, 2021
          </p>
        </div>
      </div>

      <div className="bg-white">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
          className="w-full h-[230px] object-cover"
        />
        <div className="p-8">
          <h3 className="text-xl font-bold text-[#232536]">
            We aim to attain the greatest satisfaction for our clients
          </h3>
          <p className="text-sm text-[#232536]/60 mt-4">
            It is a long established fact that a reader will be distracted.
          </p>
          <p className="text-sm text-[#232536]/60 mt-6">
            Andrew Jonson <br /> Jan 19, 2021
          </p>
        </div>
      </div>
      <div className="bg-white">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
          className="w-full h-[230px] object-cover"
        />
        <div className="p-8">
          <h3 className="text-xl font-bold text-[#232536]">
            We aim to attain the greatest satisfaction for our clients
          </h3>
          <p className="text-sm text-[#232536]/60 mt-4">
            It is a long established fact that a reader will be distracted.
          </p>
          <p className="text-sm text-[#232536]/60 mt-6">
            Andrew Jonson <br /> Jan 19, 2021
          </p>
        </div>
      </div>
      <div className="bg-white">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
          className="w-full h-[230px] object-cover"
        />
        <div className="p-8">
          <h3 className="text-xl font-bold text-[#232536]">
            We aim to attain the greatest satisfaction for our clients
          </h3>
          <p className="text-sm text-[#232536]/60 mt-4">
            It is a long established fact that a reader will be distracted.
          </p>
          <p className="text-sm text-[#232536]/60 mt-6">
            Andrew Jonson <br /> Jan 19, 2021
          </p>
        </div>
      </div>
      <div className="bg-white">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
          className="w-full h-[230px] object-cover"
        />
        <div className="p-8">
          <h3 className="text-xl font-bold text-[#232536]">
            We aim to attain the greatest satisfaction for our clients
          </h3>
          <p className="text-sm text-[#232536]/60 mt-4">
            It is a long established fact that a reader will be distracted.
          </p>
          <p className="text-sm text-[#232536]/60 mt-6">
            Andrew Jonson <br /> Jan 19, 2021
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}

export default Blog;