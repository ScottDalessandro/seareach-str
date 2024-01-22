import type { DefaultSession } from 'next-auth'

// https://stackoverflow.com/questions/43335962/purpose-of-declare-keyword-in-typescript
declare module 'next-auth' {
    interface Session {
        user: DefaultSession['user'] & {
            id: string
        }
    }
}