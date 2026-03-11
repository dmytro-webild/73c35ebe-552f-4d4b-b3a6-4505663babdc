"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import Link from 'next/link';
import {
  Quote,
  Briefcase
} from 'lucide-react';

export default function CareersPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "About", id: "/about" },
    { name: "Services", id: "/services" },
    { name: "Careers", id: "/careers" },
    { name: "Contact", id: "/contact" }
  ];

  const footerColumns = [
    {
      title: "Company",
      items: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Careers", href: "/careers" }
      ]
    },
    {
      title: "Training Programs",
      items: [
        { label: "Technology Training", href: "#" },
        { label: "Behavioral Skills", href: "#" },
        { label: "Leadership Development", href: "#" },
        { label: "Customized Solutions", href: "#" }
      ]
    },
    {
      title: "Contact",
      items: [
        { label: "Phone: +91-9819323675", href: "tel:+91-9819323675" },
        { label: "Email: info@eduramp.in", href: "mailto:info@eduramp.in" },
        { label: "Office: Thane, Maharashtra", href: "#" },
        { label: "Get in Touch", href: "/contact" }
      ]
    },
    {
      title: "Follow Us",
      items: [
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Facebook", href: "https://facebook.com" },
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Twitter", href: "https://twitter.com" }
      ]
    }
  ];

  const handleNavigation = (id: string) => {
    if (id.startsWith('/')) {
      // This will be handled by Link component
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <div id="nav" data-section="nav" className="sticky top-0 z-50">
        <NavbarStyleCentered
          navItems={navItems.map(item => ({
            name: item.name,
            id: item.id.startsWith('/') ? item.id : item.id
          }))}
          button={{
            text: "Get Started",
            href: "/contact"
          }}
          brandName="EduRamp"
        />
      </div>

      <div id="open-positions" data-section="open-positions" className="mx-auto px-4 md:px-6 py-20">
        <MetricCardTen
          title="Open Positions at EduRamp"
          description="Join our growing team of learning professionals and help transform the corporate training landscape. We're looking for talented individuals across technology, training, and business functions."
          tag="Career Opportunities"
          tagIcon={Briefcase}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",
              title: "Senior Python Trainer",
              subtitle: "Thane, Maharashtra · Full-time · Hybrid",
              category: "Training",
              value: "₹18-25 LPA",
              buttons: [
                { text: "Apply Now", href: "#" }
              ]
            },
            {
              id: "2",
              title: "Java Development Instructor",
              subtitle: "Thane, Maharashtra · Full-time · On-site",
              category: "Training",
              value: "₹16-22 LPA",
              buttons: [
                { text: "Apply Now", href: "#" }
              ]
            },
            {
              id: "3",
              title: "Behavioral Skills Facilitator",
              subtitle: "Thane, Maharashtra · Full-time · Hybrid",
              category: "Training",
              value: "₹14-20 LPA",
              buttons: [
                { text: "Apply Now", href: "#" }
              ]
            },
            {
              id: "4",
              title: "Sales & Business Development Executive",
              subtitle: "Thane, Maharashtra · Full-time · Hybrid",
              category: "Business",
              value: "₹12-18 LPA",
              buttons: [
                { text: "Apply Now", href: "#" }
              ]
            },
            {
              id: "5",
              title: "Learning & Development Manager",
              subtitle: "Thane, Maharashtra · Full-time · On-site",
              category: "Management",
              value: "₹15-21 LPA",
              buttons: [
                { text: "Apply Now", href: "#" }
              ]
            },
            {
              id: "6",
              title: "Content Developer - Technology Curriculum",
              subtitle: "Thane, Maharashtra · Full-time · Hybrid",
              category: "Content",
              value: "₹13-19 LPA",
              buttons: [
                { text: "Apply Now", href: "#" }
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="why-eduramp" data-section="why-eduramp" className="mx-auto px-4 md:px-6 py-20">
        <TestimonialCardTwo
          title="Why Join EduRamp"
          description="Discover what makes EduRamp an exceptional place to work and grow your career in the learning and development industry."
          tag="Employee Experience"
          tagIcon={Quote}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Learning Culture",
              role: "Continuous professional development",
              testimonial: "We invest in our team's growth through regular training, certifications, and exposure to cutting-edge learning technologies. Your expertise and skills continuously evolve here.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/professional-training-instructor-portrai-1773187224353-edd65783.png?_wi=3",
              imageAlt: "Learning Culture"
            },
            {
              id: "2",
              name: "Impact Driven Work",
              role: "Making a real difference",
              testimonial: "You'll have the satisfaction of transforming lives and careers. Working with Fortune 500 companies and seeing your training programs create measurable organizational impact is incredibly rewarding.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/corporate-director-professional-portrait-1773187224689-cd7c8e73.png?_wi=3",
              imageAlt: "Impact Driven Work"
            },
            {
              id: "3",
              name: "Collaborative Team",
              role: "Working with industry experts",
              testimonial: "Our team comprises passionate learning professionals and subject matter experts. You'll collaborate with highly skilled individuals who are committed to excellence and innovation in corporate learning.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/professional-manager-portrait-with-appro-1773187223633-1b503ec4.png?_wi=3",
              imageAlt: "Collaborative Team"
            },
            {
              id: "4",
              name: "Competitive Benefits",
              role: "Comprehensive employee wellness",
              testimonial: "We offer competitive salaries, health insurance, retirement planning, flexible work arrangements, and regular performance bonuses. Your well-being is our priority.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/human-resources-professional-portrait-sh-1773187225593-7d719dd5.png?_wi=4",
              imageAlt: "Competitive Benefits"
            },
            {
              id: "5",
              name: "Innovation & Technology",
              role: "Staying ahead of industry trends",
              testimonial: "We leverage the latest learning technologies and platforms. You'll work with modern tools, LMS systems, and instructional design software at the cutting edge of the industry.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/professional-corporate-executive-portrai-1773187223775-dc4c4917.png?_wi=2",
              imageAlt: "Innovation & Technology"
            },
            {
              id: "6",
              name: "Career Growth",
              role: "Opportunities for advancement",
              testimonial: "With our expanding portfolio and client base, there are clear career progression pathways. Many of our senior leaders started in entry-level positions and have grown within the organization.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/professional-manager-portrait-with-appro-1773187223633-1b503ec4.png?_wi=4",
              imageAlt: "Career Growth"
            }
          ]}
          carouselMode="buttons"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer" className="mx-auto px-4 md:px-6">
        <FooterBaseCard
          logoText="EduRamp"
          columns={footerColumns}
          copyrightText="© 2025 EduRamp Learning Services Pvt Ltd. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}