export const transition = {
  type: 'tween',
  ease: [0.22, 1, 0.36, 1],
  duration: 0.8,
};

export const duration = 0.8;

export const initial = {
  y: 60,
  opacity: 0,
};

export const animate = {
  x: 0,
  y: 0,
  opacity: 1,
  transition,
};
