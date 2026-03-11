import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number | string;
  letterSpacing?: number;
  fill?: string;
  strokeWidth?: number;
  stroke?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 48,
  fontFamily = 'Arial, sans-serif',
  fontWeight = 'bold',
  letterSpacing = 0,
  fill = 'currentColor',
  strokeWidth = 0,
  stroke = 'none',
}) => {
  return (
    <svg
      viewBox={`0 0 ${text.length * fontSize * 0.6} ${fontSize * 1.5}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        fill={fill}
        strokeWidth={strokeWidth}
        stroke={stroke}
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
