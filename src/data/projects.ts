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

export interface ProjectMermaidBlock {
  type: "mermaid";
  content: string;
  caption?: string;
}

export type ProjectContentBlock =
  | ProjectTextBlock
  | ProjectImageBlock
  | ProjectMermaidBlock;

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

  // KEY Boiler control
  {
    id: "Boiler",

    title:
      "Modelling, System Identification and Control of a Boiler Heating System",

    summary:
      "Working on contract for a UK based boiler manufacturer, I successfully decoupled a Multi-Input Multi-Output (MIMO) system into two Single-Input Single-Output (SISO) systems to allow for full automation in their R&D process.",

    details: [
      {
        type: "text",
        content:
          "TODO. This was a very complicated project.",
      },
    ],

    tags: [
      "Software",
      "Modelling",
      "Control",
      "Automation",
      "State Space",
    ],

    technologies: [
      "TestStand",
      "Python",
      "LabVIEW",
    ],

    experience: [
      "Key Engineering Solutions",
    ],

    display: {
      projects: true,
      cv: true,
    },
  },

  // CSS vacuum Calibration
  {
    id: "Vacuum_Calib",

    title:
      "End of Line Calibration and Test System for Vacuum Mounts Used in Wafer Lithography",

    summary:
      "This Automated Test Equipment (ATE) calibrates and tests vacuum mounts used for mounting wafers during lithographic fabrication.",

    details: [
      {
        type: "text",
        content:
          "I inherited this project from a previous engineer who had left the company. The ATE was a complex mechatronic device comprising a vacumm/pneumatic system, a vision system, motor drives and a 3-axis gantry used to introduce a rotating tool to potentiometers on the Device Under Test (DUT), a PLC and a control PC and was designed to be run in a cleanroom. The point at which I inherited this project is when it was returned from the customer site for failing the Site Acceptance Test (SAT), having experienced a fire when testing the motor drives. There had not been a Factory Acceptance Test (FAT) performed on the system before it was shipped to the customer.",
      },

      {
        type: "text",
        content:
          "Each DUT required calibration, incorporating four vacuum/pressure ports, three potentiometers for voltage calibration across different pneumatic stages, and a serial connection for internal state feedback",
      },

      {
        type: "image",
        src: "/images/projects/VacuumWafer/DUT.png",
        alt: "The Device Under Test (DUT)",
        caption:
          "The Device Under Test (DUT).",
      },

      {
        type: "text",
        content:
          "On taking ownership of the project, I identified significant deficiencies across virtually every system and subsystem, requiring a comprehensive technical overhaul. The subcontracted electrical build was incomplete, with no wiring diagrams or wire labelling, incorrect PLC connections, ground loops, and conductors of insufficient gauge for the required current. The PLC software and hardware integration were also incomplete. The control software lacked defined test sequences and failed to communicate reliably with much of the system I/O, while the test sequencing engine remained unfinished and untested. The vision system had been specified with an incorrect lens, preventing the GigE camera from focusing adequately on the potentiometers under test, and the camera was connected through an unsuitable 100 Mb/s network switch rather than the required 1 Gb/s infrastructure. The associated vision software was unfinished and untested. Mechanically, the specification demanded gantry positioning tolerances of approximately 10 µm without adequately accounting for tooling concentricity and other sources of mechanical error. The vacuum/pressure systems were untested and their control logic incomplete. In addition, communications between the PLC and external control PC contained a memory leak that compromised long-duration system stability. As a result, substantial redesign, completion, integration and validation were required across the electrical, mechanical, pneumatic, vision and software domains before the system could operate as a reliable automated test platform.",
      },

      {
        type: "text",
        content:
          "The ATE required an almost complete re-engineering effort, but without the benefit of the originally agreed timescales or project budget. A lot of the work was done in parallel, with project dependencies informing each other as the refactor developed. As such, whilst an attempt has been made to present this somewhat chronologically, it is not entirely accurate. One of the first key milestones was I/O mapping, rewiring the PLC connections and tidying up the connections. Note that a wiring diagram was produced and all wires were tagged.",
      },

      {
        type: "image",
        src: "/images/projects/VacuumWafer/PLC_Old.png",
        alt: "PLC Cabinet Before Remapping and Rewiring",
        caption:
          "PLC Cabinet Before Remapping and Rewiring.",
      },

      {
        type: "image",
        src: "/images/projects/VacuumWafer/PLC_New.png",
        alt: "PLC Cabinet After Remapping and Rewiring",
        caption:
          "PLC Cabinet After Remapping and Rewiring.",
      },

      {
        type: "text",
        content:
          "I eliminated the communication problems and memory leak between the PLC and the external control PC by rewriting the software interfaces, which was validated with robust multi-day testing whilst I worked on other subsystems. To enable the camera to focus on its target I designed a new camera mount (at a different height) and had it fabricated, which was both faster and cheaper than sourcing a new lens. I then developed the vision software. Image acquisition was written in C++, while a machine-learning vision module written in LabVIEW evaluated the location and orientation of each potentiometer in the ATE workspace, with the output being gantry x–y target coordinates and the required tool rotation angle.",
      },

      {
        type: "image",
        src: "/images/projects/VacuumWafer/PotLocation.png",
        alt: "Successful Potentiomter Identification",
        caption:
          "Successful Potentiomter Identification.",
      },

      {
        type: "text",
        content:
          "Tool concentricity was also an issue, so I designed a new tool mount which used a guiding flange to guarantee reliable engagement with the potentiometers, using the principles of embodied intelligence. In retrospect, this would have enabled the use of a much cheaper gantry system with a less precise tolerance.",
      },
    ],

    tags: [
      "Robotics",
      "Machine Vision",
      "Control",
      "Motor Control",
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
      "IDS GigE Camera"
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
      "Automatic LabVIEW Class and Inheritence Generator from Mermaid Diagrams",

    summary:
      "I have created an open source tool that automatically generates LabVIEW classes and establishes inheretence relationships between them based on Mermaid diagrams. This tool allows developers to visually design their class structures using Mermaid syntax, and then automatically generate the corresponding LabVIEW code, saving time and reducing errors in the development process.",

    details: [
      {
        type: "text",
        content:
          "The tool automatically converts Mermaid markdown defined class diagrams into LabVIEW class structures uisng VI scripting, preserving the full class heirarchy.",
      },
      {
        type: "mermaid",
        content: `
        ---
        title: Animal example
        ---
        classDiagram
            class iAnimal{
                +isMammal()
                +mate()
            }
            class Animal{
                +int age
                +String gender
                +isMammal()
                +mate()
            }
            class Duck{
                +String beakColor
                +swim()
                +quack()
            }
            class Fish{
                -int sizeInFeet
                -canEat()
            }
            class Zebra{
                +bool is_wild
                +run()
            }
            iAnimal <|-- Animal
            Animal <|-- Duck
            Animal <|-- Fish
            Animal <|-- Zebra
        `,
        caption: "Example class hierarchy.",
      },

      {
        type: "image",
        src: "/images/projects/Mermaid/AutoGeneratedClasses.png",
        alt: "The autogenerated LabVIEW class implementation",
        caption:
          "The autogenerated LabVIEW class implementation.",
      },

      {
        type: "text",
        content:
          "The source code and a deployable VI Package may be found in my Github:",
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
      "Magnetically Actuated Soft Continuum Robots (MSCRs) are difficult to control since there is no closed-form solution for the inverse kinematics. This is because they essentially have infinite degrees of freedom. I solved the Inverse Kinematics in real time using a computationally efficient hybrid algorithm combining the benefits of non-linear optimisation with the benefits of a genetic algorithm.",

    details: [
      {
        type: "text",
        content:
          "MSCRs, developed by STORM lab at the University of Leeds, are soft robots that can be actuated using magnetic fields and field gradients. They are fabricated by vacuum mixing silicone with strong magnetic particles (NdFeB) and then curing the mixture in a 3D printed mould. The resulting soft robot is then directionally magnetised and can be actuated by applying magnetic fields and field gradients. The soft robots are used for a variety of applications, including minimally invasive surgery, drug delivery, and soft robotics research.",
      },

     {
        type: "text",
        content:
          "However, the MSCRs are challenging to control due to their complex dynamics and the lack of a closed-form inverse kinematics solution. Furthermore, in the context of endoluminal applications in minimily invasive surgery, positional feedback is challenging. The difficulty in locating the MSCRs using tradionall mechanisms such as Ultrasound make localisation and therefore automating the path planning and control of the MSCRs very difficult.",
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

  // Hexapod Scanning
  {
    id: "kuka upgrade",

    title:
      "Kuka iiwa Platform Upgrade for ROS2 Compatibility.",

    summary:
      "A package of software was written and deployed to allow both the Dual Platform or an individual Kuka to be accessible on a ROS2 network. Previously, the Lab had been constrained to using ROS1 due to reliance on an open source ROS1Java library.",

    details: [
      {
        type: "text",
        content:
          "TODO. This too was a very complicated project.",
      },
    ],

    tags: [
      "Control",
      "Software",
      "ROS 2",
      "Robotics",
      "System Integration",
      "Automation",
    ],

    technologies: [
      "Kuka iiwa",
      "TCP/IP",
      "Java",
      "Kuka Sunrise Workbench",
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