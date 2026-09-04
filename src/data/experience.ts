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

    summary:
      "Delivery of multidisciplinary engineering projects spanning software, automation, instrumentation, electronics and system integration.",
  },

  {
    id: "university-leeds",

    organisation: "STORM Lab - University of Leeds",

    role: "Research Fellow in Control of Surgical Robotics",

    startDate: "Dec 2023",
    endDate: "Dec 2025",

    type: "Education",

    website: "https://stormlabuk.com/",

    summary:
      "Research and development of robotic systems for surgical applications, including robot control, mechatronics, experimental systems and software integration.",
  },

  {
    id: "Control-Software-Solutions",

    organisation: "Control Software Solutions Ltd",

    role: "Senior Systems Engineer",

    startDate: "Aug 2022",
    endDate: "Dec 2023",

    type: "Employment",

    summary:
      "Delivery of multidisciplinary engineering projects spanning software, automation, instrumentation, electronics and system integration.",
  },

  {
    id: "Farnell",

    organisation: "Farnell",

    role: "Technical Support Engineer",

    startDate: "Feb 2022",
    endDate: "Aug 2022",

    type: "Employment",

    summary:
      "Delivery of multidisciplinary engineering projects spanning software, automation, instrumentation, electronics and system integration.",
  },

  {
    id: "phd-research",

    organisation: "Mechanical Engineering Department, University of Leeds",

    role: "PhD Student - Rehabilitation Robotics",

    startDate: "Sep 2018",
    endDate: "Feb 2022",

    type: "Education",

    website: "https://www.rehab45.com//",

    summary:
      "Delivery of multidisciplinary engineering projects spanning software, automation, instrumentation, electronics and system integration.",
  },

  {
    id: "Engineering-Intern",

    organisation: "Mechanical Engineering Department, University of Leeds",

    role: "Engineering Intern",

    startDate: "June 2018",
    endDate: "Aug 2018",

    type: "Employment",

    summary:
      "Delivery of multidisciplinary engineering projects spanning software, automation, instrumentation, electronics and system integration.",
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
        text: "Royal Society for the encouragement of Arts, Manufactures and Commerce",
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
