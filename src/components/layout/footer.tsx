
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-center text-sm text-muted-foreground md:py-12">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-center">
          <p>&copy; 2026 Keystone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
