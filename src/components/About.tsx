import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
    const features = [
        "Equipe altamente qualificada e humanizada",
        "Tecnologia de ponta para diagnósticos precisos",
        "Ambiente acolhedor e confortável",
        "Protocolos rigorosos de biossegurança"
    ];

    return (
        <section id="sobre" className="section-padding bg-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=2069"
                            alt="Dentista atendendo paciente"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl -z-10"></div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl -z-10"></div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Nossa Filosofia</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-tertiary mt-2 mb-6">
                        O Cuidado que Você <span className="text-secondary">Merece.</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Na Harmony Odontologia, acreditamos que um sorriso saudável é reflexo de bem-estar e qualidade de vida.
                        Nossa missão é oferecer tratamentos odontológicos de excelência, unindo tecnologia avançada a um atendimento
                        profundamente humano e personalizado.
                    </p>

                    <ul className="space-y-4 mb-10">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3 text-gray-700">
                                <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="https://wa.me/5519960003434"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex"
                    >
                        Conheça Nossa Clínica
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
