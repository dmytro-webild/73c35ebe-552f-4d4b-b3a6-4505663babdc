"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";

export default function ContactPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Careers", id: "careers" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="none"
      cardStyle="gradient-mesh"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={navItems}
          button={{
            text: "Get Started",
            href: "/contact",
          }}
          brandName="EduRamp"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch With Our Learning Experts"
          description="Have questions about our training programs? Want to discuss your organization's learning needs? Our team is ready to help you design the perfect training solution."
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Your Full Name",
              required: true,
            },
            {
              name: "email",
              type: "email",
              placeholder: "your.email@company.com",
              required: true,
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "+91 98193 23675",
              required: true,
            },
            {
              name: "companyName",
              type: "text",
              placeholder: "Company Name",
              required: true,
            },
            {
              name: "trainingType",
              type: "text",
              placeholder: "Type of Training Required",
              required: true,
            },
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your specific training requirements and organizational goals...",
            rows: 6,
            required: true,
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/modern-corporate-office-environment-in-t-1773187223678-149297f3.png"
          imageAlt="EduRamp Office Environment"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          buttonText="Submit Inquiry"
          useInvertedBackground={false}
          onSubmit={(data) => {
            console.log("Form submitted:", data);
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="EduRamp"
          columns={[
            {
              title: "Company",
              items: [
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Careers", href: "/careers" },
              ],
            },
            {
              title: "Training Programs",
              items: [
                { label: "Technology Training", href: "#" },
                { label: "Behavioral Skills", href: "#" },
                { label: "Leadership Development", href: "#" },
                { label: "Customized Solutions", href: "#" },
              ],
            },
            {
              title: "Contact",
              items: [
                { label: "Phone: +91-9819323675", href: "tel:+91-9819323675" },
                { label: "Email: info@eduramp.in", href: "mailto:info@eduramp.in" },
                { label: "Office: Thane, Maharashtra", href: "#" },
                { label: "Get in Touch", href: "/contact" },
              ],
            },
            {
              title: "Follow Us",
              items: [
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Twitter", href: "https://twitter.com" },
              ],
            },
          ]}
          copyrightText="© 2025 EduRamp Learning Services Pvt Ltd. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}