
const Footer = () => {
  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Tyric Ramplin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
