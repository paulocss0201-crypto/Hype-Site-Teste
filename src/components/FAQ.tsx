import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-white transition-colors group"
      >
        <span className="text-lg md:text-xl font-semibold pr-8">{question}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-white text-black border-white' : 'group-hover:border-white/30'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-brand-gray leading-relaxed text-base md:text-lg max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "O que é exatamente a Hype Content?",
      answer: "A Hype Content é um ecossistema completo de inteligência artificial focado em criadores e empreendedores. Não é apenas uma ferramenta de texto, mas um time de agentes de IA treinados especificamente para cuidar de cada etapa do seu conteúdo: desde o mapeamento do público e criação de ideias estratégicas até o roteiro detalhado e análise de perfil."
    },
    {
      question: "Preciso ter conhecimento técnico em IA?",
      answer: "Absolutamente nenhum. A Hype Content foi desenhada para ser intuitiva. Você conversa com os agentes como se estivesse falando com um assistente humano. O sistema cuida da parte complexa da engenharia de prompts nos bastidores para que você receba apenas resultados prontos para uso."
    },
    {
      question: "O conteúdo gerado pela IA não fica 'robotizado'?",
      answer: "A grande diferença da Hype Content é o treinamento especializado dos nossos agentes. Eles não geram textos genéricos. Eles utilizam frameworks de copywriting e psicologia de vendas reais, adaptando-se ao seu tom de voz e nicho para garantir que o conteúdo pareça humano, autêntico e focado em gerar conexão."
    },
    {
      question: "Funciona para qualquer nicho de mercado?",
      answer: "Sim! Como o primeiro passo de quase todos os nossos processos é o Agente Mapeador de Público, ele aprende sobre o seu mercado específico antes de sugerir conteúdos. Já temos usuários de nichos como advocacia, estética, marketing digital, artesanato, consultoria e muitos outros colhendo resultados."
    },
    {
      question: "O acesso é vitalício mesmo?",
      answer: "Sim, no momento estamos com uma oferta especial de pagamento único. Isso significa que você paga uma vez e tem acesso aos agentes para sempre, sem mensalidades ou taxas escondidas enquanto o programa estiver ativo. É um investimento no seu negócio que se paga na primeira pauta estratégica criada."
    }
  ];

  return (
    <section id="faq" className="py-12 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gray mb-4 block">Dúvidas Frequentes</span>
            <h2 className="text-3xl md:text-5xl font-bold">Perguntas comuns</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
