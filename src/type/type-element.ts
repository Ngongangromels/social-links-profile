export interface TsocialLinks {
    id: string;
    image: any;
    name: string;
    description: string;
    descriptionJob: string;
    listeReseauSocial: Treseau;
}

interface Treseau{
    gitHub: string,
    frontendMentor: string,
    linkedln: string,
    twitter: string,
    instagram: string
}