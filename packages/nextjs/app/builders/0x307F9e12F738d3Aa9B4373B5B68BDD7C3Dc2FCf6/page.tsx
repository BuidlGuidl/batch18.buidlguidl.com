import Link from "next/link";
import type { NextPage } from "next";
import { SiDiscord, SiTelegram, SiX } from "react-icons/si";
import { Address } from "~~/components/scaffold-eth";

const BUILDER_ADDRESS = "0x307F9e12F738d3Aa9B4373B5B68BDD7C3Dc2FCf6" as const;

const projects = [
  {
    href: "https://dadcantdraw.com",
    title: "Dad Can't Draw",
    description: "AI coloring page generator",
    tech: "Next.js, React, Tailwind CSS • Summer 2024",
  },
  {
    href: "https://rankping.com",
    title: "Rank Ping",
    description: "Notification tool for Google Search Console data",
    tech: "Next.js, React, Tailwind CSS • In Development",
  },
  {
    href: "https://postmole.com",
    title: "Post Mole",
    description: "Post scheduling/cross-posting tool",
    tech: "Python, Flask, Pinterest API • In Development",
  },
  {
    href: "https://listingbro.com",
    title: "Listing Bro",
    description: "Directory listing service",
    tech: "React, Node.js, PostgreSQL • In Development",
  },
  {
    href: "https://nextdaydirectory.com",
    title: "Next Day Directory",
    description: "Build your own directory platform in 24 hours",
    tech: "Next.js, Supabase, Stripe • In Development",
  },
  {
    href: "https://speedrunethereum.com/builders/0x307F9e12F738d3Aa9B4373B5B68BDD7C3Dc2FCf6",
    title: "SpeedRunEthereum Challenges",
    description: "Building dApps & learning Web3",
    tech: "Batch 18",
  },
  {
    href: null,
    title: "[Redacted Secret App]",
    description: null,
    tech: "In Development",
  },
];

const socialLinks = [
  { href: "https://x.com/joshmccoydev", label: "X", icon: SiX },
  { href: "https://discord.gg/eZ72hpDzC5", label: "Discord", icon: SiDiscord },
  { href: "https://t.me/joshmccoydev", label: "Telegram", icon: SiTelegram },
];

const JoshMcCoyProfile: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="px-4 py-8 md:px-8 md:py-16 max-w-sm md:max-w-2xl lg:max-w-3xl md:mx-auto">
        <div className="space-y-6 text-base-content">
          {/* Header */}
          <div>
            <h1 className="text-2xl md:text-3xl font-normal mb-3">hi, i&apos;m josh. 👋</h1>
            <p className="text-base md:text-lg leading-relaxed mb-3">
              im a mid-thirties florida man, with three kids (5, 3, and 1), who likes to build things on the internet &
              grow plants on my front porch.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              i spend most of my time building ai-powered apps, seo tools, and marketing automation. mostly using react,
              python, and whatever new thing has caught my attention that week.
            </p>
          </div>

          {/* Address */}
          <div className="border-t border-base-300 pt-4">
            <div className="text-base md:text-lg text-base-content/60 mb-2">my wallet</div>
            <Address address={BUILDER_ADDRESS} format="long" />
          </div>

          {/* What I'm Building */}
          <div>
            <h2 className="text-xl md:text-2xl font-medium mb-3">what i&apos;m building</h2>
            <div className="space-y-2">
              {projects.map(project => (
                <div key={project.title}>
                  {project.href ? (
                    <Link
                      href={project.href}
                      target="_blank"
                      className="font-medium text-base-content/90 hover:text-base-content"
                    >
                      {project.title}
                    </Link>
                  ) : (
                    <div className="font-medium">{project.title}</div>
                  )}
                  {project.description && (
                    <div className="text-base-content/70 text-base md:text-lg">{project.description}</div>
                  )}
                  <div className="text-base-content/50 text-base md:text-lg">{project.tech}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What I'm Playing */}
          <div>
            <h3 className="text-lg md:text-xl font-medium mb-2">what i&apos;m playing</h3>
            <div className="space-y-1 text-base md:text-lg">
              <div>• Minecraft</div>
              <div>• Baldur&apos;s Gate 3</div>
              <div>• Death Stranding</div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg md:text-xl font-medium mb-2">links</h3>
            <div className="flex gap-3">
              {socialLinks.map(link => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    title={link.label}
                    className="text-base-content/70 hover:text-base-content transition-colors"
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-base-300 pt-4 mt-8">
            <div className="text-base md:text-lg text-base-content/50">
              🏗️ built with scaffold-eth 2 • proudly part of batch 18
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoshMcCoyProfile;
