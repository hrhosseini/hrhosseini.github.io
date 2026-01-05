"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

export default function Home() {
  const [image, setImage] = useState<HTMLImageElement | null>(null)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      setImage(img)
    }
    img.src = "/photo.jpg"
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12">
        <header className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                {image ? (
                    <img
                    src={image.src}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-card flex items-center justify-center">
                    <div className="text-muted-foreground">Loading...</div>
                  </div>
                )}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
                HAMIDREZA<br />HOSSEINI
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-primary mb-8 font-medium">
                SRE | DevOps Engineer | Platform Engineer | Cloud Engineer | Python &amp; Go Developer
              </p>
              <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted-foreground">
                <a
                  href="https://github.com/hrhosseini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <Github className="w-5 h-5" />
                  hrhosseini
                </a>
                <a
                  href="https://www.linkedin.com/in/hamidreza-hosseini-6561b3276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="mailto:hamidreza223.h@gmail.com"
                  
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
                <a
                  href="https://t.me/Hamihoseini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-card"
                >
                  <MessageCircle className="w-5 h-5" />
                  @Hamihoseini
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-3 inline-block">
              SUMMARY
            </h2>
            <p className="text-foreground leading-relaxed text-lg whitespace-pre-line">
              Site Reliability Engineer with a strong background in distributed systems,
cloud infrastructure, and network security. I design, deploy, and operate reliable,
scalable platforms using Kubernetes, automation, and observability tooling.

I enjoy building cloud-native systems and working on infrastructure reliability,
monitoring, and security. My interests include DevOps, SRE practices, cryptography,
PKI, logging and monitoring systems, and cloud-native databases.

            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              PROFESSIONAL EXPERIENCE
            </h2>
            
            <div className="space-y-10">
              <div className="relative pl-8 border-l-4 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Software Engineer
                  </h3>
                  <span className="text-primary font-medium text-lg">Oct 2023 - Feb 2025</span>
                </div>
                <p className="text-primary mb-5 font-medium text-lg">Part Software Group</p>
                <ul className="space-y-2.5 text-foreground list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Developed backend services and internal tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Worked with containerized and cloud-based systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Collaborated with infrastructure and DevOps teams</span>
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-4 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Site Reliability Engineer
                  </h3>
                  <span className="text-primary font-medium text-lg">Feb 2025 - Present</span>
                </div>
                <p className="text-primary mb-5 font-medium text-lg">Limoo Host</p>
                <ul className="space-y-2.5 text-foreground list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Managing Kubernetes clusters and production infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Building monitoring and logging systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-2">▸</span>
                    <span>Automating infrastructure with IaC and CI/CD pipelines</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              PROJECTS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-colors shadow-lg ">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Monopoly Game
                  </h3>
                  <span className="text-primary font-medium">Jan 2021 - May 2021</span>
                </div>
                <p className="text-foreground mb-3 text-sm">Implemented a Monopoly game using C++ and Qt as part of the Advanced Programming course.</p>
                <ul className="space-y-2 text-foreground list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Designed object-oriented game architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Implemented game logic and UI with Qt</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-colors shadow-lg ">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Calendar Simulation
                  </h3>
                  <span className="text-primary font-medium">Jan 2022 - Dec 2022</span>
                </div>
                <p className="text-foreground mb-3 text-sm">Calendar simulation using the C programming language.</p>
                <ul className="space-y-2 text-foreground list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Implemented date and calendar logic in C</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Handled edge cases such as leap years</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-colors shadow-lg ">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Bookshop Website
                  </h3>
                  <span className="text-primary font-medium">Jan 2022 - Dec 2022</span>
                </div>
                <p className="text-foreground mb-3 text-sm">Online book shop website for the Web Programming course.</p>
                <ul className="space-y-2 text-foreground list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Built backend and frontend components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Implemented user authentication and CRUD features</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-colors shadow-lg ">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Secure Chat
                  </h3>
                  <span className="text-primary font-medium">Mar 2023 - Dec 2023</span>
                </div>
                <p className="text-foreground mb-3 text-sm">Secure chat application developed for the Software Security course.</p>
                <ul className="space-y-2 text-foreground list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Implemented encryption and secure key exchange</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Focused on confidentiality and integrity of messages</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-colors shadow-lg ">
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Design and Implementation of a Cloud-Native PostgreSQL Platform
                  </h3>
                  <span className="text-primary font-medium">Mar 2025 - Sep 2025</span>
                </div>
                <p className="text-foreground mb-3 text-sm">Designed and developed a PostgreSQL-based Database-as-a-Service platform on Kubernetes,
providing high availability, fault tolerance, and elasticity.

Integrated Patroni for replication and failover, PgCat for pooling and routing,
and WAL-G with MinIO for backups and point-in-time recovery.

Implemented observability using Prometheus and Grafana and proposed research
extensions for sharding and adaptive scaling.</p>
                <ul className="space-y-2 text-foreground list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Designed HA PostgreSQL architecture on Kubernetes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    <span className="text-sm">Implemented backup, monitoring, and failover mechanisms</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

<section>
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-3 inline-block">
              VOLUNTEERING
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    Technical Mentor
                  </h3>
                  <span className="text-primary font-medium">2024</span>
                </div>
                <p className="text-primary mb-3 font-medium text-lg">University / Community</p>
                <p className="text-foreground">
                  Mentored students in cloud, DevOps, and security projects.
                </p>

              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              SKILLS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-semibold text-primary mb-4 text-lg">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Go", "Docker", "Kubernetes", "Terraform", "Ansible", "Prometheus", "Grafana", "Linux", "Git"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-semibold text-primary mb-4 text-lg">Platforms & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <h3 className="font-semibold text-primary mb-4 text-lg">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Teamwork", "Adaptability", "Communication"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-3 inline-block">
              EDUCATION
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    Bachelor&#039;s Degree, Computer Engineering
                  </h3>
                  <span className="text-primary font-medium">Sep 2020 - May 2024</span>
                </div>
                <p className="text-muted-foreground">Ferdowsi University of Mashhad</p>
              </div>
            </div>
          </section>

          <section className="pb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-3 inline-block">
              LANGUAGES
            </h2>
            
            <div className="bg-card p-6 rounded-xl border-2 border-border shadow-lg">
              <ul className="space-y-3 text-foreground list-none">
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">▸</span>
                  <span className="text-lg">English</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">▸</span>
                  <span className="text-lg">Persian</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
