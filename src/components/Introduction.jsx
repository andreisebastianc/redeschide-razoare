import Link from 'next/link'

import {CheckIcon} from '@/components/CheckIcon'
import {Container} from '@/components/Container'
import coverImage1 from "@/images/cover-1.png";
import Image from "next/image";
import YouTube from "react-youtube";
import Youtube from "@/components/Youtube";


export function Introduction() {
    return (
        <section
            id="introduction"
            aria-label="Introduction"
            className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
        >
            <Container className="text-lg tracking-tight text-slate-700">
                <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
                    Noi, participanții la trafic cerem deblocarea traficului!
                </p>
                <p className="font-display text-2xl font-semibold tracking-tight text-slate-900 mt-4">
                    Primăria Florești trebuie să revină asupra deciziei de a institui un sens unic pe o porțiune din
                    strada Răzoare.
                </p>
                <p className="mt-4">
                    În 11 Octombrie 2022, Primăria Florești publica acest <a
                    className="underline text-blue-600 hover:text-blue-800"
                    href="https://www.facebook.com/primariacomuneifloresti/posts/pfbid02SMrGQrPo4Cg2ZPQb8LyCZtLzybqrXNdoy4jXWFgAAZjbLUkHDJAa6zcYxXXsgcTMl?locale=ro_RO"
                    target="_blank">
                    anunț</a> pe Facebook:
                </p>
                <div
                    className="flex flex-col sm:flex-col lg:flex-row gap-8 mt-8 items-center border border-gray-300 p-4 rounded-md">
                    <p className="mt-4 italic">
                        &quot;UNIC pe o porțiune din strada Răzoare, pe direcția Cluj Napoca-Florești începând de joi 13
                        octombrie a.c. (2022) <br/><br/>
                        Se instituie sens unic pe strada Răzoare, pe sectorul cuprins între intersecția str. Valea
                        Gârboului nr. 1 și până la str. Răzoare nr. 199. <br/><br/>
                        <span className={"font-semibold"}>Măsura este parte din proiectul privind adaptarea infrastructurii rutiere la condițiile cerute pentru a face posibilă introducerea noii linii de transport în comun care va deservi această zonă.</span>&quot;
                    </p>
                    <Image className="lg:w-1/2 flex-shrink-0 shadow-lg rounded-lg" src={coverImage1} alt="" priority/>
                </div>
                <p className="mt-8">
                    Un an mai târziu, acest proiect nu a dus la introducerea noii linii de transport în comun. Mai mult,
                    acest proiect a dus direct la scaderea calitatii vietii pentru multi floresteni.
                </p>
                <p className="mt-4">
                    Neavand transport in comun in aceasta zona cetatenii sunt obligati sa stea in coloana de masini sau
                    sa se deplaseze pe jos, pe un drum fara trotuare, strabatut dimineata si seara, de mii de masini pe
                    ora.
                </p>
                <p className="mt-4">
                    Primaria Floresti recunoaste public insuficienta numarului de autobuze si suplimenteaza mijloacele
                    de transport in comun pentru anumite zone.
                </p>
                <p className="mt-4">
                    Noi credem că Primăria Florești trebuie să desființeze acest sens unic, cel putin pana la momentul
                    in care zona e deservita de transport in comun.
                </p>
                <div className="mt-8 flex justify-center">
                    <Youtube/>
                </div>
                <p className="mt-12">
                    Avem o singura cerinta!
                </p>
                <ul role="list" className="mt-8 space-y-3">
                    {[
                        'Redeschiderea imediata a sensului unic pe strada Răzoare, pe sectorul cuprins între intersecția str. Valea Gârboului nr. 1 și până la str. Răzoare nr. 199, pentru trafic din ambele sensuri',
                    ].map((feature) => (
                        <li key={feature} className="flex">
                            <CheckIcon className="h-8 w-8 flex-none fill-blue-500"/>
                            <span className="ml-4">{feature}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-12">
                    Credem ca Primaria Floresti datorează cetatenilor:
                </p>
                <ul role="list" className="mt-8 space-y-3">
                    {[
                        'Rezolvarea situației legale a drumului',
                        'Un nou proiect de adaptare a infrastructurii rutiere la condițiile cerute pentru a face posibilă introducerea noii linii de transport în comun\n',
                        'Trotuare pe strada Razoare',
                    ].map((feature) => (
                        <li key={feature} className="flex">
                            <CheckIcon className="h-8 w-8 flex-none fill-blue-500"/>
                            <span className="ml-4">{feature}</span>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}
