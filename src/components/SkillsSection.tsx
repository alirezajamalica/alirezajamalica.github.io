import { getProfileSection } from "@/utils/profileData";

export default function SkillsSection() {
  const skills = getProfileSection("skills");
  const categoryIcons = [
    "M4 6c0-2 16-2 16 0s-16 2-16 0m0 0v12c0 3 16 3 16 0V6M4 12c0 3 16 3 16 0",
    "M4 3v17h17M8 16v-5m5 5V7m5 9V4",
    "M8 5 2 12l6 7m8-14 6 7-6 7m-3-15-2 16",
    "M3 4h18v12H3zM8 21h8m-4-5v5",
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m8-7a4 4 0 0 1 0 7m5 10v-2a4 4 0 0 0-3-4",
  ];

  if (!skills || !Array.isArray(skills) || skills.length === 0) {
    return null; // or some fallback UI
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Technical Skills
        </h2>

        <div className="skills-groups max-w-4xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="skills-group"
            >
              <h3 className="skills-category-title text-xl font-semibold">
                <span className="skills-category-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={categoryIcons[index % categoryIcons.length]} />
                  </svg>
                </span>
                <span>{skillGroup.category}</span>
              </h3>
              <div className="skills-grid">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-tile bg-neutral-50 dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
