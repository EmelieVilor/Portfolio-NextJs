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
      tags: ["Full-stack", "React", "NodeJs", "TypeScript",  "MySQL", "Tailwind"],
      summary:
        "Full-stack application for exploring different kinds of planets and their inhabitants. \n\n Executed through an agile teamwork of 5 people.",
      desc: "This project was built as part of a course in agile development within the Frontend Developer program at Yrkeshögskolan Borås. The purpose was to simulate working as an agile team. We planned and ran sprints, held standups, sprint reviews and retrospectives and incrementally delivered our MVP.\n\n With this web app the user can view all kinds of planets and aliens, learn the details of each one and use the filter system and filter each category by size, habitat, home planet and aggression etc.\n\n See screenshots and Github code for more information.",
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
      tags: ["Frontend", "React", "Vite", "JavaScript", "CSS"],
      summary:
        "A Kanban board created in React. The user can add or delete tasks, organize them with a category of choice, use drag-and-drop to move the tasks to other columns of the board and view specific details of each existing task.",
      desc: "This project was built as a frontend assignment using React as a framework and component-based thinking. The goal was to build a fully functional task management tool. \n\n The board lets you add, edit and delete tasks, organize them across three columns, and drag and drop tastks between columns as the work progresses. Each task can be a assigned to a category to keep things organized. \n\n See screenshots and Github code for more.",
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
      tags: ["Frontend", "HTML", "CSS", "JavaScript", "API-handling"],
      summary:
        "This dashboard is a customizable site for each user. The user can add and save links of their choice, write personal notes, watch the local weather forecast and view current news articles.",
      desc: "This project was built with vanilla JavaScript and using API integration without the help of any frameworks. \n\n The dashboard is fully customizable: save your personal links, write notes, check the weather forecast for your geolocation, and browse current Swedish news articles with the help of a news API.  \n\n See screenshots and Github code for more.",
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
      desc: "My master thesis project in Interaction design was completed in collaboration and conversation wih a team from Afry. The project explores how differet stakeholdes in the industrial harbor of Malmö can transition into a more sustainable collaboration. \n\n The work involved extensive user research and concept development rooted in Transition Design methodology - a design area used for addressing large-scale systematic challenges. The outcome is a tool with the vision to bridge the gaps between industries and encourage communication and collaboration.\n\n See screenshots or download the full thesis for more.",
      screenshots: ["/images/2.png", "/images/3.png", "/images/5.png"],
      downloadlink: "/documents/Emelie_MasterThesis.pdf",
    },
    {
      id: "Bachelor",
      img: "/images/bachelor.png",
      title: "Bachelor Thesis",
      tags: ["Interaction Design", "UX", "Gamification", "JustInMind"],
      summary:
        "My bachelor project in Interaction Design explores tourism and gamification. By designing an interactive prototype the goal was to encourage exploration and city interaciton.",
      desc: "For my Bachelor thesis project in Interaciton design I wanted to explore the combination of tourism and gamification by asking: how can we design experiences that encourage people to explore and interact with a city, rather than just follow a map or a tourist route?\n\n The result is an interactive prototype created in JustInMind, using gamified elements like location-based challenges and rewards to motivate the user. The project was executed using field research, user research, facilitating a focus group and evaluation by extensive user testing and creating design iterations along the way. \n\n See screenshots or download the full thesis for more.",
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
