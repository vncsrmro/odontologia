import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold text-secondary mb-4">Harmony<span className="text-tertiary">Odontologia</span></h3>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                            Sorrisos em Harmonia com a Vida. Tecnologia, cuidado e experiência para a saúde e estética do seu sorriso.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-tertiary mb-6">Links Rápidos</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-secondary transition-colors">Início</a></li>
                            <li><a href="#sobre" className="text-gray-500 hover:text-secondary transition-colors">Sobre Nós</a></li>
                            <li><a href="#tratamentos" className="text-gray-500 hover:text-secondary transition-colors">Tratamentos</a></li>
                            <li><a href="#depoimentos" className="text-gray-500 hover:text-secondary transition-colors">Depoimentos</a></li>
                            <li><a href="#contato" className="text-gray-500 hover:text-secondary transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-tertiary mb-6">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-500">
                                <MapPin className="flex-shrink-0 text-secondary" size={20} />
                                <span>Rua Exemplo, 123 - Centro<br />Cidade - SP, 12345-678</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <Phone className="flex-shrink-0 text-secondary" size={20} />
                                <span>(19) 96000-3434</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <Mail className="flex-shrink-0 text-secondary" size={20} />
                                <span>contato@harmonyodonto.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Harmony Odontologia. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
