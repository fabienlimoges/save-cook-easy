import { motion } from "framer-motion";

const faqs = [
  {
    question: "Est-ce déjà disponible ?",
    answer: "On ouvre progressivement aux testeurs.",
  },
  {
    question: "Ça marche sur quoi ?",
    answer: "TikTok, Instagram, YouTube (shorts).",
  },
  {
    question: "C'est payant ?",
    answer: "Les premiers testeurs auront accès gratuitement.",
  },
];

export const FAQSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block text-3xl">🔒</span>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Questions fréquentes
          </h2>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-card p-6 shadow-card"
            >
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {faq.question}
              </h3>
              <p className="text-muted-foreground">→ {faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
