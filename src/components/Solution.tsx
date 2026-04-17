import { motion } from "motion/react";
import { CheckCircle2, Cpu, Users, Calendar } from "lucide-react";

export default function Solution() {
  const features = [
    "Entender melhor quem é seu público",
    "Criar ideias com direção estratégica",
    "Produzir conteúdos que prendem atenção",
    "Desenvolver carrosséis com lógica",
    "Melhorar seus stories e conexão",
    "Organizar calendário e pauta"
  ];

  return (
    <section id="funcionalidades" className="py-12 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-white/[0.03] blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Foi por isso que criamos a <span className="text-brand-gray">Hype Content</span>
            </h2>
            <p className="text-xl text-brand-gray mb-6 leading-relaxed">
              A Hype Content é um sistema com agentes de IA treinados para ajudar você a criar conteúdos com mais clareza, estratégia e poder de conversão.
            </p>
            <p className="text-lg text-brand-gray mb-10">
              Em vez de depender de inspiração, você passa a contar com um verdadeiro time de inteligência trabalhando com você 24/7.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-left max-w-2xl mx-auto">
              {features.map((feature, i) => (
                <motion.div 
                   key={i} 
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 + (i * 0.1) }}
                   className="flex items-center gap-3"
                >
                   <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                   <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
