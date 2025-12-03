import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contato" className="section-padding bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Contact Info & Map */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Localização</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-tertiary mt-2 mb-6">
                        Estamos Prontos para <span className="text-secondary">te Atender.</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Venha nos visitar e conhecer nossa estrutura. Estamos localizados em uma região de fácil acesso,
                        com estacionamento próprio para seu conforto.
                    </p>

                    <div className="space-y-6 mb-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary flex-shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-tertiary">Endereço</h4>
                                <p className="text-gray-500">Rua Exemplo, 123 - Centro<br />Cidade - SP, 12345-678</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary flex-shrink-0">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-tertiary">Horário de Funcionamento</h4>
                                <p className="text-gray-500">Seg - Sex: 08h às 19h<br />Sáb: 08h às 13h</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary flex-shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-tertiary">Telefone / WhatsApp</h4>
                                <p className="text-gray-500">(19) 96000-3434</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2960416237025!2d-47.0605386850344!3d-22.90224448501403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c61de8e94c2b%3A0x2923360244080002!2sCampinas%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1629900000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Mapa da Clínica"
                        ></iframe>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
                >
                    <h3 className="text-2xl font-bold text-tertiary mb-6">Envie uma Mensagem</h3>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                placeholder="Seu nome"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                placeholder="seu@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                placeholder="(00) 00000-0000"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                                placeholder="Como podemos ajudar?"
                            ></textarea>
                        </div>

                        <button className="w-full btn-primary flex items-center justify-center gap-2">
                            <Send size={20} />
                            Enviar Mensagem
                        </button>

                        <div className="relative flex py-4 items-center">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">Ou fale agora</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        <a
                            href="https://wa.me/5519960003434"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full btn-secondary flex items-center justify-center gap-2"
                        >
                            <Phone size={20} />
                            Chamar no WhatsApp
                        </a>
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
