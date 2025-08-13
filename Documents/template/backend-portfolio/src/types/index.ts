export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
}

export interface Portfolio {
    projects: Project[];
}