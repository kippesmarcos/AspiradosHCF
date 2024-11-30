import { useState } from 'react';
import { Header } from '../components/Header';
import { motion } from 'framer-motion';
import { Key, ChevronLeft, Zap, Package, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { keys } from '../data/keys';
import { useCart } from '../context/CartContext';
import { SnowParticles } from '@/components/SnowParticles';
import type { Key as KeyType } from '../types/key';

export function KeysPage() {
  const [selectedKey, setSelectedKey] = useState<KeyType | null>(null);
  const { addItem } = useCart();

  const mysteryBoxKeys = keys.filter(key => key.id.includes('mystery-box'));
  const perkKeys = keys.filter(key => key.id.includes('perk-key'));

  const handleAddToCart = (key: KeyType) => {
    addItem({
      id: key.id,
      name: key.name,
      price: key.price,
      type: 'key',
      durationType: 'permanent',
      icon: key.icon,
      color: key.color,
      quantity: 1
    });
    setSelectedKey(null);
  };

  const KeyCategory = ({ title, icon: Icon, keys, description }: { 
    title: string; 
    icon: typeof Package; 
    keys: KeyType[];
    description: string;
  }) => (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Icon className="w-8 h-8 text-beige-400" />
          <h2 className="text-3xl font-bold text-beige-100">{title}</h2>
        </div>
        <p className="text-beige-300">{description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {keys.map((key, index) => (
          <motion.div
            key={key.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-beige-900/50 backdrop-blur-lg rounded-xl overflow-hidden"
          >
            <div 
              className="p-6 text-center relative cursor-pointer"
              style={{ backgroundColor: `${key.color}15` }}
              onClick={() => setSelectedKey(key)}
            >
              <div className="absolute inset-0 opacity-10" 
                style={{ 
                  backgroundImage: `linear-gradient(to bottom right, ${key.color}, transparent)` 
                }} 
              />
              <img 
                src={key.icon} 
                alt={key.name} 
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2" style={{ color: key.color }}>
                {key.name}
              </h3>
              <div className="text-3xl font-bold text-beige-100">
                ${key.price}
              </div>
            </div>

            <div className="p-6">
              <p className="text-beige-300 mb-4">{key.description}</p>
              <ul className="space-y-3">
                {key.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-beige-400 flex-shrink-0" />
                    <span className="text-beige-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={() => setSelectedKey(key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 bg-beige-400 hover:bg-beige-500 text-black py-3 rounded-lg transition-all duration-300 font-medium"
              >
                Ver más detalles
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/images/background/hcf-background.webp')",
          filter: "brightness(0.3)"
        }}
      />

      <SnowParticles />

      <Header />

      <div className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-beige-300 hover:text-beige-100 mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Volver al inicio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Key className="w-8 h-8 text-beige-400" />
              <h1 className="text-4xl font-bold text-beige-100">Keys</h1>
            </div>
            <p className="text-beige-300">Desbloquea recompensas y beneficios especiales</p>
          </motion.div>

          <KeyCategory
            title="Mystery Box Keys"
            icon={Package}
            keys={mysteryBoxKeys}
            description="Desbloquea cajas misteriosas con recompensas aleatorias"
          />

          <KeyCategory
            title="Perk Keys"
            icon={Sparkles}
            keys={perkKeys}
            description="Activa beneficios y poderes temporales"
          />
        </div>
      </div>

      {selectedKey && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedKey(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-beige-900/90 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div 
              className="p-6 text-center relative border-b border-beige-800"
              style={{ backgroundColor: `${selectedKey.color}15` }}
            >
              <img 
                src={selectedKey.icon} 
                alt={selectedKey.name} 
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2" style={{ color: selectedKey.color }}>
                {selectedKey.name}
              </h3>
              <div className="text-3xl font-bold text-beige-100">
                ${selectedKey.price}
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-lg font-semibold text-beige-100 mb-4">Características:</h4>
              <ul className="space-y-3 mb-6">
                {selectedKey.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-beige-400 flex-shrink-0" />
                    <span className="text-beige-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={() => handleAddToCart(selectedKey)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-beige-400 hover:bg-beige-500 text-black py-3 rounded-lg transition-all duration-300 font-medium"
              >
                Agregar al carrito
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}