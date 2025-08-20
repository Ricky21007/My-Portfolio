const Education = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background theme-transition">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Education</h1>
            <p className="text-xl text-gray-600">My academic background and qualifications</p>
          </div>

          <div className="space-y-12">
            
            {/* Education Timeline */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary mb-8">Academic Background</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                
                <div className="space-y-12">
                  {/* Diploma in Information Technology */}
                  <div className="relative flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm z-10">
                      2024
                    </div>
                    
                    <div className="flex-1 bg-white rounded-xl p-8 border-2 border-gray-200 shadow-lg">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Diploma in Information Technology
                      </h3>
                      <p className="text-lg text-gray-600 mb-4 font-semibold">Richfield Graduate Institute of Technology</p>
                      <p className="text-gray-800 mb-4 leading-relaxed">
                        Comprehensive program covering software development, web technologies, and IT fundamentals
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-bold text-primary mb-3">Key Skills Acquired:</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {[
                            "Programming",
                            "Web Development",
                            "Project Management",
                            "Java",
                            "Quantitative Techniques",
                            "Software Development",
                            "Information Systems",
                            "Mobile Commerce"
                          ].map((skill, index) => (
                            <div
                              key={skill}
                              className="bg-gray-100 border border-gray-300 rounded-lg p-3 text-center text-sm font-medium text-gray-800"
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600 font-medium">
                        <strong>Duration:</strong> Jan 2022 - 2024
                      </div>
                    </div>
                  </div>

                  {/* National Senior Certificate */}
                  <div className="relative flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm z-10">
                      2021
                    </div>
                    
                    <div className="flex-1 bg-white rounded-xl p-8 border-2 border-gray-200 shadow-lg">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        National Senior Certificate
                      </h3>
                      <p className="text-lg text-gray-600 mb-4 font-semibold">Hoërskool Tygerberg</p>
                      <p className="text-gray-800 mb-4 leading-relaxed">
                        Completed foundational education with focus on academic excellence and critical thinking
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-bold text-primary mb-3">Foundation Building:</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {[
                            "Computer Applications Technology",
                            "Economics",
                            "Biology",
                            "Afrikaans",
                            "English"
                          ].map((subject, index) => (
                            <div
                              key={subject}
                              className="bg-gray-100 border border-gray-300 rounded-lg p-3 text-center text-sm font-medium text-gray-800"
                            >
                              {subject}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600 font-medium">
                        <strong>Duration:</strong> 2017 - 2021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
