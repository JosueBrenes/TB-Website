"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Zap, Lock, Users, Code, HandCoins, Landmark, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// Custom hook for scroll-triggered animations
const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return { ref, controls }
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

interface TeamMember {
  name: string
  role: string
  imageUrl: string
}

const teamMembers: TeamMember[] = [
  { name: "Josué Brenes", role: "CEO & FullStack Developer", imageUrl: "/images/team/josue-brenes.png" },
  { name: "Daniel Coto", role: "FrontEnd Developer", imageUrl: "/images/team/daniel-coto.png" },
  { name: "Yuliana Gonzáles", role: "BackEnd Developer", imageUrl: "/images/team/yuliana-gonzales.png" },
  { name: "Sebastian Mena", role: "Product Lead", imageUrl: "/images/team/sebastian-mena.png" },
]

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const heroAnim = useScrollAnimation(0.3)
  const featuresAnim = useScrollAnimation(0.2)
  const audienceAnim = useScrollAnimation(0.2)
  const teamAnim = useScrollAnimation(0.1)
  const ctaAnim = useScrollAnimation(0.2)

  const cardHoverEffect = {
    y: -8,
    scale: 1.03,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-black text-zinc-50">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-sm border-b border-zinc-800" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Image src="/images/logo-icon-dark.png" alt="TrustBridge Logo" width={32} height={32} />
            <span className="text-xl font-semibold tracking-tight">TrustBridge</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {["Features", "For Whom?", "Team", "Docs"].map((item) => (
              <motion.div key={item} whileHover={{ y: -2 }}>
                <Link
                  href={
                    item === "Docs"
                      ? "https://trustbridge.gitbook.io/trustbridge"
                      : `#${item.toLowerCase().replace(" ", "-").replace("?", "")}`
                  }
                  target={item === "Docs" ? "_blank" : "_self"}
                  rel={item === "Docs" ? "noopener noreferrer" : ""}
                  className="hover:text-emerald-400 transition-colors"
                  prefetch={false}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
          <Button asChild size="sm" className="bg-emerald-700 text-white hover:bg-emerald-800">
            <Link href="#">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          ref={heroAnim.ref}
          initial="hidden"
          animate={heroAnim.controls}
          variants={sectionVariants}
          className="relative w-full pt-24 pb-20 md:pt-32 md:pb-28 bg-black" // Added bg-black here
        >
          {/* Removed the div with background gradients */}
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 to-emerald-700"
            >
              Decentralized P2P Lending.
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 to-emerald-700 mt-2"
            >
              Built on Trust.
            </motion.h1>
            <motion.p variants={itemVariants} className="mx-auto max-w-[700px] text-zinc-300 md:text-xl mt-6">
              TrustBridge connects borrowers and lenders directly through secure smart escrow contracts on the Stellar
              blockchain. No intermediaries, just transparent and permissionless finance.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-emerald-700 text-white hover:bg-emerald-800">
                <Link href="#">Request a Loan</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-black text-emerald-500 border border-emerald-700 hover:bg-emerald-950 hover:text-emerald-400 hover:border-emerald-600"
              >
                <Link href="https://trustbridge.gitbook.io/trustbridge" target="_blank" rel="noopener noreferrer">
                  Explore Docs <FileText className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          id="features"
          ref={featuresAnim.ref}
          initial="hidden"
          animate={featuresAnim.controls}
          variants={sectionVariants}
          className="w-full py-12 md:py-24 lg:py-32 bg-zinc-950"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-800/30 px-3 py-1 text-sm text-emerald-400 border border-emerald-700">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">A New Era of Lending</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  TrustBridge is designed from the ground up to provide a secure, transparent, and efficient lending
                  experience.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={sectionVariants}
              className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 mt-12"
            >
              {[
                {
                  icon: Lock,
                  title: "Secure Escrows",
                  desc: "Loans are backed by Stellar's smart contract capabilities, ensuring your funds are safe and transactions are automated and trustless.",
                },
                {
                  icon: HandCoins,
                  title: "Direct P2P Lending",
                  desc: "Connect and transact directly with other users. No banks, no intermediaries. Just pure peer-to-peer finance.",
                },
                {
                  icon: Zap,
                  title: "Decentralized & Transparent",
                  desc: "All operations are recorded on the Stellar public ledger, providing full transparency and auditability for every loan.",
                },
                {
                  icon: Code,
                  title: "Integration-Ready",
                  desc: "A robust protocol and clear documentation make it easy for developers to build new applications and services on top of TrustBridge.",
                },
              ].map((feature, i) => (
                <motion.div key={i} variants={itemVariants} whileHover={cardHoverEffect}>
                  <Card className="bg-zinc-900 border-zinc-800 text-white h-full transition-colors duration-300 hover:border-emerald-800">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-emerald-700/20 p-3 rounded-full">
                        <feature.icon className="h-6 w-6 text-emerald-500" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-zinc-400">{feature.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Audience Section */}
        <motion.section
          id="audience"
          ref={audienceAnim.ref}
          initial="hidden"
          animate={audienceAnim.controls}
          variants={sectionVariants}
          className="w-full py-12 md:py-24 lg:py-32" // This section will have the default black background from the body
        >
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Built for Everyone in the Ecosystem
              </h2>
              <p className="mx-auto max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you're looking to borrow, lend, or build, TrustBridge provides the tools you need.
              </p>
            </motion.div>
            <motion.div
              variants={sectionVariants}
              className="mx-auto w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
            >
              {[
                {
                  icon: Users,
                  title: "Borrowers",
                  desc: "Access fair, crypto-based microloans without the hassle of traditional financial institutions.",
                },
                {
                  icon: Landmark,
                  title: "Lenders",
                  desc: "Earn interest on your crypto assets by securely lending to a global network of borrowers.",
                },
                {
                  icon: Code,
                  title: "Developers",
                  desc: "Contribute to the protocol or build innovative financial applications on a decentralized foundation.",
                },
              ].map((audience, i) => (
                <motion.div key={i} variants={itemVariants} whileHover={cardHoverEffect}>
                  <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border border-zinc-800 bg-zinc-950/50 h-full transition-colors duration-300 hover:border-emerald-800">
                    <audience.icon className="h-10 w-10 text-emerald-500" />
                    <h3 className="text-2xl font-bold">{audience.title}</h3>
                    <p className="text-zinc-400">{audience.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          id="team"
          ref={teamAnim.ref}
          initial="hidden"
          animate={teamAnim.controls}
          variants={sectionVariants}
          className="w-full py-12 md:py-24 lg:py-32 bg-zinc-950"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="inline-block rounded-lg bg-emerald-800/30 px-3 py-1 text-sm text-emerald-400 border border-emerald-700">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Minds Behind TrustBridge</h2>
              <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A dedicated group of professionals passionate about revolutionizing finance.
              </p>
            </motion.div>
            <motion.div
              variants={sectionVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover={cardHoverEffect}
                  className="flex flex-col items-center text-center p-6 rounded-lg border border-zinc-800 bg-zinc-900 transition-colors duration-300 hover:border-emerald-800"
                >
                  <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center mb-4 overflow-hidden border-2 border-emerald-700">
                    <Image
                      src={member.imageUrl || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-emerald-500">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          ref={ctaAnim.ref}
          initial="hidden"
          animate={ctaAnim.controls}
          variants={sectionVariants}
          className="w-full py-12 md:py-24 lg:py-32" // This section will have the default black background from the body
        >
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Bridge Your Trust?</h2>
              <p className="mx-auto max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join the future of decentralized finance today. Explore the platform or dive into our documentation to
                get started.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-6">
              <Button asChild size="lg" className="bg-emerald-700 text-white hover:bg-emerald-800">
                <Link href="#">
                  Launch App <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <Image src="/images/logo-icon-dark.png" alt="TrustBridge Logo" width={24} height={24} />
            <p className="text-sm text-zinc-400">&copy; {new Date().getFullYear()} TrustBridge. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm hover:underline underline-offset-4 text-zinc-400" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4 text-zinc-400" prefetch={false}>
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
