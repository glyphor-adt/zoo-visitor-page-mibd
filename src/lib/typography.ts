import React from "react";
import { cn } from "@/lib/utils";

// Extend the theme with semantic tokens
// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
// module.exports = {
//  theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         // ...other colors
//       },
//       fontFamily: {
//         sans: ["var(--font-sans)", ...fontFamily.sans],
//         heading: ["var(--font-heading)", ...fontFamily.sans],
//       },
//     },
//   },
// }
//

type HeadingProps = {
  children: React.ReactNode;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

export function Heading({
  children,
  level = "h1",
  className,
}: HeadingProps): React.ReactNode {
  const fontSizeClasses = {
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
    h2: "text-3xl md:text-4xl font-semibold tracking-tight",
    h3: "text-2xl md:text-3xl font-semibold tracking-tight",
    h4: "text-xl md:text-2xl font-semibold",
    h5: "text-lg font-semibold",
    h6: "text-base font-semibold",
  };

  const Element = level;

  return (
    <Element
      className={cn(
        "font-heading",
        fontSizeClasses[level],
        "text-primary-foreground", // Use primary foreground color
        className
      )}
    >
      {children}
    </Element>
  );
}

type TextProps = {
  children: React.ReactNode;
  variant?: "lead" | "default" | "muted" | "small";
  className?: string;
};

export function Text({ children, variant = "default", className }: TextProps) {
  const variantClasses = {
    lead: "text-xl md:text-2xl font-medium text-muted-foreground",
    default: "text-base text-secondary-foreground", // Use secondary foreground
    muted: "text-sm text-muted-foreground",
    small: "text-xs text-muted-foreground",
  };

  return (
    <p className={cn("font-sans", variantClasses[variant], className)}>
      {children}
    </p>
  );
}