import { motion } from "motion/react";
import { 
  Search, Lightbulb, Layout, MessageSquare, 
  UserCircle, Calendar, MousePointer2, FileText, 
  BarChart, Video, Plus 
} from "lucide-react";

export default function Agents() {
  const baseAgents = [
    {
      icon: <Search className="w-5 h-5" />,
      title: "Agente Mapeador de Público",
      desc: "Descobre dores, desejos, medos e o que seu público realmente precisa ouvir."
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Agente de Ideias com Objetivo",
      desc: "Cria ideias com direção estratégica para alcance, engajamento ou conversão."
    },
    {
      icon: <Layout className="w-5 h-5" />,
      title: "Agente de Carrosséis Estratégicos",
      desc: "Desenvolve carrosséis pensados para prender atenção e gerar retenção."
    },
    {
      icon: <Video className="w-5 h-5" />,
      title: "Roteirista de reels",
      desc: "Cria roteiros magnéticos para reels que aumentam seu alcance e prendem a atenção do início ao fim."
    }
  ];

  const complementaryAgents = [
    { 
      icon: <MessageSquare className="w-5 h-5" />, 
      title: "Stories Estratégicos",
      desc: "Cria narrativas que aumentam o engajamento e a proximidade com seu público diariamente."
    },
    { 
      icon: <UserCircle className="w-5 h-5" />, 
      title: "Diagnóstico de Perfil",
      desc: "Analisa sua bio, fotos e destaques para transformar seu perfil em uma vitrine magnética."
    },
    { 
      icon: <Calendar className="w-5 h-5" />, 
      title: "Calendário Estratégico",
      desc: "Organiza suas pautas em um cronograma inteligente para que você nunca mais se perca."
    },
    { 
      icon: <MousePointer2 className="w-5 h-5" />, 
      title: "CTA e Conversão",
      desc: "Cria chamadas para ação irresistíveis que transformam seguidores em clientes reais."
    },
    { 
      icon: <FileText className="w-5 h-5" />, 
      title: "Legendas Estratégicas",
      desc: "Desenvolve textos persuasivos para seus posts que aumentam os comentários e salvamentos."
    },
    { 
      icon: <BarChart className="w-5 h-5" />, 
      title: "Análise de Performance",
      desc: "Ajuda você a entender quais métricas realmente importam para o crescimento do seu perfil."
    }
  ];

  return (
    <section id="como-funciona" className="py-12 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Conheça o time que vai trabalhar no seu conteúdo
          </motion.h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            Cada agente foi treinado para cumprir uma função específica dentro da sua operação de conteúdo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center text-sm">01</div>
              Agentes Base
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {baseAgents.map((agent, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-black border border-white/5 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {agent.icon}
                  </div>
                  <h4 className="font-bold mb-2 text-white">{agent.title}</h4>
                  <p className="text-xs text-brand-gray leading-relaxed">{agent.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center text-sm">02</div>
              Agentes Complementares
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {complementaryAgents.map((agent, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col gap-2 p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-white text-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {agent.icon}
                    </div>
                    <span className="text-sm font-bold text-white">{agent.title}</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-brand-gray leading-relaxed pl-11 -mt-2">
                    {agent.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1">
            <h4 className="text-2xl font-bold mb-2">Um time de inteligência ao seu dispor</h4>
            <p className="text-brand-gray">Você deixa de criar conteúdo no escuro e passa a operar com clareza, consistência e intenção.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
