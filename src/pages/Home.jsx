import { useState } from 'react'
import Header from '../components/Header'
import HomeMain from '../components/HomeMain'
import Footer from '../components/Footer'
import NavButtons from '../components/NavButtons'



function Home() {
  

  return (
    <div className='bg-gray-100'>
    <Header/>
    <HomeMain/>

    {/* FEATURED BRANDS */}
<section className="w-10/12 mx-auto mt-10">
  <div className="bg-white rounded-3xl shadow-md p-8 border border-slate-100">
    <div className="flex items-center justify-between mb-8">
      <div>
        <p className="text-indigo-600 font-semibold uppercase text-sm tracking-widest">
          Trusted Brands
        </p>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">
          Top Brands We Work With
        </h2>
      </div>

      <button className="text-indigo-600 font-semibold hover:text-indigo-800 transition">
        View All →
      </button>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      {["Apple", "Samsung", "Sony", "Nike", "Adidas"].map((brand, index) => (
        <div
          key={index}
          className="bg-slate-50 hover:bg-indigo-50 rounded-2xl p-6 text-center font-bold text-slate-700 hover:text-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          {brand}
        </div>
      ))}
    </div>
  </div>
</section>

{/* FLASH SALE */}
<section className="w-10/12 mx-auto mt-10">
  <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 shadow-2xl">
    <div className="grid md:grid-cols-2 items-center p-10">
      <div className="text-white">
        <p className="uppercase tracking-[4px] text-sm opacity-80 mb-3">
          Limited Time Offer
        </p>

        <h2 className="text-5xl font-bold leading-tight mb-5">
          Flash Sale
          <br />
          Up To 70% Off
        </h2>

        <p className="text-lg text-white/90 mb-7 max-w-md">
          Get the latest electronics, accessories and fashion at unbeatable prices.
        </p>

        <div className="flex gap-4 mb-8">
          <div className="bg-white/20 backdrop-blur rounded-2xl px-5 py-3 text-center">
            <p className="text-3xl font-bold">02</p>
            <span className="text-sm">Days</span>
          </div>

          <div className="bg-white/20 backdrop-blur rounded-2xl px-5 py-3 text-center">
            <p className="text-3xl font-bold">14</p>
            <span className="text-sm">Hours</span>
          </div>

          <div className="bg-white/20 backdrop-blur rounded-2xl px-5 py-3 text-center">
            <p className="text-3xl font-bold">36</p>
            <span className="text-sm">Min</span>
          </div>
        </div>

        <button className="bg-white text-indigo-700 px-7 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300">
          Shop The Sale
        </button>
      </div>

      <div className="flex justify-center mt-10 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
          alt="Shoes"
          className="w-[380px] rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
        />
      </div>
    </div>
  </div>
</section>

{/* FEATURED PRODUCTS */}
<section className="w-10/12 mx-auto mt-12">
  <div className="flex items-center justify-between mb-8">
    <div>
      <p className="text-indigo-600 uppercase tracking-widest text-sm font-semibold">
        Featured Products
      </p>
      <h2 className="text-4xl font-bold text-slate-900 mt-2">
        Trending This Week
      </h2>
    </div>

    <button className="text-indigo-600 font-semibold hover:text-indigo-800 transition">
      See More →
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
    {[
      {
        name: "Wireless Headphones",
        price: "$89",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
      },
      {
        name: "Smart Watch",
        price: "$149",
        image:
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80",
      },
      {
        name: "Premium Camera",
        price: "$399",
        image:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",
      },
      {
        name: "Modern Sneakers",
        price: "$120",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100"
      >
        <div className="overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-widest bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
              Trending
            </span>

            <span className="text-2xl font-bold text-slate-900">
              {item.price}
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-4">
            {item.name}
          </h3>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl font-semibold transition">
            Add To Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

{/* CUSTOMER REVIEWS */}
<section className="w-10/12 mx-auto mt-14 mb-14">
  <div className="text-center mb-10">
    <p className="text-indigo-600 uppercase tracking-widest text-sm font-semibold">
      Testimonials
    </p>

    <h2 className="text-4xl font-bold text-slate-900 mt-2">
      What Our Customers Say
    </h2>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        name: "Sarah Johnson",
        text: "Amazing shopping experience. The products arrived quickly and the design feels premium.",
      },
      {
        name: "Ali Khan",
        text: "The website looks modern and very easy to use. I love the clean layout.",
      },
      {
        name: "Emma Wilson",
        text: "Great customer support and beautiful product presentation. Highly recommended!",
      },
    ].map((review, index) => (
      <div
        key={index}
        className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition border border-slate-100"
      >
        <div className="flex mb-5 text-yellow-400 text-xl">
          ★★★★★
        </div>

        <p className="text-slate-600 leading-7 mb-6">
          "{review.text}"
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
            {review.name.charAt(0)}
          </div>

          <div>
            <h4 className="font-bold text-slate-900">{review.name}</h4>
            <p className="text-slate-500 text-sm">Verified Customer</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>  


    <div className="mx-10 my-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl">
  <div>
    <h2 className="text-4xl font-bold mb-2">Special Offer 50% OFF</h2>
    <p className="text-lg">
      Limited time only. Get amazing products at the best prices.
    </p>
  </div>

  <button className="mt-6 md:mt-0 bg-white text-orange-600 px-6 py-3 rounded-2xl font-semibold">
    Explore Deals
  </button>
</div>
<section className="mx-10 my-16">
  <h2 className="text-4xl font-bold text-center mb-10">
    What Customers Say
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
      <p className="text-gray-600 mb-4">
        "Amazing website design and the products look fantastic!"
      </p>
      <h4 className="font-bold text-primary">Ali Khan</h4>
    </div>

    <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
      <p className="text-gray-600 mb-4">
        "The shopping experience feels premium and modern."
      </p>
      <h4 className="font-bold text-primary">Sara Ahmed</h4>
    </div>

    <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
      <p className="text-gray-600 mb-4">
        "This UI looks much better than the original version."
      </p>
      <h4 className="font-bold text-primary">John Smith</h4>
    </div>
  </div>
</section>
    <Footer/>
    <footer className="bg-dark text-white mt-16 px-10 py-12">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h2 className="text-2xl font-bold mb-4">ShopEase</h2>
      <p className="text-gray-400">
        Premium shopping experience for modern customers.
      </p>
    </div>

    <div>
      <h3 className="font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-gray-400">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-3">Support</h3>
      <ul className="space-y-2 text-gray-400">
        <li>Help Center</li>
        <li>FAQs</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-3">Follow Us</h3>
      <div className="flex gap-4 text-2xl">
        <span>📘</span>
        <span>📷</span>
        <span>🐦</span>
        <span>▶️</span>
      </div>
    </div>
  </div>
</footer>
    <NavButtons/>
    </div>
  )
}

export default Home
