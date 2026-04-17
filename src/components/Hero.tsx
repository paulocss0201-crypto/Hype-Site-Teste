import { motion } from "motion/react";
import { ArrowRight, Sparkles, Zap, Target, BarChart3 } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-12 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0, 0.71, 0.2, 1.01] 
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-gray mb-8"
          >
            <Sparkles className="w-3 h-3 text-white" />
            <span>Inteligência Artificial para Criadores</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tighter text-glow"
          >
            Transforme seu perfil em uma <span className="text-white">máquina de vendas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-brand-gray mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Tenha um time de agentes trabalhando 24/7 para gerar conteúdos e estratégia para o seu perfil crescer, engajar e vender.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a 
              href="https://checkout.payhypecontent.com.br/VCCL1O8SCQ5M"
              className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-gray transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Quero acessar agora
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#planos"
              className="w-full sm:w-auto bg-transparent border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all text-center"
            >
              Ver oferta
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-medium text-brand-gray uppercase tracking-widest"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              Pagamento único
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              Acesso vitalício
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
