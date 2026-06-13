"use client";

import { createContext, ReactNode } from "react";
import type { Project } from "@/types/ProjectType";

const projectContext = createContext<Project[]>([]);
export default projectContext;

export function ProjectProvider({ children }: { children: ReactNode }) {
  const projectData: Project[] = [
    {
      id: "AlienPlanets",
      img: "/images/aliensplanets_start.png",
      title: "Alien Planets",
      tags: ["Full-stack", "React", "Tailwind CSS", "TypeScript"],
      summary:
        "Full-stack application for exploring different kinds of planets and their inhabitants. \n\n Executed through an agile teamwork of 5 people.",
      desc: "Assignment, Execution, Reflection.",
      screenshots: [
        "/images/aliensframe1.png",
        "/images/aliensframe2.png",
        "/images/aliensframe3.png",
        "/images/aliensframe4.png",
      ],
      githublink: "https://github.com/MattiasKopparberg/Alien-planet",
    },
    {
      id: "TriviaApp",
      img: "/images/app_mockup.png",
      title: "Trivia App",
      tags: ["App Development", "React Native", "Expo", "CSS", "TypeScript"],
      summary:
        "A trivia game made in React Native, using Expo go, and using The Trivia Api for trivia-questions.",
      desc: "Assignment was to develop a mobile application inspired by a public API of choice, and for this project I chose to work with The Trivia API (https://the-trivia-api.com/).\n\nRules of the game are: Enter your name, and start quizzing. Pick your favorite category. Answer correctly and score points. Compete with your friends to see who scores the highest.\n\nThe purpose of this project was to build an app using React Native, Expo and TypeScript. The app should be structured with expo router, using api calls and react hooks.",
      screenshots: ["/images/trivia_1.png", "/images/trivia_2.png"],
      githublink: "https://github.com/EmelieVilor/TriviaApp",
    },
    {
      id: "Kanban",
      img: "/images/kanban_transmockup.png",
      title: "Kanban Board",
      tags: ["Frontend", "React", "JavaScript", "CSS"],
      summary:
        "A Kanban board created in React. The user can add or delete tasks, organize them with a category of choice, use drag-and-drop to move the tasks to other columns of the board and view specific details of each existing task.",
      desc: "Assignment, Execution, Reflection.",
      screenshots: [
        "/images/kanban1.png",
        "/images/kanban2.png",
        "/images/kanban3.png",
      ],
      githublink: "https://github.com/EmelieVilor/kanban",
    },
    {
      id: "Dashboard",
      img: "/images/dashboard_transpmockup.png",
      title: "Dashboard",
      tags: ["Frontend", "HTML", "CSS", "Vanilla JS", "API-handling"],
      summary:
        "This dashboard is a customizable site for each user. The user can add and save links of their choice, write personal notes, watch the local weather forecast and view current news articles.",
      desc: "Assignment, Execution, Reflection.",
      screenshots: [
        "/images/Dashboard1.png",
        "/images/Dashboard2.png",
        "/images/Dashboard3.png",
      ],
      githublink: "https://github.com/EmelieVilor/Dashboard",
    },
    {
      id: "Master",
      img: "/images/masterthesis_mockup.png",
      title: "Master Thesis",
      tags: ["Transition Design", "UX", "UI", "User Research", "Figma"],
      summary:
        "Transitioning into a sustainable collaboration in the industrial harbor of Malmö. My master thesis project that I created in collaboration with Afry.",
      desc: "Assignment, Execution, Reflection.",
      screenshots: ["/images/2.png", "/images/3.png", "/images/5.png"],
      downloadlink: "/documents/Emelie_MasterThesis.pdf",
    },
    {
      id: "Bachelor",
      img: "/images/bachelor.png",
      title: "Bachelor Thesis",
      tags: ["Interaction Design", "UX", "Gamification", "JustInMind"],
      summary:
        "For my bachelor project in Interaction Design I wanted to explore tourism and gamification. Therefore, I designed a prototype that would encourage exploration and city interaciton.",
      desc: "Assignment, Execution, Reflection.",
      screenshots: [
        "/images/ScreensBACHELORTHESIS.png",
        "/images/bachelor_test.jpg",
      ],
      downloadlink: "/documents/Emelie_BachelorThesis.pdf",
    },
  ];

  return (
    <projectContext.Provider value={projectData}>
      {children}
    </projectContext.Provider>
  );
}
