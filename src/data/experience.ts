type SummaryParagraph =
  | string
  | {
      text: string;
      link: {
        text: string;
        href: string;
      };
      suffix?: string;
    };

export interface Experience {
  id: string;
  organisation: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  summary: string | SummaryParagraph[];
  website?: string;
  type: "Employment" | "Education";
}

export const experience: Experience[] = [
  {
    id: "Key Engineering Solutions",

    organisation: "Key Engineering Solutions Ltd",

    role: "Systems Engineer",

    startDate: "Dec 2025",
    endDate: "Present",

    type: "Employment",

    summary: [
      "Delivery of multidisciplinary engineering projects spanning software, automation, instrumentation, electronics and system integration.",
  
      "Contract R&D across a range of projects, spanning medical device development, AI, machine vision, electronics and PCB design, simulation, hardware integration, testing and validation. Software architecture and development in C++, Python and LabVIEW, covering embedded systems through to networked applications and database integration.",

      "Brought the company up from little source code control to a full Continous Integration and Continuous Deployment (CI/CD) pipeline for automated test and deployment of developed software.",

      "Led the deployment of software security testing to meet the EU Cyber Resilience Act legislation.",

      "Modelling and Control of complex coupled systems.",
    ],
  },

  {
    id: "university-leeds",

    organisation: "STORM Lab - University of Leeds",

    role: "Research Fellow in Control of Surgical Robotics",

    startDate: "Dec 2023",
    endDate: "Dec 2025",

    type: "Employment",

    website: "https://stormlabuk.com/",

    summary: [
    "Upgraded the dual-arm Kuka iiwa platform (Composed of 2 Kuka iiwa 14 robots in a shared robotic workspace) from ROS1 to a ROS2 interface, overcoming the unique challenges presented by Kuka’s closed ecosystem. The robots were fitted with large magnets at their end-effectors, creating a complex magnetic workspace which was used to manipulate Magnetically Actuated Soft Continuum Robots (MSCRs).",

    "Developed path planning and control algorithms for the dual-arm Kuka platform, considering the field and gradient effects of the large magnets at the end effectors to precisely manipulate shape and position of MSCRs for minimally invasive surgery applications.",

    "Led path planning and control efforts for a single-arm Kuka iiwa robot, integrating bespoke toolchains at the end effector, including an ultra-precise 6-DoF hexapod and a combination of 6-axis loadcell/THz sensing chip array for impedance controlled soft surface scanning.",

    "Designed and fabricated doped silicone phantoms for characterisation and validation of THz scanning technology for use in a medical context. Samples ranged in scale from a forearm representative sample comprised of multiple layers of different materials and thicknesses representing all major tissue components to sub millimeter patterned samples used in ultra high resolution scanning.",

    "Supervised MSc students through their Electronic Engineering professional projects, worth 50% of their grade.",

    ],
  },

  {
    id: "Control-Software-Solutions",

    organisation: "Control Software Solutions Ltd",

    role: "Senior Systems Engineer",

    startDate: "Aug 2022",
    endDate: "Dec 2023",

    type: "Employment",

    summary: [
    "Designed, built, installed, programmed, and validated bespoke Automated Test Equipment (ATE) systems and process control platforms for customers in the nuclear, manufacturing, medical device, chemical and rail industries. Delivered projects end-to-end, from initial requirements gathering through to Factory Acceptance Test (FAT) and Site Acceptance Test (SAT)",

    "Developed low-level drivers in LabVIEW and C++ to control and acquire from a variety of hardware. Examples include stepper motor drives, GigE cameras, fluid control assemblies, and pneumatic assemblies.",

    "Developed code to communicate with a wide range of hardware using standard protocols (I2C, SPI, TCP, UDP, UART, Modbus, OPC) as well as bespoke serial across RS232.",

    "Designed and implemented automated test frameworks including sequencing engines, operator interfaces, results logging, and PLC integration. Development was primarily in LabVIEW and C++, with Beckhoff PLC control implemented in TwinCAT 3 using Structured Text (ST)",

    ],
  },

// Farnell
  {
    id: "Farnell",

    organisation: "Farnell",

    role: "Technical Support Engineer",

    startDate: "Feb 2022",
    endDate: "Aug 2022",

    type: "Employment",

    summary: [
    "Specified National Instruments data acquisition and control systems to customer requirements, taking into consideration any need to interface with 3rd party hardware and software. This was a difficult operating environment due to the global chip shortages caused by the Covid 19 Pandemic, requiring a dynamic and flexible approach in order to meet customer specifications.",

    "Recommending hardware to customers seeking replacements for obsolete systems.",

    ],
  },

// PhD
  {
    id: "phd-research",

    organisation: "Mechanical Engineering Department, University of Leeds",

    role: "PhD Student - Rehabilitation Robotics",

    startDate: "Sep 2018",
    endDate: "Feb 2022",

    type: "Education",

    website: "https://www.rehab45.com//",

    summary: [
    "My research involved designing and implementing a force-responsive low-level control scheme for an assistive robot aimed at aiding the rehabilitation of stroke patients.",

    "I taught on the Design and Manufacture, Vibration and Control, and Computers in Engineering modules at the University of Leeds and at the overseas sister school at Southwest Jiaotong University in China.",

    "I redesigned experiments for the Vibration and Control module to work with lower-cost hardware. Additionally, I developed new experiments for the Computers in Engineering module during the transition from expensive National Instruments (NI) hardware to more affordable Arduino hardware.",
    ],
  },

  // Internship Uni Leeds
  {
    id: "Engineering-Intern",

    organisation: "Mechanical Engineering Department, University of Leeds",

    role: "Engineering Intern",

    startDate: "June 2018",
    endDate: "Aug 2018",

    type: "Employment",

    summary:
      "I rewrote and modernised module components for the Computers in Engineering Module taught to 1st year undergraduate students.",
  },

  // Part time LabVIEW Developer at Control Software Solutions Ltd - 2017-2018
  {
    id: "LabVIEW-Dev",

    organisation: "Control Software Solutions Ltd",

    role: "LabVIEW Developer - Part Time",

    startDate: "Aug 2017",
    endDate: "Feb 2018",

    type: "Employment",

    summary:
      "Developing internal reuse code to accelerate project delivery. Successfully delivered a library to assist with unit testing in LabVIEW",
  },

  {
    id: "Undergrad-research-2",

    organisation: "Mechanical Engineering Department, University of Leeds",

    role: "Undergraduate Researcher",

    startDate: "Jul 2017",
    endDate: "Sep 2017",

    type: "Employment",

    summary: [
    "This is the second research project I completed as part of the Undergraduate Research and Leadership Scholarship.",

    "The first part of my research involved developing a facial recognition login system for rehabilitation robotics. This built directly on my 2015 research, where I worked on a rehabilitation robotic system designed for stroke patients and children with cerebral palsy. A facial recognition login system was deemed the most appropriate option since these patients often have limited movement in their hands and arms. I successfully developed this system within approximately four weeks.",

    "The second part of my research focused on enhancing the second-year Design and Manufacture module. I introduced a motion-tracking feature to one of the projects completed by Biomedical Engineering students. Previously, students were tasked with building a two-degree-of-freedom (2 DoF) robotic arm and programming it to follow a basic shape. I programmed a system that allowed a generic 2 DoF robot to track a student's arm movements using a computer vision tracking system. This motion-tracking addition simulates how a surgeon would manipulate a surgical robot, making the module more relevant to Biomedical Engineering.",
    ],
  },

  // Internship at National Instruments (NI) - 2016
  {
    id: "NI-Intern",

    organisation: "National Instruments (NI)",

    role: "Applications Engineer",

    startDate: "Jun 2016",
    endDate: "Jun 2017",

    type: "Employment",

    summary:
      "I worked directly with customers in the Northern European region to provide innovative solutions to engineering challenges. This role specifically involved delivering frontline support for the full suite of National Instruments software and hardware designed for control, test, and automation. During my time with National Instruments, I was also responsible for delivering professional-quality training in LabVIEW. Towards the end of my tenure, I earned the Certified LabVIEW Developer (CLD) qualification.",
  },

  {
    id: "Undergrad-research-1",

    organisation: "Mechanical Engineering Department, University of Leeds",

    role: "Undergraduate Researcher",

    startDate: "Jul 2015",
    endDate: "Sep 2015",

    type: "Employment",

    summary: [
    "This research was completed as part of the Undergraduate Research and Leadership Scholarship.",

    "My project involved designing, constructing, and programming a passive instrumented joystick for the rehabilitation of children with cerebral palsy and stroke patients. The device, termed the MyPAM Light, was intended to complement the rehabilitation process alongside an active instrumented joystick known as the MyPAM.",

    "The MyPAM, which has already undergone medical trials, is designed for use during the initial six months of the rehabilitation process. However, its cost limits its installation to community facilities such as hospitals and schools. In contrast, the MyPAM Light was developed to be as economical as possible, making it suitable for installation in patients' homes. This accessibility allows patients to continue their rehabilitation independently, granting greater flexibility and potentially accelerating their recovery.",
    ],
  },

// Delivery Driver at ASDA - 2013-2014
  {
    id: "ASDA",

    organisation: "ASDA",

    role: "Home Delivery Driver",

    startDate: "Sep 2013",
    endDate: "Oct 2014",

    type: "Employment",

    summary: [
    "My responsibilities included ensuring the timely delivery of groceries to customers. I delivered according to a tight schedule, but despite this I delivered in a manner which was safe and considerate to all road users. I ensured a high quality of customer service.",

    "This job allowed me to remain financially stable whilst I was studying for my Access Diploma at Leeds City College.",
    ],
  },

  {
    id: "Mechanic",

    organisation: "Rhondda Cynon Taff Council",

    role: "Heavy Goods Vehicle Mechnanic - Temporary Contract",

    startDate: "Apr 2013",
    endDate: "Jun 2014",

    type: "Employment",

    summary: [
    "I was responsible for maintaining the council fleet of vehicles, which included Iveco Daily vans, Eagle Elite 2 refuse lorries, Scarab road sweepers, MAN gritters, MAN tippers, and the full range of highways vehicles.",

    "My role involved conducting annual vehicle inspections, diagnosing and repairing faults, and performing pre-MOT inspections. Tasks ranged from routine maintenance, such as changing oil filters in transit vans, to diagnosing and repairing complex hydraulic systems in modern refuse lorries.",
    ],
  },

  // British Army - 2008-2013
  {
    id: "Army",

    organisation: "British Army",

    role: "Vehicle Mechanic",

    startDate: "Mar 2008",
    endDate: "May 2013",

    type: "Employment",

    summary: [
      "I have operated, maintained, inspected, and diagnosed faults on vehicle fleets in Northern Germany and Afghanistan as a Class 2 Vehicle Mechanic. The vehicles I have worked on include Land Rover, Bulldog, CVRT, Warrior, Wolfhound, CRARRV, MAN trucks, Warthog, Bedford, DAF, Mastiff, Ridgeback, Jackal, Coyote, and SVR. My responsibilities ranged from performing basic services, such as filter changes, to handling complex tasks like engine replacements and complete vehicle overhauls.",

      "Towards the end of my career in the British Army, I was responsible for company-level fleet management. This role involved ensuring that inspection schedules were consistently adhered to for the fleet of approximately 60 vehicles assigned to 22 Field Company (2nd Bn REME). Additionally, I oversaw the ordering of spare parts and the coordination of necessary repairs. To maintain high operational standards, I regularly participated in conferences with senior battalion-level fleet management.",
    ],
  },

// BEng Mechanical Engineering - 2014-2018
  {
    id: "student",

    organisation: "Mechanical Engineering Department, University of Leeds",

    role: "BEng Mechanical Engineering - 1st Class (Hons)",

    startDate: "Sep 2014",
    endDate: "Jun 2018",

    type: "Education",

summary: [
  "Undergraduate Mechanical Engineering Degree, achieved a high 1st Class classification. I was placed on both the 2014/15 and the 2015/16 Engineering Dean's list for academic achievement.",

  "In the first year of my degree I successfully applied for the very competitive Undergraduate Research and Leadership Scholarship. The scholarship ran for 2 years and consisted of leadership training and 2 summer internships performing research. The research was in the area of medical robotics.",

  {
      text: "After my time with the Undergraduate Research and Leadership Scholarship I was awarded the Edward Boyle prize by the ",
      link: {
        text: "Royal Society of Arts",
        href: "https://www.thersa.org/",
      },
      suffix: ".",
    },
  ],
  },

// College
  {
    id: "college",

    organisation: "Leeds City College",

    role: "Access Science: Engineering (Distinction)",

    startDate: "Sep 2013",
    endDate: "Jun 2014",

    type: "Education",

    summary:
      "The Access Science: Engineering course provided me with a solid foundation in mathematics, physics, and engineering principles. I achieved 60 credits at Distinction in the course, which enabled me to progress to higher education in Mechanical Engineering.",
  },
];
