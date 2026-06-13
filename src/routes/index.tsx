import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/1781371248159.jpg.asset.json";
import tracksuit from "@/assets/1781371210557.jpg.asset.json";
import logo from "@/assets/1781371216116.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Den Mond Anstreben — South African Streetwear" },
      { name: "description", content: "Shop bold tees and tracksuits from Den Mond Anstreben Clothing in Matsulu." },
      { property: "og:title", content: "Den Mond Anstreben — Not just clothes, a statement" },
      { property: "og:description", content: "Independent streetwear made to stand out." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div><section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden bg-foreground text-background"><div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:px-6"><div className="relative z-10"><p className="mb-5 text-sm font-black uppercase tracking-[.3em] text-primary">Matsulu · Est. 2024</p><h1 className="font-display text-5xl font-black uppercase leading-[.88] sm:text-7xl lg:text-8xl">Not just clothes.<br/><span className="text-primary">A statement.</span></h1><p className="mt-7 max-w-lg text-lg text-background/70">Independent South African streetwear. Bold shapes, relaxed fits, unmistakable identity.</p><Button asChild size="lg" className="mt-8 h-13 rounded-none px-7 text-base font-black uppercase"><Link to="/shop">Shop the collection <ArrowRight/></Link></Button></div><div className="relative h-[52vh] min-h-96"><div className="absolute inset-0 translate-x-8 rotate-3 bg-primary"/><img src={hero.url} alt="Model wearing black Den Mond logo tee" className="relative h-full w-full object-cover object-top grayscale-[20%]"/></div></div></section><section className="grid md:grid-cols-2"><Link to="/shop" className="group relative min-h-[500px] overflow-hidden bg-muted"><img src={tracksuit.url} alt="Black Den Mond tracksuit" className="absolute inset-0 h-full w-full object-contain p-8 transition duration-500 group-hover:scale-105"/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/90 p-8 pt-28 text-background"><p className="text-sm font-bold uppercase tracking-[.25em] text-primary">Full fit</p><h2 className="font-display text-4xl font-black uppercase">Anstreben Tracksuit</h2></div></Link><div className="flex min-h-[500px] flex-col items-center justify-center bg-primary p-10 text-center text-primary-foreground"><img src={logo.url} alt="Den Mond Anstreben logo" className="mb-8 h-44 w-44 rounded-full object-cover"/><h2 className="font-display text-4xl font-black uppercase">Built in Matsulu.<br/>Worn everywhere.</h2><p className="mt-5 max-w-md">Den Mond means ambition in motion — a uniform for people building their own lane.</p></div></section><footer className="bg-foreground px-6 py-12 text-background"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row"><div><p className="font-display text-2xl uppercase">Den Mond Anstreben</p><p className="text-background/60">Matsulu, 1203 · South Africa</p></div><div className="text-sm"><a href="tel:+27798349810">+27 79 834 9810</a><br/><a href="mailto:simbinikhalaza@gmail.com">simbinikhalaza@gmail.com</a></div></div></footer></div>
  );
}
