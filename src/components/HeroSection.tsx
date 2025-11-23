import React from "react";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  imageUrl,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div
      className="relative bg-muted/50 rounded-md overflow-hidden"
    >
      <img
        src={imageUrl}
        alt="Zoo Hero Image"
        className="w-full h-64 object-cover md:h-96 lg:h-[500px]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
        <TypographyH1 className="text-white drop-shadow-lg mb-2">{title}</TypographyH1>
        <TypographyP className="text-zinc-300 drop-shadow-lg mb-4 max-w-2xl">{description}</TypographyP>
        <Button variant="secondary" size="lg" className="w-fit">
          <a href={buttonLink} className="flex items-center gap-2">
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;