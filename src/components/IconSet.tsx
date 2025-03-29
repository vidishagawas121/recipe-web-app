'use client';

import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

interface IconProps {
  size?: number;
  color?: string;
  glowColor?: string;
  className?: string;
}

const defaultColors = {
  primary: '#4F46E5',
  accent: '#EC4899',
  danger: '#EF4444',
  warning: '#F59E0B',
};

export const IconSet = {
  Cookbook: ({ size = 24, color, glowColor, className = '' }: IconProps) => {
    const iconColor = color || defaultColors.primary;
    const glow = glowColor || `${iconColor}40`;

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`relative p-3 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm shadow-glass-sm ${className}`}
        style={{
          boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.2), inset 0 0 8px ${glow}`,
        }}
      >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="relative z-10">
          <path
            d="M4 19V5a2 2 0 012-2h13.4a.6.6 0 01.6.6v13.114"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8 3v18h12a2 2 0 002-2V5a2 2 0 00-2-2H8z"
            stroke={iconColor}
            strokeWidth="1.5"
          />
          <path
            d="M12 7h6M12 11h6M12 15h6"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <div
          className="absolute inset-0 rounded-xl opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${glow}, transparent 70%)`,
          }}
        />
      </motion.div>
    );
  },

  Ingredients: ({ size = 24, color, glowColor, className = '' }: IconProps) => {
    const iconColor = color || defaultColors.accent;
    const glow = glowColor || `${iconColor}40`;

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`relative p-3 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm shadow-glass-sm ${className}`}
        style={{
          boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.2), inset 0 0 8px ${glow}`,
        }}
      >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="relative z-10">
          <path
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5a2 2 0 002 2h2a2 2 0 002-2M12 11h4M12 15h4M8 11h2M8 15h2"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <div
          className="absolute inset-0 rounded-xl opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${glow}, transparent 70%)`,
          }}
        />
      </motion.div>
    );
  },

  Timer: ({ size = 24, color, glowColor, className = '' }: IconProps) => {
    const iconColor = color || defaultColors.primary;
    const glow = glowColor || `${iconColor}40`;

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`relative p-3 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm shadow-glass-sm ${className}`}
        style={{
          boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.2), inset 0 0 8px ${glow}`,
        }}
      >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="relative z-10">
          <path
            d="M12 8v4l2.5 2.5M12 2v2M2.2 9.7l1.4 1.4M21.8 9.7l-1.4 1.4M12 20a6 6 0 100-12 6 6 0 000 12z"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className="absolute inset-0 rounded-xl opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${glow}, transparent 70%)`,
          }}
        />
      </motion.div>
    );
  },

  Favorite: ({ size = 24, color, glowColor, className = '' }: IconProps) => {
    const iconColor = color || defaultColors.accent;
    const glow = glowColor || `${iconColor}40`;

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`relative p-3 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm shadow-glass-sm ${className}`}
        style={{
          boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.2), inset 0 0 8px ${glow}`,
        }}
      >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="relative z-10">
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className="absolute inset-0 rounded-xl opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${glow}, transparent 70%)`,
          }}
        />
      </motion.div>
    );
  },

  Chat: ({ size = 24, color, glowColor, className = '' }: IconProps) => {
    const iconColor = color || defaultColors.primary;
    const glow = glowColor || `${iconColor}40`;

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`relative p-3 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm shadow-glass-sm ${className}`}
        style={{
          boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.2), inset 0 0 8px ${glow}`,
        }}
      >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="relative z-10">
          <path
            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className="absolute inset-0 rounded-xl opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${glow}, transparent 70%)`,
          }}
        />
      </motion.div>
    );
  },

  Cloud: ({ size = 24, color, glowColor, className = '' }: IconProps) => {
    const iconColor = color || defaultColors.accent;
    const glow = glowColor || `${iconColor}40`;

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`relative p-3 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm shadow-glass-sm ${className}`}
        style={{
          boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.2), inset 0 0 8px ${glow}`,
        }}
      >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="relative z-10">
          <path
            d="M17.5 19H9a6 6 0 116-6c0-.34.03-.67.1-1A4.5 4.5 0 1117.5 19z"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className="absolute inset-0 rounded-xl opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${glow}, transparent 70%)`,
          }}
        />
      </motion.div>
    );
  },

  Edit: ({ size = 24, color, glowColor, className = '' }: IconProps) => {
    const iconColor = color || defaultColors.warning;
    const glow = glowColor || `${iconColor}40`;

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`relative p-3 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm shadow-glass-sm ${className}`}
        style={{
          boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.2), inset 0 0 8px ${glow}`,
        }}
      >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="relative z-10">
          <path
            d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className="absolute inset-0 rounded-xl opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${glow}, transparent 70%)`,
          }}
        />
      </motion.div>
    );
  },

  Delete: ({ size = 24, color, glowColor, className = '' }: IconProps) => {
    const iconColor = color || defaultColors.danger;
    const glow = glowColor || `${iconColor}40`;

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`relative p-3 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm shadow-glass-sm ${className}`}
        style={{
          boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.2), inset 0 0 8px ${glow}`,
        }}
      >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="relative z-10">
          <path
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className="absolute inset-0 rounded-xl opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${glow}, transparent 70%)`,
          }}
        />
      </motion.div>
    );
  },
}; 