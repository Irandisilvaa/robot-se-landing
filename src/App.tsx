import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, ChevronDown, ChevronUp, Cpu, Rocket, Users, Presentation, ShieldCheck, Ticket, MessageCircle, ExternalLink, Bot } from 'lucide-react';

// === DADOS EXATOS DA PROGRAMAÇÃO ATUALIZADA (COM A COMPETIÇÃO) ===
const programacaoDia1 = [
  { id: 101, horario: "08:00 — 09:00", atividade: "Credenciamento dos participantes e expositores", local: "Hall Principal", detalhe: "Chegada, recepção e entrega das credenciais para todos os participantes e equipes." },
  { id: 102, horario: "09:00 — 09:30", atividade: "Abertura Institucional Oficial da RoboT-SE 2026", local: "Palco Principal", detalhe: "Momento oficial de abertura com as autoridades, organizadores e instituições parceiras." },
  { id: 103, horario: "09:30 — 10:00", atividade: "Apresentação Geral da Feira e da Programação Oficial", local: "Palco Principal", detalhe: "Apresentação do mapa do evento, arenas e orientações gerais." },
  { id: 104, horario: "10:00 — 10:30", atividade: "Apresentação e Divulgação da Olimpíada Brasileira de Robótica (OBR)", local: "Palco Principal", detalhe: "Tudo o que você precisa saber sobre a OBR e como participar." },
  { id: 105, horario: "10:30 — 12:00", atividade: "Palestra Magna — “Semicondutores, FPGA, Robótica e Minecraft”", local: "Palco Principal", detalhe: "Com Alcides S. Costa. Uma imersão nas conexões entre hardware, jogos e robótica educacional." },
  { id: 106, horario: "13:30 — 15:00", atividade: "Oficina Maker: Missão Espacial (Turma 1 — 10 vagas)", local: "Sala 203 — DID VII", detalhe: "Atividade prática de montagem e ideação. Vagas limitadas." },
  { id: 107, horario: "13:30 — 17:00", atividade: "Exposição Tecnológica", local: "Área de Exposição", detalhe: "Visitação livre aos estandes, projetos de escolas, universidades e startups." },
  { id: 111, horario: "14:00 — 17:00", atividade: "Circuito Aberto (Exibição Livre de Robótica)", local: "Arena RoboT-SE", detalhe: "Pista liberada para robôs da comunidade, testes de projetos independentes e demonstrações tecnológicas não-competitivas (Sem restrições de Hardware)." },
  { id: 108, horario: "15:30 — 16:30", atividade: "Design Thinking e solução de problemas com foco no usuário", local: "Sala 206 — Arena de Palestras", detalhe: "Com Heli Lucas Santos Pinto. Metodologias ágeis para criação de projetos relevantes." },
  { id: 109, horario: "15:30 — 17:00", atividade: "Oficina Maker: Missão Espacial (Turma 2 — 10 vagas)", local: "Sala 203 — DID VII", detalhe: "Segunda turma da atividade prática de montagem e ideação." },
  { id: 110, horario: "16:00 — 16:30", atividade: "Arborização Inteligente utilizando tecnologia", local: "Sala 202 — Arena Científica", detalhe: "Com Júlio Gabriel Alves Monteiro. Como a tecnologia pode auxiliar o meio ambiente." },
  { id: 111, horario: "16:30", atividade: "Encerramento da Exposição Tecnológica", local: "Palco Principal", detalhe: "Encerramento oficial do primeiro dia da RoboT-SE" },
];

const programacaoDia2 = [
  { id: 200, horario: "08:00 — 09:00", atividade: "Distribuição dos kits de pista, credenciamento e homologação dos robôs da competição oficial.", local: "Sala 206 — DID VII", detalhe: "" },
  { id: 201, horario: "08:30 — 09:00", atividade: "Projeto de redes e automação em robótica: exemplos industriais", local: "Sala 202 — Arena Científica", detalhe: "Com Rafael Lima Dantas. Apresentação de pesquisa e resultados no campo de Projeto de redes e automação em robótica para o âmbito industrial." },
  { id: 207, horario: "09:00 — 12:00", atividade: "Treinos Livres e Calibração (Seguidor de Linha)", local: "Arena RoboT-SE", detalhe: "Pista aberta exclusivamente para as equipes oficiais realizarem testes práticos, calibração de sensores e depuração de código com o Kit CoreTech." },
  { id: 203, horario: "11:00 — 12:00", atividade: "Oportunidades de inovar na robótica — Pesquisa e Startups", local: "Auditório 205 — DID VII", detalhe: "Com João Pedro Santana Silva Santos. Os caminhos do ecossistema de inovação e negócios." },
  { id: 211, horario: "12:00 — 13:30", atividade: " Intervalo para almoço.", local: "Livre", detalhe: "" },
  { id: 204, horario: "13:30 — 15:00", atividade: "Oficina Maker: Missão Espacial (Turma 3 — 10 vagas)", local: "Sala 203 — DID VII", detalhe: "Terceira e última turma da oficina prática." },
  { id: 208, horario: "13:30 — 15:00", atividade: "Últimos Treinos Livres e Calibração", local: "Arena RoboT-SE", detalhe: "Reta final para calibração dos robôs na pista antes da tomada de tempo." },
  { id: 205, horario: "15:00 — 17:30", atividade: "Competição Oficial - Seguidor de Linha", local: "Arena RoboT-SE", detalhe: "Disputa oficial! Tomada de tempo individual em 3 rodadas consecutivas no formato de Melhor Volta, utilizando exclusivamente o Kit SiriBots." },
  { id: 206, horario: "17:30 — 18:30", atividade: "Cerimônia de Encerramento e Premiação", local: "Palco Principal", detalhe: "Entrega do Troféu de Campeão, Medalhas e devolução compulsória dos kits. Encerramento oficial do evento." },
];

// === EXPOSITORES ===
const expositores = [
  { nome: "Universidade Federal de Sergipe (UFS)", categoria: "Instituição de Ensino" },
  { nome: "Codepacce", categoria: "Empresa" },
  { nome: "C. E. Deputado Joaldo Vieira Barbosa", categoria: "Escola" },
  { nome: "Olimpíada Brasileira de Robótica (OBR)", categoria: "Projeto Institucional" },
  { nome: "IFBA — Campus Euclides da Cunha", categoria: "Instituição Federal" },
  { nome: "C. E. Leonardo Gomes de Carvalho Leite", categoria: "Escola" },
  { nome: "Instituto Federal de Sergipe (IFS)", categoria: "Instituição Federal" },
  { nome: "Colégio Estadual Frei Inocêncio", categoria: "Escola" },
  { nome: "Centro de Excelência Profº João Costa", categoria: "Escola" },
  { nome: "MelanoFree", categoria: "Grupo de Pesquisa" },
  { nome: "FonCog", categoria: "Startup" },
  { nome: "Grupo de Pesquisa em Robótica — UFS", categoria: "Grupo de Pesquisa" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('dia1');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const currentSchedule = activeTab === 'dia1' ? programacaoDia1 : programacaoDia2;

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-slate-50">
      
      {/* HERO SECTION */}
      <header className="bg-robotNavy relative overflow-hidden py-32 flex flex-col items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="absolute -top-32 -left-32 opacity-10 text-robotYellow"
        >
          <Cpu size={500} />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center px-4 w-full max-w-5xl"
        >
          <div className="w-full flex justify-center mb-8">
             <img src="/logo2.png" alt="Logo RoboT-SE 2026" className="w-full max-w-3xl h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
          </div>

          <h1 className="text-white text-xl md:text-3xl font-light tracking-wide mt-8">
            Programação Oficial — <span className="text-robotYellow font-bold">RoboT-SE 2026</span>
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-6 text-robotGreen font-bold text-sm md:text-lg bg-white inline-flex px-6 py-3 rounded-full shadow-lg">
            <span className="flex items-center gap-2">
              <Calendar size={20} /> 01 e 02 de Julho de 2026
            </span>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=Didática+VII,+Av.+Marechal+Rondon,+s/n+-+Jardim+Rosa+Elze,+São+Cristóvão+-+SE,+49100-000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-l-2 border-gray-200 pl-4 md:pl-6 hover:text-robotNavy hover:underline transition-all cursor-pointer"
              title="Ver no Google Maps"
            >
              <MapPin size={20} /> DID VII - UFS, São Cristóvão
            </a>
          </div>
        </motion.div>
      </header>

      {/* SEÇÃO DE INSCRIÇÕES E INGRESSOS (CORES ATUALIZADAS E VIBRANTES) */}
      <section className="relative py-20 bg-gradient-to-br from-robotGreen to-teal-900 overflow-hidden">
        {/* Fundo decorativo animado */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute right-10 top-10 opacity-10 text-white"
        >
          <Bot size={150} />
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase drop-shadow-md">Garanta sua Participação</h2>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">As vagas são limitadas. Escolha a sua categoria abaixo e garanta sua presença no maior evento de robótica de Sergipe!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* CARD 1 - PÚBLICO GERAL E COMPETIDORES (SYMPLA) */}
            <motion.div 
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border-b-8 border-robotYellow flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 text-robotYellow">
                  <Ticket size={32} />
                </div>
                <h3 className="text-2xl font-black text-robotNavy mb-3">Participante & Competidor</h3>
                <p className="text-gray-600 mb-6">
                  Ingressos para o público geral assistir às palestras, visitar os estandes e para as equipes que vão competir no <strong>Seguidor de Linha Oficial</strong>.
                </p>
              </div>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.sympla.com.br/evento/robot-se-feira-sergipana-de-inovacao-em-robotica/3464453?_gl=1*1jsokqz*_gcl_au*MzA2NTYxODA5LjE3ODIxNDQ1NDUuMTA1NDc5MjE3LjE3ODIxNDQ1OTcuMTc4MjE0NDU5Nw..*_ga*NzgwNjMwNTM5LjE3ODIxNDQ1NDU.*_ga_KXH10SQTZF*czE3ODIxNDY1MzAkbzIkZzEkdDE3ODIxNDY1NTAkajQwJGwwJGg1MzExMDY4MTM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-robotYellow text-robotNavy font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors shadow-lg animate-pulse hover:animate-none"
              >
                Garantir Ingresso no Sympla <ExternalLink size={20} />
              </motion.a>
            </motion.div>

            {/* CARD 2 - EXPOSITORES E PALESTRANTES (WHATSAPP) */}
            <motion.div 
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border-b-8 border-robotNavy flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-robotNavy">
                  <Presentation size={32} />
                </div>
                <h3 className="text-2xl font-black text-robotNavy mb-3">Expositores & Palestrantes</h3>
                <p className="text-gray-600 mb-6">
                  Se você faz parte da programação oficial apresentando projetos, escolas, startups ou palestras, solicite seu acesso VIP diretamente com a organização.
                </p>
              </div>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5579998518335?text=Ol%C3%A1%21+Sou+expositor%2Fpalestrante+na+RoboT-SE+e+gostaria+de+receber+meu+ingresso."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-robotNavy text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-950 transition-colors shadow-lg"
              >
                Solicitar via WhatsApp <MessageCircle size={20} />
              </motion.a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SCHEDULE SECTION - Painel Dinâmico */}
      <main className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-robotNavy mb-4 uppercase">Programação Oficial</h2>
          <p className="text-gray-500 text-lg">Selecione o dia e clique nos cards para expandir e ver mais detalhes.</p>
        </div>

        {/* Abas de Navegação dos Dias */}
        <div className="flex justify-center gap-4 mb-10">
          <button 
            onClick={() => setActiveTab('dia1')}
            className={`px-8 py-4 rounded-xl font-bold transition-all ${activeTab === 'dia1' ? 'bg-robotNavy text-white shadow-xl scale-105' : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'}`}
          >
            DIA 01 (Quarta, 01/07)
          </button>
          <button 
            onClick={() => setActiveTab('dia2')}
            className={`px-8 py-4 rounded-xl font-bold transition-all ${activeTab === 'dia2' ? 'bg-robotNavy text-white shadow-xl scale-105' : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'}`}
          >
            DIA 02 (Quinta, 02/07)
          </button>
        </div>

        {/* Lista de Cards Animada */}
        <motion.div layout className="flex flex-col gap-5">
          <AnimatePresence mode='popLayout'>
            {currentSchedule.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                key={item.id}
                onClick={() => toggleCard(item.id)}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md hover:border-robotYellow transition-all"
              >
                <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 w-full">
                    <div className="text-robotNavy font-black text-lg bg-yellow-50 px-5 py-3 rounded-xl flex items-center justify-center gap-2 min-w-[160px] border border-yellow-100">
                      <Clock size={20} className="text-robotYellow" />
                      {item.horario}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{item.atividade}</h3>
                      <p className="text-robotGreen font-semibold flex items-center gap-1 mt-2 text-sm">
                        <MapPin size={16} /> {item.local}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-300 hidden md:block">
                    {expandedCard === item.id ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                  </div>
                </div>

                <AnimatePresence>
                  {expandedCard === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-slate-50 px-6 border-t border-gray-100"
                    >
                      <div className="py-6 text-gray-600 flex flex-col items-start gap-4">
                        <div className="flex items-start gap-3">
                          <ShieldCheck className="text-robotGreen mt-1 min-w-[20px]" size={20} />
                          <p className="text-base leading-relaxed">{item.detalhe}</p>
                        </div>
                        
                        {/* Botão do Sympla renderizado APENAS se for Oficina Maker */}
                        {item.atividade.includes('Oficina Maker') && (
                          <motion.a 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href="https://www.sympla.com.br/evento/robot-se-feira-sergipana-de-inovacao-em-robotica/3464453?_gl=1*1jsokqz*_gcl_au*MzA2NTYxODA5LjE3ODIxNDQ1NDUuMTA1NDc5MjE3LjE3ODIxNDQ1OTcuMTc4MjE0NDU5Nw..*_ga*NzgwNjMwNTM5LjE3ODIxNDQ1NDU.*_ga_KXH10SQTZF*czE3ODIxNDY1MzAkbzIkZzEkdDE3ODIxNDY1NTAkajQwJGwwJGg1MzExMDY4MTM"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-8 mt-2 inline-flex items-center gap-2 bg-robotYellow text-robotNavy font-bold py-2.5 px-6 rounded-xl hover:bg-yellow-400 transition-colors shadow-md border border-yellow-200"
                            onClick={(e) => e.stopPropagation()} // Previne que o card feche ao clicar no botão
                          >
                            <Ticket size={18} />
                            Garantir Vaga na Oficina
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* SEÇÃO DE EXPOSITORES */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-robotNavy mb-10 uppercase">Expositores Confirmados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expositores.map((exp, idx) => (
              <motion.div 
                whileHover={{ scale: 1.03 }}
                key={idx} 
                className="p-6 bg-slate-50 border border-gray-100 rounded-xl flex flex-col justify-center items-center gap-2"
              >
                <h4 className="font-bold text-gray-800">{exp.nome}</h4>
                <span className="text-xs font-black uppercase tracking-wider text-robotYellow bg-robotNavy px-3 py-1 rounded-full">
                  {exp.categoria}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER - Organização e Parceiros */}
      <footer className="bg-robotNavy pt-16 pb-8 border-t-8 border-robotYellow">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-black tracking-[0.2em] text-robotYellow uppercase mb-8 block">Realização e Organização</span>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-8">
              {/* UFS */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                  <img src="/proex.png" alt="UFS" className="w-full h-full object-contain p-2" />
                </div>
                <span className="font-bold text-sm text-white">PROEX UFS</span>
              </div>

              {/* Innovation Hub */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                  <img src="/logoih.svg" alt="Innovation Hub" className="w-full h-full object-contain p-2" />
                </div>
                <span className="font-bold text-sm text-white">Innovation Hub</span>
              </div>

              {/* CoreTech */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                  <img src="/logocore.svg" alt="CoreTech" className="w-full h-full object-contain p-2" />
                </div>
                <span className="font-bold text-sm text-white">CoreTech</span>
              </div>

              {/* LACOR */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                  <img src="/logocor.svg" alt="LACOR" className="w-full h-full object-contain" />
                </div>
                <span className="font-bold text-sm text-white">LACOR</span>
              </div>

              {/* Sergipetec */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                  <img src="/logosp.svg" alt="Sergipetec" className="w-full h-full object-contain p-2" />
                </div>
                <span className="font-bold text-sm text-white">Sergipetec</span>
              </div>
            </div>
            
            <p className="mt-12 text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              A RoboT-SE 2026 é a 1ª Feira Sergipana de Inovação em Robótica. Um evento voltado à integração entre ciência, tecnologia, educação e mercado no estado de Sergipe.
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <span>© 2026 RoboT-SE. Todos os direitos reservados.</span>
            <span className="mt-2 md:mt-0">Desenvolvido com inovação e tecnologia.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}