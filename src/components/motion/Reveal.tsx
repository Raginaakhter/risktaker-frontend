'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';

const variantsFor = (dir: Direction, distance = 32): Variants => {
  const base = { opacity: 0 };
  const show = { opacity: 1, x: 0, y: 0, scale: 1 };
  switch (dir) {
    case 'up':
      return { hidden: { ...base, y: distance }, show };
    case 'down':
      return { hidden: { ...base, y: -distance }, show };
    case 'left':
      return { hidden: { ...base, x: distance }, show };
    case 'right':
      return { hidden: { ...base, x: -distance }, show };
    case 'scale':
      return { hidden: { ...base, scale: 0.92 }, show };
    default:
      return { hidden: base, show };
  }
};

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: 'div' | 'section' | 'article' | 'span' | 'li';
};

export default function Reveal({
  children,
  direction = 'up',
  distance = 32,
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.2,
  as = 'div'
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      variants={variantsFor(direction, distance)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
