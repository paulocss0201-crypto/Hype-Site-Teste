import { motion } from "motion/react";
import { Check, Sparkles, Zap } from "lucide-react";

export default function Pricing() {
  return (
    <section id="planos" className="py-12 bg-black text-white relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
        HYPE CONTENT
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Não perca mais tempo!
          </motion.h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            Quanto custaria montar isso do jeito tradicional? Com a Hype Content, você acessa um sistema pronto por um valor extremamente acessível.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Main Plan - Centralized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="p-10 rounded-[2.5rem] bg-white text-black flex flex-col relative shadow-2xl"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              Melhor Oferta
            </div>

            <div className="mb-8 text-center pt-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="text-3xl font-bold">Hype Plus</h3>
                <Zap className="w-6 h-6 text-black fill-black" />
              </div>
              <p className="text-brand-gray text-sm md:text-base">A solução mais completa para transformar seu perfil em uma máquina de vendas.</p>
            </div>

            <div className="mb-8 text-center bg-black/5 p-6 rounded-3xl">
              <div className="text-sm font-bold text-brand-gray line-through mb-1">R$ 128,00</div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-7xl font-bold tracking-tighter">47,90</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gray mt-2">Pagamento único • Acesso vitalício</p>
            </div>

            <div className="space-y-4 mb-10 flex-1">
              {[
                "10 agentes de IA dedicados",
                "Sistema para organizar os conteúdos",
                "Manual de prompts (bônus)",
                "Checklist de perfil (bônus)",
                "1 Agente surpresa (bônus)",
                "Acesso vitálicio",
                "Pagamento único"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center">
                    <Check className="w-3 h-3 text-black" />
                  </div>
                  <span className="text-base font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://checkout.payhypecontent.com.br/VCCL1O8SCQ5M"
              className="w-full py-5 rounded-full bg-black text-white font-bold text-lg hover:bg-brand-gray transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] text-center"
            >
              Quero a Hype Plus
            </a>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-brand-gray text-sm font-medium">
            Pagamento seguro via criptografia de ponta a ponta. Receba seu acesso imediatamente após a confirmação.
          </p>
        </div>
      </div>
    </section>
  );
}
