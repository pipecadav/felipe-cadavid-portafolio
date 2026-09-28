import Image from "next/image";
import { ContactDialog } from "@/components/molecules/ContactDialog";
import type { Personal } from "@/types/resume";

export function Hero({ personal }: { personal: Personal }) {
  return (
    <section id="profile" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          I’m {personal.name}
          <br />
          <span>Software Designer</span>
          <br />
          &amp; Tech Lead
        </h1>
        <p>{personal.shortProfile}</p>
        <ContactDialog linkedin={personal.linkedin} email={personal.email} />
      </div>
      <div className="hero-portrait">
        <Image
          src={personal.photo}
          alt={`Illustrated placeholder portrait for ${personal.name}`}
          fill
          sizes="(min-width: 1024px) 28vw, 220px"
          className="object-contain object-bottom"
          priority
        />
      </div>
    </section>
  );
}
