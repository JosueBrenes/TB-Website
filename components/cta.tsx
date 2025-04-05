import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-3 sm:gap-4 py-16 sm:py-20 md:py-24 lg:py-32 text-center px-4">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          Ready to fund real impact?
        </h2>
        <p className="max-w-[42rem] leading-normal text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground sm:leading-8">
          Empower borrowers across the globe by funding secure, verified loan
          contracts through the TrustBridge marketplace.
        </p>
        <Button size="lg" className="mt-2 sm:mt-4 w-full sm:w-auto">
          Browse Loan Requests
        </Button>
      </div>
    </section>
  );
}
