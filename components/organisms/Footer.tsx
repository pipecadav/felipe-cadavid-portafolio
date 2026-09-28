import type { Personal } from "@/types/resume";
export function Footer({ personal }: { personal: Personal }) {
  return (
    <footer className="site-footer">
      © {new Date().getFullYear()} {personal.name}. All rights reserved.
    </footer>
  );
}
