const footerLinks = {
  Products: ["Property Management", "Channel Manager", "Booking Engine", "Analytics", "Revenue Manager"],
  Company: ["About Us", "Careers", "Press", "Blog", "Contact"],
  Resources: ["Help Center", "API Docs", "Integrations", "Webinars", "Case Studies"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-bold font-display text-primary">Booking</span>
              <span className="text-2xl font-bold font-display text-background">4U</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              The all-in-one hotel management platform for modern hospitality.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-background font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/50 text-sm hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Booking4U. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
