import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number | string;
  label: string;
  description?: string;
  variant: "blue" | "green" | "yellow" | "red" | "gray";
  icon?: React.ReactNode;
}

const variantStyles = {
  blue: {
    bg: "bg-[#D5E3FF]",
    text: "text-[#1048B5]", // Darkened for accessibility
    pillBorder: "border-[#9CBDFB]",
  },
  green: {
    bg: "bg-[#EBFFEF]",
    text: "text-[#246B34]", // Darkened for accessibility
    pillBorder: "border-[#B3EDC0]",
  },
  yellow: {
    bg: "bg-[#FFF6DB]",
    text: "text-[#997200]", // Darkened for accessibility
    pillBorder: "border-[#FEE598]",
  },
  red: {
    bg: "bg-[#FFF0F2]",
    text: "text-[#D31225]", // Darkened for accessibility
    pillBorder: "border-[#FDCED5]",
  },
  gray: {
    bg: "bg-[#EEEEEE]",
    text: "text-[#616262]",
    pillBorder: "border-[#D2D2D2]",
  },
};

export function StatCard({ value, label, description, variant }: StatCardProps) {
  const styles = variantStyles[variant];

  return (
    <div className="relative group mb-4">
      <div
        className={cn(
          "rounded-[8px] pt-6 pb-8 px-2 flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-lg min-h-[107px] w-full relative z-10",
          "shadow-[0px_2px_12px_rgba(0,0,0,0.06)]",
          styles.bg
        )}
      >
        <div className="space-y-1 mb-2">
          <div className={cn("text-[32px] font-bold leading-none tracking-tight", styles.text)}>
            {value}
          </div>
          <p className={cn("text-[14px] font-medium opacity-90", styles.text)}>
            {label}
          </p>
        </div>
      </div>
      
      {description && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-20 w-max max-w-[90%]">
          <div className={cn(
            "bg-white rounded-[2.5px] py-1 px-4 shadow-sm border text-center flex items-center justify-center",
            styles.pillBorder
          )}>
             <span className={cn("text-[12px] font-medium whitespace-nowrap", styles.text)}>
              {description}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

interface StatCardsGridProps {
  stats: StatCardProps[];
}

export function StatCardsGrid({ stats }: StatCardsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
