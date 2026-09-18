import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ArrowUpRight, Waves } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Updates', href: '#updates' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe9e2]/70 bg-[#fafcfa]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Link href="#top" className="group flex items-center gap-3" aria-label="PMPMH home">
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cso_logo-Dr5hyzQPKbFCclISUSc4rVP6BZ720g.png" alt="Putiao, My Place, My Home, CSO, Inc. logo" width={48} height={48} className="size-12 rounded-full object-cover shadow-sm transition-transform group-hover:rotate-[-8deg]" priority />
          <span className="flex flex-col leading-none">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0b6b3a]">PMPMH</span>
            <span className="mt-1 max-w-[160px] text-[10px] font-medium leading-tight text-[#66736d]">Putiao, My Place, My Home</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm font-semibold text-[#45554e] transition-colors hover:text-[#0b6b3a]">{link.label}</Link>)}
          <Link href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-[#0b6b3a] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#075530] hover:shadow-lg hover:shadow-[#0b6b3a]/15">Get involved <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
        </nav>
        <details className="relative lg:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-full border border-[#dfe9e2] text-[#0b6b3a]" aria-label="Open menu"><Menu /></summary>
          <nav className="absolute right-0 top-14 flex w-56 flex-col gap-1 rounded-2xl border border-[#dfe9e2] bg-[#fafcfa] p-3 shadow-xl" aria-label="Mobile navigation">{links.map((link) => <Link key={link.href} href={link.href} className="rounded-lg px-3 py-3 font-semibold text-[#45554e] hover:bg-[#eff8f2]">{link.label}</Link>)}<Link href="#contact" className="mt-2 rounded-full bg-[#0b6b3a] px-4 py-3 text-center font-bold text-white">Get involved</Link></nav>
        </details>
      </div>
    </header>
  )
}

export function LogoMark({ light = false }: { light?: boolean }) {
  return <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cso_logo-Dr5hyzQPKbFCclISUSc4rVP6BZ720g.png" alt="Putiao, My Place, My Home, CSO, Inc. logo" width={48} height={48} className={`size-12 rounded-full object-cover ${light ? 'ring-1 ring-white/20' : ''}`} />
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#0b6b3a]"><span className="h-px w-8 bg-[#4daa31]" />{children}</p>
}

export function ArrowLink({ children, href = '#' }: { children: React.ReactNode; href?: string }) {
  return <Link href={href} className="group inline-flex items-center gap-2 text-sm font-extrabold text-[#0b6b3a]">{children}<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
}

export function Footer() {
  return <footer className="bg-[#10221b] text-white" id="contact"><div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8"><div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr] md:gap-20"><div><div className="flex items-center gap-3"><LogoMark light /><div><p className="text-xs font-extrabold uppercase tracking-[0.18em]">PMPMH</p><p className="text-sm text-white/60">Putiao, My Place, My Home, CSO, Inc.</p></div></div><p className="mt-6 max-w-sm text-sm leading-7 text-white/55">People • Nature • Community • A brighter tomorrow. A community-led organization rooted in Putiao.</p></div><div><p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#8dd86e]">Explore</p><div className="flex flex-col gap-3 text-sm text-white/65"><Link href="#about" className="hover:text-white">About our story</Link><Link href="#programs" className="hover:text-white">Our programs</Link><Link href="#leadership" className="hover:text-white">Board of Directors</Link><Link href="#updates" className="hover:text-white">Community updates</Link></div></div><div><p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#8dd86e]">Find us</p><p className="text-sm leading-7 text-white/65">Putiao, Pilar 4714<br />Sorsogon, Philippines</p><p className="mt-4 text-xs italic text-white/40">Official contact details coming soon.</p></div></div><div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"><span>© 2024 Putiao, My Place, My Home, CSO, Inc.</span><span>Community-led. Non-partisan. Non-political.</span></div></div></footer>
}

export function ButtonLink({ children, href = '#contact', secondary = false }: { children: React.ReactNode; href?: string; secondary?: boolean }) {
  return <Link href={href} className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-extrabold transition-all ${secondary ? 'border border-[#c9dbce] bg-white text-[#0b6b3a] hover:border-[#0b6b3a] hover:bg-[#eff8f2]' : 'bg-[#0b6b3a] text-white shadow-lg shadow-[#0b6b3a]/15 hover:bg-[#075530] hover:shadow-xl'}`}>{children}</Link>
}

export function Stat({ value, label }: { value: string; label: string }) { return <div><p className="text-2xl font-extrabold tracking-tight text-[#10221b]">{value}</p><p className="mt-1 max-w-[130px] text-xs leading-5 text-[#66736d]">{label}</p></div> }

export function PillarIcon({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) { return <span className="grid size-12 place-items-center rounded-2xl bg-[#eff8f2] text-[#0b6b3a]"><Icon className="size-6" strokeWidth={1.7} /></span> }

export function ImageCard({ title, text, imageClass = '' }: { title: string; text: string; imageClass?: string }) { return <article className="group overflow-hidden rounded-[22px] border border-[#dfe9e2] bg-white"><div className={`relative h-48 overflow-hidden bg-[#d8e9dc] ${imageClass}`}><div className="absolute inset-0 bg-gradient-to-t from-[#10221b]/55 to-transparent" /><span className="absolute bottom-4 left-5 text-xs font-bold uppercase tracking-[0.16em] text-white">Community story</span></div><div className="flex min-h-[172px] flex-col p-6"><h3 className="text-xl font-extrabold tracking-tight text-[#10221b]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#66736d]">{text}</p><div className="mt-auto pt-5"><ArrowLink>Explore story</ArrowLink></div></div></article> }

export function ContactForm() { return <form className="flex flex-col gap-4" action="#contact-form" method="post"><div className="grid gap-4 sm:grid-cols-2"><label className="flex flex-col gap-2 text-sm font-semibold text-[#10221b]">Full name<input required className="h-12 rounded-xl border border-[#dfe9e2] bg-white px-4 font-normal outline-none focus:border-[#0b6b3a] focus:ring-2 focus:ring-[#0b6b3a]/15" placeholder="Your name" /></label><label className="flex flex-col gap-2 text-sm font-semibold text-[#10221b]">Email address<input type="email" required className="h-12 rounded-xl border border-[#dfe9e2] bg-white px-4 font-normal outline-none focus:border-[#0b6b3a] focus:ring-2 focus:ring-[#0b6b3a]/15" placeholder="you@example.com" /></label></div><label className="flex flex-col gap-2 text-sm font-semibold text-[#10221b]">Subject<input required className="h-12 rounded-xl border border-[#dfe9e2] bg-white px-4 font-normal outline-none focus:border-[#0b6b3a] focus:ring-2 focus:ring-[#0b6b3a]/15" placeholder="How would you like to get involved?" /></label><label className="flex flex-col gap-2 text-sm font-semibold text-[#10221b]">Message<textarea required className="min-h-32 resize-y rounded-xl border border-[#dfe9e2] bg-white px-4 py-3 font-normal outline-none focus:border-[#0b6b3a] focus:ring-2 focus:ring-[#0b6b3a]/15" placeholder="Tell us a little more..." /></label><button type="submit" className="mt-2 min-h-12 self-start rounded-full bg-[#0b6b3a] px-7 text-sm font-extrabold text-white hover:bg-[#075530]">Send message</button><p className="text-xs text-[#66736d]">This form is ready to connect to an official email service when contact details are confirmed.</p></form> }

export const iconProps = { className: 'size-6', strokeWidth: 1.7 }

export function HeritageVisual() { return <div className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-[url('/putiao-river.png')] bg-cover bg-center"><div className="absolute inset-0 bg-[#075530]/35" /><div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/25 bg-[#10221b]/55 p-5 text-white backdrop-blur-sm"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b4e69e]">A living archive</p><p className="mt-2 text-xl font-bold">Stories carried by the river</p></div></div> }

export function PersonCard({ role, name }: { role: string; name: string }) { return <article className="rounded-[20px] border border-[#dfe9e2] bg-white p-5"><div className="mb-5 flex size-16 items-center justify-center rounded-full bg-[#e4f3e8] text-xl font-extrabold text-[#0b6b3a]">{name.split(' ').filter(Boolean).slice(-1)[0]?.[0] ?? 'P'}</div><p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#0b6b3a]">{role}</p><h3 className="mt-2 text-base font-extrabold leading-snug text-[#10221b]">{name}</h3><p className="mt-3 border-t border-[#edf2ee] pt-3 text-xs leading-5 text-[#66736d]">Gateway between Albay and Sorsogon. Putiao is a community worth discovering.</p></article> }

export const leaderData = [
['President','Architect Levy O. Espinas'],['VP, Philippine Affairs','Arch. Rodel Jay Lleva'],['VP, Foreign Affairs','Ms. Guia Lorin'],['Secretary','Ruby L-Mendones Macasinag'],['Treasurer','Dra. Phoebes Marifosque'],['Public Relations Officer','Angelo Mabini'],['Director, Religious Affairs','Ma. Angela Marchan Pesebre'],['Director, Development & Infrastructure','Arch. Bea Endaya'],['Director, Entrepreneurship','Anthony Cesar Fortuno'],['Director, Youth Affairs','Saedne Shane G. Lubiano'],['Director, Environment, Culture & Tourism','Dr. Noemi L. Ibo'],
]

export const pillarData = [
['Environment','Protecting our river, mangroves, natural resources, and surrounding ecosystems.'],['Culture & Heritage',"Preserving Putiao's identity, traditions, foods, crafts, fishing heritage, and community stories."],['Sustainable Tourism','Promoting responsible community-based tourism that protects nature and benefits local residents.'],['Livelihood & Community Development','Creating opportunities for sustainable and inclusive local growth.'],['Community Service','Serving residents, strengthening relationships, and helping the community during times of need.'],
]

export const updateData = [
['River stewardship','Small actions, shared responsibility','A cleaner river begins with neighbors showing up for the place we call home.'],['Culture & heritage','Keeping local stories alive','From food and fishing to crafts and traditions, Putiao’s identity is worth carrying forward.'],['Community service','Standing with our community','When hardship comes, volunteers and resources move together to help families in need.'],
]

export { Waves }

export function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) { return <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><SectionLabel>{eyebrow}</SectionLabel><h2 className="max-w-xl text-3xl font-extrabold tracking-[-0.04em] text-[#10221b] sm:text-4xl">{title}</h2></div>{children}</div> }

export function ImpactItem({ title, text }: { title: string; text: string }) { return <div className="border-l-2 border-[#4daa31] pl-4"><p className="text-lg font-extrabold text-[#10221b]">{title}</p><p className="mt-1 text-sm text-[#66736d]">{text}</p></div> }

export function CheckList({ items }: { items: string[] }) { return <ul className="flex flex-col gap-3">{items.map(item => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#45554e]"><span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#e4f3e8] text-[#0b6b3a]">✓</span>{item}</li>)}</ul> }

export function HeroImage() { return <div className="relative min-h-[500px] overflow-hidden rounded-[30px] bg-[url('/putiao-river.png')] bg-cover bg-center shadow-2xl shadow-[#0b6b3a]/10"><div className="absolute inset-0 bg-gradient-to-t from-[#10221b]/80 via-[#10221b]/15 to-transparent" /><div className="absolute left-6 right-6 top-6 flex items-center justify-between"><span className="rounded-full border border-white/30 bg-white/15 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">Putiao, Sorsogon</span><span className="grid size-10 place-items-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm"><Waves className="size-5" /></span></div><div className="absolute bottom-6 left-6 right-6"><p className="font-serif text-3xl italic tracking-tight text-white/90 sm:text-4xl">Our river.<br />Our home.<br />Our future.</p><div className="mt-6 flex items-center gap-3 text-xs font-medium text-white/75"><span className="h-px w-8 bg-[#8dd86e]" />A community worth discovering</div></div></div> }

export function FeatureBand() { return <div className="relative overflow-hidden rounded-[28px] bg-[#0b6b3a] px-6 py-12 text-white sm:px-12 md:py-16"><div className="absolute -right-10 -top-20 size-64 rounded-full border border-white/10" /><div className="absolute -bottom-28 right-20 size-72 rounded-full border border-white/10" /><div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b4e69e]">Our place identity</p><h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Gateway between Albay and Sorsogon.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/70">Putiao is not simply a place people pass through. It is a community worth discovering.</p></div><ButtonLink href="#about" secondary>Discover Putiao</ButtonLink></div></div> }

export function ProgramCard({ number, title, text }: { number: string; title: string; text: string }) { return <article className="group flex min-h-52 flex-col justify-between rounded-[22px] border border-[#dfe9e2] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#a5cdb0] hover:shadow-xl hover:shadow-[#0b6b3a]/8"><div className="flex items-start justify-between"><span className="text-sm font-extrabold text-[#4daa31]">{number}</span><ArrowUpRight className="size-5 text-[#a7b9ad] transition-colors group-hover:text-[#0b6b3a]" /></div><div><h3 className="text-xl font-extrabold tracking-tight text-[#10221b]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#66736d]">{text}</p></div></article> }

export function ContactSection() { return <section className="bg-[#eff8f2]" id="contact-form"><div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><SectionLabel>Get involved</SectionLabel><h2 className="text-4xl font-extrabold tracking-[-0.05em] text-[#10221b] sm:text-5xl">There is a place for you here.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#66736d]">Whether you want to volunteer, collaborate, share a story, or simply learn more, we would love to hear from you.</p><div className="mt-8"><CheckList items={['Volunteer in community activities','Collaborate on a local initiative','Share a Putiao story or tradition']} /></div></div><div className="rounded-[26px] border border-[#d1e5d6] bg-white p-6 sm:p-8"><ContactForm /></div></div></div></section> }

export function SiteHome() { return null }

export default SiteHeader
