export interface Experience {
  id: string;
  organisation: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  summary: string;
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
    id: "Control Software Solutions",

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

  {
    id: "LabVIEW-Dev",

    organisation: "Control Software Solutions Ltd",

    role: "LabVIEW Developer - Part Time",

    startDate: "Aug 2017",
    endDate: "Feb 2018",

    type: "Employment",

    summary:
      "Delivery of multidisciplinary engineering projects spanning software, automation, instrumentation, electronics and system integration.",
  },

  {
    id: "Undergrad-research-2",

    organisation: "Mechanical Engineering Department, University of Leeds",

    role: "Undergraduate Researcher",

    startDate: "Jul 2017",
    endDate: "Sep 2017",

    type: "Employment",

    summary:
      "Delivery of multidisciplinary engineering projects spanning software, automation, instrumentation, electronics and system integration.",
  },

  {
    id: "NI-Intern",

    organisation: "National Instruments (NI)",

    role: "Applications Engineer",

    startDate: "Jun 2016",
    endDate: "Jun 2017",

    type: "Employment",

    summary:
      "Delivery of multidisciplinary engineering projects spanning software, automation, instrumentation, electronics and system integration.",
  },

  {
    id: "Undergrad-research-1",

    organisation: "Mechanical Engineering Department, University of Leeds",

    role: "Undergraduate Researcher",

    startDate: "Jul 2015",
    endDate: "Sep 2015",

    type: "Employment",

    summary:
      "Delivery of multidisciplinary engineering projects spanning software, automation, instrumentation, electronics and system integration.",
  },

  {
    id: "ASDA",

    organisation: "ASDA",

    role: "Home Delivery Driver",

    startDate: "Sep 2013",
    endDate: "Oct 2014",

    type: "Employment",

    summary:
      "Delivery of multidisciplinary engineering projects spanning software, automation, instrumentation, electronics and system integration.",
  },

  {
    id: "Mechanic",

    organisation: "ASDA",

    role: "Heavy Goods Vehicle Mechnanic",

    startDate: "Apr 2013",
    endDate: "Jun 2014",

    type: "Employment",

    summary:
      "Delivery of multidisciplinary engineering projects spanning software, automation, instrumentation, electronics and system integration.",
  },

  {
    id: "Army",

    organisation: "British Army",

    role: "Vehicle Mechnanic",

    startDate: "Mar 2008",
    endDate: "May 2013",

    type: "Employment",

    summary:
      "Delivery of multidisciplinary engineering projects spanning software, automation, instrumentation, electronics and system integration.",
  },

  {
    id: "student",

    organisation: "Mechanical Engineering Department, University of Leeds",

    role: "BEng Mechanical Engineering - 1st Class (Hons)",

    startDate: "Sep 2014",
    endDate: "Jun 2018",

    type: "Education",

    summary:
      "Delivery of multidisciplinary engineering projects spanning software, automation, instrumentation, electronics and system integration.",
  },
];