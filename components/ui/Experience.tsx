import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Icon } from "@iconify/react";

const Experience = () => {
  const workHistory = [
    {
      id: 1,
      name: "Voltquant Pvt Ltd",
      role: "Senior Software Engineer",
      fromDate: "Dec 2023",
      toDate: "Present",
      isFullTime: true,
      details: [
        "Voltquant is an AI-powered workspace designed for infrastructure professionals. Automate your repetitive tasks and access data in one single platform.",
        "Developed custom AI algorithms that improved key product efficiency by 30% and optimized overall system performance.",
        "Managed AWS cloud infrastructure, ensuring seamless system integration and 99.9% uptime across production environments.",
        "Improved application speed by 40% by designing and implementing efficient state management and development workflows.",
        "Delivered data-driven insights for smarter grid connections and land-use planning, helping developers make faster, more informed decisions."
      ],
    },
    {
      id: 2,
      name: "Techesthete",
      role: "Senior Software Engineer",
      fromDate: "Apr 2022",
      toDate: "Nov 2023",
      isFullTime: true,
      details: [
        "Improved website performance by 35% by using useMemo and useCallback hooks in React to prevent unnecessary re-rendering.",
        "Integrated Stripe for secure payments, enhancing user trust and simplifying the checkout experience.",
        "Built high-performance APIs with Node.js and TypeScript in a Next.js app, improving form validation, error handling, and payment gateway integration.",
        "Automated CI/CD pipelines using AWS Amplify, enabling code updates from GitHub to auto-deploy to production and staging, reducing manual deployment time by 90% and increasing release reliability.",
        "Integrated Stripe API into a React app, enabling secure and fast transactions, reducing payment failure rate by 40%.",
        "Led and mentored a team of 5–8 engineers, improving task completion rates and team velocity through regular check-ins and support.",
        // "Led full-stack development with a frontend focus, delivering modern, responsive web features that boosted user retention.",
        // "Built scalable APIs using Node.js and GraphQL, designing schemas and queries with Apollo Client to enhance backend performance and flexibility.",
        // "Developed secure payment forms with React and TypeScript, integrating APIs with custom validation and error handling, improving user experience by 30%.",
        // "Wrote comprehensive unit and integration tests, reducing post-release bugs by 40% and increasing deployment confidence.",
        // "Utilized the MERN stack, AWS, REST APIs, and GraphQL to deliver performant and maintainable web applications.",
        // "Expertise in Git version control, implementing branching strategies and workflows that reduced merge conflicts by 30%.",
        // "Implemented CI/CD pipelines (GitHub Actions/Jenkins) automating 90% of deployments, reducing release cycles from days to hours.",
        // "Optimized frontend build pipelines using Webpack and Babel, reducing bundle sizes by 40% and improving page load performance by 30%.",
        // "Applied Next.js SSR for 8+ production apps, achieving 95+ Lighthouse scores and improving SEO traffic by 60% for content-heavy platforms.",
      ],
    },
    {
      id: 3,
      name: "Deblew",
      role: " Frontend Developer",
      fromDate: "Jan 2019",
      toDate: "Apr 2022",
      isFullTime: true,
      details: [
        "Delivered real-time updates by implementing WebSocket notifications, improving user experience with instant alerts and status changes.",
        "Enhanced search functionality using Algolia features like typo tolerance, faceting, and autocomplete, boosting user engagement by 30%.",
        "Improved code performance through code splitting, reusable components, and memory optimization, reducing load times by 25%.",
        "Developed higher-order components for better code reuse and faster rendering, improving app speed and maintainability.",
        "Created responsive designs using CSS, SASS, and LESS with dynamic theming and optimized styles, ensuring seamless user experience across mobile and tablet devices.",
        // "Enhanced search UX by integrating Algolia with typo tolerance, autocomplete, and faceting, boosting user engagement by 25%.",
        // "Built real-time notification features using WebSockets, improving user responsiveness and interaction rates.",
        // "Containerized 20+ microservices using Docker and orchestrated with Kubernetes, improving deployment frequency by 5x while reducing cloud costs by 35%.",
        // "Built AI-augmented UI components (React) that increased user trust scores by 30% by making model decisions explainable and editable.",
        // "Integrated Sumsub’s KYC service into VIRTUA, automating identity verification and reducing manual review time by 60%.",
        // "Improved app performance through code splitting, reduced re-renders, and reusable components, cutting load time by 40%.",
        // "Led bi-weekly peer programming sessions, sharing best practices and promoting a culture of continuous learning.",
        // "Engineered comprehensive test suites using Jest (unit) and Cypress (E2E), achieving 95% test coverage and reducing production bugs by 60%.",
      ],
    },
    {
      id: 4,
      name: " The Hexaa",
      role: " React Js Developer",
      fromDate: "Jan 2019",
      toDate: "May 2021",
      isFullTime: false,
      details: [
        "Built responsive web applications with HTML5, CSS3, and animations, ensuring smooth user experiences across devices.",
        "Developed and optimized React applications with global state management using Redux, integrating REST APIs via Axios for seamless data flow.",
        "Utilized Material UI, React Bootstrap, and Ant Design libraries to enhance UI consistency and improve development efficiency.",
        "Enhanced performance by preventing unnecessary component re-renders using useMemo and useCallback hooks.",
        "Managed version control and CI/CD workflows using Git and Bitbucket, ensuring efficient collaboration and reliable code deployment."
        // "Architected responsive frameworks supporting 100+ device breakpoints, improving mobile conversion rates by 22% for e-commerce platforms.",
        // "Managed complex app states using Redux with Thunk and Saga, improving UI responsiveness and maintainability.",
        // "Customized Material-UI themes to align with brand identity, enhancing UI consistency across components.",
        // "Streamlined CI/CD workflows using Git and GitHub, accelerating development and deployment cycles.",
        // "Worked on JWT-based user authentication and session management with cookies and local storage, boosting security and performance.",
        // "Established standardized code review processes that reduced production defects by 35% and boosted onboarding time for new developers by 50%.",
        // "Built accessible component libraries (ARIA, keyboard nav) adopted company-wide, decreasing screen reader UX issues by 80% in user testing.",
      ],
    },
  ];

  const expVariants: Variants = {
    offscreen: {
      y: 30,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const [selectedWork, setSelectedWork] = useState(workHistory[0]);
  const [isLoadingWork, setisLoadingWork] = useState(false);

  useEffect(() => {
    setisLoadingWork(true);
    setTimeout(() => {
      setisLoadingWork(false);
    }, 100);
  }, [selectedWork]);

  return (
    <motion.section
      id="experience"
      className="md:py-32 py-24 max-w-4xl w-full mx-auto"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={expVariants}
    >
      <Container>
        <div>
          <Heading headingNumber={2} headingText="Where I’ve Worked" />
          <div className="flex md:flex-row flex-col items-start mt-10 mb-5">
            <div className="overflow-x-scroll md:w-auto w-full flex-shrink-0">
              <div className="md:block flex flex-shrink-0 relative md:border-l-[3px] border-Slate/20">
                <div
                  style={{ top: `${43 * (selectedWork.id - 1)}px` }}
                  className="md:block hidden absolute left-0 h-[43px] w-[3px] bg-primary transition-all duration-300 linear transform -translate-x-[3px] rounded-md "
                ></div>
                {/* For mobile screen */}
                <div
                  style={{ left: `${176 * (selectedWork.id - 1)}px` }}
                  className="md:hidden block absolute bottom-0 w-44 h-[2px] bg-primary transition-all duration-300 linear transform md:-translate-x-[3px] rounded-md"
                ></div>

                {workHistory.map((work, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedWork(work)}
                    className={`${work.id === selectedWork.id
                      ? " text-primary"
                      : "text-Slate"
                      } hover:bg-LightNavy hover:text-primary cursor-pointer flex-shrink-0 h-[43px] md:w-auto w-44 md:border-b-0 border-b-[3px] border-Slate/20 md:text-sm text-xs flex items-center transition-all duration-150 ease-linear pl-5 pr-6 select-none md:justify-start justify-center `}
                  >
                    {work.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="transition-all duration-300 ease-linear w-full md:pt-1 pt-5 pb-2 md:pr-5 md:pl-10 min-h-[350px]">
              {!isLoadingWork && (
                <>
                  <h1 className="font-medium text-lg text-LightestSlate">
                    {selectedWork.role}{" "}
                    <span className="text-primary">@{selectedWork.name}</span>
                  </h1>
                  <p className="mt-0.5 mb-5 text-[13px] text-Slate capitalize">
                    {selectedWork.fromDate} <span className="mx-2">-</span>{" "}
                    {selectedWork.toDate}{" "}
                    {!selectedWork.isFullTime && (
                      <>
                        <span className="mx-3">•</span>
                        <span className="normal-case ">Part-time</span>
                      </>
                    )}
                  </p>
                  <div className="flex flex-col gap-3">
                    {selectedWork.details.map((detail, index) => (
                      <div
                        key={index}
                        className="text-sm text-Slate flex items-start gap-3"
                      >
                        <span>
                          <Icon
                            icon="mdi:arrow-compass"
                            className="pt-1.5 transorm rotate-90 text-[17px] text-primary "
                          />
                        </span>{" "}
                        {detail}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Experience;
