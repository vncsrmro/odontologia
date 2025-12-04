import { motion } from 'framer-motion';
import { Scan, Monitor, Coffee, UserCheck } from 'lucide-react';

const technologies = [
    {
        icon: Scan,
        title: "Scanner Intraoral 3D",
        description: "Adeus às moldagens desconfortáveis. Escaneamento digital preciso e rápido para um planejamento perfeito."
    },
    {
        icon: Monitor,
        title: "Raio-X Digital",
        description: "Diagnósticos instantâneos com menor exposição à radiação e imagens de alta definição."
    },
    {
        icon: Coffee,
        title: "Sedação Consciente",
        description: "Tratamentos sem medo e sem dor. Relaxe completamente durante o seu procedimento."
    },
    {
        icon: UserCheck,
        title: "Atendimento Personalizado",
        description: "Protocolos exclusivos adaptados às suas necessidades e expectativas individuais."
    }
];

const Technology = () => {
    return (
        <section id="tecnologia" className="section-padding bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Inovação</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-tertiary mt-2 mb-6">
                        Tecnologia de Ponta para o seu <span className="text-secondary">Conforto.</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Investimos constantemente nas tecnologias mais avançadas do mercado odontológico mundial.
                        Tudo para garantir procedimentos mais rápidos, precisos, confortáveis e com resultados surpreendentes.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {technologies.map((tech, index) => (
                            <div key={index} className="flex flex-col gap-3">
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                                    <tech.icon size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-tertiary">{tech.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                >
                    <img
                        src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1974"
                        alt="Tecnologia Odontológica"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <p className="text-white font-medium text-lg">Equipamentos de última geração para o seu sorriso.</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Technology;
