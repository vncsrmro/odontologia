import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Ana Paula Silva",
        role: "Paciente de Ortodontia",
        content: "A Harmony transformou não só meu sorriso, mas minha autoestima. O atendimento é impecável e o resultado dos alinhadores invisíveis foi surpreendente!",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070"
    },
    {
        id: 2,
        name: "Carlos Eduardo",
        role: "Paciente de Implante",
        content: "Tinha muito medo de dentista, mas a equipe me deixou super tranquilo. A sedação consciente foi um diferencial incrível. Recomendo de olhos fechados.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974"
    },
    {
        id: 3,
        name: "Mariana Costa",
        role: "Paciente de Estética",
        content: "Fiz minhas lentes de contato dental e ficou super natural, exatamente como eu queria. Profissionais extremamente competentes e atenciosos.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1976"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="depoimentos" className="section-padding bg-gray-50">
            <div className="text-center mb-16">
                <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Depoimentos</span>
                <h2 className="text-4xl md:text-5xl font-bold text-tertiary mt-2">
                    Quem Confia na <span className="text-secondary">Harmony.</span>
                </h2>
            </div>

            <div className="max-w-4xl mx-auto relative px-4 md:px-12">
                <div className="relative overflow-hidden min-h-[400px] md:min-h-[300px] flex items-center justify-center">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center w-full"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-secondary/20">
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center mb-6 text-yellow-400 gap-1">
                                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                            </div>

                            <Quote className="text-secondary/20 mx-auto mb-4" size={48} />

                            <p className="text-gray-600 text-lg md:text-xl italic mb-8 leading-relaxed">
                                "{testimonials[currentIndex].content}"
                            </p>

                            <div>
                                <h4 className="text-xl font-bold text-tertiary">{testimonials[currentIndex].name}</h4>
                                <span className="text-secondary text-sm font-medium">{testimonials[currentIndex].role}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-tertiary hover:text-secondary transition-colors z-10 hidden md:block"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-tertiary hover:text-secondary transition-colors z-10 hidden md:block"
                >
                    <ChevronRight size={24} />
                </button>

                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-secondary w-8' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
