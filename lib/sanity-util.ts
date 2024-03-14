import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: '43nxtx6h',
    dataset: 'production',
    apiVersion: '2024-03-15',
    useCdn: true
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}
