import { motion } from 'framer-motion'

export default function Quote() {
  return (
    <section className="mb-20">
      <motion.blockquote
        className="text-2xl font-light italic mb-4 border-l-4 border-purple-400 pl-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        "With great power comes great electricity bill"
      </motion.blockquote>
      <motion.p
        className="text-right"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        - Dr. Who
      </motion.p>
    </section>
  )
}