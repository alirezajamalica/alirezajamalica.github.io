import { getProfileSection } from "@/utils/profileData";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = getProfileSection("projects");
  const refined = getProfileSection("siteConfig").projectCardStyle === "refined";
  const iconPaths = [
    "M4 6c0-2 16-2 16 0s-16 2-16 0m0 0v12c0 3 16 3 16 0V6M4 12c0 3 16 3 16 0",
    "M4 7h13m-4-4 4 4-4 4M20 17H7m4-4-4 4 4 4",
    "M7 3h10v18H7zM10 7h4M10 11h4M10 15h1m3 0h1",
    "M9 3h6m-5 0v6l-5 9c-1 2 0 3 2 3h10c2 0 3-1 2-3l-5-9V3M8 15h8",
    "M8 5 2 12l6 7m8-14 6 7-6 7m-3-15-2 16",
  ];

  if (!projects || projects.length === 0) {
    return null; // Return null if no projects are found
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">
          Projects & Achievements
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, projectIndex) => {
            // Check for image property
            const hasImage = !!project.image;

            return (
              <div
                key={project.name}
                className={refined ? "project-card-refined overflow-hidden rounded-2xl bg-white dark:bg-neutral-800" : "rounded-lg overflow-hidden shadow-md bg-white dark:bg-neutral-800 transition-transform hover:scale-[1.02]"}
              >
                {/* Project header with image if available, otherwise gradient with name */}
                {refined && !hasImage ? (
                  <div className="project-card-heading">
                    <div className="project-card-icon">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d={iconPaths[projectIndex % iconPaths.length]} />
                      </svg>
                    </div>
                    <div className="project-card-heading-text">
                      <p className="project-card-label">SELECTED PROJECT</p>
                      <p className="project-card-name font-semibold text-gray-800 dark:text-gray-100">{project.name}</p>
                    </div>
                  </div>
                ) : <div
                  className={`h-48 ${
                    !hasImage ? `bg-gradient-to-r ${project.color}` : ""
                  } flex items-center justify-center text-white text-xl font-bold`}
                >
                  {hasImage ? (
                    <Image
                      src={project.image!}
                      alt={project.name}
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    project.name
                  )}
                </div>}

                <div className={refined ? "project-card-body" : "p-6"}>
                  {/* Project title */}
                  <h3 className="mb-2 text-xl font-semibold">
                    {project.title}
                  </h3>

                  {/* Project description */}
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>

                  {/* Feature list */}
                  <ul className="mb-4 space-y-1 text-gray-600 list-disc list-inside dark:text-gray-300">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 5).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 text-xs text-gray-800 bg-gray-100 rounded dark:bg-gray-800 dark:text-gray-200">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* View project link */}
                  {/* <Link
                    href={`/projects/${getProjectSlug(project.name)}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project Details
                    <svg
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
