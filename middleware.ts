export { default } from "next-auth/middleware";


// Note you must add all authenticated pages to this array
// See https://nextjs.org/docs/app/building-your-application/routing/middleware
export const config = { matcher: ['/admin']}