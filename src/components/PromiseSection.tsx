import { motion } from "framer-motion";
import { Share2, Sparkles, ChefHat, FolderOpen } from "lucide-react";

const features = [
  {
    icon: Share2,
    text: "Tu partages la vidéo en 1 clic",
  },
  {
    icon: Sparkles,
    text: "On extrait ingrédients + étapes automatiquement",
  },
  {
    icon: ChefHat,
    text: "Tu cuisines sans re-regarder la vidéo",
  },
  {
    icon: FolderOpen,
    text: "Et tu retrouves tout au même endroit",
  },
];

export const PromiseSection = () => {
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
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Avec <span className="text-gradient">Save2Cook</span> :
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-3xl gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 rounded-2xl bg-card p-6 shadow-card transition-all duration-300 hover:shadow-soft"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <p className="text-lg font-medium text-foreground sm:text-xl">
                📌 {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
