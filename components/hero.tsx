import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-6 sm:space-y-8 py-16 sm:py-20 md:py-24 lg:py-32 text-center">
      <div className="space-y-3 sm:space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-transparent">
          <span className="block">TrustBridge Loan Marketplace</span>
          <span className="block mt-1 sm:mt-2">Fund Smart. Fund Fast.</span>
        </h1>
        <p className="mx-auto max-w-[42rem] text-sm sm:text-base md:text-lg lg:text-xl leading-normal text-muted-foreground sm:leading-8">
          Connect directly with borrowers and fund verified loan contracts using
          Stellar and Trustless Work. No custody, no delays—just transparent and
          secure financing.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center items-center">
        <Button className="w-full sm:w-auto" size="lg">
          Browse Loans
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button className="w-full sm:w-auto" variant="outline" size="lg">
          How It Works
        </Button>
      </div>
    </section>
  );
}
