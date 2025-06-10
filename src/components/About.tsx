
import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about" title="About Me" className="section-frame">
      <div className="text-lg leading-relaxed space-y-4">
        <p>Hey there! I'm Tyric Ramplin, a passionate frontend developer dedicated to creating beautiful and interactive web experiences. I specialize in HTML, CSS, and JavaScript to build responsive, user-friendly websites that seamlessly blend functionality with visual appeal.</p>
        
        <p>My journey in frontend development began with curiosity and has evolved into a deep commitment to crafting digital solutions. I've successfully completed several projects, including a comprehensive Web-based Resource Request System, and I'm continuously expanding my skill set through hands-on learning and professional development.</p>
        
        <p>What drives me is the intersection of creativity and technology - the ability to transform ideas into tangible, interactive experiences that users love. I'm particularly interested in modern web technologies, AI integration, and creating accessible, inclusive digital experiences.</p>
        
        <p>When I'm not immersed in code, you'll find me exploring the latest in tech, reading about emerging development trends, binge-watching compelling series, or diving into strategic video games that challenge my problem-solving skills. 📚🍿🎮</p>
        
        <p>
          I'm always excited to collaborate on innovative projects and connect with colleagues and developers and tech enthusiasts. Let's build something extraordinary together! You can find me on{' '}
          <a href="https://www.linkedin.com/in/tyric-ramplin-39b028326" target="_blank" rel="external nofollow noopener" className="text-primary hover:text-destructive transition-colors font-bold">LinkedIn</a>{' '}
          and{' '}
          <a href="https://github.com/Ricky21007" target="_blank" rel="external noopener" className="text-primary hover:text-destructive transition-colors font-bold">GitHub</a>.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;
