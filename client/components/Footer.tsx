import { Github, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">HX</span>
              </div>
              <span className="font-bold text-lg">Hackathon Project</span>
            </div>
            <p className="text-muted-foreground text-sm">
              A cutting-edge solution built during the 6-7 March Hackathon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#problem"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Problem Statement
                </a>
              </li>
              <li>
                <a
                  href="#solution"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Solution
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="mailto:contact@example.com"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Hackathon Project. All rights reserved.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent-foreground text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
              Built during Hackathon
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
