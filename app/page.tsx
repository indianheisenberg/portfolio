"user client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Image } from "@heroui/image";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import { LinkedInIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-20 px-6 py-8 md:px-28 md:pt-32">
      <div className="grid gap-8 md:grid-cols-2 md:gap-4 w-full">
        {/* Left Section (Text + Buttons) */}
        <div className="order-2 md:order-1 space-y-6 md:pt-20 text-center md:text-left">
          <h1 className="text-xl">
            I&apos;m Ashish, a Staff Software Engineer with 9+ years of
            experience designing full-stack systems and driving engineering
            excellence.
          </h1>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.linkedIn}
            >
              <LinkedInIcon size={20} />
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="order-1 md:order-2 mx-auto">
          <Image
            isBlurred
            alt="Ashish Profile"
            src="/profile_pic.jpeg"
            width={280}
          />
        </div>
      </div>
    </section>
  );
}
