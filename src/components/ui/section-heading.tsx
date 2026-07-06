interface SectionHeadingProps {
  title: string;
  className?: string;
}

export function SectionHeading({ title, className = "" }: SectionHeadingProps) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold text-white tracking-tight ${className}`}
    >
      {title}
    </h2>
  );
}
