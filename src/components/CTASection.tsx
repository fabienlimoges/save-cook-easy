import { motion } from "framer-motion";
import { EmailSignupForm } from "./EmailSignupForm";

export const CTASection = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-xl flex-col items-center text-center"
        >
          <span className="mb-4 text-4xl">🚀</span>
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
            Les premiers accès sont limités.
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Rejoins la liste maintenant 👇
          </p>
          <EmailSignupForm variant="secondary" />
        </motion.div>
      </div>
    </section>
  );
};
