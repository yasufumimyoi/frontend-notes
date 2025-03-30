import { NavLink } from "@remix-run/react";

export default function Header() {
  const routes = [
    { to: "/about", label: "About" },
    { to: "/", label: "Blog" },
    { to: "/projects", label: "Projects" },
  ];

  return (
    <header className="flex justify-between">
      <h1 className="text-2xl font-bold">{"<Frontend Notes />"}</h1>
      <nav>
        <ul className="flex gap-4">
          {routes.map((route) => (
            <li key={route.to}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-[#3A4D39] pb-1 hover:opacity-70 transition-opacity duration-200"
                    : "hover:opacity-70 transition-opacity duration-200"
                }
                to={route.to}
              >
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
