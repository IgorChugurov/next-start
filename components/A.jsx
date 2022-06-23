import Link from "next/link";

const A = ({ text, href }) => {
  return <Link href={href}>{text}</Link>;
};

export default A;
