import { Eye } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-6 mt-12">
      <div className="container flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          <span>SeeWhozThere v1.0</span>
        </div>
        <p>Raspberry Pi Face Recognition Dashboard</p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
