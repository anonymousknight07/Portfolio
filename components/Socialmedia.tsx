import React from 'react';
import { FaStackOverflow, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { motion } from 'framer-motion';

interface SocialMedia {
  name: string;
  icon: JSX.Element;
  link: string;
}

const socialMediaData: SocialMedia[] = [
  { name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/akshat-pandey-5a2107228/' },
  { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/akshat___pandey07/' },
  { name: 'StackOverflow', icon: <FaStackOverflow />, link: 'https://stackoverflow.com/users/17843401/akshat-pandey' },
  { name: 'Leetcode', icon: <SiLeetcode />, link: 'https://leetcode.com/21951a0504/' },
];

const SocialMediaIcons: React.FC = () => {
  const bgStyle = { backgroundColor: 'rgb(2, 6, 23)' }; 

  return (
    <div className="social-media-icons flex justify-center items-center p-4" style={bgStyle}>
      {socialMediaData.map((socialMedia, index) => (
        <a key={index} href={socialMedia.link} target="_blank" rel="noopener noreferrer">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeInOut" }}
            className=" mt-3 mx-6 white"
            style={{ fontSize: '3rem' }} 
          >
            {socialMedia.icon}
          </motion.h1>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
