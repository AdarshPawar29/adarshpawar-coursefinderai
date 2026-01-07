import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ContactPerson {
  id: number;
  name: string;
  role: string; // Keeping role for data integrity, but displaying location as per UI
  location: string;
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
    location: "New Delhi",
    phone: "+91 98765 43210",
    email: "sshatmal123@kcoverseas.com",
    initials: "SS",
    avatarUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Santosh Sharma",
    role: "Regional Manager - South",
    location: "Hyderabad",
    phone: "+91 98765 43210",
    email: "sshatmal123@kcoverseas.com",
    initials: "SS",
    avatarUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Santosh Sharma",
    role: "Regional Manager - West",
    location: "Mumbai",
    phone: "+91 98765 43210",
    email: "sshatmal123@kcoverseas.com",
    initials: "SS",
    avatarUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
];

export function ContactSection() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <h3 className="text-[16px] font-bold text-[#3B3B3B] mb-4">
        Contact Regional Manager
      </h3>
      
      {/* Contacts List */}
      <div className="flex flex-col gap-4">
        {contacts.map((contact) => (
          <div 
            key={contact.id} 
            className="bg-white border border-[#EBEBEB] rounded-[10px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Top Section: Avatar & Info */}
            <div className="p-4 flex items-center gap-4">
              <Avatar className="h-[50px] w-[50px] border border-gray-100">
                <AvatarImage src={contact.avatarUrl} alt={contact.name} />
                <AvatarFallback className="bg-[#E9F0FE] text-[#226CF5] text-[16px] font-bold">
                  {contact.initials}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex flex-col gap-0.5">
                <p className="text-[15px] font-semibold text-[#226CF5] leading-tight">
                  {contact.name}
                </p>
                <div className="flex items-center gap-2 text-[13px] text-[#3B3B3B] font-medium">
                  <span>{contact.phone}</span>
                  <div className="h-3 w-[1px] bg-[#EBEBEB]"></div>
                  <span>{contact.location}</span>
                </div>
              </div>
            </div>

            {/* Footer Section: Email */}
            <div className="bg-[#F7F8F9] py-2.5 px-4 text-center border-t border-[#EBEBEB]">
              <span className="text-[#3B3B3B] text-[12px] font-medium block truncate">
                {contact.email}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
