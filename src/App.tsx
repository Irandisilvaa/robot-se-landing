import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Cpu,
  Rocket,
  Users,
  Presentation,
  ShieldCheck,
  Ticket,
  MessageCircle,
  ExternalLink,
  Bot,
} from 'lucide-react';

/* =========================
   PROGRAMAÇÃO
========================= */

const programacaoDia1 = [
  {
    id: 101,
    horario: '08:00 — 09:00',
    atividade: 'Credenciamento dos participantes e expositores',
    local: 'Hall Principal',
    detalhe:
      'Chegada, recepção e entrega das credenciais para todos os participantes e equipes.',
  },
  {
    id: 102,
    horario: '09:00 — 09:30',
    atividade: 'Abertura Institucional Oficial da RoboT-SE 2026',
    local: 'Palco Principal',
    detalhe:
      'Momento oficial de abertura com as autoridades, organizadores e instituições parceiras.',
  },
  {
    id: 103,
    horario: '09:30 — 10:00',
    atividade: 'Apresentação Geral da Feira e da Programação Oficial',
    local: 'Palco Principal',
    detalhe:
      'Apresentação do mapa do evento, arenas e orientações gerais.',
  },
  {
    id: 104,
    horario: '10:00 — 10:30',
    atividade:
      'Apresentação e Divulgação da Olimpíada Brasileira de Robótica (OBR)',
    local: 'Palco Principal',
    detalhe:
      'Tudo o que você precisa saber sobre a OBR e como participar.',
  },
  {
    id: 105,
    horario: '10:30 — 12:00',
    atividade:
      'Palestra Magna — “Semicondutores, FPGA, Robótica e Minecraft”',
    local: 'Palco Principal',
    detalhe:
      'Com Alcides S. Costa. Uma imersão nas conexões entre hardware, jogos e robótica educacional.',
  },
  {
    id: 106,
    horario: '13:30 — 15:00',
    atividade: 'Oficina Maker: Missão Espacial (Turma 1 — 10 vagas)',
    local: 'Sala 203 — DID VII',
    detalhe:
      'Atividade prática de montagem e ideação. Vagas limitadas.',
  },
  {
    id: 107,
    horario: '13:30 — 17:00',
    atividade: 'Exposição Tecnológica',
    local: 'Área de Exposição',
    detalhe:
      'Visitação livre aos estandes, projetos de escolas, universidades e startups.',
  },
  {
    id: 108,
    horario: '14:00 — 17:00',
    atividade: 'Circuito Aberto (Exibição Livre de Robótica)',
    local: 'Arena RoboT-SE',
    detalhe:
      'Pista liberada para robôs da comunidade, testes independentes e demonstrações tecnológicas.',
  },
  {
    id: 109,
    horario: '15:30 — 16:30',
    atividade:
      'Design Thinking e solução de problemas com foco no usuário',
    local: 'Sala 206 — Arena de Palestras',
    detalhe:
      'Com Heli Lucas Santos Pinto. Metodologias ágeis para criação de projetos relevantes.',
  },
  {
    id: 110,
    horario: '15:30 — 17:00',
    atividade: 'Oficina Maker: Missão Espacial (Turma 2 — 10 vagas)',
    local: 'Sala 203 — DID VII',
    detalhe:
      'Segunda turma da atividade prática de montagem e ideação.',
  },
  {
    id: 111,
    horario: '16:00 — 16:30',
    atividade: 'Arborização Inteligente utilizando tecnologia',
    local: 'Sala 202 — Arena Científica',
    detalhe:
      'Com Júlio Gabriel Alves Monteiro. Tecnologia aplicada ao meio ambiente.',
  },
  {
    id: 112,
    horario: '16:30',
    atividade: 'Encerramento da Exposição Tecnológica',
    local: 'Palco Principal',
    detalhe: 'Encerramento oficial do primeiro dia da RoboT-SE.',
  },
];

const programacaoDia2 = [
  {
    id: 201,
    horario: '08:00 — 09:00',
    atividade:
      'Distribuição dos kits e homologação dos robôs da competição',
    local: 'Sala 206 — DID VII',
    detalhe: '',
  },
  {
    id: 202,
    horario: '08:30 — 09:00',
    atividade:
      'Projeto de redes e automação em robótica: exemplos industriais',
    local: 'Sala 202 — Arena Científica',
    detalhe:
      'Com Rafael Lima Dantas. Pesquisa e aplicações industriais.',
  },
  {
    id: 203,
    horario: '09:00 — 12:00',
    atividade: 'Treinos Livres e Calibração',
    local: 'Arena RoboT-SE',
    detalhe:
      'Pista aberta para testes práticos, calibração e depuração.',
  },
  {
    id: 204,
    horario: '11:00 — 12:00',
    atividade:
      'Oportunidades de inovar na robótica — Pesquisa e Startups',
    local: 'Auditório 205 — DID VII',
    detalhe:
      'Ecossistema de inovação, startups e empreendedorismo.',
  },
  {
    id: 205,
    horario: '13:30 — 15:00',
    atividade: 'Oficina Maker: Missão Espacial (Turma 3)',
    local: 'Sala 203 — DID VII',
    detalhe: 'Última turma da oficina prática.',
  },
  {
    id: 206,
    horario: '15:00 — 17:30',
    atividade: 'Competição Oficial - Seguidor de Linha',
    local: 'Arena RoboT-SE',
    detalhe:
      'Disputa oficial com tomadas de tempo individuais.',
  },
  {
    id: 207,
    horario: '17:30 — 18:30',
    atividade: 'Cerimônia de Encerramento e Premiação',
    local: 'Palco Principal',
    detalhe:
      'Entrega de troféus, medalhas e encerramento oficial.',
  },
];

/* =========================
   EXPOSITORES
========================= */

const expositores = [
  {
    nome: 'Universidade Federal de Sergipe (UFS)',
    categoria: 'Instituição',
  },
  {
    nome: 'Codepacce',
    categoria: 'Empresa',
  },
  {
    nome: 'Olimpíada Brasileira de Robótica (OBR)',
    categoria: 'Projeto',
  },
  {
    nome: 'Instituto Federal de Sergipe (IFS)',
    categoria: 'Instituição',
  },
  {
    nome: 'FonCog',
    categoria: 'Startup',
  },
  {
    nome: 'Grupo de Pesquisa em Robótica — UFS',
    categoria: 'Pesquisa',
  },
];

/* =========================
   APP
========================= */

export default function App() {
  const [activeTab, setActiveTab] = useState('dia1');
  const [expandedCard, setExpandedCard] = useState(null);

  const currentSchedule =
    activeTab === 'dia1'
      ? programacaoDia1
      : programacaoDia2;

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#030712] via-[#071226] to-[#020617] text-white">

      {/* ================= HERO ================= */}

      <header className="relative overflow-hidden min-h-screen flex items-center">

        {/* GRID */}
        <div className="absolute inset-0 bg-grid opacity-20" />

        {/* GLOW */}
        <div className="absolute top-[-200px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-3xl rounded-full" />

        <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px] bg-purple-600 opacity-20 blur-3xl rounded-full" />

        {/* CPU */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: 'linear',
          }}
          className="absolute -top-20 -left-20 opacity-10"
        >
          <Cpu size={400} />
        </motion.div>

        {/* BOT */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="absolute right-[-40px] top-20 opacity-10 md:opacity-20"
        >
          <Bot size={320} className="text-cyan-400" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 py-20 w-full">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl rounded-full px-4 py-2 text-sm mb-8"
          >
            <Rocket size={16} className="text-cyan-400" />
            1ª Feira Sergipana de Inovação em Robótica
          </motion.div>

          {/* LOGO */}
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="/logo2.png"
            alt="RoboT-SE"
            className="w-full max-w-xl mx-auto md:mx-0 drop-shadow-2xl"
          />

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 text-4xl md:text-7xl font-black leading-tight max-w-5xl"
          >
            O maior evento de
            <span className="block bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              robótica e inovação
            </span>
            de Sergipe
          </motion.h1>

          {/* SUB */}
          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Competições, oficinas maker, IA, FPGA, startups,
            exposições tecnológicas e experiências imersivas.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5">
              <Calendar className="text-cyan-400 mb-3" />
              <p className="text-gray-400 text-sm">
                Data
              </p>
              <h3 className="font-bold text-lg">
                01 e 02 Julho
              </h3>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5">
              <MapPin className="text-green-400 mb-3" />
              <p className="text-gray-400 text-sm">
                Local
              </p>
              <h3 className="font-bold text-lg">
                DID VII - UFS
              </h3>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5">
              <Users className="text-yellow-300 mb-3" />
              <p className="text-gray-400 text-sm">
                Público
              </p>
              <h3 className="font-bold text-lg">
                500+ Participantes
              </h3>
            </div>

          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.sympla.com.br/evento/robot-se-feira-sergipana-de-inovacao-em-robotica/3464453"
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-400 text-black font-black px-8 py-5 rounded-2xl shadow-2xl text-center"
            >
              Garantir Ingresso
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/5579998518335"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 border border-white/10 backdrop-blur-xl px-8 py-5 rounded-2xl text-center font-bold"
            >
              Falar com Organização
            </motion.a>

          </div>
        </div>
      </header>

      {/* ================= PROGRAMAÇÃO ================= */}

      <main className="max-w-5xl mx-auto py-20 px-4 relative">

        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

        <div className="relative z-10">

          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Programação Oficial
            </h2>

            <p className="text-gray-400">
              Clique nos cards para expandir.
            </p>
          </div>

          {/* TABS */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-2xl flex gap-2 w-full md:w-fit mx-auto mb-10">

            <button
              onClick={() => setActiveTab('dia1')}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'dia1'
                  ? 'bg-cyan-400 text-black'
                  : 'text-gray-400'
              }`}
            >
              Dia 01
            </button>

            <button
              onClick={() => setActiveTab('dia2')}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'dia2'
                  ? 'bg-cyan-400 text-black'
                  : 'text-gray-400'
              }`}
            >
              Dia 02
            </button>

          </div>

          {/* CARDS */}
          <div className="flex flex-col gap-5">

            <AnimatePresence mode="popLayout">

              {currentSchedule.map((item) => (

                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onClick={() => toggleCard(item.id)}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:border-cyan-400/40 transition-all"
                >

                  <div className="p-5">

                    <div className="flex flex-col md:flex-row gap-5">

                      {/* HORÁRIO */}
                      <div className="bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 rounded-2xl px-5 py-4 flex items-center gap-2 h-fit font-bold min-w-[170px]">
                        <Clock size={18} />
                        {item.horario}
                      </div>

                      {/* CONTEÚDO */}
                      <div className="flex-1">

                        <div className="flex items-start justify-between gap-4">

                          <div>
                            <h3 className="text-xl font-black leading-tight">
                              {item.atividade}
                            </h3>

                            <p className="text-green-400 flex items-center gap-2 mt-3 text-sm font-semibold">
                              <MapPin size={16} />
                              {item.local}
                            </p>
                          </div>

                          <div className="text-gray-500">
                            {expandedCard === item.id ? (
                              <ChevronUp />
                            ) : (
                              <ChevronDown />
                            )}
                          </div>

                        </div>

                        <AnimatePresence>

                          {expandedCard === item.id && (

                            <motion.div
                              initial={{
                                opacity: 0,
                                height: 0,
                              }}
                              animate={{
                                opacity: 1,
                                height: 'auto',
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                              }}
                              className="overflow-hidden"
                            >

                              <div className="pt-6 border-t border-white/10 mt-6">

                                <div className="flex gap-3 items-start">
                                  <ShieldCheck
                                    size={20}
                                    className="text-green-400 mt-1"
                                  />

                                  <p className="text-gray-300 leading-relaxed">
                                    {item.detalhe}
                                  </p>
                                </div>

                                {item.atividade.includes(
                                  'Oficina Maker'
                                ) && (

                                  <motion.a
                                    whileHover={{
                                      scale: 1.03,
                                    }}
                                    whileTap={{
                                      scale: 0.97,
                                    }}
                                    href="https://www.sympla.com.br/evento/robot-se-feira-sergipana-de-inovacao-em-robotica/3464453"
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) =>
                                      e.stopPropagation()
                                    }
                                    className="mt-6 inline-flex items-center gap-2 bg-cyan-400 text-black font-black px-6 py-3 rounded-2xl"
                                  >
                                    <Ticket size={18} />
                                    Garantir vaga
                                  </motion.a>

                                )}

                              </div>

                            </motion.div>

                          )}

                        </AnimatePresence>

                      </div>
                    </div>
                  </div>
                </motion.div>

              ))}

            </AnimatePresence>

          </div>
        </div>
      </main>

      {/* ================= EXPOSITORES ================= */}

      <section className="py-20 px-4">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-black mb-4">
              Expositores Confirmados
            </h2>

            <p className="text-gray-400">
              Instituições, startups e projetos.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {expositores.map((exp, idx) => (

              <motion.div
                whileHover={{
                  y: -5,
                }}
                key={idx}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
              >

                <h3 className="font-bold text-lg mb-4">
                  {exp.nome}
                </h3>

                <span className="bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-bold">
                  {exp.categoria}
                </span>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 py-16 px-4">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">

              {[
                '/proex.png',
                '/logoih.svg',
                '/logocore.svg',
                '/logocor.svg',
                '/logosp.svg',
              ].map((logo, idx) => (

                <div
                  key={idx}
                  className="w-24 h-24 bg-white rounded-full p-4 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </div>

              ))}

            </div>

            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              A RoboT-SE 2026 é a 1ª Feira Sergipana de
              Inovação em Robótica, conectando educação,
              ciência, tecnologia e inovação no estado de
              Sergipe.
            </p>

            <div className="mt-10 border-t border-white/10 pt-8 text-gray-600 text-sm">
              © 2026 RoboT-SE — Todos os direitos reservados.
            </div>

          </div>

        </div>
      </footer>

      {/* MOBILE CTA */}

      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">

        <motion.a
          whileTap={{ scale: 0.95 }}
          href="https://www.sympla.com.br/evento/robot-se-feira-sergipana-de-inovacao-em-robotica/3464453"
          target="_blank"
          rel="noreferrer"
          className="bg-cyan-400 text-black font-black py-4 rounded-2xl flex justify-center items-center shadow-2xl"
        >
        Garantir Vaga
        </motion.a>

      </div>

    </div>
  );
}