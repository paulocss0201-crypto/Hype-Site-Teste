import { motion } from "motion/react";
import { Check, XCircle } from "lucide-react";

export default function Benefits() {
  const benefits = [
    { title: "Mais clareza", desc: "Você deixa de se perguntar todos os dias o que postar." },
    { title: "Mais estratégia", desc: "Cada conteúdo passa a ter função e objetivo claro." },
    { title: "Mais consistência", desc: "Fica muito mais fácil manter uma presença ativa e organizada." },
    { title: "Mais autoridade", desc: "Seu perfil começa a comunicar valor de forma inteligente." },
    { title: "Mais conversão", desc: "Conteúdos que não só engajam, mas movimentam o público." },
    { title: "Mais agilidade", desc: "O que levava horas passa a ser construído com velocidade." }
  ];

  const target = [
    "Quer produzir conteúdo com mais constância",
    "Sente que tem potencial, mas falta organização",
    "Quer parar de improvisar na frente da câmera",
    "Deseja transformar o perfil em ferramenta de vendas",
    "Quer usar IA de forma prática e aplicada",
    "Precisa de uma base inteligente para criar"
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-12"
            >
              O que muda quando você passa a usar o <span className="text-brand-gray">Hype Content</span>
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-2"
                >
                  <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                  <p className="text-sm text-brand-gray leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-2xl rounded-full" />
            
            <h2 className="text-3xl font-bold mb-10">O Hype Content é para você que…</h2>
            <div className="space-y-6 mb-12">
              {target.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-brand-gray font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 text-red-500/80">
                <XCircle className="w-6 h-6 shrink-0" />
                <p className="text-sm font-bold uppercase tracking-wider">
                  Não é para quem quer continuar postando sem direção e esperando resultado por acaso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
