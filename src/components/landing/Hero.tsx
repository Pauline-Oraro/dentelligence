import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
  <section className="relative min-h-screen flex items-center pt-20 pb-12">
  {/* GRID BG */}
  <div className="absolute inset-0 bg-linear-to-br from-background via-muted/5 to-primary/5">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
  </div>

  {/* GRADIENT — hidden on mobile to avoid overflow */}
  <div className="hidden sm:block absolute top-20 left-1/4 w-72 h-72 bg-linear-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
  <div className="hidden sm:block absolute bottom-20 right-1/4 w-96 h-96 bg-linear-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

  <div className="relative z-10 w-full px-4 sm:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        <div className="space-y-8">
          <div className="space-y-5">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">
                AI-Powered Dental Assistant
              </span>
            </div>

            {/* Smaller base size so words don't get cut on narrow screens */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Your dental
              </span>
              <br />
              <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                questions
              </span>
              <br />
              <span className="bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                answered instantly
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
              Chat with our AI dental assistant for instant advice, book smart appointments, and
              get personalized care recommendations. Available 24/7.
            </p>
          </div>

          {/* Buttons stack nicely on mobile already, kept as-is */}
          <div className="flex flex-col sm:flex-row gap-4">
            <SignUpButton mode="modal">
              <Button size={"lg"}>
                <MicIcon className="mr-2 size-5" />
                Try voice agent
              </Button>
            </SignUpButton>

            <SignUpButton mode="modal">
              <Button size={"lg"} variant={"outline"}>
                <CalendarIcon className="mr-2 size-5" />
                Book appointment
              </Button>
            </SignUpButton>
          </div>

          {/* TESTIMONIALS */}
          <div className="pt-4 sm:pt-8">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex -space-x-3">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                  alt="Jessica Davis"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-4 ring-background"
                />
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                  alt="Sam Miller"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-4 ring-background"
                />
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                  alt="Anna Lopez"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-4 ring-background"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-foreground">4.9/5</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by{" "}
                  <span className="font-semibold text-foreground">1,200+ patients</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image: hidden on small screens, visible from md up */}
        <div className="relative lg:pl-8 hidden md:block">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-linear-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>

          <Image
            src={"/hero.png"}
            alt="Dentelligence"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>

      </div>
    </div>
  </div>
  </section>
  );
}

export default Hero;