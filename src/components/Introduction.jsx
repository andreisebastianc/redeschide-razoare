import {Container} from '@/components/Container'
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
                    În <span className="text-blue-600">11 Octombrie 2022</span>, Primăria Florești publica acest <a
                    className="underline text-blue-600 hover:text-blue-800"
                    href="https://www.facebook.com/primariacomuneifloresti/posts/pfbid02SMrGQrPo4Cg2ZPQb8LyCZtLzybqrXNdoy4jXWFgAAZjbLUkHDJAa6zcYxXXsgcTMl?locale=ro_RO"
                    target="_blank">
                    anunț</a> pe Facebook:
                </p>
                <div
                    className="flex flex-col sm:flex-col lg:flex-row gap-8 mt-8 items-center">
                    <Image className="lg:w-1/2 flex-shrink-0 shadow-lg rounded-lg" src={coverImage1} alt="" priority/>
                    <p className="text-lg tracking-tight text-slate-700">
                        &quot;Anunț important<br/><br/>NOU-SENS UNIC pe o porțiune din strada Răzoare, pe direcția Cluj
                        Napoca-Florești începând de joi 13
                        octombrie a.c. (2022) <br/><br/>
                        Se instituie sens unic pe strada Răzoare, pe sectorul cuprins între intersecția str. Valea
                        Gârboului nr. 1 și până la str. Răzoare nr. 199. <br/><br/>
                        <span className={"font-semibold"}>Măsura este parte din proiectul privind adaptarea infrastructurii rutiere la condițiile cerute pentru a face posibilă introducerea noii linii de transport în comun care va deservi această zonă.</span>&quot;
                    </p>
                </div>
            </Container>
        </section>
    )
}
