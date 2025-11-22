"use client";
import logo from "../../public/logoo.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // function to check if a path is active
  const isActive = (path: string) => pathname === path;

  // Detect scroll to change background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 w-full overflow-visible transition-all duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      style={{ direction: "rtl" }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 text-xs md:text-sm w-full max-w-screen-xl mx-auto ">
        {/* Social Icons */}
        <div className="hidden md:flex gap-3">
          <FaInstagram className="hover:text-[#CD7F32] cursor-pointer" />
          <FaXTwitter className="hover:text-[#CD7F32] cursor-pointer" />
          <FaYoutube className="hover:text-[#CD7F32] cursor-pointer" />
          <FaFacebook className="hover:text-[#CD7F32] cursor-pointer" />
          <FaLinkedin className="hover:text-[#CD7F32] cursor-pointer" />
          <FaPinterest className="hover:text-[#CD7F32] cursor-pointer" />
          <FaTiktok className="hover:text-[#CD7F32] cursor-pointer" />
        </div>

        {/* Phone Number */}
        <div className="flex items-center gap-2 text-[#CD7F32] font-semibold">
          <FaWhatsapp className="text-xl" />
          <span className="text-white">0544339334</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 text-sm w-full max-w-screen-xl mx-auto">

        {/* Logo */}
        <img
          src={logo.src}
          alt="Pro Rays Logo"
          className="h-10 md:h-14 lg:h-16 w-auto"
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-lg font-semibold whitespace-nowrap">
          <Link
            href="/"
            className={`transition-all duration-300 hover:text-[#CD7F32] hover:scale-105 ${
              isActive("/") ? "text-[#CD7F32]" : "text-white"
            }`}
          >
            الصفحة الرئيسية
          </Link>

        {/* خدماتنا Dropdown Desktop */}
<div className="relative group">
  <Link
    href="/services"
    className={`transition-all duration-300 hover:text-[#CD7F32] hover:scale-105 ${
      pathname.startsWith("/services") ? "text-[#CD7F32]" : "text-white"
    }`}
  >
    خدماتنا ▾
  </Link>

  {/* Dropdown Menu */}
  <div
  className="absolute right-0 mt-2 bg-black/90 border border-gray-600 rounded shadow-lg w-60 py-2 z-50
    opacity-0 scale-95 invisible
    group-hover:opacity-100 group-hover:scale-100 group-hover:visible
    transition-all duration-300 transform origin-top"
>
  <Link href="/ppf" className="block px-4 py-2 hover:bg-gray-800">
    حماية السيارة PPF
  </Link>
  <Link href="/tint" className="block px-4 py-2 hover:bg-gray-800">
    تظليل عازل حراري للسيارات
  </Link>
  <Link href="/nano" className="block px-4 py-2 hover:bg-gray-800">
    النانو سيراميك للسيارات
  </Link>
  <Link href="/leather" className="block px-4 py-2 hover:bg-gray-800">
    أرضيات جلد للسيارات
  </Link>
</div>

</div>


          <Link href="/about" className="hover:text-[#CD7F32]">معلومات عنا</Link>
          <Link href="/contact" className="hover:text-[#CD7F32]">اتصل بنا</Link>
        </nav>

        {/* Call Button (Desktop) */}
        <a
          href="https://wa.me/966544339334"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2 font-bold text-white bg-gradient-to-r from-[#B08B4F] to-black rounded-full"
        >
          اتصل الآن <FaWhatsapp className="text-xl" />
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-3/4 bg-black/95 backdrop-blur-md p-6 transition-transform duration-300 z-40
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          className="text-3xl mb-8"
          onClick={() => setOpen(false)}
        >
          <HiX />
        </button>

        {/* Links */}
        <nav className="flex flex-col gap-6 text-white text-lg font-semibold">
          <Link href="/" onClick={() => setOpen(false)}>الصفحة الرئيسية</Link>

          {/* خدماتنا Mobile Dropdown */}
          <div className="flex flex-col">
            <button
              type="button"
              onClick={() => setServicesOpen((s) => !s)}
              className="flex justify-between items-center w-full text-left"
            >
              خدماتنا ▾
            </button>
            <div
              className={`flex flex-col ml-4 mt-2 overflow-hidden transition-all duration-300
                ${servicesOpen ? "max-h-52" : "max-h-0"}`}
            >
              <Link href="/service1" className="py-1" onClick={() => setOpen(false)}>خدمة 1</Link>
              <Link href="/service2" className="py-1" onClick={() => setOpen(false)}>خدمة 2</Link>
              <Link href="/service3" className="py-1" onClick={() => setOpen(false)}>خدمة 3</Link>
            </div>
          </div>

          <Link href="/about" onClick={() => setOpen(false)}>معلومات عنا</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>اتصل بنا</Link>
        </nav>
      </div>
    </header>
  );
}
