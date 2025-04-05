import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-6 sm:gap-8 py-6 sm:py-8 md:flex-row md:py-12 px-4">
        <div className="flex-1 space-y-3 sm:space-y-4">
          <h2 className="font-bold">TrustBridge</h2>
          <p className="text-sm text-muted-foreground max-w-xs">
            Decentralized lending, powered by Stellar and secured by smart
            contracts.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-6 sm:gap-8 md:gap-12 sm:grid-cols-3">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm font-medium">Platform</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link
                  href="/marketplace"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/byteworkscr"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://x.com/TrustBridgecr"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-4 sm:py-6 px-4">
        <p className="text-center text-xs sm:text-sm text-muted-foreground">
          © {new Date().getFullYear()} TrustBridge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
