import {Container} from "@/components/Container";
import {CheckIcon} from "@/components/CheckIcon";

export function WhatCityHallOwes() {
    return (
        <section
            id="one-year-later"
            aria-labelledby="one-year-later"
            className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
        >
            <Container>
                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                    Credem că Primăria Florești datorează cetățenilor:
                </p>
                <ul role="list" className="mt-8 space-y-3">
                    {[
                        'Introducerea în legalitate a porțiunii din strada Răzoare care se află pe terenul USAMV',
                        'Un nou proiect de adaptare a infrastructurii rutiere la condițiile necesare pentru introducerea unei linii de transport în comun, care să fie prezentat publicului',
                        'Introducerea unei linii de transport în comun',
                        'Trotuare pe strada Razoare',
                    ].map((feature) => (
                        <li key={feature} className="flex">
                            <CheckIcon className="h-8 w-8 flex-none fill-blue-500"/>
                            <span className="ml-4 text-xl tracking-tight text-slate-700">{feature}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-8 text-xl tracking-tight text-blue-700">
                    Toate acestea se pot realiza fără ca strada să fie sens unic ani de zile!
                </p>
            </Container>
        </section>
    )
}