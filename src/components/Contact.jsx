import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa"

const contactInfo = [
  { icon: <FaMapMarkerAlt />, label: "Location", value: CONTACT.address },
  { icon: <FaPhone />, label: "Phone", value: CONTACT.phoneNo },
  { icon: <FaEnvelope />, label: "Email", value: CONTACT.email, isLink: true }
]

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-purple-400 font-medium">Get In Touch</span>
        <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-gradient">Contact Me</h2>
        <p className="text-neutral-400 mt-4 max-w-lg mx-auto">
          Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{info.label}</h3>
              {info.isLink ? (
                <a
                  href={`mailto:${info.value}`}
                  className="text-neutral-400 hover:text-purple-400 transition-colors text-sm break-all"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-neutral-400 text-sm">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            href={`mailto:${CONTACT.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            <FaPaperPlane />
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
