import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number | string;
  label: string;
  description?: string;
  variant: "blue" | "green" | "yellow" | "red";
  icon?: React.ReactNode;
}

const variantStyles = {
  blue: {
    bg: "bg-[#E9F0FE]",
    border: "border-l-[#226CF5]",
    text: "text-[#226CF5]",
    label: "text-[#226CF5]",
  },
  green: {
    bg: "bg-[#E7F6EC]",
    border: "border-l-[#0F9D58]",
    text: "text-[#0F9D58]",
    label: "text-[#0F9D58]",
  },
  yellow: {
    bg: "bg-[#FEF7E0]",
    border: "border-l-[#F4B400]",
    text: "text-[#F4B400]",
    label: "text-[#B8860B]",
  },
  red: {
    bg: "bg-[#FEEAE6]",
    border: "border-l-[#DB4437]",
    text: "text-[#DB4437]",
    label: "text-[#DB4437]",
  },
};

export function StatCard({ value, label, description, variant }: StatCardProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "rounded-lg p-5 border-l-4 transition-all duration-200 hover:shadow-md",
        styles.bg,
        styles.border
      )}
    >
      <div className="space-y-1">
        <p className={cn("text-[36px] font-bold leading-tight", styles.text)}>
          {value}
        </p>
        <p className={cn("text-[14px] font-semibold", styles.label)}>
          {label}
        </p>
        {description && (
          <p className="text-[12px] text-[#666666] mt-0.5">{description}</p>
        )}
      </div>
    </div>
  );
}

interface StatCardsGridProps {
  stats: StatCardProps[];
}

export function StatCardsGrid({ stats }: StatCardsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
