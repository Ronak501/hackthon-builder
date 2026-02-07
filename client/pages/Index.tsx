import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Zap, Target, Rocket, Code, Database, Cloud, Users, Calendar, MapPin, TrendingUp, Github, ExternalLink, Linkedin, Mail } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <Header />

      {/* Hero Section */}
      <section className="section-container pt-32 md:pt-40 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">6-7 March Hackathon</span>
          </div>

          <h1 className="gradient-text mb-6">
            Revolutionary Solution for Modern Challenges
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover how our innovative approach transforms the industry with cutting-edge technology and creative problem-solving.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
            <a href="#demo" className="btn-primary inline-flex items-center gap-2 group">
              Live Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub Repo
            </a>
            <a href="#" className="btn-outline inline-flex items-center gap-2">
              View Pitch Deck
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Hero Image Placeholder */}
          <div className="glass rounded-2xl p-8 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Rocket className="w-16 h-16 mx-auto text-primary mb-4 opacity-50" />
                <p className="text-muted-foreground">Project Demo Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="section-container bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 border border-primary/20">
              <Target className="w-4 h-4" />
              <span className="text-sm font-semibold">The Challenge</span>
            </div>
            <h2 className="mb-6">The Problem We're Solving</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every day, millions of people face a critical challenge that impacts their productivity and quality of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-xl p-8 hover:bg-white/15 dark:hover:bg-white/8 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">The Problem</h3>
              <p className="text-muted-foreground leading-relaxed">
                Current solutions are fragmented, inefficient, and don't address the real pain points users face. Users spend hours on repetitive tasks that could be automated.
              </p>
            </div>

            <div className="glass rounded-xl p-8 hover:bg-white/15 dark:hover:bg-white/8 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Why It Matters</h3>
              <p className="text-muted-foreground leading-relaxed">
                This affects millions of users globally, costing companies billions in lost productivity. The existing solutions have critical limitations that our approach overcomes.
              </p>
            </div>

            <div className="glass rounded-xl p-8 hover:bg-white/15 dark:hover:bg-white/8 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Who's Affected</h3>
              <p className="text-muted-foreground leading-relaxed">
                Professionals, enterprises, and teams across industries face these challenges daily. Our solution is designed for everyone who wants to work smarter.
              </p>
            </div>

            <div className="glass rounded-xl p-8 hover:bg-white/15 dark:hover:bg-white/8 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Current Limitations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Existing tools lack integration, scalability, and intelligent automation. They require constant manual intervention and aren't built for modern workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-4 border border-secondary/20">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Our Innovation</span>
            </div>
            <h2 className="mb-6">Our Innovative Solution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A breakthrough approach that combines AI, automation, and intelligent design to solve problems at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "AI-Powered", description: "Machine learning algorithms adapt to user behavior" },
              { title: "Real-Time Sync", description: "Instant synchronization across all platforms" },
              { title: "Seamless Integration", description: "Works perfectly with existing tools and workflows" },
            ].map((item, idx) => (
              <div key={idx} className="glass rounded-xl p-8 animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="glass rounded-xl p-12">
            <h3 className="text-2xl font-bold mb-6">How It Works</h3>
            <div className="space-y-6">
              {[
                { step: 1, title: "Input", desc: "Users provide initial data or request" },
                { step: 2, title: "Process", desc: "Our AI engine analyzes and optimizes" },
                { step: 3, title: "Deliver", desc: "Results are delivered in real-time" },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-container bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-4 border border-accent/30">
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-semibold">Key Features</span>
            </div>
            <h2 className="mb-6">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to achieve your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed and performance" },
              { icon: Target, title: "Precision Targeting", desc: "Advanced algorithms for accuracy" },
              { icon: Cloud, title: "Cloud Native", desc: "Scalable infrastructure that grows with you" },
              { icon: Users, title: "Team Collaboration", desc: "Built for seamless team workflows" },
              { icon: Database, title: "Data Security", desc: "Enterprise-grade security and encryption" },
              { icon: TrendingUp, title: "Analytics & Insights", desc: "Deep insights with actionable metrics" },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="glass rounded-xl p-8 hover:scale-105 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 border border-primary/20">
              <Code className="w-4 h-4" />
              <span className="text-sm font-semibold">Technical</span>
            </div>
            <h2 className="mb-6">System Architecture</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A modern, scalable architecture built for reliability and performance
            </p>
          </div>

          <div className="glass rounded-xl p-12">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Frontend Layer", items: ["React 18", "TypeScript", "TailwindCSS", "Real-time Updates"] },
                { title: "Backend Layer", items: ["Node.js/Express", "RESTful APIs", "WebSocket", "Authentication"] },
                { title: "Data Layer", items: ["PostgreSQL", "Redis Cache", "Cloud Storage", "Data Sync"] },
              ].map((layer, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-lg mb-4 text-primary">{layer.title}</h4>
                  <ul className="space-y-2">
                    {layer.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="section-container bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6">Technology Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with modern, industry-leading technologies
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { category: "Frontend", tech: ["React", "TypeScript", "TailwindCSS", "Vite"] },
              { category: "Backend", tech: ["Node.js", "Express", "Python", "GraphQL"] },
              { category: "Database", tech: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] },
              { category: "DevOps", tech: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
            ].map((stack, idx) => (
              <div key={idx} className="glass rounded-xl p-6">
                <h3 className="font-bold mb-4 text-primary">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.tech.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-4 border border-secondary/20">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Our Team</span>
            </div>
            <h2 className="mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented individuals working together to create something amazing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alice Johnson", role: "Lead Developer", skills: ["Full-Stack", "AI/ML", "DevOps"] },
              { name: "Bob Smith", role: "Product Designer", skills: ["UI/UX", "Research", "Strategy"] },
              { name: "Carol Williams", role: "Data Scientist", skills: ["ML", "Analytics", "Python"] },
            ].map((member, idx) => (
              <div key={idx} className="glass rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-3">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathon Details */}
      <section className="section-container bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6">Hackathon Details</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-xl p-8">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Event Date</h3>
              <p className="text-lg font-semibold text-primary mb-2">March 6-7, 2025</p>
              <p className="text-muted-foreground">48-hour innovation sprint</p>
            </div>

            <div className="glass rounded-xl p-8">
              <MapPin className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Mode</h3>
              <p className="text-lg font-semibold text-secondary mb-2">Online & Offline</p>
              <p className="text-muted-foreground">Global participation welcome</p>
            </div>

            <div className="glass rounded-xl p-8 md:col-span-2">
              <Rocket className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">Theme</h3>
              <p className="text-muted-foreground mb-4">
                "Innovation for Humanity" - Creating solutions that make a meaningful impact on people's lives through technology.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Innovation</span>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">Impact</span>
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-semibold">Sustainability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Scope */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 border border-primary/20">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">Roadmap</span>
            </div>
            <h2 className="mb-6">Future Scope & Vision</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our long-term vision for impact and growth
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Phase 1: MVP Enhancement",
                desc: "Refine core features and expand integrations based on user feedback",
                timeline: "Q2 2025",
              },
              {
                title: "Phase 2: Enterprise Features",
                desc: "Add advanced security, compliance, and white-label solutions",
                timeline: "Q3 2025",
              },
              {
                title: "Phase 3: Global Expansion",
                desc: "Launch in multiple languages and regions with localized support",
                timeline: "Q4 2025",
              },
              {
                title: "Phase 4: AI Evolution",
                desc: "Implement advanced ML models and predictive analytics",
                timeline: "2026",
              },
            ].map((phase, idx) => (
              <div key={idx} className="glass rounded-xl p-8 hover:bg-white/15 dark:hover:bg-white/8 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{idx + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold">{phase.title}</h3>
                      <span className="text-sm font-semibold text-primary">{phase.timeline}</span>
                    </div>
                    <p className="text-muted-foreground">{phase.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="section-container bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Ready to See It In Action?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Try our live demo or explore the GitHub repository to see the code
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="#" className="btn-primary inline-flex items-center gap-2">
              Launch Live Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container bg-card/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>

          <div className="glass rounded-xl p-8">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:contact@example.com" className="text-lg font-semibold text-primary hover:underline">
                  contact@example.com
                </a>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-3">Follow Us</p>
                <div className="flex justify-center gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:contact@example.com" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
