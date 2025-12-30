import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { z } from "zod";

const emailSchema = z.string().email("Entre une adresse email valide").max(255);

interface EmailSignupFormProps {
  variant?: "hero" | "secondary";
}

export const EmailSignupForm = ({ variant = "hero" }: EmailSignupFormProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      toast.error("Entre une adresse email valide");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("waitlist")
        .insert({ email: email.trim().toLowerCase() });

      if (error) {
        if (error.code === "23505") {
          toast.info("Tu es déjà inscrit(e) ! On te contacte bientôt.");
        } else {
          throw error;
        }
      } else {
        setIsSuccess(true);
        toast.success("Tu es sur la liste ! 🍝");
        setEmail("");
      }
    } catch (error) {
      toast.error("Oups, une erreur est survenue. Réessaie !");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-3 rounded-2xl bg-accent/10 p-6 text-center"
      >
        <span className="text-4xl">🎉</span>
        <p className="text-lg font-semibold text-foreground">
          Tu es sur la liste Save2Cook !
        </p>
        <p className="text-sm text-muted-foreground">
          On t'enverra l'accès dans les prochains jours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="ton@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-14 flex-1 rounded-xl border-2 border-border bg-background px-5 text-base placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
        />
        <Button
          type="submit"
          variant={variant === "hero" ? "cta" : "hero"}
          size="lg"
          disabled={isLoading}
          className="h-14 whitespace-nowrap"
        >
          {isLoading ? "..." : "Je veux l'essayer"}
        </Button>
      </div>
    </form>
  );
};
