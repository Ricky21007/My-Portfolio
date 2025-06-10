
import { useState } from 'react';
import SectionWrapper from './SectionWrapper';

type Certificate = {
  id: string;
  image: string;
  title: string;
};

const certificates: Certificate[] = [
  {
    id: "ai-chatbots",
    image: "/Images/Building-AI-Powered-Chatbots-Without-Programming-Certificate.png",
    title: "Building AI-Powered Chatbots Without Programming"
  },
  {
    id: "active-listening",
    image: "/Images/Active-Listening-Enhancing-Communication-Skills-Certificate.png",
    title: "Active Listening: Enhancing Communication Skills"
  },
  {
    id: "interpersonal-skills",
    image: "/Images/Developing-Interpersonal-Skills-Certificate.png",
    title: "Developing Interpersonal Skills"
  },
  {
    id: "intro-ai",
    image: "/Images/Introduction-to-AI-Certificate.png",
    title: "Introduction to AI"
  },
  {
    id: "prompt-engineering",
    image: "/Images/Generative-AI-Prompt-Engineering-Basics-Certificate.png",
    title: "Generative AI: Prompt Engineering Basics"
  },
  {
    id: "generative-ai",
    image: "/Images/Generative-AI-Introduction-and-Applications-Certificate.png",
    title: "Generative AI: Introduction and Applications"
  },
  {
    id: "software-dev",
    image: "/Images/Introduction-to-Software-Development-Certificate.png",
    title: "Introduction to Software Development"
  },
  {
    id: "professional-emails",
    image: "/Images/Write-Professional-Emails-in-English-Certificate.png",
    title: "Write Professional Emails in English"
  },
  {
    id: "presentation-skills",
    image: "/Images/Verbal-Communications-and-Presentation-Skills-Certificate.png",
    title: "Verbal Communications and Presentation Skills"
  }
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <SectionWrapper id="certificates" title="Certificates & Achievements">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <div 
            key={certificate.id}
            className="cursor-pointer group bg-card rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.03] duration-300"
            onClick={() => openModal(certificate)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={certificate.image} 
                alt={certificate.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy" 
              />
            </div>
            <div className="p-4">
              <p className="text-center font-medium">{certificate.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-3xl text-foreground hover:text-primary"
              onClick={closeModal}
              aria-label="Close certificate view"
            >
              ×
            </button>
            <img 
              src={selectedCertificate.image} 
              alt={selectedCertificate.title} 
              className="w-full rounded-lg shadow-xl" 
            />
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Certificates;
