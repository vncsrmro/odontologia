import { motion } from 'framer-motion';

const images = [
    {
        src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1974",
        alt: "Consultório Moderno",
        span: "col-span-1 md:col-span-2 row-span-2"
    },
    {
        src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1974",
        alt: "Sorriso Radiante",
        span: "col-span-1 row-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=2070",
        alt: "Equipamento Odontológico",
        span: "col-span-1 row-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=2070",
        alt: "Atendimento Humanizado",
        span: "col-span-1 md:col-span-2 row-span-1"
    }
];

const Gallery = () => {
    return (
        <section id="galeria" className="section-padding bg-white">
            <div className="text-center mb-16">
                <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Galeria</span>
                <h2 className="text-4xl md:text-5xl font-bold text-tertiary mt-2">
                    Transforme seu <span className="text-secondary">Sorriso.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`relative rounded-2xl overflow-hidden group ${img.span}`}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {img.alt}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
