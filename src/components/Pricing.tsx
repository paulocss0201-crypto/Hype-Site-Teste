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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {/* Plano Basic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-white/5 border border-white/10 text-white flex flex-col h-fit"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Plano Basic</h3>
              <p className="text-brand-gray text-sm">O essencial para começar a usar o poder da IA.</p>
            </div>

            <div className="mb-8 bg-white/5 p-6 rounded-2xl flex flex-col items-start">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold">R$</span>
                <span className="text-5xl font-bold tracking-tighter">19,90</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-brand-gray">Pagamento único</p>
                <span className="text-brand-gray">•</span>
                <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-brand-gray">Acesso vitalício</p>
              </div>
            </div>

            <div className="space-y-4 mb-10 flex-1">
              {[
                "10 agentes de IA",
                "Manual de prompt",
                "Checklist de perfil (Bônus)"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://checkout.payhypecontent.com.br/1NVDY0ZJ5V4"
              className="w-full py-4 rounded-full border border-white text-white font-bold text-center hover:bg-white hover:text-black transition-all"
            >
              Comprar Plano Basic
            </a>
          </motion.div>

          {/* Plano Hyper - Destaque */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1.05 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-white text-black flex flex-col relative shadow-2xl z-20"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              Oferta Recomendada
            </div>

            <div className="mb-8 pt-4">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-3xl font-bold">Plano Hyper</h3>
                <Zap className="w-6 h-6 text-black fill-black" />
              </div>
              <p className="text-brand-gray text-sm font-medium">A experiência completa da Hype Content com todos os bônus exclusivos.</p>
            </div>

            <div className="mb-8 bg-black/5 p-6 rounded-3xl flex flex-col items-start">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-7xl font-bold tracking-tighter">27,90</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gray">Pagamento único</p>
                <span className="text-brand-gray">•</span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gray">Acesso vitalício</p>
              </div>
            </div>

            <div className="space-y-4 mb-10 flex-1">
              {[
                "10 agentes de IA",
                "Manual de prompts",
                "Checklist de perfil (Bônus)",
                "Fluxo para organizar os conteúdos (Bônus)",
                "+1 agente gerador de imagem (Bônus)",
                "Lista com 50 ganchos mais virais (Bônus)",
                "Curso edição de vídeos profissionais (Bônus)"
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
              Comprar Plano Hyper
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
