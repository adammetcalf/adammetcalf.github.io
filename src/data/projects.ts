export interface Project {
  id: string;
  title: string;
  summary: string;
  details: string;

  links?: {
    label: string;
    url: string;
  }[];

  tags: string[];
  technologies: string[];
  experience: string[];

  display: {
    projects: boolean;
    cv: boolean;
  };
}


// LASER HARP
export const projects: Project[] = [
{
  id: "Intern_Project_laserharp",

  title: "Intern project: Laser Harp",

  summary:
    "Design and fabrication of a self-playing laser harp.",

  details:
    "Created a self-playing laser harp using a combination of LDRs, laser diodes and a myRIO from National Instruments (NI). The project involved designing the optical detection system, programming the FPGA to interpret sensor data and control the actuators, and integrating all components into a functional musical instrument. The laser harp can be played manually, or by presenting a USB flash drive containing MIDI files to the myRIO, which parses the MIDI files and plays the music automatically.",

  links: [
    {
      label: "Project Documentation",
      url: "https://forums.ni.com/t5/myRIO-Student-Projects/myLaserHarp-Music-with-strings-of-light/ta-p/3606702?profile.language=en",
    },
    {
      label: "GitHub Repository",
      url: "https://github.com/adammetcalf/laserHarp",
    },
  ],

  tags: [
    "Systems Engineering",
    "Automation",
    "Electronics",
    "FPGA",
    "LabVIEW",
    "MyRIO",
  ],

  technologies: [
    "LabVIEW",
  ],

  experience: [
    "NI-Intern",
  ],

  display: {
    projects: false,
    cv: true,
  },
},

/*
  {
    id: "example-projects-only",

    title: "Example Projects-Only Project",

    summary:
      "This project appears on the main Projects page, but does not appear within the CV.",

    details:
      "Use this pattern for personal projects, experiments, hobby work, open-source work or anything else that belongs in your portfolio but is not directly associated with a CV role.",

    tags: [
      "Embedded",
      "Electronics",
      "Personal Project",
    ],

    technologies: [
      "C++",
      "ESP32",
    ],

    experience: [],

    display: {
      projects: true,
      cv: false,
    },
  },
*/

// CSS ATE for Parker
  {
    id: "ASML",

    title: "End of Line Calibration and Test System for Vacuum Mounts Used in Wafer Lithography",

    summary:
      "This test system calibrates and tests vacuum mounts used for mounting wafers during lithographic fabrication.",

    details:
      "TODO. This was a very complicated project.",

    tags: [
      "Robotics",
      "Machine Vision",
      "Control",
      "Software",
      "PLC",
      "Automation",
      "Test Engine",
    ],

    technologies: [
      "Beckhoff TwinCAT",
      "Structured Text",
      "PLC",
      "C++",
      "Python",
      "LabVIEW"
    ],

    experience: [
      "Control-Software-Solutions",
    ],

    display: {
      projects: true,
      cv: true,
    },
  },
];