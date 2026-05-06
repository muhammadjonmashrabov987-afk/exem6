import { Link } from "react-router-dom";
import { jobs } from "../data/jobs";

function Career() {
  return (
    <main>
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <p className="uppercase tracking-[4px] text-sm font-semibold text-[#232536] mb-5">
            Career at Finsweet
          </p>

          <h1 className="text-[48px] leading-[58px] font-bold text-[#232536] max-w-[700px] mx-auto">
            We hired people who are Always Passionate about what they do
          </h1>

          <p className="text-[#232536]/60 text-sm leading-7 mt-6 max-w-[620px] mx-auto">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable.
          </p>

          <h2 className="text-[140px] font-black text-[#232536] mt-10">
            Careers
          </h2>

          <p className="mt-5 text-[#232536]">
            See Our open positions 👇
          </p>

          <div className="bg-[#ECF8F9] p-10 grid grid-cols-3 gap-8 mt-20">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white p-8 text-left">
                <h3 className="text-xl font-bold text-[#232536]">
                  {job.title}
                </h3>

                <p className="text-sm text-[#232536]/70 mt-4">
                  {job.location}
                </p>

                <p className="text-sm text-[#232536]/70 mt-2">
                  {job.salary}
                </p>

                <Link
                  to={`/career/${job.id}`}
                  className="inline-block mt-8 text-[#444CFC] font-semibold"
                >
                  Apply Now ⟶
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F9F9FF] py-24">
  <div className="max-w-[1280px] mx-auto px-6">
    <p className="uppercase tracking-[4px] text-sm font-semibold text-[#232536] mb-5">
      Our Work & Culture
    </p>

    <h2 className="text-[40px] leading-[52px] font-bold text-[#232536] max-w-[620px]">
      Come and join a team of highly skilled professionals.
    </h2>

    <p className="text-[#232536]/60 text-sm leading-7 mt-6 max-w-[650px]">
      Through True Rich Attended does no end it his mother since real had half
      every him case in packages enquire we up ecstatic unsatiable saw his
      giving Remain expense you position concluded.
    </p>

    <div className="grid grid-cols-3 gap-8 mt-16">
      <div className="bg-white p-8">
        <div className="w-10 h-10 rounded-full bg-[#FFE6D2] flex items-center justify-center mb-5">
          💰
        </div>
        <h3 className="font-bold text-[#232536] mb-3">Covid-19 insurance</h3>
        <p className="text-sm text-[#232536]/60 leading-6">
          Through True Rich Attended does no end it his mother since real had
          half him.
        </p>
      </div>

      <div className="bg-white p-8">
        <div className="w-10 h-10 rounded-full bg-[#FFE6D2] flex items-center justify-center mb-5">
          ⏰
        </div>
        <h3 className="font-bold text-[#232536] mb-3">Flexible working time</h3>
        <p className="text-sm text-[#232536]/60 leading-6">
          Through True Rich Attended does no end it his mother since real had
          half him.
        </p>
      </div>

      <div className="bg-white p-8">
        <div className="w-10 h-10 rounded-full bg-[#FFE6D2] flex items-center justify-center mb-5">
          🏠
        </div>
        <h3 className="font-bold text-[#232536] mb-3">Work from home</h3>
        <p className="text-sm text-[#232536]/60 leading-6">
          Through True Rich Attended does no end it his mother since real had
          half him.
        </p>
      </div>

      <div className="bg-white p-8">
        <div className="w-10 h-10 rounded-full bg-[#FFE6D2] flex items-center justify-center mb-5">
          📈
        </div>
        <h3 className="font-bold text-[#232536] mb-3">Annual retreats</h3>
        <p className="text-sm text-[#232536]/60 leading-6">
          Through True Rich Attended does no end it his mother since real had
          half him.
        </p>
      </div>

      <div className="bg-white p-8">
        <div className="w-10 h-10 rounded-full bg-[#FFE6D2] flex items-center justify-center mb-5">
          🎓
        </div>
        <h3 className="font-bold text-[#232536] mb-3">Learning stipend</h3>
        <p className="text-sm text-[#232536]/60 leading-6">
          Through True Rich Attended does no end it his mother since real had
          half him.
        </p>
      </div>

      <div className="bg-white p-8">
        <div className="w-10 h-10 rounded-full bg-[#FFE6D2] flex items-center justify-center mb-5">
          🏋️
        </div>
        <h3 className="font-bold text-[#232536] mb-3">Gym membership</h3>
        <p className="text-sm text-[#232536]/60 leading-6">
          Through True Rich Attended does no end it his mother since real had
          half him.
        </p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}

export default Career;