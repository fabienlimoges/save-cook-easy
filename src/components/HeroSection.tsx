import { motion } from "framer-motion";
import { EmailSignupForm } from "./EmailSignupForm";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-subtle">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 top-20 text-8xl opacity-20 sm:text-9xl"
        >
          🍝
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 bottom-40 text-7xl opacity-15 sm:text-8xl"
        >
          🥗
        </motion.div>
        <motion.div
          animate={{ y: [-5, 15, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-10 bottom-20 text-6xl opacity-20 sm:right-40 sm:text-7xl"
        >
          🍳
        </motion.div>
      </div>

      <div className="container relative mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Bientôt disponible
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Save2Cook
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-2xl font-semibold text-gradient sm:text-3xl"
        >
          Regarde. Clique. Cuisine.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 max-w-xl text-lg text-muted-foreground sm:text-xl"
        >
          Ne perds plus jamais une recette vue sur TikTok ou Instagram.
          <br />
          <span className="font-medium text-foreground">
            1 clic → on la transforme en fiche prête à cuisiner.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-md"
        >
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            👉 Rejoins la liste d'accès en avant-première
          </p>
          <EmailSignupForm variant="hero" />
        </motion.div>
      </div>
    </section>
  );
};
