"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { CogIcon, LinkIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Hi! everybody.👋 Kong is here💗💗</span>
          </h1>
          <Address address="0x7f6Ba565e35BB23C307992feBD841D5b2d8c8011" onlyEnsOrAddress />
        </div>
        <div className="grow bg-base-300 w-full mt-16 px-8  py-12">
          <div className="flex justify-center items-center gap-12 flex-col md:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 rounded-3xl">
              <span className="block text-3xl font-bold">About Me</span>
              <span className="max-w-fit font-bold mb-4 mt-2">
                I am a backend development engineer with 5 years of work experience, specializing in Java and Python for
                web development.
                <br />
                My passion lies in delving deep into development technologies, constantly exploring new solutions to
                enhance system performance and functionality.
              </span>
              <span className="block text-3xl font-bold">Contact</span>
              <span className="flex">
                email:
                <Link href="mailto:fjkang1991@gmail.com" className="link">
                  <LinkIcon className="h-8 w-8 fill-secondary"></LinkIcon>
                </Link>
              </span>
              <span className="flex">
                github:
                <Link href="https://github.com/fjkang" className="link">
                  <UserIcon className="h-8 w-8 fill-secondary"></UserIcon>
                </Link>
              </span>
              <span className="flex">
                SRE:
                <Link
                  href="https://speedrunethereum.com/builders/0x7f6Ba565e35BB23C307992feBD841D5b2d8c8011"
                  className="link"
                >
                  <CogIcon className="h-8 w-8 fill-secondary"></CogIcon>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
