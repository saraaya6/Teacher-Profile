import { useState } from "react";

export default function ShimmerImage({ 
  src, 
  alt, 
  className = "", 
  imgClassName = "", 
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
          {/* Optional: subtle icon or logo could go here inside the shimmer */}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${imgClassName}`}
        {...props}
      />
    </div>
  );
}
