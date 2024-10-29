import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <section id="about-me" className="mb-20">
      <h3 className="text-2xl font-bold mb-6 text-purple-400">#about-me</h3>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm Tristan Hendricks!
          </motion.p>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm a self-taught front-end developer based in Cape Town, South Africa. I can develop responsive websites from scratch
            and raise them into modern user-friendly web experiences.
          </motion.p>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been
            helping various clients to establish their presence online. I always strive to learn about the newest
            technologies and frameworks.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(167, 139, 250)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            Read more
          </motion.button>
        </div>
        <div className="md:w-1/3">
          
          <motion.img
            src="/placeholder.svg?height=300&width=200"
            alt="Tristan"
            className="w-full max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  )
}