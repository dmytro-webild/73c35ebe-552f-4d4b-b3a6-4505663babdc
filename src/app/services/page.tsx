"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import Link from 'next/link';
import {
  Crown,
  Users,
  Target,
  Lightbulb,
  Mic,
  MessageCircle,
  Volume2,
  Globe,
  Code,
  Zap,
  Layers,
  Shield,
  TrendingUp,
  Quote
} from 'lucide-react';

export default function ServicesPage() {
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

      <div id="services" data-section="services" className="mx-auto px-4 md:px-6 py-20">
        <FeatureBento
          features={[
            {
              title: "Python Programming",
              description: "Master Python for data science, AI, and enterprise applications with expert instruction and hands-on projects.",
              bentoComponent: "globe"
            },
            {
              title: "Java Enterprise Development",
              description: "Comprehensive Java training for building scalable enterprise applications and microservices architecture.",
              bentoComponent: "animated-bar-chart"
            },
            {
              title: "Leadership Development",
              description: "Transform your leaders with strategic thinking, decision-making, and team management skills.",
              bentoComponent: "orbiting-icons",
              centerIcon: Crown,
              items: [
                {
                  icon: Users,
                  ring: 1
                },
                {
                  icon: Target,
                  ring: 2
                },
                {
                  icon: Lightbulb,
                  ring: 3
                }
              ]
            },
            {
              title: "Communication Skills",
              description: "Develop powerful presentation, interpersonal, and business communication capabilities.",
              bentoComponent: "3d-stack-cards",
              items: [
                {
                  icon: Mic,
                  title: "Presentation",
                  subtitle: "Master the Stage",
                  detail: "Deliver impactful presentations"
                },
                {
                  icon: MessageCircle,
                  title: "Conversation",
                  subtitle: "Build Relationships",
                  detail: "Effective dialogue skills"
                },
                {
                  icon: Volume2,
                  title: "Influence",
                  subtitle: "Lead Through Words",
                  detail: "Persuasion and impact"
                }
              ]
            },
            {
              title: "Web Development",
              description: "Full-stack web development training covering React, Node.js, and modern web technologies.",
              bentoComponent: "marquee",
              centerIcon: Globe,
              variant: "icon",
              icons: [
                Code,
                Zap,
                Layers,
                Shield
              ]
            },
            {
              title: "Emotional Intelligence",
              description: "Build self-awareness and interpersonal skills for greater personal and professional effectiveness.",
              bentoComponent: "line-chart"
            }
          ]}
          title="Comprehensive Training Solutions"
          description="Our diverse range of training programs covers everything from cutting-edge technology to essential behavioral skills. Designed to meet the evolving needs of modern enterprises."
          tag="Training Offerings"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics" className="mx-auto px-4 md:px-6 py-20">
        <MetricCardTen
          title="Our Impact & Excellence"
          description="Proven track record of delivering transformative learning solutions to leading organizations across industries."
          tag="Key Metrics"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",
              title: "Years of Excellence",
              subtitle: "Delivering quality corporate training",
              category: "Experience",
              value: "10+"
            },
            {
              id: "2",
              title: "Corporate Clients Served",
              subtitle: "Trusted by leading organizations",
              category: "Clients",
              value: "200+"
            },
            {
              id: "3",
              title: "Technologies Trained",
              subtitle: "Comprehensive tech curriculum",
              category: "Technology",
              value: "50+"
            },
            {
              id: "4",
              title: "Corporate Batches Delivered",
              subtitle: "Successful training programs",
              category: "Programs",
              value: "1000+"
            },
            {
              id: "5",
              title: "Trainees Upskilled",
              subtitle: "Professionals developed",
              category: "Workforce",
              value: "50,000+"
            },
            {
              id: "6",
              title: "Learning Frameworks",
              subtitle: "Customized curricula",
              category: "Frameworks",
              value: "100+"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="testimonials" data-section="testimonials" className="mx-auto px-4 md:px-6 py-20">
        <TestimonialCardTwo
          title="Client Success Stories"
          description="Hear from organizations that have transformed their teams through EduRamp's strategic learning programs."
          tag="Testimonials"
          tagIcon={Quote}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Rajesh Kumar",
              role: "Head of Technology, Global IT Corp",
              testimonial: "EduRamp's technical training programs elevated our team's expertise significantly. The instructors are world-class and the curriculum is perfectly aligned with industry standards. Our project delivery improved by 40% within three months.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/corporate-director-professional-portrait-1773187224689-cd7c8e73.png",
              imageAlt: "Rajesh Kumar"
            },
            {
              id: "2",
              name: "Priya Sharma",
              role: "Human Resources Director, Enterprise Solutions",
              testimonial: "The behavioral skills program transformed how our teams communicate and collaborate. Employees report higher engagement and satisfaction. We've seen reduced turnover and increased productivity across departments.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/human-resources-professional-portrait-sh-1773187225593-7d719dd5.png",
              imageAlt: "Priya Sharma"
            },
            {
              id: "3",
              name: "Amit Desai",
              role: "Chief Operating Officer, Innovation Ventures",
              testimonial: "Outstanding leadership development program. Our managers now have the strategic thinking and decision-making skills we need for our growth phase. EduRamp truly understands enterprise learning.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/professional-corporate-executive-portrai-1773187223775-dc4c4917.png",
              imageAlt: "Amit Desai"
            },
            {
              id: "4",
              name: "Neha Kapoor",
              role: "Learning & Development Manager, Tech Innovations",
              testimonial: "Professional, responsive, and results-oriented. EduRamp customized the program perfectly for our organization. Our technical team is now equipped with modern skills and best practices.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/professional-training-instructor-portrai-1773187224353-edd65783.png",
              imageAlt: "Neha Kapoor"
            },
            {
              id: "5",
              name: "Vikram Choudhary",
              role: "VP Sales, Business Solutions Ltd",
              testimonial: "The communication and presentation skills training has made a remarkable difference in our sales team's performance. Client feedback has improved significantly, and our closing rates are up by 35%.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/professional-manager-portrait-with-appro-1773187223633-1b503ec4.png",
              imageAlt: "Vikram Choudhary"
            },
            {
              id: "6",
              name: "Ananya Singh",
              role: "Chief People Officer, Digital Transformation Co",
              testimonial: "EduRamp's holistic approach to training combines technical excellence with behavioral development. Our employees feel valued and equipped for the future. This is a true partnership approach to learning.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/human-resources-professional-portrait-sh-1773187225593-7d719dd5.png",
              imageAlt: "Ananya Singh"
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