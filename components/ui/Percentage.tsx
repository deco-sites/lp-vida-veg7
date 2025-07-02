/**
 * @titleBy text
 */
interface PercentProps {
  text?: string;
  percentage?: Percent; // Percentage can be optional
}


interface Percent {
  percentage?: number;
  strokeWidth?: number; 
}

const Percentage = ({ percentage, text }: PercentProps) => {
  const size = 140; 
  const strokeWidth = percentage?.strokeWidth ?? 20; // Default strokeWidth if undefined
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = percentage?.percentage
    ? circumference - (percentage.percentage / 100) * circumference
    : circumference;

  return (
    <div className="flex flex-col items-center relative">
      <svg width={size} height={size}>
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#00754A" // Background color
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        {percentage?.percentage !== undefined && (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#A1C342" // Progress color
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transformOrigin: 'center' }}
            className="rotate-[250deg] border border-accent-content" // Corrected to className
          />
        )}
      </svg>
      {/* Inner Square */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          width: `${size / 1.8}px`, // Adjusted proportion
          height: `${size / 1.8}px`,
          top: `13%`,
          zIndex: 1,
          borderRadius: '8px', // Slightly rounded corners
        }}
      >
        {/* Percentage in the center */}
        {percentage?.percentage !== undefined && (
          <span
            className="text-center"
            style={{
              fontSize: `${size / 4}px`,
              fontWeight: 'bold',
              color: '#A1C342',
            }}
          >
            {percentage.percentage}%
          </span>
        )}
      </div>
      {/* Text Below */}
      {text && (
        <p
          className="text-center mt-2 text-sm font-semibold"
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default Percentage;
