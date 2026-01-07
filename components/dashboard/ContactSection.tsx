import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone } from "lucide-react";

interface ContactPerson {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  avatarUrl?: string;
  initials: string;
}

const contacts: ContactPerson[] = [
  {
    id: 1,
    name: "Santosh Sharma",
    role: "Regional Manager - North",
    phone: "+91 98765 43210",
    email: "santosh@coursefinder.ai",
    initials: "SS",
  },
  {
    id: 2,
    name: "Priyanka Verma",
    role: "Regional Manager - South",
    phone: "+91 98765 43211",
    email: "priyanka@coursefinder.ai",
    initials: "PV",
  },
];

export function ContactSection() {
  return (
    <div className="bg-white rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-4">
      {/* Header */}
      <h3 className="text-[14px] font-semibold text-[#1A1A1A] mb-4">
        Contact Regional Manager
      </h3>
      
      {/* Contacts */}
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-start gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-[#F5F5F5]">
              <AvatarImage src={contact.avatarUrl} alt={contact.name} />
              <AvatarFallback className="bg-[#E9F0FE] text-[#226CF5] text-[12px] font-medium">
                {contact.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-[#1A1A1A]">{contact.name}</p>
              <p className="text-[11px] text-[#999999] mb-1.5">{contact.role}</p>
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-1.5 text-[12px] text-[#666666] hover:text-[#226CF5] transition-colors"
              >
                <Phone className="h-3 w-3" />
                <span>{contact.phone}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
