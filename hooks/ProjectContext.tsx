'use client'

import { createContext, ReactNode } from "react";
import type { Project } from "@/types/ProjectType";

const projectContext = createContext<Project[]>([]);
export default projectContext;

export function ProjectProvider({children} : {children : ReactNode}){

    const projectData: Project[] = [
        {
            id: "AlienPlanets",
            img: "/images/aliensplanets_start.png",
            title: "Alien Planets",
            tags: ["React", "Tailwind CSS", "TypeScript", "Full-stack"],
            summary:"",
            desc:"",
        },
        {
            id: "TriviaApp",
            img: "/images/app_mockup.png",
            title: "Trivia App",
            tags: ["App Development", "React Native", "Expo", "CSS", "TypeScript"],
            summary:"",
            desc:"",
        },
        {
            id: "Kanban",
            img: "/images/kanban_transmockup.png",
            title: "Kanban Board",
            tags: ["React", "JavaScript", "CSS"],
            summary:"",
            desc:"",
        },
        {
            id: "Dashboard",
            img: "/images/dashboard_transpmockup.png",
            title: "Dashboard",
            tags: ["HTML", "CSS", "Vanilla JS", "API-handling"],
            summary:"",
            desc:"",
        },
        {
            id: "Master",
            img: "/images/masterthesis_mockup.png",
            title: "Master Thesis",
            tags: ["Transition Design", "UX", "UI", "User Research", "Figma"],
            summary:"",
            desc:"",
        },
        {
            id: "Bachelor",
            img: "/images/bachelor.png",
            title: "Bachelor Thesis",
            tags: ["Interaction Design", "UX", "Gamification", "JustInMind"],
            summary:"",
            desc:"",
        }
    ];

    return (
        <projectContext.Provider value={projectData}>
        {children}
        </projectContext.Provider>
    );
}