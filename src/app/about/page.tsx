"use client";

import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from 'next/link';
import { Sparkles, Zap, Code, Layers, Shield, Globe, Mic, MessageCircle, Volume2, Crown, Users, Target, Lightbulb } from 'lucide-react';

const AboutPage = () => {
  const handlePrivacyClick = () => {
    console.log("Privacy policy clicked");
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
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "/about" },
            { name: "Services", id: "#services" },
            { name: "Careers", id: "#careers" },
            { name: "Contact", id: "#contact" }
          ]}
          button={{
            text: "Get Started",
            href: "#contact"
          }}
          brandName="EduRamp"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          background={{ variant: "gradient-bars" }}
          title="Transforming Organizations Through Strategic Learning & Development"
          description="EduRamp Learning Services has been pioneering excellence in corporate training for over a decade. We partner with Fortune 500 companies and innovative enterprises to build capable, engaged, and future-ready workforces through comprehensive B2B learning solutions."
          tag="Our Story & Values"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/professional-corporate-training-company--1773187224301-a3a7402b.png"
          imageAlt="Professional corporate training company environment"
          imagePosition="right"
          mediaAnimation="blur-reveal"
          testimonials={[
            {
              name: "Industry Recognition",
              handle: "Certified Training Partner",
              testimonial: "Accredited by international quality standards with proven expertise in enterprise learning solutions and organizational development.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/corporate-director-professional-portrait-1773187224689-cd7c8e73.png?_wi=1"
            },
            {
              name: "Expert Faculty",
              handle: "World-Class Instructors",
              testimonial: "Our trainers bring decades of combined industry experience with deep expertise in technology, leadership, and organizational development.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/professional-training-instructor-portrai-1773187224353-edd65783.png?_wi=1"
            },
            {
              name: "Proven Results",
              handle: "50,000+ Professionals Trained",
              testimonial: "Consistent track record of delivering measurable business impact with client satisfaction rates exceeding 95% and strong ROI metrics.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/human-resources-professional-portrait-sh-1773187225593-7d719dd5.png?_wi=1"
            },
            {
              name: "Innovation Focus",
              handle: "Modern Learning Solutions",
              testimonial: "Leveraging cutting-edge instructional design, blended learning approaches, and emerging technologies to deliver transformative training experiences.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/professional-manager-portrait-with-appro-1773187223633-1b503ec4.png?_wi=1"
            }
          ]}
          buttons={[
            {
              text: "View Our Programs",
              href: "/"
            },
            {
              text: "Schedule Consultation",
              href: "#contact"
            }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="core-values" data-section="core-values">
        <FeatureBento
          title="Our Core Strengths & Specializations"
          description="We combine deep industry expertise with innovative instructional design to deliver training that drives real business transformation and sustainable organizational change."
          tag="Why Partner With EduRamp"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              title: "Customized Learning Pathways",
              description: "Tailor-made training programs designed specifically for your organization's unique challenges and growth objectives.",
              bentoComponent: "globe"
            },
            {
              title: "Industry Expert Faculty",
              description: "Learn from experienced professionals with proven track records in leading global organizations and cutting-edge technologies.",
              bentoComponent: "animated-bar-chart"
            },
            {
              title: "Technology & Innovation",
              description: "Master modern programming languages and digital skills with hands-on projects using current industry tools and frameworks.",
              bentoComponent: "orbiting-icons",
              centerIcon: Globe,
              items: [
                {
                  icon: Code,
                  ring: 1
                },
                {
                  icon: Zap,
                  ring: 2
                },
                {
                  icon: Shield,
                  ring: 3
                }
              ]
            },
            {
              title: "Behavioral Excellence",
              description: "Develop critical soft skills including leadership, communication, emotional intelligence, and collaborative teamwork.",
              bentoComponent: "3d-stack-cards",
              items: [
                {
                  icon: Crown,
                  title: "Leadership",
                  subtitle: "Strategic Direction",
                  detail: "Develop visionary leaders"
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  subtitle: "Team Synergy",
                  detail: "Build high-performing teams"
                },
                {
                  icon: Target,
                  title: "Performance",
                  subtitle: "Excellence Focus",
                  detail: "Achieve organizational goals"
                }
              ]
            },
            {
              title: "Blended Learning Approach",
              description: "Combine classroom training, virtual sessions, self-paced learning, and experiential activities for maximum engagement and retention.",
              bentoComponent: "marquee",
              centerIcon: Layers,
              variant: "icon",
              icons: [Globe, Zap, Layers, Shield]
            },
            {
              title: "Measurable Impact",
              description: "Track learning outcomes, performance improvements, and ROI through comprehensive assessment frameworks and analytics.",
              bentoComponent: "line-chart"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="EduRamp"
          columns={[
            {
              title: "Company",
              items: [
                {
                  label: "Home",
                  href: "/"
                },
                {
                  label: "About Us",
                  href: "/about"
                },
                {
                  label: "Services",
                  href: "/#services"
                },
                {
                  label: "Careers",
                  href: "#careers"
                }
              ]
            },
            {
              title: "Training Programs",
              items: [
                {
                  label: "Technology Training",
                  href: "/#services"
                },
                {
                  label: "Behavioral Skills",
                  href: "/#services"
                },
                {
                  label: "Leadership Development",
                  href: "/#services"
                },
                {
                  label: "Customized Solutions",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Phone: +91-9819323675",
                  href: "tel:+91-9819323675"
                },
                {
                  label: "Email: info@eduramp.in",
                  href: "mailto:info@eduramp.in"
                },
                {
                  label: "Office: Thane, Maharashtra",
                  href: "#"
                },
                {
                  label: "Get in Touch",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Follow Us",
              items: [
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com"
                },
                {
                  label: "Facebook",
                  href: "https://facebook.com"
                },
                {
                  label: "Instagram",
                  href: "https://instagram.com"
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com"
                }
              ]
            }
          ]}
          copyrightText="© 2025 EduRamp Learning Services Pvt Ltd. All rights reserved."
          onPrivacyClick={handlePrivacyClick}
        />
      </div>
    </ThemeProvider>
  );
};

export default AboutPage;