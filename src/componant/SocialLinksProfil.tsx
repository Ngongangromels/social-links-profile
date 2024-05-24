import React from 'react'
import { TsocialLinks } from '../type/type-element'; 
import  './slp.css'


interface Props {
    social: TsocialLinks;
}

export const SocialLinksProfil: React.FC<Props> = ({ social }) => {
    return (
        <div className='bloc-profil'>
            <img src={social.image} />
            <div className='info-profil'>
                <h1>{social.name}</h1>
                <p className='description-profil'>{social.description}</p>
            </div>
            <div className='description-job'>
                <p>{social.descriptionJob}</p>
            </div>
            <div className='bloc-reeseau'>
                <p className='reseau'><button><a className='lien' href='#'>{social.listeReseauSocial.gitHub}</a></button></p>
                <p className='reseau'><button><a className='lien' href='#'>{social.listeReseauSocial.frontendMentor}</a></button></p>
                <p className='reseau'><button><a className='lien' href='#'>{social.listeReseauSocial.linkedln}</a></button></p>
                <p className='reseau'><button><a className='lien' href='#'>{social.listeReseauSocial.twitter}</a></button></p>
                <p className='reseau1'><button><a className='lien' href='#'>{social.listeReseauSocial.instagram}</a></button></p>
            </div>
        </div>
    )
}