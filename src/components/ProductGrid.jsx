import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import dress3 from "@/assets/dress-3.jpg";
import dress4 from "@/assets/dress-4.jpg";
import dress5 from "@/assets/dress-5.jpg";
import dress6 from "@/assets/dress-6.jpg";

const products = [
  {
    id: 1,
    name: "Rose Silk Midi Dress",
    price: 189.99,
    image: dress1,
    category: "New In",
  },
  {
    id: 2,
    name: "Noir Evening Gown",
    price: 299.99,
    image: dress2,
    category: "Evening",
  },
  {
    id: 3,
    name: "Cloud Maxi Dress",
    price: 229.99,
    image: dress3,
    category: "Bestseller",
  },
  {
    id: 4,
    name: "Burgundy Cocktail Dress",
    price: 169.99,
    image: dress4,
    category: "Evening",
  },
  {
    id: 5,
    name: "Sage Summer Dress",
    price: 149.99,
    image: dress5,
    category: "Casual",
  },
  {
    id: 6,
    name: "Navy Elegance Dress",
    price: 249.99,
    image: dress6,
    category: "Evening",
  },
];

const ProductGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium tracking-widest text-primary uppercase mb-3"
          >
            Featured Collection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Shop Our Favorites
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Carefully curated pieces that embody sophistication and style. Each dress is designed to make you feel confident and beautiful.
          </motion.p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
