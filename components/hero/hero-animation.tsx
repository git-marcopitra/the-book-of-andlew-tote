import { Div, Img, ImgProps } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { FC } from 'react';

const MotionImg = motion(Img as FC<Omit<ImgProps, 'transition'>>);

const HeroAnimation: FC = () => (
  <Div position="relative">
    <MotionImg
      width="15rem"
      height="15rem"
      objectFit="cover"
      position="absolute"
      src="/img/tote.webp"
      initial={{ opacity: 1 }}
      alt="The Book of Andlew Tote"
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
    />
    <MotionImg
      top="7rem"
      left="2.5rem"
      width="5.5rem"
      height="5.5rem"
      objectFit="cover"
      position="absolute"
      src="/img/cigar.webp"
      initial={{ opacity: 0 }}
      alt="Andlew Tote Cigar"
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
    />
    <Img
      width="15rem"
      height="15rem"
      objectFit="cover"
      src="/img/tote-eyes.webp"
      alt="The Book of Andlew Tote Eyes"
    />
    <MotionImg
      width="10rem"
      position="absolute"
      alt="You are F broke"
      src="/img/youre-f-broke.webp"
      left="-7rem"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        x: [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 1, -1, 1, 0, 0, 0, 0],
      }}
      transition={{ duration: 5, repeat: Infinity }}
    />
    <MotionImg
      width="10rem"
      position="absolute"
      alt="Winners never quit"
      src="/img/winners-never-quit.webp"
      left="-7rem"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        x: [0, -1, 1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      }}
      transition={{ duration: 5, repeat: Infinity }}
    />
    <MotionImg
      width="10rem"
      position="absolute"
      alt="Winners never quit"
      src="/img/what-color-is-your-bugatti.webp"
      left="-7rem"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        x: [0, 0, 0, 0, 0, -1, 1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      }}
      transition={{ duration: 5, repeat: Infinity }}
    />
    <MotionImg
      width="10rem"
      position="absolute"
      alt="Winners never quit"
      src="/img/youre-broke.webp"
      left="-7rem"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 1, -1, 1],
      }}
      transition={{ duration: 5, repeat: Infinity }}
    />
  </Div>
);

export default HeroAnimation;
