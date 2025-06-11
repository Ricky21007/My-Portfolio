
import SectionWrapper from './SectionWrapper';

const Education = () => {
  return (
    <SectionWrapper id="education" title="Education" className="education-frame">
      <div className="space-y-8">
        <div className="bg-card rounded-lg p-8 shadow-lg border border-education-accent/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">Bachelor's Degree</h3>
              <p className="text-education-accent font-medium mb-2">Hoerskool Tygerberg</p>
              <p className="text-muted-foreground">Completed foundational education with focus on academic excellence</p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="font-medium text-foreground">2017-2021</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-lg border border-education-accent/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">Diploma in Information Technology</h3>
              <p className="text-education-accent font-medium mb-2">Richfield Graduate Institute of Technology</p>
              <p className="text-muted-foreground">Comprehensive program covering software development, web technologies, and IT fundamentals</p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-medium text-foreground">Jan 2022 - 2024</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
