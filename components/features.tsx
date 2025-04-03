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
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Why Choose TrustBridge?
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          The fastest way to connect with verified loan requests in a secure,
          transparent and decentralized way.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-8"
          >
            <div className="flex items-center gap-4">
              {typeof feature.icon === "string" ? (
                <Image
                  src={feature.icon}
                  alt={feature.name}
                  width={32}
                  height={32}
                />
              ) : (
                <feature.icon className="h-8 w-8" />
              )}
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
