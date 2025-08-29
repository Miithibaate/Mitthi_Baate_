import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white p-6">
      {/* Header */}
      <header className="text-center mb-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-amber-900"
        >
          Mitthi Baate 🍫
        </motion.h1>
        <p className="text-lg text-amber-700 mt-2">
          Homemade Chocolates | Pure Veg | Premium Quality
        </p>
      </header>

      {/* Products */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          { name: "Classic Chocolate", price: "₹179", img: "/classic.jpg" },
          { name: "Dark Chocolate", price: "₹199", img: "/dark.jpg" },
          { name: "Milk Chocolate", price: "₹199", img: "/milk.jpg" },
          { name: "Crackle Chocolate", price: "₹209", img: "/crackle.jpg" },
          { name: "Butterscotch Chocolate", price: "₹209", img: "/butterscotch.jpg" },
          { name: "Dry Fruit Chocolate", price: "₹229", img: "/dryfruit.jpg" },
          { name: "Special Chocolate", price: "₹249", img: "/special.jpg" },
        ].map((product, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden">
              <Image
                src={product.img}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-semibold text-amber-800">
                  {product.name}
                </h3>
                <p className="text-lg text-amber-600 mt-1">{product.price}</p>
                <Button className="mt-3 w-full bg-amber-700 hover:bg-amber-800 text-white rounded-xl">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Contact */}
      <section className="text-center bg-amber-100 rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-amber-900 mb-2">Get in Touch</h2>
        <p className="text-lg text-amber-800 mb-2">
          📞 +91 7287044959 | ✉️ mitthibaate@gmail.com
        </p>
        <a
          href="https://instagram.com/mitthi_baate_"
          target="_blank"
          className="text-amber-700 underline font-medium"
        >
          Follow us on Instagram
        </a>
      </section>

      <footer className="text-center mt-8 text-sm text-amber-600">
        © {new Date().getFullYear()} Mitthi Baate. All Rights Reserved.
      </footer>
    </div>
  );
}
