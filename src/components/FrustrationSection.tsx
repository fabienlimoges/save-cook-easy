import { motion } from "framer-motion";

export const FrustrationSection = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl">
            Tu vois une recette incroyable en vidéo…
          </h2>
          
          <div className="mb-8 space-y-4 text-xl text-muted-foreground">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              …tu la sauvegardes quelque part…
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl font-semibold text-foreground"
            >
              …et tu ne la retrouves <span className="text-primary">JAMAIS</span>.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="inline-block rounded-2xl bg-gradient-hero px-8 py-4"
          >
            <p className="text-xl font-bold text-primary-foreground sm:text-2xl">
              On va changer ça. ✨
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
