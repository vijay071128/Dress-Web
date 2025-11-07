import { motion } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ProductCard = ({ name, price, image, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg bg-muted">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
        />

        {/* Favorite Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isFavorite ? "fill-primary text-primary" : "text-foreground"
            }`}
          />
        </motion.button>

        {/* Quick Add Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          className="absolute bottom-4 left-4 right-4"
        >
          <Button className="w-full group/btn">
            <ShoppingBag className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
            Quick Add
          </Button>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-lg font-serif font-semibold text-foreground">
          ${price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
