import { HandCoins, ShieldCheck, Search } from "lucide-react";
import Image from "next/image";

const features = [
  {
    name: "Non-Custodial Funding",
    description:
      "Fund loans directly from your wallet. TrustBridge never holds your money.",
    icon: HandCoins,
  },
  {
    name: "Transparent & Auditable",
    description:
      "Every contract is verifiable and pre-approved before being listed for funding.",
    icon: ShieldCheck,
  },
  {
    name: "Smart Matching Tools",
    description:
      "Use filters to quickly find loans based on amount, title, or recent activity.",
    icon: Search,
  },
  {
    name: "Secured with Trustless Work",
    description:
      "Executes smart contracts in a decentralized and trustless environment.",
    icon: "/trustless-work-logo.png",
  },
];

export default function Features() {
  return (
    <section className="container space-y-8 sm:space-y-12 md:space-y-16 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[58rem] text-center px-4">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          Why Choose TrustBridge?
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground">
          The fastest way to connect with verified loan requests in a secure,
          transparent and decentralized way.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 px-4">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-4 sm:p-6 md:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex-shrink-0 mb-2 sm:mb-0">
                {typeof feature.icon === "string" ? (
                  <Image
                    src={feature.icon || "/placeholder.svg"}
                    alt={feature.name}
                    width={32}
                    height={32}
                    className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                  />
                ) : (
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-500" />
                )}
              </div>
              <h3 className="font-bold text-base sm:text-lg md:text-xl">
                {feature.name}
              </h3>
            </div>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
