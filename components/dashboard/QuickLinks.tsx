import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface QuickLink {
  title: string;
  href: string;
}

const quickLinks: QuickLink[] = [
  { title: "Learning Resources", href: "/resources" },
  { title: "Documentation", href: "/docs" },
  { title: "Video Tutorials", href: "/tutorials" },
  { title: "FAQs & Help Center", href: "/help" },
];

export function QuickLinks() {
  return (
    <div className="w-full">
      <h2 className="text-[18px] font-bold text-[#3B3B3B] mb-5">Quick Links</h2>
      <ul className="flex flex-col gap-3">
        {quickLinks.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="group flex items-center justify-between bg-white border border-[#EBEBEB] rounded-[8px] px-5 py-3 transition-colors duration-200 hover:border-[#226CF5] hover:shadow-sm"
            >
              <span className="text-[14px] font-semibold text-[#226CF5] underline decoration-[#226CF5] underline-offset-4">
                {link.title}
              </span>
              <ExternalLink className="h-4 w-4 text-[#8F9297] transition-colors duration-200 group-hover:text-[#226CF5]" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
