import { motion } from "motion/react";
const SkillsCard = ({ icon, title, text }) => {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      // animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "tween", visualDuration: 0.4, bounce: 0.2 },
      }}
    >
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </motion.article>
  );
};
export default SkillsCard;
