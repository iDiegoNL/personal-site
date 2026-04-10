import Head from 'next/head'

import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'

function ToolsSection({children, ...props}) {
    return (
        <Section {...props}>
            <ul role="list" className="space-y-16">
                {children}
            </ul>
        </Section>
    )
}

function Tool({title, href, children}) {
    return (
        <Card as="li">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Description>{children}</Card.Description>
        </Card>
    )
}

export default function Uses() {
    return (
        <>
            <Head>
                <title>Uses - Diego Relyveld</title>
                <meta
                    name="description"
                    content="Software I use, gadgets I love, and other things I recommend."
                />
            </Head>
            <SimpleLayout
                title="Software I use, gadgets I love, and other things I recommend."
                intro="What's the purpose of being a developer if you can't talk about your fancy products? Here's a list of the things I use on a daily basis."
            >
                <div className="space-y-20">
                    <ToolsSection title="Workstation">
                        <Tool title="AMD Ryzen 9 5900X, RTX 3070, 64GB DDR4 RAM @ 3.600MT/s"/>
                        <Tool title="14” MacBook Pro, M4 Pro, 48GB RAM"/>
                        <Tool title='37.5" 4K LG UltraWide'/>
                        <Tool title="Corsair Gaming K95 RGB Platinum Cherry"/>
                        <Tool title="Logitech MX Master 3S"/>
                    </ToolsSection>
                    <ToolsSection title="Audio setup">
                        <Tool title="Sennheiser HD 660 S"/>
                        <Tool title="Sony WH-1000XM5"/>
                        <Tool title="AirPods Pro 2"/>
                        <Tool title="Focusrite Vocaster One"/>
                        <Tool title="Audio-Technica AT2020"/>
                    </ToolsSection>
                    <ToolsSection title="Development tools">
                        <Tool title="PhpStorm">
                            My IDE of choice. I’ve been using it for years now, and I’m still very happy with it. I’ve
                            heavily customized it with plugins and themes by now, and will probably never switch to
                            anything else.
                        </Tool>
                        <Tool title="Tinkerwell">
                            If you love Laravel Tinker, you’ll love Tinkerwell even more. It’s an amazing tool for
                            quickly running code snippets, whilst having the hot-reload that I miss with Tinker.
                        </Tool>
                        <Tool title="Spatie Ray">
                            My favorite debugging tool. Super easy to use, and it’s a great way to quickly debug code of
                            any application.
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title="Tech stack">
                        <Tool title="Laravel, Livewire, Tailwind CSS and Alpine.js">
                            My favourite PHP framework. Whenever I start a new project, I don’t even need to think about
                            what framework to use, because I know that Laravel is the best choice for me.
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title="Productivity">
                        <Tool title="Notion"/>
                        <Tool title="TickTick"/>
                        <Tool title="Linear"/>
                    </ToolsSection>
                </div>
            </SimpleLayout>
        </>
    )
}
