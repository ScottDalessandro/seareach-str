import { createClient } from 'next-sanity'
import { SanityClient } from 'sanity' // NOTE: NEXTJS 14 needs specific type

const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_STUDIO_TOKEN,
    apiVersion: '2021-10-21'
})

export default sanityClient as SanityClient