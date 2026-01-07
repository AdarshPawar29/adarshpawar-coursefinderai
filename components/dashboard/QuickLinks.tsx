import { ExternalLink, BookOpen, FileText, Video, HelpCircle } from "lucide-react";
import Link from "next/link";

interface QuickLink {
  title: string;
  href: string;
  icon: React.ElementType;
}

const quickLinks: QuickLink[] = [
  { title: "Learning Resources", href: "/resources", icon: BookOpen },
  { title: "Documentation", href: "/docs", icon: FileText },
  { title: "Video Tutorials", href: "/tutorials", icon: Video },
  { title: "FAQs & Help Center", href: "/help", icon: HelpCircle },
];

export function QuickLinks() {
  return (
    <div className="bg-white rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      {/* Header */}
      <div className="px-4 pt-4 pb-2">
        <h3 className="text-[14px] font-semibold text-[#1A1A1A]">Quick Links</h3>
      </div>
      
      {/* Links */}
      <ul className="pb-2">
        {quickLinks.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="flex items-center justify-between px-4 py-2.5 hover:bg-[#F8F9FB] transition-colors group"
            >
              <span className="flex items-center gap-3">
                <link.icon className="h-4 w-4 text-[#999999] group-hover:text-[#226CF5] transition-colors" />
                <span className="text-[13px] text-[#666666] group-hover:text-[#1A1A1A] font-medium transition-colors">
                  {link.title}
                </span>
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-[#999999] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
