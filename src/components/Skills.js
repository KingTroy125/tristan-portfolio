import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'Python', level: 65 },
  { name: 'SQL', level: 60 },
  { name: 'Git', level: 75 },
  { name: 'Figma', level: 70 },
  { name: 'TypeScript', level: 65 },
]

export default function Skills() {
  return (
    <section className="mb-20">
      <h3 className="text-2xl font-bold mb-6 text-purple-400">#skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
              <span className="text-sm text-purple-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <motion.div
                className="bg-purple-600 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}