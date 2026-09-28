"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { ContactOption } from "@/components/atoms/ContactOption";
import { Icon } from "@/components/atoms/Icon";
import { Modal } from "./Modal";

export function ContactDialog({
  linkedin,
  email,
}: {
  linkedin: string;
  email: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        HIRE ME <Icon name="arrow" size={17} />
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Let’s build something valuable"
      >
        <p className="mb-7 leading-7 text-[var(--color-muted)]">
          Choose your preferred way to get in touch. I’ll respond as soon as
          possible.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <ContactOption
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            icon="linkedin"
            label="Message on LinkedIn"
            description="Connect professionally"
          />
          <ContactOption
            href={`mailto:${email}`}
            icon="email"
            label="Send an email"
            description="Tell me about your project"
          />
        </div>
      </Modal>
    </>
  );
}
