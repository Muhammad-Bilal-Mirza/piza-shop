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
  Star
} from "lucide-react";
import { useRef } from "react";

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
  { name: "Times Square", address: "598 8th Ave, New York, NY 10018", hours: "11AM - 2AM" },
  { name: "Nolita", address: "51 Spring St, New York, NY 10012", hours: "11AM - 12AM" },
  { name: "Williamsburg", address: "145 Bedford Ave, Brooklyn, NY 11211", hours: "11AM - 3AM" }
];

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden selection:bg-upside-yellow selection:text-upside-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-upside-offwhite/80 backdrop-blur-md border-b border-upside-black/5">
        <div className="flex items-center gap-2 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-upside-red p-1.5 rounded-full"
          >
            <Pizza className="text-white w-6 h-6" />
          </motion.div>
          <span className="text-2xl font-display font-black tracking-tighter uppercase">Upside</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-display font-semibold uppercase text-sm tracking-widest">
          <a href="#menu" className="hover:text-upside-red transition-colors">Menu</a>
          <a href="#locations" className="hover:text-upside-red transition-colors">Locations</a>
          <a href="#about" className="hover:text-upside-red transition-colors">About</a>
          <a href="#contact" className="hover:text-upside-red transition-colors">Contact</a>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-upside-black text-white px-6 py-2.5 rounded-full font-display font-bold uppercase text-sm tracking-wider hover:bg-upside-red transition-colors flex items-center gap-2"
        >
          Order Now <ShoppingBag className="w-4 h-4" />
        </motion.button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden bg-upside-offwhite">
        {/* Immersive Background Image */}
        <div className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1594000199163-2479a48df418?q=80&w=2000&auto=format&fit=crop" 
            alt="Busy Pizzeria" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-upside-offwhite/80" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-upside-red font-display font-black uppercase tracking-[0.3em] text-sm"
              >
                More Than Just a Slice
              </motion.span>
              <div className="h-[2px] w-12 bg-upside-red/30" />
            </div>
            <h1 className="text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-8 text-upside-black">
              Very <br />
              <span className="text-upside-red">Special</span> <br />
              <span className="text-stroke text-upside-black">Pizza</span>
            </h1>
            <p className="text-xl md:text-2xl font-display font-medium max-w-lg text-upside-black/70 mb-12">
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
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-4">Signature <br /><span className="text-stroke text-upside-black">Pies</span></h2>
            <p className="text-lg text-upside-black/60 max-w-md">Each pie is crafted with our 72-hour fermented sourdough and topped with the freshest ingredients.</p>
          </div>
          <button className="flex items-center gap-2 font-display font-bold uppercase tracking-widest hover:text-upside-red transition-colors group">
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
                <h3 className="text-2xl font-black uppercase tracking-tight">{pizza.name}</h3>
                <span className="text-xl font-display font-bold text-upside-red">{pizza.price}</span>
              </div>
              <p className="text-upside-black/60 leading-relaxed">{pizza.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="bg-upside-yellow py-24 px-6">
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
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-upside-red rounded-full -z-0 flex items-center justify-center text-white font-display font-black uppercase text-center text-sm leading-tight rotate-12">
              72 Hour <br /> Sourdough
            </div>
          </div>
          
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-8">What Makes Us <br /><span className="text-white">Upside</span></h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-upside-black p-4 rounded-2xl h-fit">
                  <Pizza className="text-upside-yellow w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase mb-2">Sourdough Crust</h4>
                  <p className="text-upside-black/70">Our dough is naturally leavened for 72 hours, resulting in a crust that's light, airy, and packed with flavor.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-upside-black p-4 rounded-2xl h-fit">
                  <Clock className="text-upside-yellow w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase mb-2">Open Late</h4>
                  <p className="text-upside-black/70">Whether it's a lunch rush or a 2 AM craving, we're serving hot slices when you need them most.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-upside-black p-4 rounded-2xl h-fit">
                  <MapPin className="text-upside-yellow w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase mb-2">New York Heart</h4>
                  <p className="text-upside-black/70">Born in the streets of NYC, we bring that authentic energy to every single pie we bake.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black uppercase text-center mb-16">Find <span className="text-upside-red">Us</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LOCATIONS.map((loc, i) => (
            <motion.div 
              key={loc.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-upside-offwhite border-2 border-upside-black p-8 rounded-3xl hover:bg-upside-black hover:text-white transition-all group"
            >
              <h3 className="text-3xl font-black uppercase mb-4">{loc.name}</h3>
              <p className="mb-6 opacity-70 font-medium">{loc.address}</p>
              <div className="flex items-center gap-2 text-sm font-display font-bold uppercase tracking-widest text-upside-red group-hover:text-upside-yellow">
                <Clock className="w-4 h-4" /> {loc.hours}
              </div>
              <button className="mt-8 w-full border border-current py-3 rounded-xl font-display font-bold uppercase tracking-widest text-sm">
                Get Directions
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-upside-red text-white overflow-hidden relative">
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
                  <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-upside-yellow group-hover:text-upside-black transition-colors">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xs font-display font-black uppercase tracking-widest opacity-50 mb-1">Email Us</h4>
                    <p className="text-2xl font-display font-bold">info@upsidepizza.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-upside-yellow group-hover:text-upside-black transition-colors">
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
              className="bg-white p-10 rounded-[2.5rem] text-upside-black shadow-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-display font-black uppercase tracking-widest opacity-50">Name</label>
                    <input type="text" className="w-full bg-upside-offwhite border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-upside-red transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-display font-black uppercase tracking-widest opacity-50">Email</label>
                    <input type="email" className="w-full bg-upside-offwhite border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-upside-red transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-display font-black uppercase tracking-widest opacity-50">Message</label>
                  <textarea rows={4} className="w-full bg-upside-offwhite border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-upside-red transition-all resize-none" placeholder="What's on your mind?"></textarea>
                </div>
                <button className="w-full bg-upside-black text-white py-5 rounded-2xl font-display font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-upside-red transition-colors">
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
            <span>© 2026 Upside Pizza. All Rights Reserved.</span>
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


