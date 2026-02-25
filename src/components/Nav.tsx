import { useState } from "react";
import { FaUserTie, FaUsers } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoPeopleCircle } from "react-icons/io5";

const navItems = [
  { id: "alcalde",  label: "Reporte Alcalde",   icon: <FaUserTie /> },
  { id: "concejal", label: "Reporte Concejal",  icon: <FaUsers /> },
];

interface NavProps {
  onSelect: (id: string) => void;
  active: string;
}

export default function Nav({ onSelect, active }: NavProps) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex justify-center gap-2 py-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSelect(item.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-semibold transition whitespace-nowrap
                  ${
                    active === item.id
                      ? "bg-[#416972] text-white shadow"
                      : "text-[#416972] hover:bg-[#416972]/10"
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}