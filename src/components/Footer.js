import { motion } from 'framer-motion'
import { Github, Codepen, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800"
    >
      <div>
        <p className="font-bold">Tristan</p>
        <p> Web designer , front-end developer and Software Developer </p>
      </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <motion.a
          href="https://github.com/KingTroy125"
          className="text-gray-400 hover:text-white"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Github />
        </motion.a>
        <motion.a
          href="#"
          className="text-gray-400 hover:text-white"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Codepen />
        </motion.a>
        <motion.a
          href="#"
          className="text-gray-400 hover:text-white"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Linkedin />
        </motion.a>
      </div>
      <p className="mt-4 md:mt-0">© Copyright 2024. Made by Tristan</p>
    </motion.footer>
  )
}