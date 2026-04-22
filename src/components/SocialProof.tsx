import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function SocialProof() {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Empreendedora Digital",
      text: "A Hype Content mudou meu jogo. Eu levava dias para planejar uma semana, agora faço em minutos com os agentes.",
      avatar: "AS"
    },
    {
      name: "Lucas Oliveira",
      role: "Social Media",
      text: "Uso com meus clientes e a qualidade estratégica subiu muito. Os carrosséis que a IA sugere são impecáveis.",
      avatar: "LO"
    },
    {
      name: "Mariana Costa",
      role: "Criadora de Conteúdo",
      text: "Nunca mais tive bloqueio criativo. Os agentes parecem que leem minha mente e a do meu público.",
      avatar: "MC"
    }
  ];

  return (
    <section className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            ))}
            <span className="text-xs font-bold ml-2">4.9/5 de satisfação</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Quem usa confia</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl relative glow-hover"
            >
              <Quote className="absolute top-6 right-8 w-8 h-8 text-white/5" />
              <p className="text-brand-gray mb-8 italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-brand-gray">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
