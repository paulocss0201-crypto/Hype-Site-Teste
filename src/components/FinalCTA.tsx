import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Seu próximo nível de conteúdo pode começar hoje
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-gray mb-12 max-w-2xl mx-auto"
          >
            Acesse agora e tenha agentes de IA que ajudam você a criar com mais clareza, constância e intenção de venda.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="https://checkout.payhypecontent.com.br/VCCL1O8SCQ5M"
              className="bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-gray transition-all flex items-center justify-center gap-3 mx-auto shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Começar agora
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
