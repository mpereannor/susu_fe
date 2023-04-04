import { Work_Sans } from '@next/font/google'

const nextFont = Work_Sans({
  display: 'swap',
fallback: ["sans-serif"], style: "normal",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],

  subsets: ['latin'],
})
export default nextFont
