import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BYO | Precious Kayili",
  description: "I am a software engineer from Jos, Nigeria.",
};

export default function BioPage() {
  return (
    <div className="h-screen bg-base-100 flex flex-col items-center justify-center">
      <div className="max-h-96[calc(100vh-6em)] w-[26rem] card bg-base-200">
        <div className="card-body w-full h-full items-center justify-center">
          <Image
            src="/elon.jpeg"
            className="object-cover h-28 rounded-full mb-5"
            alt="Elon"
            height={112}
            width={112}
            objectFit="cover"
            objectPosition="center"
          />
          <h1 className="text-2xl font-semibold leading-none">
            Precious Kayili
          </h1>
          <h3 className="text-accent font-semibold leading-none">
            London, United Kingdom
          </h3>

          <p className="text-sm font-medium mt-5">
            Software Engineer and avid reader.
          </p>

          <div className="links w-full mt-6 space-y-4">
            <Link
              href="https://github.com"
              className="btn btn-block bg-base-300 btn-ghost hover:bg-base-300/60"
            >
              Github
            </Link>

            <Link
              href="https://github.com"
              className="btn btn-block bg-base-300 btn-ghost hover:bg-base-300/60"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
