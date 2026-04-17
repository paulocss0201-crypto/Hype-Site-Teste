import { motion } from "motion/react";
import { AlertCircle, Clock, TrendingDown, Brain } from "lucide-react";

export default function PainPoints() {
  const points = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Não sabe o que postar",
      text: "A folha em branco é o seu maior inimigo. Você passa horas tentando ter uma ideia que nunca vem."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Falta de consistência",
      text: "Você começa animado, mas a rotina te engole e o perfil fica abandonado por semanas."
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Conteúdo sem estratégia",
      text: "Você posta por postar. Ganha curtidas, mas não vê a cor do dinheiro no final do mês."
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Desgaste mental",
      text: "Criar conteúdo do zero toda semana é exaustivo e drena sua energia para o que realmente importa."
    }
  ];

  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Se criar conteúdo hoje parece cansativo, confuso e inconsistente, <span className="text-brand-gray">o problema não é você</span>
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Você sabe que o Instagram pode ser uma vitrine poderosa, mas na prática, a maioria das pessoas trava. E enquanto isso, as vendas não acontecem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center mb-6">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                <p className="text-brand-gray leading-relaxed">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
