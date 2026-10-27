import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 justify-between gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="EvoGym logo" src={Logo} />
          <p className="my-5 text-sm text-muted">
            Whether you're lifting, running or stretching, sometimes you need
            that extra boost of encouragement to keep going. We're here for it.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <AnchorLink className="my-5 block" href={`#${SelectedPage.Benefits}`}>
            About Us
          </AnchorLink>
          <AnchorLink
            className="my-5 block"
            href={`#${SelectedPage.OurClasses}`}
          >
            Class Schedule
          </AnchorLink>
          <AnchorLink className="block" href={`#${SelectedPage.ContactUs}`}>
            Contact
          </AnchorLink>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5"> 123 Evo Gym Way, Fitness City, FC 98765 </p>
          <a href="tel:+212777146546">(+212) 777 146 546</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
