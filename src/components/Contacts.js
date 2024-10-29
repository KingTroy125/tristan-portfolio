import { motion } from 'framer-motion'

export default function Contacts() {
  return (
    <section id="contacts" className="mb-20">
      <h3 className="text-2xl font-bold mb-6 text-purple-400">#contacts</h3>
      <motion.p
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
      </motion.p>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Message me here
          </motion.p>
          <motion.p
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="mr-2">🎮</span> !Tristan#3519
          </motion.p>
          <motion.p
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="mr-2">📧</span> TristanHendricks@gmail.com
          </motion.p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(167, 139, 250)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors mt-4 md:mt-0"
        >
          Message me
        </motion.button>
      </div>
    </section>
  )
}