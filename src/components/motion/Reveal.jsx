import { useInView } from "../../lib/motion";

// Fades and lifts its children in once, when they first scroll into view.
const Reveal = ({ as: Tag = "div", className = "", delay = 0, children, ...rest }) => {
  const [ref, inView] = useInView({ threshold: 0.15 });
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
