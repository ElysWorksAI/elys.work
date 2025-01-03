"use client";

import { useState } from "react";
import Link from "next/link";
import Modal from "@/components/modal";
import { FaArrowLeft } from "react-icons/fa";

interface UseCase {
  title: string;
  description: string;
  outcome: string;
}

interface UseCases {
  [key: string]: UseCase[];
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleOpenModal = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const getServiceUseCases = (serviceName: string): UseCase[] => {
    return (useCases as UseCases)[serviceName] || [];
  };

  return (
    <div className="min-h-screen ">
      <div className="absolute top-6 left-6 z-10">
        <Link
          href="/"
          className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
        >
          <FaArrowLeft className="w-6 h-6" />
          <span className="sr-only">Back to Home</span>
        </Link>
      </div>
      {/* Header Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered solutions designed to
            transform your business operations and drive innovation.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {service.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary mt-1">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 flex gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center rounded-lg px-6 py-3 bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105"
                    >
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                    <button
                      onClick={() => handleOpenModal(service.name)}
                      className="inline-flex items-center rounded-lg px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary transition-all hover:scale-105"
                    >
                      Example Use Cases
                    </button>
                  </div>
                </div>
                <div className="flex-1 w-full aspect-video relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg
                      className="h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our AI solutions can help your
            organization thrive in the digital age.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Use Cases Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={handleCloseModal}
        title={`${selectedService || ""} Use Cases`}
      >
        <div className="space-y-6">
          {selectedService &&
            getServiceUseCases(selectedService).map(
              (useCase: UseCase, index: number) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {useCase.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {useCase.description}
                  </p>
                  <div className="pl-4 border-l-2 border-primary/20">
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      {useCase.outcome}
                    </p>
                  </div>
                </div>
              )
            )}
        </div>
      </Modal>
    </div>
  );
}

const services = [
  {
    name: "Omnia",
    description:
      "An advanced AI chatbot system that revolutionizes information access and processing. Omnia seamlessly integrates with multiple data sources to provide comprehensive, context-aware responses and insights.",
    features: [
      "Real-time internet access for up-to-date information",
      "Multi-source information synthesis and analysis",
      "Natural language understanding and generation",
      "Customizable knowledge base integration",
      "Enterprise-grade security and privacy controls",
    ],
  },
  {
    name: "OmniFS",
    description:
      "A next-generation intelligent file system that transforms how organizations manage and interact with their data. OmniFS brings AI-powered organization and natural language search capabilities to your file management.",
    features: [
      "Content-aware file organization and tagging",
      "Natural language search and retrieval",
      "Automated file categorization and metadata extraction",
      "Smart file recommendations and relationships",
      "Seamless integration with existing systems",
    ],
  },
  {
    name: "Linadraw",
    description:
      "A revolutionary collaborative whiteboard platform enhanced with AI capabilities. Linadraw combines real-time collaboration with intelligent drawing assistance to boost creativity and productivity in team environments.",
    features: [
      "Real-time collaborative drawing and editing",
      "AI-powered drawing assistance and suggestions",
      "Smart object recognition and enhancement",
      "Infinite canvas with intelligent space management",
      "Cross-platform synchronization",
    ],
  },
  {
    name: "Lex",
    description:
      "An innovative legal consultation system powered by advanced RAG (Retrieval-Augmented Generation) technology. Lex streamlines legal document management and provides intelligent insights for legal professionals.",
    features: [
      "Automated legal document analysis and classification",
      "Intelligent case law research and citations",
      "Contract review and risk assessment",
      "Compliance monitoring and alerts",
      "Secure document management and version control",
    ],
  },
  {
    name: "Hire",
    description:
      "A comprehensive AI-powered recruitment platform that revolutionizes the hiring process. Hire combines automated candidate matching with deep analytics to help organizations build their ideal teams.",
    features: [
      "AI-driven candidate matching and ranking",
      "Automated resume screening and analysis",
      "Predictive hiring analytics and insights",
      "Interview scheduling and management",
      "Bias detection and diversity promotion",
    ],
  },
  {
    name: "Cane",
    description:
      "An intelligent social media management platform that leverages AI for content creation and optimization. Cane helps businesses maintain a strong social media presence with minimal manual effort.",
    features: [
      "AI-generated content suggestions",
      "Automated post scheduling and optimization",
      "Engagement analytics and insights",
      "Multi-platform management",
      "Content performance prediction",
    ],
  },
];

const useCases = {
  Omnia: [
    {
      title: "AI-Enhanced Market Research",
      description:
        "A market research team used Omnia to analyze competitor strategies by combining internal market reports with real-time internet data, evaluated by domain-specific LLMs.",
      outcome:
        "Generated comprehensive market insights 5x faster than traditional methods with 90% accuracy in trend predictions",
    },
    {
      title: "Sales Strategy Development",
      description:
        "Sales teams leveraged Omnia to analyze historical sales data alongside current market trends, automatically collecting and evaluating relevant online resources about industry-specific sales strategies.",
      outcome:
        "Developed data-driven sales strategies that increased conversion rates by 45% within 3 months",
    },
    {
      title: "Technical Documentation Analysis",
      description:
        "Engineering teams used Omnia to solve complex technical challenges by combining internal documentation with evaluated online resources, filtered and ranked by technical accuracy.",
      outcome:
        "Reduced problem-solving time by 70% and improved solution quality through verified technical resources",
    },
  ],
  OmniFS: [
    {
      title: "Smart Project Documentation",
      description:
        "A software development company implemented OmniFS to manage their project documentation, allowing developers to find files through natural language queries about project features or technical concepts.",
      outcome:
        "Reduced file search time by 85% and improved documentation accessibility across teams",
    },
    {
      title: "Intelligent Resource Management",
      description:
        "A research institution used OmniFS to organize research papers, datasets, and experimental results with automatic content analysis and metadata generation.",
      outcome:
        "Achieved 95% accuracy in file retrieval through natural language queries and reduced data redundancy by 60%",
    },
    {
      title: "Context-Aware Document Retrieval",
      description:
        "A consulting firm utilized OmniFS to manage client projects, allowing consultants to find relevant documents by describing project contexts or client needs without knowing exact file locations.",
      outcome:
        "Saved 10+ hours per week per consultant in document management and improved project delivery time by 40%",
    },
  ],
  Linadraw: [
    {
      title: "AI-Enhanced Design Workshops",
      description:
        "Design teams used Linadraw's AI sketch conversion and enhancement features for remote brainstorming sessions, converting rough sketches into refined drawings and generating variations through AI prompts.",
      outcome:
        "Increased ideation output by 3x and reduced design iteration cycles by 50%",
    },
    {
      title: "Collaborative System Architecture",
      description:
        "Software architects used Linadraw's collaborative features and AI-assisted drawing to design and document system architectures, with automatic sketch conversion of existing diagrams.",
      outcome:
        "Reduced architecture planning time by 60% and improved team alignment through AI-enhanced visualizations",
    },
    {
      title: "Interactive Training Sessions",
      description:
        "Training teams utilized Linadraw's image-to-sketch conversion and AI drawing capabilities to create interactive learning materials and real-time collaborative exercises.",
      outcome:
        "Increased participant engagement by 75% and improved information retention by 50%",
    },
  ],
  Lex: [
    {
      title: "Internal Legal Compliance",
      description:
        "A multinational company used Lex to provide instant access to relevant legal documentation and compliance requirements across different jurisdictions using RAG technology.",
      outcome:
        "Achieved 99.9% compliance rate and reduced legal consultation costs by 70%",
    },
    {
      title: "Contract Analysis Automation",
      description:
        "Legal teams utilized Lex's RAG capabilities to analyze contracts against internal policies and precedents, automatically flagging potential issues and suggesting improvements.",
      outcome:
        "Reduced contract review time by 80% while maintaining 100% accuracy in compliance checks",
    },
    {
      title: "Policy Implementation Guide",
      description:
        "HR departments used Lex to understand and implement new workplace policies by accessing relevant legal frameworks and internal policy documents through natural language queries.",
      outcome:
        "Reduced policy implementation time by 65% and ensured 100% alignment with legal requirements",
    },
  ],
  Hire: [
    {
      title: "AI-Powered Technical Recruitment",
      description:
        "A technology company used Hire to automatically screen and rank candidates based on resume analysis, job requirements matching, and predictive performance metrics.",
      outcome:
        "Reduced hiring time by 60% while improving candidate quality scores by 45%",
    },
    {
      title: "Automated Candidate Matching",
      description:
        "A staffing agency implemented Hire to automatically match candidates with job postings using AI analysis of resumes, job descriptions, and historical placement data.",
      outcome:
        "Increased successful placement rate by 70% and reduced manual screening time by 85%",
    },
    {
      title: "Recruitment Analytics Platform",
      description:
        "HR teams utilized Hire's analytics capabilities to optimize job descriptions, identify successful candidate patterns, and improve hiring process efficiency.",
      outcome:
        "Improved offer acceptance rate by 40% and reduced cost-per-hire by 35%",
    },
  ],
  Cane: [
    {
      title: "Automated Content Strategy",
      description:
        "Marketing teams used Cane to automatically generate and schedule social media content across multiple platforms, maintaining consistent brand voice and engagement.",
      outcome:
        "Increased content output by 300% while maintaining high engagement rates and reducing content creation time by 75%",
    },
    {
      title: "Multi-Platform Campaign Management",
      description:
        "A digital agency used Cane to manage multiple client social media accounts with automated content creation, scheduling, and performance tracking.",
      outcome:
        "Managed 3x more client accounts per social media manager with 50% higher engagement rates",
    },
    {
      title: "AI-Generated Social Content",
      description:
        "E-commerce brands utilized Cane to automatically create and optimize product-focused social media content with automated posting schedules based on engagement analytics.",
      outcome:
        "Increased social media-driven sales by 85% and reduced content creation costs by 60%",
    },
  ],
};
