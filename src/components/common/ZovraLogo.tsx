import React from 'react';
import zovraZSymbol from '../../assets/images/zovra-z-symbol.png';

interface ZovraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showDomain?: boolean;
  variant?: 'full' | 'icon' | 'wordmark';
  animated?: boolean;
}

export const ZovraLogo: React.FC<ZovraLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  showDomain = false,
  variant = 'full',
  animated = true,
}) => {
  // Balanced icon dimensions with correct 893:536 (approx 5:3) natural aspect ratio
  // Ensures the complete original Z, its bottom stroke, pointed wing, and arrow are 100% visible
  const iconHeights = {
    sm: 'h-6 min-[360px]:h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-13 sm:h-14',
    xl: 'h-18 sm:h-20',
  };

  const textSizes = {
    sm: 'text-xs min-[360px]:text-sm sm:text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const labsSizes = {
    sm: 'text-[8px] min-[360px]:text-[9px]',
    md: 'text-[11px]',
    lg: 'text-[13px]',
    xl: 'text-[15px]',
  };

  return (
    <div className={`flex items-center gap-1.5 min-[360px]:gap-2 sm:gap-3 group select-none ${className}`}>
      {/* ZOVRA Original 3D Symbol - Restored faithfully from official brand asset */}
      {variant !== 'wordmark' && (
        <div className={`relative flex items-center justify-center shrink-0 overflow-visible ${iconHeights[size]} aspect-[893/536]`}>
          {/* Ambient Glow Backdrop on Hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#B7F45B]/25 via-[#83D9C1]/20 to-[#8B7CF6]/25 blur-md opacity-25 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Authentic Original ZOVRA Z Symbol (100% exact brand asset, uncropped, zero distortion) */}
          <img
            src={zovraZSymbol}
            alt="ZOVRA LABS Symbol"
            className="w-full h-full object-contain overflow-visible drop-shadow-[0_2px_10px_rgba(183,244,91,0.25)] group-hover:drop-shadow-[0_0_20px_rgba(183,244,91,0.6)] transition-all duration-300 group-hover:scale-105 select-none"
            loading="eager"
            decoding="async"
          />

          {/* Animated Sweeping Orbital Light Trail overlay */}
          {animated && (
            <svg
              viewBox="0 0 100 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            >
              <defs>
                <filter id="zovraLightGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              {/* Sweeping Light Beam following the orbital swoosh */}
              <path
                d="M 12 40 C 4 52 18 58 40 55 C 64 52 82 34 88 18"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="18 45"
                filter="url(#zovraLightGlow)"
                className="opacity-75 group-hover:opacity-100 transition-opacity"
                style={{
                  animation: 'zovraNavbarOrbitDash 2.5s linear infinite',
                }}
              />
            </svg>
          )}
        </div>
      )}

      {/* ZOVRA LABS Wordmark */}
      {(showText || variant === 'wordmark') && (
        <div className="flex flex-col justify-center leading-none">
          <div className={`font-extrabold tracking-tight font-heading flex items-center ${textSizes[size]}`}>
            {/* Stylized Z O V R A lettering */}
            <span className="text-[#F8FAFC] tracking-wider uppercase font-black flex items-center gap-0.5 transition-colors duration-300 group-hover:text-white">
              <span>Z</span>
              <span>O</span>
              <span>V</span>
              <span>R</span>
              <span>A</span>
            </span>

            <span className="text-gradient-zovra font-black uppercase ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:scale-105">
              LABS
            </span>
          </div>

          {showDomain && (
            <span className={`font-mono font-bold tracking-widest text-[#83D9C1] uppercase mt-1 ${labsSizes[size]}`}>
              ZOVRALABS.COM
            </span>
          )}
        </div>
      )}

      {/* Embedded CSS Keyframe Animations for Orbital Sweep */}
      <style>{`
        @keyframes zovraNavbarOrbitDash {
          0% {
            stroke-dashoffset: 63;
          }
          100% {
            stroke-dashoffset: -63;
          }
        }
      `}</style>
    </div>
  );
};
