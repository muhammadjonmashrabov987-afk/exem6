function Footer() {
  return (
    <footer>
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* SUBSCRIBE */}
          <div className="bg-[#666DFF] px-16 py-14 flex items-center justify-between">
            <div>
              <p className="uppercase tracking-[3px] text-white text-sm mb-4">
                Newsletter
              </p>

              <h2 className="text-white text-[36px] leading-[48px] font-bold max-w-[500px]">
                Subscribe our News Letter to get Latest Updates.
              </h2>
            </div>

            <input
              type="text"
              placeholder="Person@Email.com"
              className="w-[450px] h-[64px] px-6 outline-none"
            />
          </div>

          {/* FOOTER LINKS */}
          <div className="flex justify-between mt-24">
            <div>
              <h2 className="text-[48px] leading-[58px] font-bold text-[#232536] max-w-[450px]">
                Let's make something special
              </h2>

              <p className="mt-6 text-xl font-semibold text-[#232536]">
                Let's talk! 🤙
              </p>

              <div className="mt-8 space-y-3 text-[#232536]">
                <p>020 7993 2905</p>
                <p>hi@finsweet.com</p>
              </div>

              <p className="mt-8 text-sm text-[#232536]/70 leading-7">
                DLF Cybercity, Bhubaneswar, <br />
                India, &52050
              </p>
            </div>

            <div className="flex gap-24">
              <ul className="space-y-4 text-[#232536]">
                <li className="font-bold">Home</li>
                <li>Service</li>
                <li>Company</li>
                <li>Career</li>
                <li>News</li>
              </ul>

              <ul className="space-y-4 text-[#232536]">
                <li className="font-bold">Service</li>
                <li>Technical support</li>
                <li>Testing</li>
                <li>Development</li>
                <li>AWS/Azure</li>
                <li>Consulting</li>
                <li>Information Technology</li>
              </ul>

              <ul className="space-y-4 text-[#232536]">
                <li className="font-bold">Resources</li>
                <li>About us</li>
                <li>Testimonial</li>
                <li>Privacy Policy</li>
                <li>Terms of use</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="bg-[#FFE6D2] py-7">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h2 className="text-xl font-bold text-[#232536]">
              {"{Finsweet"}
            </h2>

            <p className="text-sm text-[#232536]">
              ©2021 Finsweet
            </p>
          </div>

          <div className="flex items-center gap-5 text-[#232536]">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
            <span>Linkedin</span>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;