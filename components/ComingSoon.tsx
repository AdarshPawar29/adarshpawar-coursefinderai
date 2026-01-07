import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  return (
    <div className="flex min-h-[calc(100vh-100px)] flex-col items-center justify-center p-4 text-center">
      <div className="mb-8 rounded-full bg-blue-50 p-6 ring-1 ring-blue-100">
        <Construction className="h-12 w-12 text-blue-600" />
      </div>
      
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Coming Soon
      </h1>
      
      <p className="mb-8 max-w-md text-lg text-gray-600">
        We're working hard to bring you this feature. Please check back later for updates.
      </p>

      <Button asChild className="gap-2 bg-blue-600 hover:bg-blue-700">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
      </Button>
    </div>
  );
}
