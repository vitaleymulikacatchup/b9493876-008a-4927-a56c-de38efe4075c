"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, BarChart3, HelpCircle, Linkedin, Rocket, Share2, Star, Target, TrendingUp, Zap, PenTool, Twitter, Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="animatedGrid"
      cardStyle="solid-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="MarketFlow"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Grow Your Business with Strategic Marketing"
          description="We help ambitious companies scale their reach, increase conversions, and build lasting customer relationships through data-driven marketing strategies and creative campaigns."
          tag="Marketing Agency"
          tagIcon={TrendingUp}
          imageSrc="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Marketing team collaborating on strategy"
          imagePosition="right"
          buttons={[
            {
              text: "Start Your Growth",
              href: "contact"
            },
            {
              text: "View Our Work",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Why Choose Us"
          description={[
            "We're not just another marketing agency. We're your growth partners, combining strategic thinking with creative execution to deliver results that matter.",
            "Our team of experienced marketers, designers, and strategists work together to create campaigns that resonate with your audience and drive measurable business growth."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "contact"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwo
          title="Our Marketing Services"
          description="Comprehensive marketing solutions designed to accelerate your business growth and maximize ROI"
          tag="Services"
          tagIcon={Zap}
          features={[
            {
              title: "Digital Strategy",
              description: "Data-driven strategies that align with your business goals and target the right audience at the right time",
              icon: Target
            },
            {
              title: "Content Marketing",
              description: "Engaging content that tells your brand story and builds meaningful connections with your customers",
              icon: PenTool
            },
            {
              title: "Social Media",
              description: "Strategic social media campaigns that increase brand awareness and drive customer engagement",
              icon: Share2
            },
            {
              title: "Analytics & Insights",
              description: "Detailed performance tracking and insights to optimize campaigns and maximize your marketing investment",
              icon: BarChart3
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real results from real businesses who trusted us with their growth"
          tag="Testimonials"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechFlow Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson CEO portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Marketing Director",
              company: "InnovateHub",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12800926/pexels-photo-12800926.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen marketing director portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Founder",
              company: "GrowthLab",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716031/pexels-photo-5716031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez founder portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "VP of Sales",
              company: "ScaleUp Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7109087/pexels-photo-7109087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim VP of sales portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join hundreds of successful companies that have accelerated their growth with our marketing expertise"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/3370333/pexels-photo-3370333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get answers to common questions about our marketing services and process"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "How long does it take to see results?",
              content: "While some improvements can be seen within the first month, most marketing campaigns show significant results within 3-6 months. We provide monthly reports to track progress and optimize performance."
            },
            {
              id: "2",
              title: "What industries do you work with?",
              content: "We work with businesses across various industries including technology, healthcare, finance, e-commerce, and professional services. Our strategies are tailored to each industry's unique challenges and opportunities."
            },
            {
              id: "3",
              title: "Do you provide custom marketing strategies?",
              content: "Absolutely. Every business is unique, and we create customized marketing strategies based on your specific goals, target audience, budget, and market conditions. No cookie-cutter solutions here."
            },
            {
              id: "4",
              title: "What is your pricing structure?",
              content: "Our pricing varies based on the scope and complexity of your project. We offer both project-based and retainer-based pricing models. Contact us for a custom quote based on your specific needs."
            },
            {
              id: "5",
              title: "How do you measure campaign success?",
              content: "We track key performance indicators (KPIs) relevant to your goals, such as lead generation, conversion rates, website traffic, social engagement, and ROI. You'll receive detailed monthly reports with actionable insights."
            },
            {
              id: "6",
              title: "Can you help with both digital and traditional marketing?",
              content: "Yes, we specialize in integrated marketing approaches that combine digital channels (social media, content, SEO, PPC) with traditional methods when appropriate for your target audience and objectives."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Rocket}
          title="Ready to Accelerate Your Growth?"
          description="Join hundreds of successful businesses who have transformed their marketing results with our expertise. Get a free consultation and custom strategy proposal."
          inputPlaceholder="Enter your business email"
          buttonText="Get Free Consultation"
          termsText="By clicking Get Free Consultation, you agree to receive marketing communications from us. We respect your privacy and you can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="MarketFlow"
          copyrightText="© 2025 MarketFlow Agency. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Digital Strategy",
                  href: "services"
                },
                {
                  label: "Content Marketing",
                  href: "services"
                },
                {
                  label: "Social Media",
                  href: "services"
                },
                {
                  label: "Analytics",
                  href: "services"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Case Studies",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "about"
                },
                {
                  label: "Blog",
                  href: "about"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Free Consultation",
                  href: "contact"
                },
                {
                  label: "Marketing Guides",
                  href: "about"
                },
                {
                  label: "Industry Reports",
                  href: "about"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Terms of Service",
                  href: "terms"
                },
                {
                  label: "Cookie Policy",
                  href: "cookies"
                },
                {
                  label: "Data Protection",
                  href: "privacy"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/marketflow",
              ariaLabel: "LinkedIn"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/marketflow",
              ariaLabel: "Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/marketflow",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/marketflow",
              ariaLabel: "Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}