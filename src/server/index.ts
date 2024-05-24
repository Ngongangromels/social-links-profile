import { TsocialLinks } from "../type/type-element";
import avatar from '../avatar.jpeg'

export async function getSocialLinksProfilById(socialLinksProfilId: string): Promise<TsocialLinks> {
    return {
        id: socialLinksProfilId,
        image: avatar,
        name: "Jessica Randall",
        description: "London, United Kingdom",
        descriptionJob: "'Front-end developer and avid reader.' ",
        listeReseauSocial: 
            {
                gitHub: "GitHub",
                frontendMentor: "Frontend Mentor",
                linkedln: "LinkedIn",
                twitter: "Twitter",
                instagram: "Instagram"
            }
        
        
    }
}