import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#232536]">
      <div className="max-w-[1280px] mx-auto px-6 h-[80px] flex items-center justify-between">
        <h2 className="text-white text-2xl font-bold">
          {"{Finsweet"}
        </h2>

        <nav className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white border-t-2 pt-7"
                : "text-white/60 pt-7"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "text-white border-t-2 pt-7"
                : "text-white/60 pt-7"
            }
          >
            Service
          </NavLink>

          <NavLink
            to="/company"
            className={({ isActive }) =>
              isActive
                ? "text-white border-t-2 pt-7"
                : "text-white/60 pt-7"
            }
          >
            Company
          </NavLink>

          <NavLink
            to="/career"
            className={({ isActive }) =>
              isActive
                ? "text-white border-t-2 pt-7"
                : "text-white/60 pt-7"
            }
          >
            Career
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-white border-t-2 pt-7"
                : "text-white/60 pt-7"
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white border-t-2 pt-7"
                : "text-white/60 pt-7"
            }
          >
            Contact us
          </NavLink>

          <button className="text-[#FFD3AF]">
            Clone project ⟶
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;