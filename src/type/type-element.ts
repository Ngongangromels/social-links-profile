export interface TsocialLinks {
    id: string;
    image: any;
    name: string;
    description: string;
    descriptionJob: string;
    listeReseauSocial: Treseau;
}

interface Treseau{
    reseau1: string,
    reseau2: string,
    reseau3: string,
    reseau4: string,
    reseau5: string
}