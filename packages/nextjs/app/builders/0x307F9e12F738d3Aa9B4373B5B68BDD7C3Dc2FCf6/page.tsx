"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const BUILDER_ADDRESS = "0x307F9e12F738d3Aa9B4373B5B68BDD7C3Dc2FCf6" as const;

const JoshMcCoyProfile: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="px-4 py-8 md:px-8 md:py-16 max-w-sm md:max-w-md">
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
            <div className="text-sm text-base-content/60 mb-2">my wallet</div>
            <Address address={BUILDER_ADDRESS} format="long" />
          </div>

          {/* What I'm Building */}
          <div>
            <h2 className="text-lg md:text-xl font-medium mb-3">what i&apos;m building</h2>
            <div className="space-y-2">
              <div>
                <Link
                  href="https://dadcantdraw.com"
                  target="_blank"
                  className="font-medium text-base-content/90 hover:text-base-content"
                >
                  Dad Can&apos;t Draw
                </Link>
                <div className="text-base-content/70 text-sm">AI coloring page generator</div>
                <div className="text-base-content/50 text-xs">Next.js, React, Tailwind CSS • Summer 2024</div>
              </div>

              <div>
                <Link
                  href="https://rankping.com"
                  target="_blank"
                  className="font-medium text-base-content/90 hover:text-base-content"
                >
                  Rank Ping
                </Link>
                <div className="text-base-content/70 text-sm">Notification tool for Google Search Console data</div>
                <div className="text-base-content/50 text-xs">Next.js, React, Tailwind CSS • In Development</div>
              </div>

              <div>
                <Link
                  href="https://postmole.com"
                  target="_blank"
                  className="font-medium text-base-content/90 hover:text-base-content"
                >
                  Post Mole
                </Link>
                <div className="text-base-content/70 text-sm">Post scheduling/cross-posting tool</div>
                <div className="text-base-content/50 text-xs">Python, Flask, Pinterest API • In Development</div>
              </div>

              <div>
                <Link
                  href="https://listingbro.com"
                  target="_blank"
                  className="font-medium text-base-content/90 hover:text-base-content"
                >
                  Listing Bro
                </Link>
                <div className="text-base-content/70 text-sm">Directory listing service</div>
                <div className="text-base-content/50 text-xs">React, Node.js, PostgreSQL • In Development</div>
              </div>

              <div>
                <Link
                  href="https://nextdaydirectory.com"
                  target="_blank"
                  className="font-medium text-base-content/90 hover:text-base-content"
                >
                  Next Day Directory
                </Link>
                <div className="text-base-content/70 text-sm">Build your own directory platform in 24 hours</div>
                <div className="text-base-content/50 text-xs">Next.js, Supabase, Stripe • In Development</div>
              </div>

              <div>
                <Link
                  href="https://speedrunethereum.com/builders/0x307F9e12F738d3Aa9B4373B5B68BDD7C3Dc2FCf6"
                  target="_blank"
                  className="font-medium text-base-content/90 hover:text-base-content"
                >
                  SpeedRunEthereum Challenges
                </Link>
                <div className="text-base-content/70 text-sm">Building dApps & learning Web3</div>
                <div className="text-base-content/50 text-xs">Batch 18</div>
              </div>

              <div>
                <div className="font-medium">[Redacted Secret App]</div>
                <div className="text-base-content/50 text-xs">In Development</div>
              </div>
            </div>
          </div>

          {/* What I'm Playing */}
          <div>
            <h3 className="text-lg font-medium mb-2">what i&apos;m playing</h3>
            <div className="space-y-1 text-sm">
              <div>• Minecraft</div>
              <div>• Baldur&apos;s Gate 3</div>
              <div>• Death Stranding</div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-medium mb-2">links</h3>
            <div className="flex gap-3 text-sm">
              <Link
                href="https://x.com/joshmccoydev"
                target="_blank"
                className="text-base-content/90 hover:text-base-content"
              >
                X
              </Link>
              <span className="text-base-content/30">|</span>
              <Link
                href="https://discord.gg/eZ72hpDzC5"
                target="_blank"
                className="text-base-content/90 hover:text-base-content"
              >
                Discord
              </Link>
              <span className="text-base-content/30">|</span>
              <Link
                href="https://t.me/joshmccoydev"
                target="_blank"
                className="text-base-content/90 hover:text-base-content"
              >
                Telegram
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-base-300 pt-4 mt-8">
            <div className="text-xs text-base-content/50">🏗️ built with scaffold-eth 2 • proudly part of batch 18</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoshMcCoyProfile;
