import SectionWrapper from './SectionWrapper';

const Education = () => {
  return (
    <SectionWrapper id="education" title="Education" className="education-frame">
      <div className="space-y-8">
        
        {/* Diploma */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-education-accent/40 via-neon-purple/30 to-neon-cyan/40 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative glass border border-education-accent/30 rounded-2xl p-8 transition-all duration-500 group-hover:border-education-accent/60 group-hover:scale-[1.02]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              
              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="relative p-3 rounded-xl bg-gradient-to-br from-education-accent/20 to-neon-purple/20 border border-education-accent/30">
                    <svg className="w-8 h-8 text-education-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    <div className="absolute inset-0 bg-education-accent/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Diploma in Information Technology</h3>
                    <p className="text-education-accent font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4m5 0h4m0-16H3m4 0h10m0 0h4m-14 0h4" />
                      </svg>
                      Richfield Graduate Institute of Technology
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      Comprehensive program covering <span className="text-neon-cyan font-semibold">software development</span>, <span className="text-neon-purple font-semibold">web technologies</span>, and <span className="text-neon-pink font-semibold">IT fundamentals</span>
                    </p>
                  </div>
                </div>

                {/* Skills acquired */}
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Key Skills Acquired</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Programming", "Web Development", "Database Design", "Systems Analysis", "Project Management"].map((skill, index) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm font-mono bg-education-accent/10 border border-education-accent/30 rounded-full hover:bg-education-accent/20 transition-colors duration-300 opacity-0 animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Timeline */}
              <div className="lg:text-right space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-education-accent/10 border border-education-accent/30">
                  <svg className="w-4 h-4 text-education-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-muted-foreground">Duration</span>
                </div>
                <p className="font-bold text-xl text-foreground font-mono">Jan 2022 - 2024</p>
                <div className="inline-flex items-center gap-1 text-sm text-education-accent font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Completed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High School */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/30 via-neon-green/20 to-education-accent/30 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative glass border border-primary/20 rounded-2xl p-8 transition-all duration-500 group-hover:border-primary/50 group-hover:scale-[1.02]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              
              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary/20 to-neon-green/20 border border-primary/30">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">National Senior Certificate</h3>
                    <p className="text-primary font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4m5 0h4m0-16H3m4 0h10m0 0h4m-14 0h4" />
                      </svg>
                      Hoerskool Tygerberg
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      Completed foundational education with focus on <span className="text-neon-green font-semibold">academic excellence</span> and <span className="text-neon-blue font-semibold">critical thinking</span>
                    </p>
                  </div>
                </div>

                {/* Foundation subjects */}
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Foundation Building</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Mathematics", "Sciences", "Languages", "Computer Literacy"].map((subject, index) => (
                      <span
                        key={subject}
                        className="px-3 py-1 text-sm font-mono bg-primary/10 border border-primary/30 rounded-full hover:bg-primary/20 transition-colors duration-300 opacity-0 animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Timeline */}
              <div className="lg:text-right space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/30">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-muted-foreground">Duration</span>
                </div>
                <p className="font-bold text-xl text-foreground font-mono">2017 - 2021</p>
                <div className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
