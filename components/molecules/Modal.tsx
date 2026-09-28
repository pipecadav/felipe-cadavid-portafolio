"use client";

import { useEffect, useId, useRef } from "react";
import { Icon } from "@/components/atoms/Icon";

// Shared dialog shell for contact options and project details. The caller owns
// visibility; children supply the content without duplicating dialog behavior.
export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  // Each instance needs a unique accessible title, including unopened project dialogs.
  const titleId = useId();

  // Synchronize React state with the native dialog API. showModal() provides
  // modal focus handling and makes the rest of the page inert. Both native close
  // and Escape (cancel) events notify the parent through onClose below.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onCancel={onClose}
      aria-labelledby={titleId}
      className="m-auto w-[min(92vw,560px)] rounded-[2rem] bg-white p-0 text-[var(--color-ink)] shadow-2xl backdrop:bg-[#101821]/70 backdrop:backdrop-blur-sm"
    >
      <div className="p-6 sm:p-9">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2 id={titleId} className="text-2xl font-black tracking-tight">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-[var(--color-border)] transition hover:bg-[var(--color-surface-alt)] focus-visible:outline-[var(--color-primary)]"
            aria-label="Close dialog"
          >
            <Icon name="x" size={20} />
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}
