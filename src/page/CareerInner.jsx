import { useState } from "react";
import { useParams } from "react-router-dom";
import { jobs } from "../data/jobs";

function CareerInner() {
  const { id } = useParams();
  const [tab, setTab] = useState("details");

  const job = jobs.find((item) => item.id === Number(id));

  const texts = {
    details: [
      "Create and edit video content for multiple platforms.",
      "Design and create highly engaging content.",
      "Publish posts on various social media channels.",
      "Research industry related topics.",
      "Work with team members and managers.",
    ],
    requirements: [
      "Good knowledge of React JS and JavaScript.",
      "Basic understanding of Tailwind CSS.",
      "Ability to work with Git and GitHub.",
      "Good communication skills.",
      "At least basic project experience.",
    ],
    responsibilities: [
      "Build clean and responsive pages.",
      "Fix bugs and improve website performance.",
      "Work with designers and developers.",
      "Write reusable components.",
      "Complete tasks before deadline.",
    ],
  };

  if (!job) return <h1>Job topilmadi</h1>;

  return (
    <main className="py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="uppercase tracking-[4px] text-sm font-semibold mb-5">
              Career at Finsweet
            </p>

            <h1 className="text-[48px] font-bold text-[#232536]">
              {job.title}
            </h1>

            <p className="text-[#232536]/60 mt-6 max-w-[500px]">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages.
            </p>

            <button className="bg-[#444CFC] text-white px-8 py-4 mt-8">
              Apply Now ⟶
            </button>
          </div>

          <div className="bg-[#FFE0C7] p-10 w-[420px]">
            <h3 className="text-xl font-bold mb-6">Job Description</h3>
            <p>Remote, India, Full Time</p>
            <p className="mt-3">Department: Product Engineering</p>
            <p className="mt-3">Full Time 5 Position Available.</p>
          </div>
        </div>

        <div className="bg-[#ECF8F9] mt-20 p-14">
          <div className="flex gap-16 border-b pb-8 font-bold">
            <button
              onClick={() => setTab("details")}
              className={tab === "details" ? "text-[#444CFC] underline" : ""}
            >
              Details
            </button>

            <button
              onClick={() => setTab("requirements")}
              className={
                tab === "requirements" ? "text-[#444CFC] underline" : ""
              }
            >
              Requirements
            </button>

            <button
              onClick={() => setTab("responsibilities")}
              className={
                tab === "responsibilities" ? "text-[#444CFC] underline" : ""
              }
            >
              Responsibilities
            </button>
          </div>

          <ul className="mt-10 space-y-5 text-[#232536]/70">
            {texts[tab].map((text, index) => (
              <li key={index}>• {text}</li>
            ))}
          </ul>
        </div>

        <section className="mt-20">
          <h2 className="text-[28px] font-bold text-[#232536] mb-8">
            Apply Now
          </h2>

          <form className="grid grid-cols-2 gap-8">
            <input className="bg-[#F9F9FF] p-6 outline-none" placeholder="First Name" />
            <input className="bg-[#F9F9FF] p-6 outline-none" placeholder="Last Name" />
            <input className="bg-[#F9F9FF] p-6 outline-none" placeholder="Email Id" />
            <input className="bg-[#F9F9FF] p-6 outline-none" placeholder="Mobile No" />

            <textarea
              className="bg-[#F9F9FF] p-6 outline-none col-span-2 h-[180px]"
              placeholder="Why do you think you are good fit for Ether?"
            ></textarea>

            <label className="col-span-2 flex gap-4 text-sm text-[#232536]/70">
              <input type="checkbox" defaultChecked />
              I agree to accept the privacy policy. We will add your contact
              details provided in this form to our system.
            </label>

            <button className="bg-[#444CFC] text-white px-8 py-4 w-fit">
              Submit Application ⟶
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default CareerInner;