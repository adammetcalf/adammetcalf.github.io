export interface ProjectTextBlock {
  type: "text";
  content: string;
}

export interface ProjectImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export type ProjectContentBlock =
  | ProjectTextBlock
  | ProjectImageBlock;

export interface Project {
  id: string;
  title: string;
  summary: string;

  details: ProjectContentBlock[];

  tags: string[];
  technologies: string[];

  experience?: string[];

  links?: {
    label: string;
    url: string;
  }[];

  display: {
    projects: boolean;
    cv: boolean;
  };
}


export const projects: Project[] = [

  // LASER HARP
  {
    id: "Intern_Project_laserharp",

    title: "Intern project: Laser Harp",

    summary:
      "Design and fabrication of a self-playing laser harp.",

    details: [
      {
        type: "text",
        content:
          "Created a self-playing laser harp using a combination of LDRs, laser diodes and a myRIO from National Instruments (NI). The project involved designing the optical detection system, programming the FPGA to interpret sensor data and control the actuators, and integrating all components into a functional musical instrument.",
      },
      {
        type: "image",
        src: "/images/projects/laser-harp/laser-harp.png",
        alt: "Self-playing laser harp built using a National Instruments myRIO",
        caption:
          "The completed laser harp prototype.",
      },
      {
        type: "text",
        content:
          "The laser harp can be played manually, or by presenting a USB flash drive containing MIDI files to the myRIO. The system parses the MIDI files and plays the music automatically.",
      },
    ],

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
      "myRIO",
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

  // CSS ATE for Parker
  {
    id: "ASML",

    title:
      "End of Line Calibration and Test System for Vacuum Mounts Used in Wafer Lithography",

    summary:
      "This test system calibrates and tests vacuum mounts used for mounting wafers during lithographic fabrication.",

    details: [
      {
        type: "text",
        content:
          "TODO. This was a very complicated project.",
      },
    ],

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
      "LabVIEW",
    ],

    experience: [
      "Control-Software-Solutions",
    ],

    display: {
      projects: true,
      cv: true,
    },
  },

// Mermaid Auto labview
  {
    id: "Mermaid_Auto",

    title:
      "Automatically Generated LabVIEW Class and Inheritence Generator from Mermaid Diagrams",

    summary:
      "I have created an open source tool that automatically generates LabVIEW classes and establishes inheretence relationships between them based on Mermaid diagrams. This tool allows developers to visually design their class structures using Mermaid syntax, and then automatically generate the corresponding LabVIEW code, saving time and reducing errors in the development process.",

    details: [
      {
        type: "text",
        content:
          "TODO. This was a very complicated project.",
      },
    ],

    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/adammetcalf/LabVIEWMermaidOOP",
      },
    ],

    tags: [
      "Automation",
      "UML",
      "Object-Oriented Programming",
      "Software",
      "Open Source",
    ],

    technologies: [
      "LabVIEW",
      "Mermaid Markdown",
      "VI Scripting",
    ],

    experience: [
      "C",
    ],

    display: {
      projects: true,
      cv: false,
    },
  },

  // Programming Station for Tunstall
  {
    id: "ASML",

    title:
      "Emergency software update for a Bed of Nails programming station used in the assembly line production of telehealthcare devices.",

    summary:
      "The customer urgently needed a software rewrite for a programming station used at the end of an assembly line. The programminng station used legacy software running on a Windows XP machine. The customer needed the software rewritten to run on a modern Windows 10 machine as an emerggency measure because the Windows XP machine had died.",

    details: [
      {
        type: "text",
        content:
          "TODO. This was a very complicated project.",
      },
    ],

    tags: [
      "Bed of Nails",
      "Firmware Flashing",
      "Healthcare Device",
      "Software",
      "Automation",
    ],

    technologies: [
      "LabVIEW",
      "Segger J-Flash",
      "SPI",
      "bat Files",
    ],

    experience: [
      "Control-Software-Solutions",
    ],

    display: {
      projects: true,
      cv: true,
    },
  },

  // Tentacle Control
  {
    id: "tentacle-control",

    title:
      "Realtime Control of Magnetically Actuated Soft Continuum Robots (MSCRs) using a hybrid Non-Linear Optimisation/Genetic Algorithm solver to Perform the Inverse Kinematics",

    summary:
      "MSCRs are difficult to control since there is no closed-form solution for the inverse kinematics. This is because they essentially have infinite degrees of freedom. I solved the Inverse Kinematics in real time using a computationally efficient hybrid algorithm combining the benefits of non-linear optimisation with the benefits of a genetic algorithm.",

    details: [
      {
        type: "text",
        content:
          "TODO. This too was a very complicated project.",
      },
    ],

    tags: [
      "Soft Robotics",
      "Control",
      "Software",
      "ROS 2",
      "Magnetic Workspace",
      "System Integration",
    ],

    technologies: [
      "Fibre Bragg grating (FBG)",
      "Magnetic Coils",
      "C++",
      "ROS 2",
    ],

    experience: [
      "university-leeds",
    ],

    display: {
      projects: true,
      cv: true,
    },
  },

  // Heart Scanning
  {
    id: "heart-scanning",

    title:
      "Impedance Controlled Automated Scanning of Complex Tissue Geometries",

    summary:
      "Impedance Control was used with a Kuka iiwa 14, with a 6-axis load cell and THz scanner at the end effector, to obtain THz scans of complex and delicate tissues. Force feedback was used to align the scanner such that all scans were normal to the tissue surface",

    details: [
      {
        type: "text",
        content:
          "TODO. This too was a very complicated project.",
      },
    ],

    tags: [
      "THz",
      "Control",
      "Robotics",
      "Software",
      "ROS 2",
      "PLC",
      "Loadcell",
      "Embedded Systems",
      "System Integration",
    ],

    technologies: [
      "Loadcell",
      "Python",
      "Kuka",
      "C++",
      "ROS 2",
      "ESP32",
    ],

    experience: [
      "university-leeds",
    ],

    display: {
      projects: true,
      cv: true,
    },
  },

  // Hexapod Scanning
  {
    id: "hexapod-scanning",

    title:
      "Ultra-precise Hexapod Scanning for Novel THz Sensor Validation.",

    summary:
      "Colleagues in the THz Research group had developed a novel THz sensor. The sensor surface was unprotected and incredibly delicate, making it very difficult to validate. I developed soft silicone samples and introduced them to the chip/sensor surface using an ultraprecise Hexapod.",

    details: [
      {
        type: "text",
        content:
          "TODO. This too was a very complicated project.",
      },
    ],

    tags: [
      "Sample Fabrication",
      "Control",
      "Software",
      "ROS 2",
      "Robotics",
      "System Integration",
      "Automation",
    ],

    technologies: [
      "Hexapod (Solano by Symmetrie)",
      "TCP/IP",
      "Python",
      "C++",
      "ROS 2",
    ],

    experience: [
      "university-leeds",
    ],

    display: {
      projects: true,
      cv: true,
    },
  },
];