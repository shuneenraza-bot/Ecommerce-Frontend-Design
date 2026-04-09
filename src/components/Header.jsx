import { useState, useRef, useEffect } from "react";
import logo from "../assets/Layout/Brand/logo-colored.png";

const categories = ["All category", "Electronics", "Clothes", "Home", "Sports", "Toys", "Automotive"];

const currencies = [
  { label: "English, USD", value: "usd" },
  { label: "Pakistan, PKR", value: "pkr" },
  { label: "Saudi, SAR", value: "sar" },
];

const countries = [
  { value: "us", label: "🇺🇸 United States" },
  { value: "de", label: "🇩🇪 Germany" },
  { value: "fr", label: "🇫🇷 France" },
  { value: "pk", label: "🇵🇰 Pakistan" },
  { value: "ae", label: "🇦🇪 Arabic Emirates" },
  { value: "gb", label: "🇬🇧 Great Britain" },
  { value: "cn", label: "🇨🇳 China" },
  { value: "sa", label: "🇸🇦 Saudi Arabia" },
];

const navLinks = ["Hot offers", "Gift boxes", "Projects", "Menu item"];

const helpItems = ["Help Center", "Contact Us", "FAQ", "Shipping Info"];

function Header() {
  const [searchQuery, setSearchQuery]   = useState("");
  const [searchCategory, setSearchCategory] = useState("All category");
  const [currency, setCurrency]         = useState("usd");
  const [country, setCountry]           = useState("us");
  const [cartCount]                     = useState(3);
  const [showHelp, setShowHelp]         = useState(false);
  const [showAllCat, setShowAllCat]     = useState(false);
  const helpRef  = useRef(null);
  const catRef   = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (helpRef.current && !helpRef.current.contains(e.target)) setShowHelp(false);
      if (catRef.current  && !catRef.current.contains(e.target))  setShowAllCat(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearch = () => {
    if (!searchQuery.trim()) { alert("Please enter a search term."); return; }
    alert(`Searching for "${searchQuery}" in category: ${searchCategory}`);
  };

  return (
<header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
  <div className="w-11/12 xl:w-10/12 mx-auto">

    {/* Top Header */}
    <div className="flex items-center justify-between gap-6 py-4">

      {/* Logo */}
      <div
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => alert("Navigating to Home")}
      >
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-105 transition duration-300">
          <img src={logo} alt="Logo" className="w-7 h-7 object-contain" />
        </div>

        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 leading-none tracking-tight">
            ShopEase
          </h1>
          <p className="text-xs text-slate-500 mt-1 tracking-wide uppercase">
            Smart Online Store
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="hidden lg:flex flex-1 max-w-3xl rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-inner focus-within:ring-2 focus-within:ring-indigo-500 transition">
        <input
          type="text"
          placeholder="Search for products, brands, categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 bg-transparent px-5 py-4 outline-none text-sm text-slate-700"
        />

        <select
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          className="border-l border-slate-200 bg-white px-4 text-sm text-slate-600 outline-none"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          className="px-7 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 transition"
        >
          Search
        </button>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-3">

        <button className="group flex flex-col items-center justify-center w-14 h-14 rounded-2xl bg-slate-100 hover:bg-indigo-50 transition">
          <div className="text-slate-600 group-hover:text-indigo-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-[11px] text-slate-500 mt-1">Profile</span>
        </button>

        <button className="group flex flex-col items-center justify-center w-14 h-14 rounded-2xl bg-slate-100 hover:bg-pink-50 transition">
          <div className="text-slate-600 group-hover:text-pink-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </div>
          <span className="text-[11px] text-slate-500 mt-1">Wishlist</span>
        </button>

        <button className="group relative flex flex-col items-center justify-center w-14 h-14 rounded-2xl bg-slate-100 hover:bg-cyan-50 transition">
          <div className="text-slate-600 group-hover:text-cyan-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25Z" />
            </svg>
          </div>

          <span className="absolute top-1 right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
            {cartCount}
          </span>

          <span className="text-[11px] text-slate-500 mt-1">Cart</span>
        </button>
      </div>
    </div>

    {/* Navigation */}
    <div className="flex items-center justify-between border-t border-slate-100 py-3 text-sm">

      <div className="flex items-center gap-8">

        <button
          onClick={() => setShowAllCat((p) => !p)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 font-semibold transition"
        >
          ☰ Categories
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <p
              key={link}
              className="cursor-pointer text-slate-600 hover:text-indigo-600 font-medium transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              {link}
            </p>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-600 outline-none"
        >
          {currencies.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>

        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-600 outline-none"
        >
          {countries.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>
    </div>
  </div>
</header>


    
  );
}

export default Header;