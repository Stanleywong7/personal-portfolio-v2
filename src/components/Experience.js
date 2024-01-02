import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
            position="Vice President, Quantitative Finance Analyst - NP"
            company="Bank of America, Securities"
            companyLink="https://bankofamerica.com"
            time="Nov 2022 - Present"
            address="New York, NY."
            work="At Global Markets Data Management - Business Data Office, I drove increased demand for financial controls through impactful business development activities. Spearheaded the maintenance, development, and delivery of controls to critical stakeholders, including Front-Office, Quants, Credit Risk, and Business Operations teams. Proficiently prepared and delivered monthly and quarterly financial reports, actively contributing to team growth and efficiency through comprehensive training for India Ops and new joiners."
          />
        
        <Details
            position="Senior Software Test Engineer"
            company="ConEdison"
            companyLink="https://coned.com"
            time="Aug 2021 - Nov 2022"
            address="New York, NY."
            work="Contracted as a senior-level test engineer by Real-Time Technology Solutions, Inc., I conducted end-to-end testing for outage features on public websites of Con Edison, Orange & Rockland Utility, and ConEdison, Inc. I developed a new service layer automation framework using Selenium, Microsoft Visual Studio, CosmosDB, and Postman API calls. Additionally, I created a tool for outage QA preparational work, modeled various outage scenarios using customer data points, orchestrated an Azure Cloud migration POC, improved test execution flow and efficiency by 50%, and served as an adjunct project manager, coordinating between onshore and offshore teams."
          />

          <Details
            position="Senior Software Test Engineer"
            company="ConEdison"
            companyLink="https://coned.com"
            time="Sep 2020 - Nov 2022"
            address="New York, NY."
            work="Contracted as a functional test engineer for the Digital Customer Experience (DCX) project, conducting functional testing of accessibility features for Con Edison of New York, Orange & Rockland Utility, and ConEdison, Inc. public websites. Automated accessibility feature validation using Selenium and Microsoft Visual Studio, with additional support for Microsoft Azure DevOps Pipelines for CI/CD workflows and automated testing. Developed, maintained, and enhanced automated integration and end-to-end test scripts, demonstrating expertise in testing best practices, tools, and frameworks (Selenium, C#, and Azure services) within an Agile SAFe system."
          />

          <Details
            position="Software Test Engineer"
            company="RTTS"
            companyLink="https://rttsweb.com"
            time="Jun 2020 - Aug 2021"
            address="New York, NY"
            work="Ensured application functionality, identified defects, and validated bug resolutions for the internal QuerySurge project. Executed diverse test cases, including core functionalities, resolved bugs, and RESTful API functionalities. Automated search query, XML, SQL data, and object validation using tools like Selenium, IBM’s RFT, and SOAP handlers. Additionally, automated FIX protocol validation with IBM’s RFT and RQM software. Contracted at Con Edison since September 2020."
          />

          <Details
            position="Senior Computer Engineer"
            company="MindWeaver"
            companyLink="https://mindweaver.co/"
            time="Apr 2018 - Aug 2019"
            address="New York, NY."
            work="Led interdisciplinary, international teams in collaboration with marketing, engineering, and intern departments. Stepped into the role of Scrum Master mid-development, ensuring a successful, on-time deployment. Led and trained a team of 50+ software engineers and QA testers to deliver highly scalable tracking applications. Co-led the architecture, design, and implementation of new projects focusing on enterprise-level IT support for companies and cryptocurrency."
          />

          <Details
            position="Computer Engineer"
            company="MindWeaver"
            companyLink="https://mindweaver.co/"
            time="Sep 2017 - Apr 2018"
            address="New York, NY."
            work="Contributed to Agile development with advanced SCRUM methodologies, guiding and mentoring team members in web development best practices. Developed middleware applications using NodeJS, Express, Google APIs, and ReactJS."
          />

          <Details
            position="Computer Engineering Intern"
            company="MindWeaver"
            companyLink="https://mindweaver.co/"
            time="Summer 2017"
            address="New York, NY."
            work="Prototyped the electronics, hardware, and software for the Highpost Box, a live package tracker, and concurrently revamped and implemented front-end web applications using HTML, CSS, SASS, and JavaScript"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
