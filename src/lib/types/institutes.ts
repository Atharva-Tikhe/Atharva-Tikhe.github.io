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
    keywords: string    

}