import React from "react";

interface ImageProps {
    src: string;
    alt: string;
}

export const AuthImageComponent: React.FC<ImageProps> = ({ src, alt }) => (
    <div className="w-1/2 h-[575px] hidden md:block">
        <img src={src} alt={alt} className="w-full object-cover"/> {/* Adjusted height */}
    </div>
);