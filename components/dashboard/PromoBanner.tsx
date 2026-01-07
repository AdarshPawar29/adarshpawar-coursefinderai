import { ArrowRight } from "lucide-react";

export function PromoBanner() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#1E3A5F] to-[#2B5278] p-6 lg:p-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 400 400">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="white" />
            </pattern>
          </defs>
          <rect fill="url(#grid)" width="100%" height="100%" />
        </svg>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="space-y-4 text-center lg:text-left">
          <span className="inline-block px-3 py-1 text-[11px] font-medium bg-[#226CF5] text-white rounded-full uppercase tracking-wider">
            Allied Services
          </span>
          <h3 className="text-2xl lg:text-3xl font-bold text-white">
            Overseas Education Loans
          </h3>
          <p className="text-[14px] text-white/70 max-w-md leading-relaxed">
            Help your students get the financial support they need for their international education journey with our partner banks.
          </p>
          <button className="inline-flex items-center gap-2 h-10 px-6 bg-white text-[#1E3A5F] text-[13px] font-semibold rounded-lg hover:bg-white/90 transition-colors">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Illustration */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="w-40 h-40 relative">
            {/* Decorative circles */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20" />
            <div className="absolute inset-4 rounded-full border-2 border-white/15" />
            <div className="absolute inset-8 rounded-full bg-white/10 flex items-center justify-center">
              {/* Person illustration placeholder */}
              <svg
                className="w-12 h-12 text-white/60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
