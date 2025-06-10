
import { useEffect, useRef } from 'react';
import SectionWrapper from './SectionWrapper';

type SkillItem = {
  name: string;
  percentage: number;
  description: string;
};

type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", percentage: 90, description: "Advanced proficiency in semantic markup" },
      { name: "CSS3", percentage: 85, description: "Skilled in animations and layouts" },
      { name: "JavaScript", percentage: 80, description: "Proficient in ES6+ and DOM manipulation" },
      { name: "Responsive Design", percentage: 85, description: "Expert in mobile-first design" },
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", percentage: 75, description: "Experienced in version control" },
      { name: "VS Code", percentage: 100, description: "Primary development environment" },
      { name: "Figma", percentage: 70, description: "Comfortable with UI prototyping" },
      { name: "Netlify", percentage: 80, description: "Skilled in deployment" },
    ]
  },
  {
    title: "AI & Emerging Tech",
    skills: [
      { name: "AI Prompt Engineering", percentage: 85, description: "Crafting effective AI queries" },
      { name: "Chatbot Development", percentage: 80, description: "Building conversational AI" },
      { name: "UI/UX Design", percentage: 75, description: "Focused on user-centric design" },
    ]
  }
];

const SkillBar = ({ skill }: { skill: SkillItem }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (progressRef.current) {
      setTimeout(() => {
        if (progressRef.current) {
          progressRef.current.style.width = `${skill.percentage}%`;
        }
      }, 300);
    }
  }, [skill.percentage]);

  return (
    <div className="mb-6 cursor-pointer group" title={skill.description}>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-lg flex-1 text-left">{skill.name}</span>
        <span className="text-primary font-medium flex-none w-12 text-right">{skill.percentage}%</span>
      </div>
      <div className="h-2.5 bg-muted-foreground/30 rounded-full overflow-hidden relative">
        <div 
          ref={progressRef}
          className="h-full skill-progress-bar rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <SectionWrapper id="skills" title="Technical Skills" className="skills-frame">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-card rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
