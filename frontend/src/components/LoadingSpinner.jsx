import { Loader2 } from "lucide-react";

/**
 * LoadingSpinner component for indicating loading states
 *
 * @param {Object} props - Component props
 * @param {string} [props.size='md'] - Size of the spinner ('sm', 'md', 'lg', 'xl', '2xl')
 * @param {string} [props.color='primary'] - Color of the spinner ('primary', 'white', 'gray')
 * @param {string} [props.label] - Optional text to display next to the spinner
 * @param {boolean} [props.labelRight=true] - Whether to display the label to the right of the spinner
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.fullScreen=false] - Whether to display the spinner in full screen mode
 * @returns {JSX.Element} - The LoadingSpinner component
 */
export default function LoadingSpinner({
  size = "md",
  color = "primary",
  label,
  labelRight = true,
  className = "",
  fullScreen = false,
}) {
  // Size mappings
  const sizeMap = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-12 w-12",
    "2xl": "h-16 w-16",
    "3xl": "h-24 w-24",
  };

  // Color mappings
  const colorMap = {
    primary: "text-blue-600",
    white: "text-white",
    gray: "text-gray-500",
  };

  // Get the appropriate size and color classes
  const sizeClass = sizeMap[size] || sizeMap.md;
  const colorClass = colorMap[color] || colorMap.primary;

  // If fullScreen is true, render the spinner in the center of the screen
  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
        <div className="text-center">
          <Loader2
            className={`${sizeClass} ${colorClass} animate-spin mx-auto`}
            aria-hidden="true"
          />
          {label && <p className="mt-4 text-gray-600 font-medium">{label}</p>}
        </div>
      </div>
    );
  }

  // Regular inline spinner
  return (
    <div className={`inline-flex items-center ${className}`} role="status">
      {label && !labelRight && <span className="mr-2">{label}</span>}

      <Loader2
        className={`${sizeClass} ${colorClass} animate-spin`}
        aria-hidden="true"
      />

      {label && labelRight && <span className="ml-2">{label}</span>}

      {/* Screen reader text */}
      {!label && <span className="sr-only">Loading...</span>}
    </div>
  );
}
