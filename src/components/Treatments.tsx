import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Smile, Zap, Heart, ShieldPlus, ArrowRight, Gem } from 'lucide-react';

const treatmentsData = [
    {
        id: 1,
        title: "Odontologia Estética",
        description: "Transforme seu sorriso com lentes de contato dental, facetas e clareamento de última geração.",
        icon: Sparkles,
        color: "bg-blue-50 text-blue-500"
    },
    {
        id: 2,
        title: "Implantes Dentários",
        description: "Recupere a função e a estética com implantes de alta tecnologia e recuperação rápida.",
        icon: ShieldPlus,
        color: "bg-green-50 text-green-500"
    },
    {
        id: 3,
        title: "Ortodontia Digital",
        description: "Alinhadores invisíveis e aparelhos modernos para um sorriso alinhado com discrição e conforto.",
        icon: Smile,
        color: "bg-purple-50 text-purple-500"
    },
    {
        id: 4,
        title: "Odontopediatria",
        description: "Cuidado especializado e lúdico para garantir a saúde bucal das crianças desde cedo.",
        icon: Heart,
        color: "bg-pink-50 text-pink-500"
    },
    {
        id: 5,
        title: "Saúde Bucal",
        description: "Prevenção, limpeza profunda e tratamento de gengiva para manter seu sorriso sempre saudável.",
        icon: Zap,
        color: "bg-yellow-50 text-yellow-500"
    },
    {
        id: 6,
        title: "Harmonização Orofacial",
        description: "Procedimentos estéticos funcionais para equilibrar os traços do seu rosto com seu sorriso.",
        icon: Gem,
        color: "bg-teal-50 text-teal-500"
    }
];

const Treatments = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section id="tratamentos" className="section-padding bg-gray-50">
            <div className="text-center mb-16">
                <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Especialidades</span>
                <h2 className="text-4xl md:text-5xl font-bold text-tertiary mt-2">
                    Excelência em Cada <span className="text-secondary">Especialidade.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {treatmentsData.map((treatment) => (
                    <motion.div
                        key={treatment.id}
                        layout
                        onHoverStart={() => setHoveredId(treatment.id)}
                        onHoverEnd={() => setHoveredId(null)}
                        onClick={() => setHoveredId(treatment.id === hoveredId ? null : treatment.id)}
                        className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-secondary/20 relative overflow-hidden group`}
                    >
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${treatment.color} transition-transform duration-300 group-hover:scale-110`}>
                            <treatment.icon size={28} />
                        </div>

                        <h3 className="text-xl font-bold text-tertiary mb-3 group-hover:text-secondary transition-colors">
                            {treatment.title}
                        </h3>

                        <p className="text-gray-500 leading-relaxed mb-6">
                            {treatment.description}
                        </p>

                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: hoveredId === treatment.id ? 1 : 0,
                                height: hoveredId === treatment.id ? 'auto' : 0
                            }}
                            className="overflow-hidden"
                        >
                            <a
                                href="https://wa.me/5519960003434"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
                            >
                                Saiba Mais e Agende
                                <ArrowRight size={18} />
                            </a>
                        </motion.div>

                        {/* Decorative gradient on hover */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 pointer-events-none bg-gradient-to-br from-secondary to-transparent transition-opacity duration-500`} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Treatments;
