import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-black fill-black" />
              </div>
              <span className="text-2xl font-sans font-extrabold tracking-tight">Hype Content</span>
            </div>
            <p className="text-brand-gray max-w-sm leading-relaxed">
              Transformando perfis comuns em máquinas de conteúdo e vendas através da inteligência artificial aplicada.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white">Navegação</h4>
            <ul className="space-y-4 text-sm text-brand-gray">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Oferta</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-gray">
          <div>© 2026 Hype Content. Todos os direitos reservados.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
