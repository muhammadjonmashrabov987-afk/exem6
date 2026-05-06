import Header from "./components/Header.jsx";

function header() {
  const navLinks = ["Company", "Career", "Blog", "Contact us"];

  return (
    <header className="bg-[#232536] relative z-[1000]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="h-[80px] flex items-center justify-between">
          <div className="text-white text-[18px] font-bold">
            {"{Finsweet"}
          </div>

          <nav className="flex items-center gap-7">
            {navLinks.map((item, index) => (
              <a
                href="#"
                key={item}
                className={`text-[14px] no-underline ${
                  index === 0 ? "text-white" : "text-[#ffffff99]"
                }`}
              >
                {item}
              </a>
            ))}

            <a href="#" className="text-[#ffd3af] text-[14px]">
              Clone project →
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default App;