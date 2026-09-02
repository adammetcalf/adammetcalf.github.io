export interface Project {
  id: string;
  title: string;
  summary: string;
  details: string;

  tags: string[];
  technologies: string[];

  experience: string[];

  display: {
    projects: boolean;
    cv: boolean;
  };
}

export const projects: Project[] = [
  {
    id: "example-cv-only",

    title: "Example CV-Only Project",

    summary:
      "This project appears beneath a relevant job on the CV page, but does not appear on the main Projects page.",

    details:
      "Use this pattern for work that is useful evidence of your responsibilities within a particular role, but which you do not want to present as a standalone portfolio project.",

    tags: [
      "Systems Engineering",
      "Automation",
    ],

    technologies: [
      "LabVIEW",
      "Python",
    ],

    experience: [
      "Key Engineering Solutions",
    ],

    display: {
      projects: false,
      cv: true,
    },
  },

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

  {
    id: "example-both",

    title: "Example Project Shown Everywhere",

    summary:
      "This project appears on both the Projects page and beneath its associated role on the CV page.",

    details:
      "Use this pattern for substantial professional or research projects that are important enough to feature in your portfolio while also providing detail beneath the relevant employment entry.",

    tags: [
      "Robotics",
      "Control",
      "Software",
      "Research",
    ],

    technologies: [
      "ROS 2",
      "C++",
      "Python",
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