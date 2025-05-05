import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {
    GitHubIcon,
    LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpeg'
import logoLeat from "@/images/logos/leat.png";
import logoAwoostria from "@/images/logos/awoostria.png";
import logoDigitalImpact from "@/images/logos/digital-impact.png";
import logoTheDevSquad from "@/images/logos/the-dev-squad.png";
import logoThisIsDevelopment from "@/images/logos/this-is-development.png";
import logoOnlyFansApi from "@/images/logos/ofapi.png";
import {Button} from "@/components/Button";

function SocialLink({className, href, children, icon: Icon}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                target="_blank"
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"/>
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

function BriefcaseIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function ArrowDownIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function Resume() {
    let resume = [
        {
            company: 'OnlyFans API',
            title: 'Senior Software Engineer',
            logo: logoOnlyFansApi,
            start: '04/2025',
            end: 'Present',
        },
        {
            company: 'Piggy / Leat',
            title: 'Software Engineer',
            logo: logoLeat,
            start: '11/2023',
            end: '04/2025',
        },
        {
            company: 'Awoostria (volunteer position)',
            title: 'Head of Technology & Board Member',
            logo: logoAwoostria,
            start: '07/2023',
            end: 'Present',
        },
        {
            company: 'Digital Impact',
            title: 'Back-end Developer',
            logo: logoDigitalImpact,
            start: '02/2023',
            end: '11/2023',
        },
        {
            company: 'The Dev Squad',
            title: 'Back-end Developer',
            logo: logoTheDevSquad,
            start: '06/2022',
            end: '12/2022',
        },
        {
            company: 'This is Development',
            title: 'Back-end Developer',
            logo: logoThisIsDevelopment,
            start: '01/2020',
            end: '05/2022',
        },
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 mb-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none"/>
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div
                            className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image src={role.logo} alt="" className="h-7 w-7" unoptimized/>
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label={`${role.start.label ?? role.start} until ${
                                    role.end.label ?? role.end
                                }`}
                            >
                                <time dateTime={role.start.dateTime ?? role.start}>
                                    {role.start.label ?? role.start}
                                </time>
                                {' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={role.end.dateTime ?? role.end}>
                                    {role.end.label ?? role.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
             <Button href="Diego Relyveld Resume.pdf" target="_blank" variant="secondary" className="group mt-6 w-full">
                 Download resume
                 <ArrowDownIcon
                     className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"/>
             </Button>
        </div>
    )
}

export default function About() {
    return (
        <>
            <Head>
                <title>About - Diego Relyveld</title>
                <meta
                    name="description"
                    content="Hi! I’m Diego Relyveld. A Laravel developer from the Netherlands."
                />
            </Head>
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={portraitImage}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                            I’m Diego Relyveld. A Laravel developer from the Netherlands.
                        </h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                            <p>
                                Over the past years, I constantly have been working with the latest cutting-edge
                                development tools and tech stacks
                                such as Tailwind CSS, Livewire, Pest, all the latest Laravel features, and frameworks
                                such as
                                Vue.js, Inertia.js and Livewire. Furthermore, I live by well-written, reusable and
                                well-tested code.
                                Designing databases and user interfaces, writing testable and reusable code,
                                troubleshooting
                                any small or big issues, and implementing new features based on customer or user
                                feedback is
                                not a problem for me.
                            </p>
                            <p>
                                My very first Laravel project dates back to 2016, this was a very basic project for a Dutch event
                                called “Nieuwjaarsduik IJburg”. The purpose of this project was allowing attendees to register
                                themselves for this event, and sending out a registration confirmation and QR code ticket. This
                                project also included a dashboard to manage and view attendees, and a system to scan their
                                QR code tickets to allow them to enter.
                            </p>
                            <p>
                                Since then, I haven’t stopped coding and strengthening my skillset, and I am proud to say that
                                my GitHub profile currently has 59 repositories.
                            </p>
                            <p>
                                In 2020, I landed my first job as a developer intern (and then junior, and medior), and after the
                                pandemic I made the switch to work fully remote and decided to move abroad.
                            </p>
                            <p>
                                I currently am at a point where I am proud to say that I have mastered Laravel in a way where I
                                can solve most, if not all, challenges that are thrown at me.
                            </p>
                        </div>
                    </div>
                    <div className="lg:pl-20">
                        <Resume/>

                        <ul role="list">
                            <SocialLink href="https://github.com/iDiegoNL" icon={GitHubIcon} className="mt-4">
                                Follow on GitHub
                            </SocialLink>
                            <SocialLink href="https://linkedin.com/in/diego-relyveld" icon={LinkedInIcon} className="mt-4">
                                Follow on LinkedIn
                            </SocialLink>
                            <SocialLink
                                href="mailto:me@diegor.nl"
                                icon={MailIcon}
                                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                            >
                                me@diegor.nl
                            </SocialLink>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}
