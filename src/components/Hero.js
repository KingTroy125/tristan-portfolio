import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'

export default function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between mb-20">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <AnimatedText text=" Tristan is a " className="text-4xl font-bold mb-4" />
        <AnimatedText text=" web designer " className="text-4xl font-bold mb-4 text-purple-400" />
        <AnimatedText text="," className="text-4xl font-bold mb-4" />
        <AnimatedText text=" front-end developer " className="text-4xl font-bold mb-4 text-purple-400" />
        <AnimatedText text=" and " className="text-4xl font-bold mb-4" />
        <AnimatedText text=" software developer " className="text-4xl font-bold mb-4 text-purple-400" />
        <br/><br/>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-6"
        >
          I crafts responsive websites where technologies meet creativity and whatever helps make my life easier..
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(167, 139, 250)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          Contact me!!
        </motion.button>
      </div>
      <div className="md:w-1/2 relative">
        <motion.img
          src="/placeholder.svg?height=400&width=300"
          alt="Tristan"
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </section>
  )
}