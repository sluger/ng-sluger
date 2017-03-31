export { Project, Person }

interface Project {
    title?: string;
    description?: string;
    skills?: Array<string>;
}

interface Person {
    name?: string;
    contact?: string;
}

interface PageMetaData {
    title?: string;
    subTitle?: string;
}