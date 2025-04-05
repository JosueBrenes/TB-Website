"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Github, Mail, Menu, Send, Twitter } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">TrustBridge</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="https://github.com/byteworkscr/dApp-TrustBridge"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Contact TrustBridge</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col space-y-4 pt-2">
                <Link
                  href="mailto:hello@trustbridge.app"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>trustbridge.cr30@gmail.com</span>
                </Link>
                <Link
                  href="https://t.me/trustbridgecr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Send className="h-4 w-4" />
                  <span>@TrustBridge</span>
                </Link>
                <Link
                  href="https://x.com/TrustBridgecr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                  <span>@TrustBridgecr</span>
                </Link>
              </div>
            </DialogContent>
          </Dialog>

          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col space-y-6 py-6">
                <Link
                  href="/"
                  className="flex items-center space-x-2 px-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="font-bold">TrustBridge</span>
                </Link>

                <div className="flex flex-col space-y-3">
                  <div className="px-2 text-lg font-semibold">Contact</div>
                  <div className="flex flex-col space-y-3 px-2">
                    <Link
                      href="mailto:hello@trustbridge.app"
                      className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span>trustbridge.cr30@gmail.com</span>
                    </Link>
                    <Link
                      href="https://t.me/trustbridgecr"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Send className="h-4 w-4" />
                      <span>@TrustBridge</span>
                    </Link>
                    <Link
                      href="https://x.com/TrustBridgecr"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                      <span>@TrustBridgecr</span>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col space-y-3 px-2">
                  <Link
                    href="https://github.com/byteworkscr/dApp-TrustBridge"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                </div>

                <div className="px-2">
                  <Button
                    className="w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
