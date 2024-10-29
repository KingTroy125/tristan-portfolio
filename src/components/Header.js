import { motion } from 'framer-motion'

export default function Header({ language, setLanguage }) {
  return (
    <header className="flex justify-between items-center mb-12">
      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold text-white"
      >
        Tristan
      </motion.h1>
      <nav className="hidden md:flex space-x-6">
        {['#home', '#works', '#about-me', '#contacts'].map((item, index) => (
          <motion.a
            key={item}
            href={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="hover:text-purple-400 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            {item.slice(1)}
          </motion.a>
        ))}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => setLanguage(language === 'EN' ? 'UA' : 'EN')}
          className="hover:text-purple-400 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          {language}
        </motion.button>
      </nav>
    </header>
  )
}