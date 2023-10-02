import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import coverImage1 from "@/images/cover-1.png";
import Image from "next/image";

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
        <p className="mt-4">
          În 11 Octombrie 2022, Primăria Florești publica acest <a className="underline text-blue-600 hover:text-blue-800" href="https://www.facebook.com/primariacomuneifloresti/posts/pfbid02SMrGQrPo4Cg2ZPQb8LyCZtLzybqrXNdoy4jXWFgAAZjbLUkHDJAa6zcYxXXsgcTMl?locale=ro_RO" target="_blank">
          anunț</a> pe Facebook:
        </p>
        <div className="flex gap-8 mt-8 items-center">
          <p className="mt-4 italic">
            `&quot;` UNIC pe o porțiune din strada Răzoare, pe direcția Cluj Napoca-Florești începând de joi 13 octombrie a.c. (2022) <br/><br/>
            Se instituie sens unic pe strada Răzoare, pe sectorul cuprins între intersecția str. Valea Gârboului nr. 1 și până la str. Răzoare nr. 199. <br/><br/>
            Măsura este parte din proiectul privind adaptarea infrastructurii rutiere la condițiile cerute pentru a face posibilă introducerea noii linii de transport în comun care va deservi această zonă.`&quot;`
          </p>
          <Image className="w-1/2" src={coverImage1} alt="" priority />
        </div>
        <p className="mt-4">
          Un an mai târziu,...
        </p>
        <p className="mt-4">
          Cerințele noastre...
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Schimbarea sensului unic',
            'Publicarea programului acestui proiect privind adaptarea infrastructurii rutiere',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
        </p>
      </Container>
    </section>
  )
}
