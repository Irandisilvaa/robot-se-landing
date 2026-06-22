  import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Cpu,
  Ticket,
  MessageCircle,
  ExternalLink,
  Bot,
  ShieldCheck,
  Sparkles,
  Rocket,
} from 'lucide-react';

// ==========================
// PROGRAMAÇÃO ORIGINAL COMPLETA
// ==========================

const programacaoDia1 = [
  {
    id: 101,
    horario: "08:00 — 09:00",
    atividade: "Credenciamento dos participantes e expositores",
    local: "Hall Principal",
    detalhe:
      "Chegada, recepção e entrega das credenciais para todos os participantes e equipes.",
  },
  {
    id: 102,
    horario: "09:00 — 09:30",
    atividade: "Abertura Institucional Oficial da RoboT-SE 2026",
    local: "Palco Principal",
    detalhe:
      "Momento oficial de abertura com as autoridades, organizadores e instituições parceiras.",
  },
  {
    id: 103,
    horario: "09:30 — 10:00",
    atividade: "Apresentação Geral da Feira e da Programação Oficial",
    local: "Palco Principal",
    detalhe:
      "Apresentação do mapa do evento, arenas e orientações gerais.",
  },
  {
    id: 104,
    horario: "10:00 — 10:30",
    atividade:
      "Apresentação e Divulgação da Olimpíada Brasileira de Robótica (OBR)",
    local: "Palco Principal",
    detalhe:
      "Tudo o que você precisa saber sobre a OBR e como participar.",
  },
  {
    id: 105,
    horario: "10:30 — 12:00",
    atividade:
      "Palestra Magna — “Semicondutores, FPGA, Robótica e Minecraft”",
    local: "Palco Principal",
    detalhe:
      "Com Alcides S. Costa. Uma imersão nas conexões entre hardware, jogos e robótica educacional.",
  },
  {
    id: 106,
    horario: "13:30 — 15:00",
    atividade: "Oficina Maker: Missão Espacial (Turma 1 — 10 vagas)",
    local: "Sala 203 — DID VII",
    detalhe:
      "Atividade prática de montagem e ideação. Vagas limitadas.",
  },
  {
    id: 107,
    horario: "13:30 — 17:00",
    atividade: "Exposição Tecnológica",
    local: "Área de Exposição",
    detalhe:
      "Visitação livre aos estandes, projetos de escolas, universidades e startups.",
  },
  {
    id: 111,
    horario: "14:00 — 17:00",
    atividade: "Circuito Aberto (Exibição Livre de Robótica)",
    local: "Arena RoboT-SE",
    detalhe:
      "Pista liberada para robôs da comunidade, testes de projetos independentes e demonstrações tecnológicas não-competitivas (Sem restrições de Hardware).",
  },
  {
    id: 108,
    horario: "15:30 — 16:30",
    atividade:
      "Design Thinking e solução de problemas com foco no usuário",
    local: "Sala 206 — Arena de Palestras",
    detalhe:
      "Com Heli Lucas Santos Pinto. Metodologias ágeis para criação de projetos relevantes.",
  },
  {
    id: 109,
    horario: "15:30 — 17:00",
    atividade: "Oficina Maker: Missão Espacial (Turma 2 — 10 vagas)",
    local: "Sala 203 — DID VII",
    detalhe:
      "Segunda turma da atividade prática de montagem e ideação.",
  },
  {
    id: 110,
    horario: "16:00 — 16:30",
    atividade: "Arborização Inteligente utilizando tecnologia",
    local: "Sala 202 — Arena Científica",
    detalhe:
      "Com Júlio Gabriel Alves Monteiro. Como a tecnologia pode auxiliar o meio ambiente.",
  },
  {
    id: 112,
    horario: "16:30",
    atividade: "Encerramento da Exposição Tecnológica",
    local: "Palco Principal",
    detalhe:
      "Encerramento oficial do primeiro dia da RoboT-SE.",
  },
];

const programacaoDia2 = [
  {
    id: 200,
    horario: "08:00 — 09:00",
    atividade:
      "Distribuição dos kits de pista, credenciamento e homologação dos robôs da competição oficial.",
    local: "Sala 206 — DID VII",
    detalhe: "",
  },
  {
    id: 201,
    horario: "08:30 — 09:00",
    atividade:
      "Projeto de redes e automação em robótica: exemplos industriais",
    local: "Sala 202 — Arena Científica",
    detalhe:
      "Com Rafael Lima Dantas. Apresentação de pesquisa e resultados no campo de Projeto de redes e automação em robótica para o âmbito industrial.",
  },
  {
    id: 207,
    horario: "09:00 — 12:00",
    atividade: "Treinos Livres e Calibração (Seguidor de Linha)",
    local: "Arena RoboT-SE",
    detalhe:
      "Pista aberta exclusivamente para as equipes oficiais realizarem testes práticos, calibração de sensores e depuração de código com o Kit CoreTech.",
  },
  {
    id: 203,
    horario: "11:00 — 12:00",
    atividade:
      "Oportunidades de inovar na robótica — Pesquisa e Startups",
    local: "Auditório 205 — DID VII",
    detalhe:
      "Com João Pedro Santana Silva Santos. Os caminhos do ecossistema de inovação e negócios.",
  },
  {
    id: 211,
    horario: "12:00 — 13:30",
    atividade: "Intervalo para almoço.",
    local: "Livre",
    detalhe: "",
  },
  {
    id: 204,
    horario: "13:30 — 15:00",
    atividade: "Oficina Maker: Missão Espacial (Turma 3 — 10 vagas)",
    local: "Sala 203 — DID VII",
    detalhe:
      "Terceira e última turma da oficina prática.",
  },
  {
    id: 208,
    horario: "13:30 — 15:00",
    atividade: "Últimos Treinos Livres e Calibração",
    local: "Arena RoboT-SE",
    detalhe:
      "Reta final para calibração dos robôs na pista antes da tomada de tempo.",
  },
  {
    id: 205,
    horario: "15:00 — 17:30",
    atividade: "Competição Oficial - Seguidor de Linha",
    local: "Arena RoboT-SE",
    detalhe:
      "Disputa oficial! Tomada de tempo individual em 3 rodadas consecutivas no formato de Melhor Volta, utilizando exclusivamente o Kit SiriBots.",
  },
  {
    id: 206,
    horario: "17:30 — 18:30",
    atividade: "Cerimônia de Encerramento e Premiação",
    local: "Palco Principal",
    detalhe:
      "Entrega do Troféu de Campeão, Medalhas e devolução compulsória dos kits. Encerramento oficial do evento.",
  },
];

// ==========================
// EXPOSITORES
// ==========================

const expositores = [
  {
    nome: "Universidade Federal de Sergipe (UFS)",
    categoria: "Instituição de Ensino",
  },
  { nome: "Codepacce", categoria: "Empresa" },
  {
    nome: "C. E. Deputado Joaldo Vieira Barbosa",
    categoria: "Escola",
  },
  {
    nome: "Olimpíada Brasileira de Robótica (OBR)",
    categoria: "Projeto Institucional",
  },
  {
    nome: "IFBA — Campus Euclides da Cunha",
    categoria: "Instituição Federal",
  },
  {
    nome: "C. E. Leonardo Gomes de Carvalho Leite",
    categoria: "Escola",
  },
  {
    nome: "Instituto Federal de Sergipe (IFS)",
    categoria: "Instituição Federal",
  },
  {
    nome: "Colégio Estadual Frei Inocêncio",
    categoria: "Escola",
  },
  {
    nome: "Centro de Excelência Profº João Costa",
    categoria: "Escola",
  },
  { nome: "MelanoFree", categoria: "Grupo de Pesquisa" },
  { nome: "FonCog", categoria: "Startup" },
  {
    nome: "Grupo de Pesquisa em Robótica — UFS",
    categoria: "Grupo de Pesquisa",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('dia1');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const currentSchedule =
    activeTab === 'dia1'
      ? programacaoDia1
      : programacaoDia2;

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">

      {/* ================= HERO ================= */}

      <header className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#001B3D]" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-400 rounded-full blur-3xl" />
        </div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: 'linear',
          }}
          className="absolute top-[-120px] left-[-120px] opacity-10"
        >
          <Cpu size={420} />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 pt-10 pb-20 md:pt-20 md:pb-32">

          {/* TOP BADGE */}

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-full px-5 py-2 text-xs md:text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
              <Sparkles size={16} />
              1ª Feira Sergipana de Inovação em Robótica
            </div>
          </motion.div>

          {/* LOGO */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mt-10"
          >
            <img
              src="/logo2.png"
              alt="RoboT-SE"
              className="w-full max-w-[950px] object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.18)]"
            />
          </motion.div>

          {/* TITLE */}

          <div className="text-center mt-10">

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black leading-none"
            >
              RoboT-SE
              <span className="block text-yellow-400">
                2026
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-gray-300 max-w-2xl mx-auto text-base md:text-xl leading-relaxed"
            >
              Tecnologia, robótica, inovação, startups,
              oficinas maker e competição oficial de
              Seguidor de Linha.
            </motion.p>
          </div>

          {/* INFO CARDS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5">
              <Calendar className="text-yellow-400 mb-3" />
              <h3 className="font-black text-lg">
                Data
              </h3>
              <p className="text-gray-300">
                01 e 02 de Julho de 2026
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5">
              <MapPin className="text-cyan-400 mb-3" />
              <h3 className="font-black text-lg">
                Local
              </h3>
              <p className="text-gray-300">
                DID VII - UFS
              </p>
              <p className="text-sm text-gray-400">
                São Cristóvão - SE
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-black rounded-3xl p-5">
              <Rocket className="mb-3" />
              <h3 className="font-black text-lg">
                Entrada Gratuita
              </h3>
              <p className="font-semibold">
                Evento aberto ao público
              </p>
            </div>

          </div>

        </div>
      </header>

      {/* ================= INSCRIÇÕES ================= */}

      <section className="relative py-20 px-5">

        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] to-[#071226]" />

        <div className="relative z-10 max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-black">
              PARTICIPE
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              O ingresso é totalmente gratuito.
              Garanta sua inscrição e participe da maior
              feira de robótica de Sergipe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* CARD SYMPLA */}

            <motion.div
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[32px] border border-yellow-400/30 bg-gradient-to-br from-yellow-400/20 to-orange-500/10 backdrop-blur-2xl p-8"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400 opacity-20 blur-3xl rounded-full" />

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center mb-6">
                  <Ticket size={30} />
                </div>

                <h3 className="text-3xl font-black mb-4">
                  Ingresso Gratuito
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  Faça sua inscrição gratuitamente para
                  participar das palestras, oficinas,
                  exposições e da competição oficial.
                </p>

                <a
                  href="https://www.sympla.com.br/evento/robot-se-feira-sergipana-de-inovacao-em-robotica/3464453"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-black py-4 rounded-2xl transition-all"
                >
                  Garantir Inscrição
                  <ExternalLink size={20} />
                </a>

              </div>
            </motion.div>

            {/* CARD WHATS */}

            <motion.div
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-8"
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400 opacity-20 blur-3xl rounded-full" />

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-cyan-400 text-black flex items-center justify-center mb-6">
                  <MessageCircle size={30} />
                </div>

                <h3 className="text-3xl font-black mb-4">
                  Expositores
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  Escolas, startups, universidades e
                  palestrantes devem entrar em contato
                  diretamente com a organização.
                </p>

                <a
                  href="https://wa.me/5579998518335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-black font-black py-4 rounded-2xl transition-all"
                >
                  Falar no WhatsApp
                  <ExternalLink size={20} />
                </a>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= PROGRAMAÇÃO ================= */}

      <section className="py-20 px-4">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black">
              PROGRAMAÇÃO
            </h2>

            <p className="text-gray-400 mt-4">
              Clique nos cards para expandir os detalhes.
            </p>
          </div>

          {/* TABS */}

          <div className="flex gap-4 mb-10 overflow-x-auto pb-2">

            <button
              onClick={() => setActiveTab('dia1')}
              className={`flex-1 min-w-[180px] rounded-2xl py-4 px-6 font-black transition-all ${
                activeTab === 'dia1'
                  ? 'bg-yellow-400 text-black'
                  : 'bg-white/5 border border-white/10 text-white'
              }`}
            >
              DIA 01
            </button>

            <button
              onClick={() => setActiveTab('dia2')}
              className={`flex-1 min-w-[180px] rounded-2xl py-4 px-6 font-black transition-all ${
                activeTab === 'dia2'
                  ? 'bg-cyan-400 text-black'
                  : 'bg-white/5 border border-white/10 text-white'
              }`}
            >
              DIA 02
            </button>

          </div>

          {/* CARDS */}

          <div className="space-y-5">

            <AnimatePresence mode="wait">

              {currentSchedule.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onClick={() => toggleCard(item.id)}
                  className="group cursor-pointer rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-yellow-400/30 transition-all"
                >

                  <div className="p-5 md:p-7">

                    <div className="flex flex-col md:flex-row md:items-center gap-5">

                      {/* HORA */}

                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-2xl px-5 py-4 font-black flex items-center gap-3 w-fit">
                        <Clock size={20} />
                        {item.horario}
                      </div>

                      {/* TEXTO */}

                      <div className="flex-1">

                        <h3 className="text-xl md:text-2xl font-black leading-tight">
                          {item.atividade}
                        </h3>

                        <div className="flex items-center gap-2 text-cyan-300 mt-3">
                          <MapPin size={16} />
                          <span className="font-semibold text-sm md:text-base">
                            {item.local}
                          </span>
                        </div>

                      </div>

                      {/* ICON */}

                      <div className="hidden md:flex">
                        {expandedCard === item.id ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </div>

                    </div>

                  </div>

                  <AnimatePresence>

                    {expandedCard === item.id && (

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        className="border-t border-white/10 bg-black/20"
                      >

                        <div className="p-6 md:p-8">

                          <div className="flex items-start gap-4">

                            <ShieldCheck
                              className="text-green-400 mt-1 min-w-[20px]"
                              size={20}
                            />

                            <p className="text-gray-300 leading-relaxed">
                              {item.detalhe || 'Atividade oficial da programação da RoboT-SE 2026.'}
                            </p>

                          </div>

                          {item.atividade.includes('Oficina Maker') && (
                            <a
                              href="https://www.sympla.com.br/evento/robot-se-feira-sergipana-de-inovacao-em-robotica/3464453"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="mt-6 inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-black px-6 py-3 rounded-2xl transition-all"
                            >
                              <Ticket size={18} />
                              Garantir vaga gratuita
                            </a>
                          )}

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </motion.div>
              ))}

            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* ================= EXPOSITORES ================= */}

      <section className="py-20 px-4 bg-[#071226]">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-black">
              EXPOSITORES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {expositores.map((exp, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
              >

                <h3 className="font-black text-lg leading-snug">
                  {exp.nome}
                </h3>

                <div className="mt-4 inline-flex bg-yellow-400 text-black text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full">
                  {exp.categoria}
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 bg-black py-16 px-4">

        <div className="max-w-6xl mx-auto text-center">

          <div className="flex flex-wrap justify-center gap-6 md:gap-12">

            <img
              src="/proex.png"
              className="h-20 object-contain"
            />

            <img
              src="/logoih.svg"
              className="h-20 object-contain"
            />

            <img
              src="/logocore.svg"
              className="h-20 object-contain"
            />

            <img
              src="/logocor.svg"
              className="h-20 object-contain"
            />

            <img
              src="/logosp.svg"
              className="h-20 object-contain"
            />

          </div>

          <p className="text-gray-500 mt-12 max-w-2xl mx-auto leading-relaxed">
            A RoboT-SE 2026 é a 1ª Feira Sergipana de
            Inovação em Robótica. Um evento voltado à
            integração entre ciência, tecnologia,
            educação e mercado no estado de Sergipe.
          </p>

          <div className="mt-10 text-sm text-gray-600">
            © 2026 RoboT-SE — Todos os direitos reservados.
          </div>

        </div>

      </footer>

    </div>
  );
}