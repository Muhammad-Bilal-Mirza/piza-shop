/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Pizza, 
  Clock, 
  MapPin, 
  ShoppingBag, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Twitter,
  ArrowDown,
  Mail,
  Phone,
  Send,
  Leaf,
  Star,
  Sun,
  Moon
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const PIZZAS = [
  {
    id: 1,
    name: "The Upside",
    description: "Our signature pie with a sourdough crust, homemade mozzarella, and a secret sauce that'll flip your world.",
    price: "$24",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
    tags: ["Signature", "Sourdough"]
  },
  {
    id: 2,
    name: "The Pepperoni Flip",
    description: "Crispy cups of pepperoni, fresh basil, and a drizzle of hot honey on our fermented dough.",
    price: "$26",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1000&auto=format&fit=crop",
    tags: ["Best Seller", "Spicy"]
  },
  {
    id: 3,
    name: "White Truffle",
    description: "Creamy ricotta, roasted garlic, and shaved white truffles. An elegant slice of heaven.",
    price: "$28",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop",
    tags: ["Premium", "Vegetarian"]
  }
];

const LOCATIONS = [
  { 
    name: "Greenpoint", 
    address: "640 Manhattan Ave, Brooklyn, NY 11222", 
    hours: ["Mon-Wed 11-11", "Thu 11-2AM", "Fri-Sat 11-4AM", "Sun 11-12AM"]
  },
  { 
    name: "Midtown East", 
    address: "20 East 40th Street, New York, NY 10016", 
    hours: ["Mon-Fri 11-10", "Sat 11-11", "Sun 11-10"]
  },
  { 
    name: "Nolita", 
    address: "51 Spring Street, New York, NY 10012", 
    hours: ["Mon-Wed 11-12AM", "Thu 11-2AM", "Fri-Sat 11-4AM", "Sun 11-12AM"]
  },
  { 
    name: "Garment District", 
    address: "598 8th Ave, New York, NY 10018", 
    hours: ["Mon-Thu 11-12AM", "Fri 11-2AM", "Sat 11-3AM", "Sun 11-11"]
  },
  { 
    name: "Chelsea", 
    address: "555 6th Ave, New York, NY 10011", 
    hours: ["Mon-Thu 11-11", "Fri-Sat 11-1AM", "Sun 11-10"]
  },
  { 
    name: "Morningside Heights", 
    address: "2878 Broadway, New York, NY 10025", 
    hours: ["Mon-Wed 11-11", "Thu 11-12AM", "Fri-Sat 11-4AM", "Sun 11-11"]
  },
  { 
    name: "NoMad", 
    address: "1231 Broadway, New York, NY 10001", 
    hours: ["Mon-Thu 11-12AM", "Fri-Sat 11-2AM", "Sun 11-11"]
  },
  { 
    name: "Financial District", 
    address: "63 WALL Street, New York, NY 10005", 
    hours: ["Mon-Sun 11-9PM"]
  }
];

export default function App() {
  const containerRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAllLocations, setShowAllLocations] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div ref={containerRef} className={`relative min-h-screen overflow-x-hidden selection:bg-upside-yellow selection:text-upside-black transition-colors duration-500 ${isDarkMode ? 'bg-upside-black text-white' : 'bg-upside-offwhite text-upside-black'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b transition-colors duration-500 ${isDarkMode ? 'bg-upside-black/80 border-white/10' : 'bg-upside-offwhite/80 border-upside-black/5'}`}>
        <div className="flex items-center gap-2 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-upside-red p-1.5 rounded-full"
          >
            <Pizza className="text-white w-6 h-6" />
          </motion.div>
          <span className={`text-2xl font-display font-black tracking-tighter uppercase ${isDarkMode ? 'text-white' : 'text-upside-black'}`}>Upside</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-display font-semibold uppercase text-sm tracking-widest">
          <a href="#menu" className={`hover:text-upside-red transition-colors ${isDarkMode ? 'text-white/70' : 'text-upside-black'}`}>Menu</a>
          <a href="#locations" className={`hover:text-upside-red transition-colors ${isDarkMode ? 'text-white/70' : 'text-upside-black'}`}>Locations</a>
          <a href="#about" className={`hover:text-upside-red transition-colors ${isDarkMode ? 'text-white/70' : 'text-upside-black'}`}>About</a>
          <a href="#contact" className={`hover:text-upside-red transition-colors ${isDarkMode ? 'text-white/70' : 'text-upside-black'}`}>Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-white/10 text-upside-yellow' : 'bg-upside-black/5 text-upside-black'}`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-upside-black text-white px-6 py-2.5 rounded-full font-display font-bold uppercase text-sm tracking-wider hover:bg-upside-red transition-colors flex items-center gap-2 dark:bg-upside-red dark:hover:bg-white dark:hover:text-upside-red"
          >
            Order Now <ShoppingBag className="w-4 h-4" />
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative h-screen flex items-center pt-20 overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-upside-black' : 'bg-upside-offwhite'}`}>
        {/* Immersive Background Image */}
        <div className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1594000199163-2479a48df418?q=80&w=2000&auto=format&fit=crop" 
            alt="Busy Pizzeria" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className={`absolute inset-0 transition-colors duration-500 ${isDarkMode ? 'bg-upside-black/80' : 'bg-upside-offwhite/80'}`} />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-upside-red font-display font-black uppercase tracking-[0.3em] text-sm dark:text-upside-yellow"
              >
                More Than Just a Slice
              </motion.span>
              <div className={`h-[2px] w-12 transition-colors ${isDarkMode ? 'bg-upside-yellow/30' : 'bg-upside-red/30'}`} />
            </div>
            <h1 className={`text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-8 transition-colors ${isDarkMode ? 'text-white' : 'text-upside-black'}`}>
              Very <br />
              <span className="text-upside-red dark:text-upside-yellow">Special</span> <br />
              <span className={`text-stroke ${isDarkMode ? 'text-white' : 'text-upside-black'}`}>Pizza</span>
            </h1>
            <p className={`text-xl md:text-2xl font-display font-medium max-w-lg mb-12 transition-colors ${isDarkMode ? 'text-white/70' : 'text-upside-black/70'}`}>
              Flipping the New York pizza game on its head with 72-hour sourdough crust and homemade mozzarella.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <button className="bg-upside-red text-white px-10 py-5 rounded-full font-display font-black uppercase text-lg tracking-widest hover:bg-upside-black transition-all shadow-xl shadow-upside-red/20">
                Order Now
              </button>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-upside-red/20 group-hover:border-upside-red transition-colors">
                  <img 
                    src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=200&auto=format&fit=crop" 
                    alt="Chef" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <button className="bg-transparent text-upside-black font-display font-black uppercase text-lg tracking-widest hover:text-upside-red transition-all">
                  Our Story
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop" 
                alt="Signature Pizza" 
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(102,17,28,0.3)]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-upside-yellow rounded-full flex items-center justify-center text-upside-black font-display font-black uppercase text-[10px] text-center p-4 leading-tight z-20 shadow-xl"
            >
              Freshly Baked <br /> Every Day
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-upside-red/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* Background Text */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03] whitespace-nowrap">
          <span className="text-[25rem] font-black uppercase leading-none">UPSIDE PIZZA UPSIDE PIZZA</span>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="bg-upside-black py-8 overflow-hidden border-y-4 border-upside-yellow">
        <div className="marquee">
          <div className="marquee-content animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-white text-4xl font-display font-black uppercase tracking-tighter flex items-center gap-8">
                More Than Just a Slice <span className="text-upside-red">·</span> Upside Pizza <span className="text-upside-red">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <section id="menu" className={`py-24 px-6 transition-colors duration-500 ${isDarkMode ? 'bg-upside-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className={`text-5xl md:text-7xl font-black uppercase leading-none mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-upside-black'}`}>Signature <br /><span className={`text-stroke ${isDarkMode ? 'text-white' : 'text-upside-black'}`}>Pies</span></h2>
              <p className={`text-lg max-w-md transition-colors ${isDarkMode ? 'text-white/60' : 'text-upside-black/60'}`}>Each pie is crafted with our 72-hour fermented sourdough and topped with the freshest ingredients.</p>
            </div>
            <button className={`flex items-center gap-2 font-display font-bold uppercase tracking-widest hover:text-upside-red transition-colors group ${isDarkMode ? 'text-white' : 'text-upside-black'}`}>
              See Full Menu <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PIZZAS.map((pizza, index) => (
              <motion.div 
                key={pizza.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={pizza.image} 
                    alt={pizza.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {pizza.tags.map(tag => (
                      <span key={tag} className="bg-white/90 backdrop-blur-sm text-upside-black px-3 py-1 rounded-full text-[10px] font-display font-black uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-upside-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <button className="w-full bg-white text-upside-black py-4 rounded-xl font-display font-bold uppercase tracking-widest">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-2xl font-black uppercase tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-upside-black'}`}>{pizza.name}</h3>
                  <span className={`text-xl font-display font-bold transition-colors ${isDarkMode ? 'text-upside-yellow' : 'text-upside-red'}`}>{pizza.price}</span>
                </div>
                <p className={`transition-colors ${isDarkMode ? 'text-white/60' : 'text-upside-black/60'} leading-relaxed`}>{pizza.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className={`py-24 px-6 transition-colors duration-500 ${isDarkMode ? 'bg-upside-red' : 'bg-upside-yellow'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div 
              initial={{ rotate: -5 }}
              whileInView={{ rotate: 0 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=1000&auto=format&fit=crop" 
                alt="Pizza Making" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className={`absolute -top-10 -left-10 w-40 h-40 rounded-full -z-0 flex items-center justify-center text-white font-display font-black uppercase text-center text-sm leading-tight rotate-12 transition-colors ${isDarkMode ? 'bg-upside-yellow text-upside-black' : 'bg-upside-red'}`}>
              72 Hour <br /> Sourdough
            </div>
          </div>
          
          <div>
            <h2 className={`text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-8 transition-colors ${isDarkMode ? 'text-white' : 'text-upside-black'}`}>What Makes Us <br /><span className={`${isDarkMode ? 'text-upside-yellow' : 'text-white'}`}>Upside</span></h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className={`p-4 rounded-2xl h-fit transition-colors ${isDarkMode ? 'bg-white/10' : 'bg-upside-black'}`}>
                  <Pizza className="text-upside-yellow w-8 h-8" />
                </div>
                <div>
                  <h4 className={`text-xl font-black uppercase mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-upside-black'}`}>Sourdough Crust</h4>
                  <p className={`transition-colors ${isDarkMode ? 'text-white/70' : 'text-upside-black/70'}`}>Our dough is naturally leavened for 72 hours, resulting in a crust that's light, airy, and packed with flavor.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className={`p-4 rounded-2xl h-fit transition-colors ${isDarkMode ? 'bg-white/10' : 'bg-upside-black'}`}>
                  <Clock className="text-upside-yellow w-8 h-8" />
                </div>
                <div>
                  <h4 className={`text-xl font-black uppercase mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-upside-black'}`}>Open Late</h4>
                  <p className={`transition-colors ${isDarkMode ? 'text-white/70' : 'text-upside-black/70'}`}>Whether it's a lunch rush or a 2 AM craving, we're serving hot slices when you need them most.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className={`p-4 rounded-2xl h-fit transition-colors ${isDarkMode ? 'bg-white/10' : 'bg-upside-black'}`}>
                  <MapPin className="text-upside-yellow w-8 h-8" />
                </div>
                <div>
                  <h4 className={`text-xl font-black uppercase mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-upside-black'}`}>New York Heart</h4>
                  <p className={`transition-colors ${isDarkMode ? 'text-white/70' : 'text-upside-black/70'}`}>Born in the streets of NYC, we bring that authentic energy to every single pie we bake.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className={`py-24 px-6 transition-colors duration-500 ${isDarkMode ? 'bg-upside-black' : 'bg-upside-offwhite'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl md:text-7xl font-black uppercase text-center mb-16 transition-colors ${isDarkMode ? 'text-white' : 'text-upside-black'}`}>Find <span className="text-upside-red dark:text-upside-yellow">Us</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LOCATIONS.slice(0, showAllLocations ? LOCATIONS.length : 3).map((loc, i) => (
              <motion.div 
                key={loc.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-3xl transition-all group border-2 ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-upside-yellow hover:text-upside-black' : 'bg-white border-upside-black hover:bg-upside-black hover:text-white'}`}
              >
                <h3 className="text-3xl font-black uppercase mb-4">{loc.name}</h3>
                <p className="mb-6 opacity-70 font-medium">{loc.address}</p>
                <div className={`flex flex-col gap-1 text-sm font-display font-bold uppercase tracking-widest transition-colors ${isDarkMode ? 'text-upside-yellow group-hover:text-upside-black' : 'text-upside-red group-hover:text-upside-yellow'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4" /> Hours:
                  </div>
                  {loc.hours.map((h, idx) => (
                    <div key={idx} className="pl-6 opacity-80 text-[10px] sm:text-xs">{h}</div>
                  ))}
                </div>
                <button className="mt-8 w-full border border-current py-3 rounded-xl font-display font-bold uppercase tracking-widest text-sm">
                  Get Directions
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllLocations(!showAllLocations)}
              className={`px-12 py-4 rounded-full font-display font-black uppercase tracking-widest text-sm transition-all shadow-xl flex items-center gap-3 ${
                isDarkMode 
                ? 'bg-upside-yellow text-upside-black hover:bg-white' 
                : 'bg-upside-black text-white hover:bg-upside-red'
              }`}
            >
              {showAllLocations ? 'Show Less' : 'See All Locations'}
              <ChevronRight className={`w-5 h-5 transition-transform ${showAllLocations ? '-rotate-90' : 'rotate-90'}`} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 px-6 overflow-hidden relative transition-colors duration-500 ${isDarkMode ? 'bg-upside-black' : 'bg-upside-red'} text-white`}>
        <div className="absolute top-0 right-0 text-[20rem] font-black uppercase opacity-5 select-none pointer-events-none -translate-y-1/4 translate-x-1/4 leading-none">
          Contact
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8">Get In <br /><span className="text-upside-yellow">Touch</span></h2>
              <p className="text-xl font-display font-medium mb-12 opacity-80 max-w-md">
                Have a question, a craving, or just want to say hi? We're always here for our pizza family.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className={`p-4 rounded-2xl transition-colors ${isDarkMode ? 'bg-white/10 group-hover:bg-upside-yellow group-hover:text-upside-black' : 'bg-white/10 group-hover:bg-upside-yellow group-hover:text-upside-black'}`}>
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xs font-display font-black uppercase tracking-widest opacity-50 mb-1">Email Us</h4>
                    <p className="text-2xl font-display font-bold">info@upsidepizza.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className={`p-4 rounded-2xl transition-colors ${isDarkMode ? 'bg-white/10 group-hover:bg-upside-yellow group-hover:text-upside-black' : 'bg-white/10 group-hover:bg-upside-yellow group-hover:text-upside-black'}`}>
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xs font-display font-black uppercase tracking-widest opacity-50 mb-1">Call Us</h4>
                    <p className="text-2xl font-display font-bold">(212) 555-0123</p>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[2.5rem] shadow-2xl transition-colors ${isDarkMode ? 'bg-white/5 text-white' : 'bg-white text-upside-black'}`}
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-display font-black uppercase tracking-widest opacity-50">Name</label>
                    <input type="text" className={`w-full border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-upside-red transition-all ${isDarkMode ? 'bg-white/10 placeholder:text-white/30' : 'bg-upside-offwhite'}`} placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-display font-black uppercase tracking-widest opacity-50">Email</label>
                    <input type="email" className={`w-full border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-upside-red transition-all ${isDarkMode ? 'bg-white/10 placeholder:text-white/30' : 'bg-upside-offwhite'}`} placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-display font-black uppercase tracking-widest opacity-50">Message</label>
                  <textarea rows={4} className={`w-full border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-upside-red transition-all resize-none ${isDarkMode ? 'bg-white/10 placeholder:text-white/30' : 'bg-upside-offwhite'}`} placeholder="What's on your mind?"></textarea>
                </div>
                <button className={`w-full py-5 rounded-2xl font-display font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-colors ${isDarkMode ? 'bg-upside-yellow text-upside-black hover:bg-white' : 'bg-upside-black text-white hover:bg-upside-red'}`}>
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-upside-black text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-upside-red p-1.5 rounded-full">
                  <Pizza className="text-white w-6 h-6" />
                </div>
                <span className="text-4xl font-display font-black tracking-tighter uppercase">Upside</span>
              </div>
              <p className="text-2xl font-display font-medium text-white/60 max-w-md mb-8">
                The best pizza in New York, flipped upside down. Join the sourdough revolution.
              </p>
              <div className="flex gap-4">
                <motion.a whileHover={{ y: -5 }} href="#" className="bg-white/10 p-3 rounded-full hover:bg-upside-red transition-colors">
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a whileHover={{ y: -5 }} href="#" className="bg-white/10 p-3 rounded-full hover:bg-upside-red transition-colors">
                  <Facebook className="w-6 h-6" />
                </motion.a>
                <motion.a whileHover={{ y: -5 }} href="#" className="bg-white/10 p-3 rounded-full hover:bg-upside-red transition-colors">
                  <Twitter className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
            
            <div>
              <h4 className="text-upside-yellow font-display font-black uppercase tracking-widest text-sm mb-6">Quick Links</h4>
              <ul className="space-y-4 font-display font-bold uppercase text-sm tracking-widest opacity-60">
                <li><a href="#menu" className="hover:opacity-100 transition-opacity">Menu</a></li>
                <li><a href="#locations" className="hover:opacity-100 transition-opacity">Locations</a></li>
                <li><a href="#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
                <li><a href="#merch" className="hover:opacity-100 transition-opacity">Merch</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-upside-yellow font-display font-black uppercase tracking-widest text-sm mb-6">Contact</h4>
              <ul className="space-y-4 font-display font-bold uppercase text-sm tracking-widest opacity-60">
                <li><a href="mailto:info@upsidepizza.com" className="hover:opacity-100 transition-opacity">info@upsidepizza.com</a></li>
                <li>(212) 555-0123</li>
                <li>Press Inquiries</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-display font-bold uppercase tracking-[0.2em] opacity-40">
            <span>© 2026 Upside Pizza. All Rights Reserved. Built by <a href="http://YasinForge.rf.gd" target="_blank" rel="noopener noreferrer" className="hover:text-upside-yellow transition-colors">YasinForge</a></span>
            <div className="flex gap-8">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles for Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}


