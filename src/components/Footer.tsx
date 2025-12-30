import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-foreground py-12 text-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h3 className="mb-2 text-2xl font-bold">Save2Cook</h3>
          <p className="mb-4 text-sm opacity-70">
            Regarde. Clique. Cuisine.
          </p>
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Save2Cook. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
