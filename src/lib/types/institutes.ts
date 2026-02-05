import type { Path } from "typescript"

export type Institute =  {
    degree: string, 
    name: string,
    image: {
        src: string,
        width: string
    },
    thesis: string,
    pi: string,
    location: string,
    year: string,
    keywords: string    

}

export type Company = {
    time: {year: string, duration: string},
    location: string,
    position: string,
    image: {
        src: string,
        width: string
    },
    name: string,
    experience: string,
    skills: string
}