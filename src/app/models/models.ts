export { Project, Link, Person }

interface Project {
    title?: string;
    subtitle?: string;
    text?: string;
    advisors?: Array<Person>;
    colleagues?: Array<Person>;
    position?: string;
    tech?: Array<string>;
    thumbnail?: string;
    video?: string;
    links?: Array<Link>;
    faicon?: string;
}

interface Link {
    title?: string;
    url?: string;
    faicon?: string;
}

interface Person {
    name?: string;
    link?: string;
}
