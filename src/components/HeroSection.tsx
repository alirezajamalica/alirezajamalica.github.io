import { getProfileSection } from "@/utils/profileData";

export default function HeroSection() {
  const basics = getProfileSection("basics");

  return (
    <section className="container flex flex-col items-center px-6 py-20 mx-auto">
      {/* Content section - text and photo */}
      <div className="flex flex-col w-full mb-12 max-w-7xl lg:flex-row lg:justify-between lg:items-center">
        {/* Text content */}
        <div className="mb-10 lg:w-1/2 lg:mb-0">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {`Hi, I'm `}
            <span className="block primary-color md:inline">{basics.name}</span>
          </h1>
          <h2 className="mb-6 text-xl text-gray-600 md:text-2xl dark:text-gray-300">
            {basics.title}
          </h2>

          {/* Render summary paragraphs from array */}
          {basics.summaries &&
            Array.isArray(basics.summaries) &&
            basics.summaries.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg max-w-lg ${index > 0 ? "mt-4" : ""}`}
              >
                {paragraph}
              </p>
            ))}
        </div>

        {/* Personal monogram */}
        <div className="flex justify-center lg:w-2/5">
          <div className="personal-monogram" role="img" aria-label="Ali Jamali monogram">
            <svg className="monogram-network" viewBox="0 0 320 320" aria-hidden="true">
              <path d="M48 104 L104 48 L216 48 L272 104 L272 216 L216 272 L104 272 L48 216 Z" />
              <path d="M48 104 L104 160 L48 216 M272 104 L216 160 L272 216" />
              {[ [48,104], [104,48], [216,48], [272,104], [272,216], [216,272], [104,272], [48,216] ].map(([cx,cy], index) => (
                <circle key={index} cx={cx} cy={cy} r="5" />
              ))}
            </svg>
            <span className="monogram-letters" aria-hidden="true">AJ</span>
            <span className="monogram-caption" aria-hidden="true">DATA · SYSTEMS · IT</span>
          </div>
        </div>
      </div>

      {/* Action buttons - now below both text and photo */}
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <a
          href="#contact"
          className="px-6 py-3 text-center rounded-full btn-primary"
        >
          Get in touch
        </a>
        <a
          href="#projects"
          className="px-6 py-3 text-center rounded-full btn-secondary"
        >
          View my work
        </a>
      </div>
    </section>
  );
}
