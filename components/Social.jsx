import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaEnvelope, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/trustadekoye" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/trustadekoye/" },
  { icon: <FaEnvelope />, path: "mailto:trustadekoye@gmail.com" },
  { icon: <FaTwitter />, path: "https://x.com/cx_exquisite" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
