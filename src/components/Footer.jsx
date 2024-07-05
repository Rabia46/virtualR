import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import logo from "../assets/logo1.png"; // Make sure the path to your logo is correct

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <img src={logo} alt="Logo" className="h-10 w-10 mb-4" />
            <p className="text-neutral-300">  Empowering Your Virtual Reality experiences     </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-md font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-300 hover:text-white">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-md font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-300 hover:text-white">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-300 hover:text-white">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
