import Image from 'next/future/image'
import Head from 'next/head'

import {Card} from '@/components/Card'
import {SimpleLayout} from '@/components/SimpleLayout'
import {Badge} from "@/components/Badge";

import logoHartjewonen from '@/images/logos/hartjewonen.png'
import logoLidrs from '@/images/logos/lidrs.png'
import logoFrieslandcampina from '@/images/logos/frieslandcampina.png'
import logoThisisdevelopment from '@/images/logos/thisisdevelopment.png'
import logoBootburg from '@/images/logos/bootburg.png'

import logoTruckersmp from '@/images/logos/truckersmp.png'
import logoPhoenix from '@/images/logos/phoenix.png'
import logoVivaTrucking from '@/images/logos/viva-trucking.png'
import logoUpcheck from '@/images/logos/upcheck.png'

import iconCupTogoDuotone from '@/images/icons/cup-togo-duotone.svg'
import iconCartShoppingDuotone from '@/images/icons/cart-shopping-duotone.svg'
import iconIslandTropicalDuotone from '@/images/icons/island-tropical-duotone.svg'

const professionalProjects = [
    {
        name: 'Hartje Wonen',
        description:
            'Hartje Wonen is a real estate agency in the Netherlands. They offer a wide range of services, from buying and selling houses to renting and renovating.',
        link: {href: 'https://hartjewonen.nl', label: 'hartjewonen.nl', external: true},
        logo: logoHartjewonen,
    },
    {
        name: 'LiDRS Online',
        description:
            'LiDRS Online is an innovative platform for leadership development, team development and organisational development. Built with Laravel, Vue.js and Inertia.js.',
        link: {href: 'https://lidrsonline.nl', label: 'lidrsonline.nl', external: true},
        logo: logoLidrs,
    },
    {
        name: 'FrieslandCampina Xpress Platform',
        description:
            'A CMS-like platform for FrieslandCampina where content can be managed on WordPress, while the frontend is built with Laravel and Vue.js.',
        link: {
            href: 'https://www.thisisdevelopment.nl/portfolio/friesland-campina',
            label: 'thisisdevelopment.nl',
            external: true
        },
        logo: logoFrieslandcampina,
    },
    {
        name: 'FrieslandCampina Dashboard',
        description:
            'A dashboard for managing FrieslandCampina\'s website deployments and more. Built with Laravel, Vue.js and CoreUI.',
        link: {
            href: 'https://www.thisisdevelopment.nl/portfolio/friesland-campina',
            label: 'thisisdevelopment.nl',
            external: true
        },
        logo: logoFrieslandcampina,
    },
    {
        name: 'This Is Development CMS',
        description:
            'The main This Is Development website. Built with Twill.io and an existing design they provided.',
        link: {href: 'https://thisisdevelopment.nl', label: 'thisisdevelopment.nl', external: true},
        logo: logoThisisdevelopment,
    },
    {
        name: 'Nieuwjaarsduik IJburg website & dashboard',
        description:
            'A website and dashboard for managing the Nieuwjaarsduik IJburg event attendees. Built with Laravel and Semantic UI.',
        // link: {href: '#', label: 'Link to project'},
        logo: logoBootburg,
    },
];

const personalProjects = [
    {
        name: 'TruckersMP',
        description:
            'The main website for TruckersMP. This handles everything from users to recruitment, blog posts and more. Built with Laravel.',
        link: {href: 'https://truckersmp.com', label: 'truckersmp.com', external: true},
        logo: logoTruckersmp,
    },
    {
        name: 'Phoenix CMS',
        description:
            'A CMS for managing the PhoenixVTC website. Built with Craft CMS, Tailwind CSS and Alpine.js.',
        link: {href: '#', label: 'Link to article'},
        logo: logoPhoenix,
    },
    {
        name: 'PhoenixBase',
        description:
            'A dashboard for PhoenixVTC drivers. This handles everything from recruitment to virtual job submissions. Built with Laravel, Livewire, Tailwind CSS and Alpine.js.',
        link: {href: '#', label: 'github.com'},
        logo: logoPhoenix,
    },
    {
        name: 'Phoenix Tracker',
        description:
            'An Electron app for tracking deliveries in the game Euro Truck Simulator 2. Built with Electron, Vue.js and Tailwind CSS.',
        link: {href: '#', label: 'Link to article'},
        logo: logoPhoenix,
    },
    {
        name: 'Viva Trucking DriversHub',
        description:
            'A dashboard for Viva Trucking drivers. This handles everything from recruitment to virtual job submissions. Built with Laravel and Bootstrap.',
        link: {href: 'https://vivatrucks.com', label: 'vivatrucks.com', external: true},
        logo: logoVivaTrucking,
    },
    {
        name: 'Coffee Order',
        description:
            'A simple coffee order app built with Laravel and Tailwind CSS. This again was a school project, and the first project where I used Tailwind CSS.',
        link: {href: '#', label: 'github.com'},
        logo: iconCupTogoDuotone,
    },
    {
        name: 'Bani Supermarkt',
        description:
            'Bani Supermarkt is a fictional supermarket for a school project. Built with Laravel and Semantic UI.',
        link: {href: '#', label: 'github.com'},
        logo: iconCartShoppingDuotone,
    },
    {
        name: 'TripPlanner',
        description:
            'TripPlanner is a web application that allows you to plan your trips and share them with your friends.',
        link: {href: '#', label: 'github.com'},
        logo: iconIslandTropicalDuotone,
    },
    {
        name: 'UpCheck',
        description:
            'UpCheck is a simple uptime monitoring tool that allows you to monitor your websites and servers. Built with Laravel and Tabler.',
        link: {href: '#', label: 'upcheck.co'},
        logo: logoUpcheck,
    },
]

function LinkIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects - Diego Relyveld</title>
                <meta
                    name="description"
                    content="Things I’ve made trying to put my dent in the universe."
                />
            </Head>
            <SimpleLayout
                title="Professional Projects"
                intro="I've created and contributed to a lot of projects over the years during my career. Here are the ones I'm most proud of."
            >
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {professionalProjects.map((project) => (
                        <Card as="li" key={project.name}>
                            <div
                                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <Image
                                    src={project.logo}
                                    alt=""
                                    className="h-8 w-8"
                                    unoptimized
                                />
                            </div>
                            {project.link ?
                                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                    <Card.Link href={project.link.href}
                                               target={project.link.external ? '_blank' : '_self'}>
                                        {project.name}
                                        {project.badge ? <Badge className="ml-2">{project.badge.label}</Badge> : null}
                                    </Card.Link>
                                </h2>
                                :
                                <div className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                    <Card.Title>{project.name}</Card.Title>
                                </div>
                            }
                            <Card.Description>{project.description}</Card.Description>
                            {project.link ?
                                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                                    <LinkIcon className="h-6 w-6 flex-none"/>
                                    <span className="ml-2">{project.link.label}</span>
                                </p>
                                : ''
                            }
                        </Card>
                    ))}
                </ul>
            </SimpleLayout>

            <SimpleLayout
                title="Personal Projects"
                intro="My favourite hobby is coding, even though it's my main job as well. These personal projects are mostly side projects that I've worked on in my free time. I've learned a lot from them and I'm proud to showcase them."
            >
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {personalProjects.map((project) => (
                        <Card as="li" key={project.name}>
                            <div
                                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <Image
                                    src={project.logo}
                                    alt=""
                                    className="h-8 w-8"
                                    unoptimized
                                />
                            </div>
                            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                <Card.Link href={project.link.href} target={project.link.external ? '_blank' : '_self'}>
                                    {project.name}
                                    {project.badge ? <Badge className="ml-2">{project.badge.label}</Badge> : null}
                                </Card.Link>
                            </h2>
                            <Card.Description>{project.description}</Card.Description>
                            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                                <LinkIcon className="h-6 w-6 flex-none"/>
                                <span className="ml-2">{project.link.label}</span>
                            </p>
                        </Card>
                    ))}
                </ul>
            </SimpleLayout>
        </>
    )
}
