import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative">
            {/* Hero Content */}
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-1">
                  <span>elys.work</span>
                </h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  <span className="gradient-text">Powering Innovation</span>
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    with AI Solutions
                  </span>
                </h2>
              </div>

              <p className="mt-8 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Elys delivers cutting-edge AI technology solutions that
                transform businesses and drive innovation across industries.
              </p>
            </div>
            <div className="mt-12 flex gap-4 justify-center">
              <Link
                href="/services"
                className="rounded-lg px-6 py-3 bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="rounded-lg px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary transition-all hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our AI-Powered Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all hover:scale-105 hover:shadow-primary/10 border border-transparent hover:border-primary/20"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    name: "Omnia",
    description:
      "Advanced AI chatbot with internet access capabilities, processing information from multiple sources.",
  },
  {
    name: "OmniFS",
    description:
      "Intelligent file system with content-aware organization and natural language search capabilities.",
  },
  {
    name: "Linadraw",
    description:
      "Collaborative AI-enhanced whiteboard application with real-time features and drawing assistance.",
  },
  {
    name: "Lex",
    description:
      "Internal legal consultation system powered by RAG technology for efficient document management.",
  },
  {
    name: "Hire",
    description:
      "AI-powered recruitment platform offering automated candidate matching and recruitment analytics.",
  },
  {
    name: "Cane",
    description:
      "AI-driven social media management tool for automated content creation and posting.",
  },
];
