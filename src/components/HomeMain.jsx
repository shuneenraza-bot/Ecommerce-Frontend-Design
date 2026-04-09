import { useState } from "react";
import banner from "../assets/Image/backgrounds/Banner-board-800x420 2.png";
import banner2 from "../assets/Image/backgrounds/Group 969.png";
import banner3 from "../assets/Image/backgrounds/image 98.png";
import banner4 from "../assets/Image/backgrounds/Group 982.png";


import watch from "../assets/Image/tech/Watch.png";
import laptop from "../assets/Image/tech/Laptop.png";
import camera from "../assets/Image/tech/Camera.png";
import headset from "../assets/Image/tech/Headphones.png";
import phone from "../assets/Image/tech/Phone.png";

import chair from "../assets/Image/interior/Soft Chair.png";
import kitchenDishes from "../assets/Image/interior/Kitchen dishes.png";
import smartWatch from "../assets/Image/interior/Smart watches.png";
import kitchenMixer from "../assets/Image/interior/Kitchen mixer.png";
import blender from "../assets/Image/interior/Kitchen Mixer.png";
import homeAppliance from "../assets/Image/interior/Home Appliances.png";
import coffeeMaker from "../assets/Image/interior/Coffee maker.png";

import Bag from "../assets/Layout/alibaba/Image/cloth/Bag.png";
import Shirt from "../assets/Layout/alibaba/Image/cloth/Shirt.png";
import Jacket from "../assets/Layout/alibaba/Image/cloth/Brown Jacket.png";
import Coat from "../assets/Layout/alibaba/Image/cloth/Coat.png";
import Shorts from "../assets/Layout/alibaba/Image/cloth/Jeans Shorts.png";
import Wallet from "../assets/Layout/alibaba/Image/cloth/Wallet.png";

import ExtraS1 from "../assets/Image/backgrounds/Mask group.png";
import ExtraS2 from "../assets/Image/backgrounds/Mask group (1).png";
import ExtraS3 from "../assets/Image/backgrounds/image 106.png";
import ExtraS4 from "../assets/Image/backgrounds/image 107.png";

function Main() {
    const [selectedCategory, setSelectedCategory] = useState("Automobiles");
    const [hoveredIndex, setHoveredIndex] = useState(null); 

    const categories = [
        "Automobiles",
        "Clothes and wear",
        "Home interiors",
        "Computer and tech",
        "Tools, equipments",
        "Sports and outdoor",
        "Animal and pets",
        "Machinery tools",
        "More category",
    ];

    const handleJoin = () => alert("Redirecting to Signup Page");
    const handleLogin = () => alert("Redirecting to Login Page");
    const handleLearnMore = () => alert("Navigating to product listings");

    // Deals Section
    const products = [
        { name: "Smart watches", discount: "-25%", img: watch },
        { name: "Laptops", discount: "-15%", img: laptop },
        { name: "GoPro cameras", discount: "-40%", img: camera },
        { name: "Headphones", discount: "-25%", img: headset },
        { name: "Canon cameras", discount: "-25%", img: phone },
    ];

    // Home and Outdoor
    const title = "Home and outdoor";
    const homeProducts = [
        { name: "Soft chairs", price: "USD 19", img: chair },
        { name: "Kitchen dishes", price: "USD 19", img: kitchenDishes },
        { name: "Smart watches", price: "USD 19", img: smartWatch },
        { name: "Kitchen mixer", price: "USD 100", img: kitchenMixer },
        { name: "Blenders", price: "USD 39", img: blender },
        { name: "Home appliance", price: "USD 19", img: homeAppliance },
        { name: "Coffee maker", price: "USD 10", img: coffeeMaker },
    ];

    const electronics = [
        { name: "Smart watches", price: "USD 19", img: smartWatch },
        { name: "Cameras", price: "USD 89", img: camera },
        { name: "Headphones", price: "USD 10", img: headset },
        { name: "Smart watches", price: "USD 90", img: smartWatch },
        { name: "Gaming set", price: "USD 35", img: headset },
        { name: "Laptops & PC", price: "USD 340", img: laptop },
        { name: "Smartphones", price: "USD 19", img: phone },
        { name: "Electric kettle", price: "USD 240", img: watch }, // ✅ replace with kettle img when available
    ];

    // Request Section
    const [item, setItem] = useState("");
    const [details, setDetails] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("Pcs");

    const handleSend = () => {
        if (!item.trim()) {
            alert("Please enter the item you need.");
            return;
        }
        alert(`Inquiry sent!\nItem: ${item}\nDetails: ${details}\nQuantity: ${quantity} ${unit}`);
    };

    // Recomended Items

    const [hoveredId, setHoveredId] = useState(null);

    const recommendedItems = [
        {
            id: 1,
            name: "T-shirts with multiple colors, for men",
            price: "$10.30",
            img: Shirt,
        },
        {
            id: 2,
            name: "Jeans shorts for men blue color",
            price: "$10.30",
            img: Shorts,
        },
        {
            id: 3,
            name: "Brown winter coat medium size",
            price: "$12.50",
            img: Coat,
        },
        {
            id: 4,
            name: "Jeans bag for travel for men",
            price: "$34.00",
            img: Bag,
        },
        {
            id: 5,
            name: "Leather wallet",
            price: "$99.00",
            img: Wallet,
        },
        {
            id: 6,
            name: "Canon camera black, 100x zoom",
            price: "$9.99",
            img: camera,
        },
        {
            id: 7,
            name: "Headset for gaming with mic",
            price: "$8.99",
            img: headset,
        },
        {
            id: 8,
            name: "Smartwatch silver color modern",
            price: "$10.30",
            img: watch,
        },
        {
            id: 9,
            name: "Blue wallet for men leather metarfial",
            price: "$10.30",
            img: Wallet,
        },
        {
            id: 10,
            name: "Jeans bag for travel for men",
            price: "$80.95",
            img: Bag,
        },
    ];


    // Extra Services
    const services = [
        {
            id: 1,
            title: "Source from Industry Hubs",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="600px" height="600px" viewBox="0 0 24 24" fill="none">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            img: ExtraS1,
        },
        {
            id: 2,
            title: "Customize Your Products",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path d="M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.66 17 22 12 22C7 22 3 20.66 3 19V5M21 9.72021C21 11.3802 17 12.7202 12 12.7202C7 12.7202 3 11.3802 3 9.72021M21 14.44C21 16.1 17 17.44 12 17.44C7 17.44 3 16.1 3 14.44" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            img: ExtraS2,
        },
        {
            id: 3,
            title: "Fast, reliable shipping by ocean or air",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 1024 1024"><path fill="#000000" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z" /></svg>,
            img: ExtraS3,
        },
        {
            id: 4,
            title: "Product monitoring and inspection",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 9.99999M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            img: ExtraS4,
        },
    ];

    const [hoveredid, setHoveredid] = useState(null);


    //  Suppliers

    const regions = [
        { name: "Arabic Emirates", url: "shopname.ae", code: "ae" },
        { name: "Australia", url: "shopname.ae", code: "au" },
        { name: "United States", url: "shopname.ae", code: "us" },
        { name: "Russia", url: "shopname.ru", code: "ru" },
        { name: "Italy", url: "shopname.it", code: "it" },
        { name: "Denmark", url: "denmark.com.dk", code: "dk" },
        { name: "France", url: "shopname.com.fr", code: "fr" },
        { name: "Arabic Emirates", url: "shopname.ae", code: "ae" },
        { name: "China", url: "shopname.ae", code: "cn" },
        { name: "Great Britain", url: "shopname.co.uk", code: "gb" },
    ];

    const [hoveredI, setHoveredI] = useState(null);

    return (
        <>
    <section className="w-10/12 mx-auto mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">

  {/* Left Categories */}
  <div className="bg-white rounded-3xl shadow-md p-5 border border-slate-100">
    <h2 className="text-lg font-bold text-slate-800 mb-5">
      Browse Categories
    </h2>

    <ul className="space-y-3 text-slate-600">
      {[
        "Automobiles",
        "Clothes and Wear",
        "Home Interiors",
        "Computer & Tech",
        "Tools & Equipment",
        "Sports & Outdoor",
        "Animal & Pets",
        "Machinery Tools",
        "More Category",
      ].map((item, index) => (
        <li
          key={index}
          className="px-3 py-2 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-all duration-300 font-medium"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* Main Banner */}
  <div className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-100 via-cyan-100 to-indigo-100 shadow-xl border border-white/50">

    <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-52 h-52 bg-cyan-300/20 rounded-full blur-3xl"></div>

    <div className="relative z-10 p-10 flex flex-col lg:flex-row items-center justify-between h-full">
      <div className="max-w-md">
        <p className="uppercase tracking-[4px] text-sm font-semibold text-indigo-500 mb-3">
          Latest Collection 2026
        </p>

        <h1 className="text-5xl font-bold leading-tight text-slate-900 mb-4">
          Modern Tech
          <br />
          For Everyday Life
        </h1>

        <p className="text-slate-600 text-lg mb-7 leading-7">
          Discover stylish gadgets, smart devices and premium accessories with a fresh new shopping experience.
        </p>

        <div className="flex gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1">
            Shop Now
          </button>

          <button className="bg-white text-slate-700 px-6 py-3 rounded-2xl font-semibold border border-slate-200 hover:bg-slate-50 transition">
            Explore
          </button>
        </div>
      </div>

      <div className="mt-10 lg:mt-0">
        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80"
          alt="Phone"
          className="w-[320px] lg:w-[380px] drop-shadow-2xl hover:scale-105 transition duration-500"
        />
      </div>
    </div>
  </div>

  {/* Right Cards */}
  <div className="flex flex-col gap-5">

    <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition duration-300">
      <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-4">
        %
      </div>

      <p className="text-sm text-slate-500 mb-2">Special Offer</p>

      <h3 className="text-3xl font-bold text-slate-900 mb-2">
        50% OFF
      </h3>

      <p className="text-slate-600 mb-5">
        On smart watches, headphones and accessories.
      </p>

      <button className="w-full bg-indigo-600 text-white py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition">
        View Deals
      </button>
    </div>

    <div className="rounded-3xl p-6 bg-gradient-to-br from-cyan-500 to-indigo-600 text-white shadow-xl hover:shadow-2xl transition duration-300">
      <p className="text-sm uppercase tracking-wider opacity-80 mb-2">
        Free Shipping
      </p>

      <h3 className="text-2xl font-bold mb-3">
        Orders Above $100
      </h3>

      <p className="text-white/90 mb-5">
        Enjoy fast and free delivery on premium products.
      </p>

      <button className="bg-white text-indigo-600 px-5 py-3 rounded-2xl font-semibold hover:bg-slate-100 transition">
        Learn More
      </button>
    </div>
  </div>
</section>







<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-10 py-8 bg-[#f5f7fb]">

  {/* Left Categories */}
  <div className="bg-white rounded-3xl shadow-lg p-6">
    <h2 className="text-xl font-bold mb-5 text-primary">Categories</h2>

    <ul className="space-y-4 text-gray-600 font-medium">
      <li className="hover:text-primary cursor-pointer transition">Fashion</li>
      <li className="hover:text-primary cursor-pointer transition">Electronics</li>
      <li className="hover:text-primary cursor-pointer transition">Home & Living</li>
      <li className="hover:text-primary cursor-pointer transition">Sports</li>
      <li className="hover:text-primary cursor-pointer transition">Beauty</li>
      <li className="hover:text-primary cursor-pointer transition">Accessories</li>
    </ul>
  </div>

  {/* Main Banner */}
  <div className="lg:col-span-2 bg-gradient-to-r from-primary to-secondary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between p-10">

    <div className="text-white max-w-md">
      <p className="uppercase tracking-[4px] mb-3 text-sm opacity-80">
        New Collection 2026
      </p>

      <h1 className="text-5xl font-bold leading-tight mb-4">
        Upgrade Your Lifestyle
      </h1>

      <p className="text-lg opacity-90 mb-6">
        Discover premium gadgets, fashion and accessories at the best price.
      </p>

      <button className="bg-white text-primary px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
        Shop Now
      </button>
    </div>

    <img
      src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
      alt="phone"
      className="w-[300px] md:w-[380px] mt-8 md:mt-0 rounded-3xl shadow-2xl"
    />
  </div>

  {/* Right Offer Cards */}
  <div className="flex flex-col gap-5">

    <div className="bg-white rounded-3xl shadow-lg p-6 hover:scale-105 transition">
      <p className="text-sm text-gray-500 mb-2">Special Offer</p>
      <h3 className="text-2xl font-bold text-primary mb-2">50% OFF</h3>
      <p className="text-gray-600 mb-4">
        On all smart watches and accessories.
      </p>

      <button className="bg-primary text-white px-4 py-2 rounded-xl">
        Explore
      </button>
    </div>

    <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-3xl p-6 shadow-lg hover:scale-105 transition">
      <h3 className="text-2xl font-bold mb-2">Free Shipping</h3>
      <p className="mb-4">
        Get free delivery on orders above $100.
      </p>

      <button className="bg-white text-pink-500 px-4 py-2 rounded-xl font-semibold">
        Learn More
      </button>
    </div>

  </div>
</div>
            {/* -------------------------------------------Request Section ------------------------------------------------------*/}
            <section
                className="w-10/12 mx-auto relative py-16 px-8 mt-6 flex items-center justify-between overflow-hidden"
                style={{
                    background: "linear-gradient(to right, #1565c0 0%, #42a5d5aa 60%, #80d8ea55 100%)",
                    minHeight: "260px",
                }}
                
            >
                <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between shadow-2xl">
  <div className="text-white max-w-lg">
    <p className="uppercase tracking-widest mb-3 text-sm">
      New Collection 2026
    </p>

    <h1 className="text-5xl font-bold leading-tight mb-4">
      Discover The Future Of Shopping
    </h1>

    <p className="text-lg opacity-90 mb-6">
      Shop smart gadgets, fashion, and home accessories with premium style.
    </p>

    <button className="bg-white text-primary px-6 py-3 rounded-2xl font-semibold hover:scale-105">
      Shop Now
    </button>
  </div>

  <img
    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    alt="shopping"
    className="w-[450px] rounded-3xl mt-8 md:mt-0 shadow-xl"
  />
</div>
                {/* Background warehouse image overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                        backgroundImage: { banner4 }
                    }}
                />

                {/* LEFT TEXT */}
                <div className="relative z-10 text-white max-w-sm">
                    <h2 className="text-3xl font-bold leading-snug mb-3">
                        An easy way to send <br /> requests to all suppliers
                    </h2>
                    <p className="text-sm text-blue-100 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt.
                    </p>
                </div>

                {/* RIGHT FORM CARD */}
                <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 w-full max-w-md ml-auto">
                    <h3 className="text-base font-bold text-gray-800 mb-4">
                        Send quote to suppliers
                    </h3>

                    {/* Item input */}
                    <input
                        type="text"
                        placeholder="What item you need?"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 placeholder-gray-400 mb-3 outline-none focus:border-blue-400"
                    />

                    {/* Details textarea */}
                    <textarea
                        placeholder="Type more details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        rows={4}
                        className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 placeholder-gray-400 mb-3 outline-none focus:border-blue-400 resize-y"
                    />

                    {/* Quantity + Unit row */}
                    <div className="flex gap-3 mb-4">
                        <input
                            type="number"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="flex-1 border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400"
                        />
                        <select
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-400 bg-white"
                        >
                            <option>Pcs</option>
                            <option>Kg</option>
                            <option>Lbs</option>
                            <option>Tons</option>
                            <option>Boxes</option>
                            <option>Sets</option>
                        </select>
                    </div>

                    {/* Submit button */}
                    <button
                        onClick={handleSend}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2 rounded transition-colors"
                    >
                        Send inquiry
                    </button>
                </div>
            </section>

            {/* ---------------------------------------------------Recommended Items---------------------------------------------- */}
            <section className="w-10/12 mx-auto mt-8 bg-gray-100">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Recommended items</h2>

                <div className="grid grid-cols-5 gap-3">
                    {recommendedItems.map((item) => (
                        <div
                            key={item.id}
                            className="border border-gray-200 rounded-lg p-3 cursor-pointer flex flex-col"
                            style={{
                                backgroundColor: hoveredId === item.id ? "#f9fafb" : "#fff",
                                boxShadow: hoveredId === item.id ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                                transition: "all 0.15s ease",
                            }}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => alert(`Viewing: ${item.name}`)}
                        >
                            {/* Product image */}
                            <div className="flex items-center justify-center h-40 mb-3">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            {/* Price */}
                            <p className="text-sm font-semibold text-gray-800">{item.price}</p>

                            {/* Name */}
                            <p className="text-xs text-gray-500 mt-0.5 leading-snug">{item.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/*----------------------------------------- Extra Services------------------------------------------------- */}
           <section className="w-10/12 mx-auto mt-16 mb-16">

  {/* SERVICES SECTION */}
  <div className="mb-16">
    <div className="flex items-center justify-between mb-8">
      <div>
        <p className="text-indigo-600 uppercase tracking-[4px] text-sm font-semibold">
          Premium Services
        </p>
        <h2 className="text-4xl font-bold text-slate-900 mt-2">
          Why Shop With Us
        </h2>
      </div>

      <button className="text-indigo-600 font-semibold hover:text-indigo-800 transition">
        View All Services →
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
      {[
        {
          title: "Fast Global Shipping",
          desc: "Worldwide delivery with real-time tracking and express options.",
          image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
          icon: "🚚",
        },
        {
          title: "Custom Product Design",
          desc: "Personalize products with your own style, logo or packaging.",
          image:
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
          icon: "🎨",
        },
        {
          title: "Secure Payment",
          desc: "100% safe transactions with encrypted payment protection.",
          image:
            "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
          icon: "🔒",
        },
        {
          title: "24/7 Customer Support",
          desc: "Our support team is available anytime to help you instantly.",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
          icon: "💬",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2"
        >
          <div className="relative overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center text-2xl shadow-lg">
              {service.icon}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {service.title}
            </h3>

            <p className="text-slate-600 leading-7 mb-5">
              {service.desc}
            </p>

            <button className="text-indigo-600 font-semibold hover:text-indigo-800 transition flex items-center gap-2">
              Learn More
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* SUPPLIERS SECTION */}
  <div className="bg-gradient-to-br from-slate-50 via-white to-indigo-50 rounded-3xl shadow-xl border border-slate-100 p-10">
    <div className="flex items-center justify-between mb-10">
      <div>
        <p className="text-indigo-600 uppercase tracking-[5px] text-sm font-bold">
  GLOBAL NETWORK
</p>

<h2 className="text-5xl font-bold text-slate-900 mt-3 mb-2">
  Trusted Suppliers Worldwide
</h2>

<p className="text-slate-500 text-lg">
  Connect with premium suppliers from leading countries around the world.
</p>
      </div>

      <button className="text-indigo-600 font-semibold hover:text-indigo-800 transition">
        Explore All →
      </button>
    </div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
  {[
    { country: "United States", flag: "🇺🇸", site: "shopusa.com", color: "from-blue-500 to-indigo-600" },
    { country: "United Kingdom", flag: "🇬🇧", site: "shopuk.co.uk", color: "from-purple-500 to-pink-500" },
    { country: "Germany", flag: "🇩🇪", site: "shopde.de", color: "from-amber-400 to-orange-500" },
    { country: "France", flag: "🇫🇷", site: "shopfr.fr", color: "from-sky-400 to-cyan-500" },
    { country: "Italy", flag: "🇮🇹", site: "shopit.it", color: "from-emerald-500 to-green-600" },
    { country: "UAE", flag: "🇦🇪", site: "shopuae.ae", color: "from-rose-500 to-red-500" },
    { country: "China", flag: "🇨🇳", site: "shopcn.cn", color: "from-yellow-400 to-orange-500" },
    { country: "Japan", flag: "🇯🇵", site: "shopjp.jp", color: "from-fuchsia-500 to-purple-600" },
    { country: "Australia", flag: "🇦🇺", site: "shopau.au", color: "from-cyan-500 to-blue-600" },
    { country: "Canada", flag: "🇨🇦", site: "shopca.ca", color: "from-red-500 to-pink-600" },
  ].map((supplier, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
    >
      {/* Top Color Bar */}
      <div className={`h-2 bg-gradient-to-r ${supplier.color}`}></div>

      <div className="p-6">
        {/* Flag Circle */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${supplier.color} flex items-center justify-center text-3xl shadow-lg mb-5 group-hover:scale-110 transition duration-500`}>
          <span className="drop-shadow-sm">{supplier.flag}</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition">
          {supplier.country}
        </h3>

        <p className="text-slate-500 text-sm mb-5">
          {supplier.site}
        </p>

        <button className={`w-full py-3 rounded-2xl text-white font-semibold bg-gradient-to-r ${supplier.color} hover:opacity-90 transition duration-300`}>
          Visit Supplier
        </button>
      </div>
    </div>
  ))}
</div>

  </div>
</section>
        </>
    );
}

export default Main;