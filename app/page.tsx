"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ChevronDown,
  ChevronRight,
  Sun,
  Moon,
  FileText,
  Home,
  ExternalLink,
  Code,
} from "lucide-react";

function WorkExperienceItem({
  logo,
  company,
  position,
  period,
  location,
  description,
}: {
  logo: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 py-2 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
        <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <Image
            src={logo || "/placeholder.svg"}
            alt={company}
            width={
              company === "J.P. Morgan" ||
              company === "Falcony" ||
              company === "CARE"
                ? 48
                : 36
            }
            height={
              company === "J.P. Morgan" ||
              company === "Falcony" ||
              company === "CARE"
                ? 48
                : 36
            }
            className={
              company === "Falcony" || company === "CARE"
                ? "object-cover"
                : "object-contain"
            }
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-sm dark:text-white">{company}</h3>
            <div
              className={`transition-opacity ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {isExpanded ? (
                <ChevronDown className="w-3 h-3 text-gray-400" />
              ) : (
                <ChevronRight className="w-3 h-3 text-gray-400" />
              )}
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-xs">{position}</p>
          <p className="text-gray-500 dark:text-gray-500 text-xs">{location}</p>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{period}</div>
      </div>

      {isExpanded && (
        <div className="mt-3 ml-15 text-gray-600 dark:text-gray-400 text-xs leading-relaxed animate-in slide-in-from-top-2 duration-200">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

function TalksBlogsItem({
  image,
  title,
  type,
  venue,
  date,
  description,
  link,
}: {
  image: string;
  title: string;
  type: "Talk" | "Blog";
  venue: string;
  date: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
    >
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800">
          <Image
            src={image || "/placeholder.svg?height=80&width=80"}
            alt={title}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-sm dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {title}
            </h3>
            <Badge className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 flex-shrink-0">
              {type}
            </Badge>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-xs mb-1">
            {venue}
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mb-2">
            {date}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}

function WorkItem({
  image,
  title,
  description,
  technologies,
  liveLink,
  codeLink,
  type,
}: {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  codeLink?: string;
  type: string;
}) {
  return (
    <div className="group p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800">
          <Image
            src={image || "/placeholder.svg?height=80&width=80"}
            alt={title}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-sm dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {title}
            </h3>
            <Badge className="text-xs px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 flex-shrink-0">
              {type}
            </Badge>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-2 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-1 mb-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Live
              </a>
            )}
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
              >
                <Code className="w-3 h-3" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen transition-colors font-system relative ${
        isDarkMode ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      {/* Background Decorations */}
      <div className="bg-decoration">
        <div className="grid-pattern"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* Floating Bottom Navigation Bar */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center gap-4">
            <div className="relative">
              {hoveredIcon === "home" && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded whitespace-nowrap animate-in fade-in-0 duration-200">
                  Home
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                </div>
              )}
              <a
                href="#"
                onMouseEnter={() => setHoveredIcon("home")}
                onMouseLeave={() => setHoveredIcon(null)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Home"
              >
                <Home className="w-5 h-5" />
              </a>
            </div>

            <div className="relative">
              {hoveredIcon === "blog" && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded whitespace-nowrap animate-in fade-in-0 duration-200">
                  Blog
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                </div>
              )}
              <a
                href="https://medium.com/@tayyabataimur96"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIcon("blog")}
                onMouseLeave={() => setHoveredIcon(null)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Blog"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>

            <div className="relative">
              {hoveredIcon === "github" && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded whitespace-nowrap animate-in fade-in-0 duration-200">
                  GitHub
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                </div>
              )}
              <a
                href="https://github.com/tayyabataimur"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIcon("github")}
                onMouseLeave={() => setHoveredIcon(null)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            <div className="relative">
              {hoveredIcon === "linkedin" && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded whitespace-nowrap animate-in fade-in-0 duration-200">
                  LinkedIn
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                </div>
              )}
              <a
                href="https://www.linkedin.com/in/tayyaba-taimur/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIcon("linkedin")}
                onMouseLeave={() => setHoveredIcon(null)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>

            <div className="relative">
              {hoveredIcon === "theme" && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded whitespace-nowrap animate-in fade-in-0 duration-200">
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                </div>
              )}
              <button
                onClick={toggleDarkMode}
                onMouseEnter={() => setHoveredIcon("theme")}
                onMouseLeave={() => setHoveredIcon(null)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center justify-center"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-12 pb-24 relative z-10">
        {/* Hero Section */}
        <div className="flex items-start gap-6 mb-10">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4 dark:text-white">
              Hi, I'm Tayyaba 👋
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I make digital experiences beautiful and accessible. Talk to me
              about design systems, accessibility and entrepreneurship.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
              <Image
                src="/profile/tayyaba.jpeg"
                alt="Tayyaba Taimur"
                width={128}
                height={128}
                className="w-full h-full object-cover scale-150"
                style={{ objectPosition: "50% 15%" }}
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3 dark:text-white">About</h2>
          <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            <p>
              I work at <b>J.P. Morgan</b> in <b>London, UK</b> as a Software
              Engineer III, contributing to{" "}
              <a
                href="https://www.saltdesignsystem.com/salt/index"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-100 hover:text-black dark:hover:text-white font-bold underline hover:no-underline"
              >
                Salt
              </a>
              , an open-source design system used by thousands of applications
              in the fintech space. I have over <b>5 years</b> of experience in
              the web development realm ✨. You'll often find me speaking at
              local events and conferences, advocating for accessible user
              interfaces and overdosing on flat whites ☕.
            </p>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 dark:text-white">
            Work Experience
          </h2>
          <div className="space-y-4">
            <WorkExperienceItem
              logo="/logos/jpmorgan.webp"
              company="J.P. Morgan"
              position="Software Engineer III"
              period="January 2025 — Present"
              location="London, UK"
              description="A core contributor to Salt, J.P. Morgan's open-source design system used by thousands of applications across the organisation. Designing and building robust, reusable UI components and theming infrastructure while implementing design tokens for visual consistency. Collaborating cross-functionally with the Markets and Payments teams to drive adoption and working closely with product designers to align implementation with accessibility standards."
            />

            <WorkExperienceItem
              logo="/logos/fundingcircle.png"
              company="Funding Circle"
              position="Software Engineer II"
              period="May 2022 — December 2024"
              location="London, UK"
              description="Led migration of core frontend to a headless CMS-driven platform using React and GraphQL, achieving 55% increase in CSAT score and 97% improvement in non-technical stakeholder independence. Developed a comprehensive design system from scratch using React, TypeScript, and Storybook, adopted by over 20 applications within the organisation. Built CI/CD pipelines, mentored junior engineers, enhanced observability with CloudWatch RUM and PagerDuty, and founded org-wide frontend newsletter."
            />

            <WorkExperienceItem
              logo="/logos/smartly.png"
              company="Smartly.io"
              position="Software Engineer"
              period="January 2022 — April 2022"
              location="Helsinki, Finland"
              description="Designed and built end-to-end data pipelines with automated optimization for digital ad campaigns in a high-load, multi-platform automation service. Collaborated with design teams to transform Figma mockups into production features for the digital marketing platform that drove significant growth in customer journeys."
            />

            <WorkExperienceItem
              logo="/logos/falcony.jpeg"
              company="Falcony"
              position="Frontend Developer"
              period="December 2019 — December 2021"
              location="Helsinki, Finland"
              description="Delivered major contributions to flagship audit and incident reporting products used by enterprise clients. Collaborated with design teams to develop reusable, responsive web components using modern JavaScript frameworks and worked with design systems to prototype new UI/UX features based on customer feedback and requirements."
            />

            <WorkExperienceItem
              logo="/logos/care.jpeg"
              company="CARE"
              position="Design Engineer (Frontend)"
              period="October 2017 — March 2019"
              location="Islamabad, Pakistan"
              description="Developed React-based reusable frontend components compatible with industrial panel PCs for Industry 4.0 compliant automation systems. Implemented communication with IoT devices and industrial machines using MQTT and REST APIs, contributing to manufacturing industry automation solutions as a frontend-focused full-stack developer."
            />
          </div>
        </section>

        {/* Talks & Writing Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 dark:text-white">
            Talks & Writing
          </h2>
          <div className="space-y-4">
            <TalksBlogsItem
              image="/talk1.jpeg?height=80&width=80"
              title="Progress Web Apps"
              type="Talk"
              venue="JS in London Meetup"
              date="March 2023"
              description="Talked about progressive web apps and how they can be integrated in the development workflow of modern web apps."
              link="https://www.linkedin.com/posts/tayyaba-taimur_javascriptinlondon-progressivewebapps-meetup-activity-7056964418806390785-H0pw?utm_source=share&utm_medium=member_desktop&rcm=ACoAABoPrPAB3BdQF4SRbJ5lt3niQgn3xTXBRL4"
            />
            <TalksBlogsItem
              image="/blog1.webp?height=80&width=80"
              title="Frontend vs UI/UX design"
              type="Blog"
              venue="Medium"
              date="August, 2018"
              description="The actual difference between UI/UX Designers, Front End Developers and their Technology Stacks"
              link="https://medium.com/@tayyabataimur96/the-actual-difference-between-ui-ux-designers-front-end-developers-and-their-technology-stacks-9f687942b3a0"
            />
          </div>
        </section>

        {/* My Work Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 dark:text-white">My Work</h2>
          <div className="space-y-4">
            <WorkItem
              image="/salt.webp?height=80&width=80"
              title="Salt Design System"
              description="Open-source design system for J.P. Morgan with comprehensive component library, design tokens, and accessibility-first approach. Used by thousands of applications across the organization."
              technologies={[
                "React",
                "TypeScript",
                "Storybook",
                "Design Tokens",
              ]}
              liveLink="https://www.saltdesignsystem.com/"
              codeLink="https://github.com/jpmorganchase/salt-ds"
              type="Design System"
            />

            <WorkItem
              image="/fc.webp?height=80&width=80"
              title="Funding Circle's Marketing Website"
              description="A headless CMS-backed marketing website built using React and TypeScript."
              technologies={["React", "TypeScript", "Storybook", "Jest"]}
              liveLink="https://www.fundingcircle.com/uk"
              type="Website"
            />
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 dark:text-white">Education</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center bg-white dark:bg-gray-800">
                <Image
                  src="/logos/aalto.png"
                  alt="Aalto University"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm dark:text-white">
                  Aalto University
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  Masters in Human-Computer Interaction
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-xs">
                  Espoo, Finland
                </p>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                2019 — 2023
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <Image
                  src="/logos/nust.jpeg"
                  alt="NUST"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm dark:text-white">NUST</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  Bachelors of Computer Engineering
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-xs">
                  Islamabad, Pakistan
                </p>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                2014 — 2019
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 dark:text-white">Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            <Badge className="text-xs px-2 py-1 bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600">
              React
            </Badge>
            <Badge className="text-xs px-2 py-1 bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600">
              TypeScript
            </Badge>
            <Badge className="text-xs px-2 py-1 bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600">
              Next.js
            </Badge>
            <Badge className="text-xs px-2 py-1 bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600">
              Node.js
            </Badge>
            <Badge className="text-xs px-2 py-1 bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600">
              Python
            </Badge>
            <Badge className="text-xs px-2 py-1 bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600">
              Design Systems
            </Badge>
            <Badge className="text-xs px-2 py-1 bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600">
              Storybook
            </Badge>
            <Badge className="text-xs px-2 py-1 bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600">
              Accessibility
            </Badge>
            <Badge className="text-xs px-2 py-1 bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600">
              CI/CD
            </Badge>
            <Badge className="text-xs px-2 py-1 bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600">
              AWS
            </Badge>
            <Badge className="text-xs px-2 py-1 bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600">
              GraphQL
            </Badge>
            <Badge className="text-xs px-2 py-1 bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600">
              Jest
            </Badge>
            <Badge className="text-xs px-2 py-1 bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600">
              Cypress
            </Badge>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 dark:text-white">
            Get in Touch
          </h2>
          <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              <span>London, England</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <span>+447951908006</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              <a
                href="mailto:tayyabataimur96@gmail.com"
                className="text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white font-semibold hover:underline"
              >
                tayyabataimur96@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
          <a
            href="https://github.com/tayyabataimur"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/tayyaba-taimur/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:tayyabataimur96@gmail.com"
            className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
