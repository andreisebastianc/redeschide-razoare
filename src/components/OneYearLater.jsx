import Image from 'next/image'
import coverImage1 from "@/images/cover-1.png";
import {SectionHeading} from "@/components/SectionHeading";
import {Container} from "@/components/Container";
import Link from "next/link";

export function OneYearLater() {
    return (
        <section
            id="one-year-later"
            aria-labelledby="one-year-later"
            className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
        >
            <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
                <div className="bg-slate-50 pt-px sm:rounded-6xl">
                    <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
                        <p className="mt-8 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                            Un an mai târziu, acest proiect nu a dus la introducerea noii linii de transport în comun.
                        </p>
                        <p className="mt-4 text-xl tracking-tight text-slate-700">
                            Mai mult, acest proiect a dus direct la scăderea calității vieții pentru mulți floreșteni.
                        </p>
                        <p className="mt-4 text-xl tracking-tight text-slate-700">
                            Neavând transport în comun în aceasta zonă cetățenii sunt obligați să stea în coloană de
                            mașini sau
                            să se deplaseze pe jos, pe un drum fara trotuar, străbătut dimineața și seara, de mii de
                            mașini pe
                            oră.
                        </p>
                        <p className="mt-4 text-xl tracking-tight text-slate-700">
                            Primăria Florești recunoaște public insuficiența numărului de autobuze și insistă că
                            acționează după o metodă științifică. <Link
                            href="https://www.facebook.com/bogdannicolaepivariu/posts/pfbid0ho46ZaNPSj5R61P9u4Yf9aTqBDhzvjjWkpNRyawJ1STHfds8GxtHvxv3BCP1ejhpl"
                            className="text-blue-600 underline" target="_blank">Aici</Link> și <Link
                            className="text-blue-600 underline"
                            href="https://www.facebook.com/bogdannicolaepivariu/posts/pfbid02FPARvmSdcTZxknzBdaz5BGu2gyGJCdrT1f6RijoQhzVcMU9QigRNrFwWPBRzpWkrl"
                            target="_blank">aici</Link> veți găsi anunțuri făcute de Primar despre analizele
                            detaliate,
                            concretizate în curse suplimentare și linii noi, precum și îndemnul dânsului la folosirea în
                            număr cât mai mare a mijloacelor de transport în comun.
                        </p>
                        <p className="mt-4 text-xl tracking-tight text-slate-700">
                            Un an mai târziu, Primăria nu are o soluție de transport în comun pentru această zonă.
                            Din 2015, când <Link className="text-blue-600 underline"
                                                 href="https://actualdecluj.ro/floresti-cea-mai-mare-comuna-din-romania-isi-dubleaza-populatia-in-10-ani-ajunge-a-doua-cea-mai-mare-localitate-din-judet-dupa-cluj-napoca-depaseste-turda/"
                                                 target="_blank">populația comunei Florești era jumatate din cât e
                            azi</Link>, soluția prezentată a fost <Link
                            href="https://www.google.com/search?client=firefox-b-d&q=centura+de+sud+floresti"
                            target="_blank">Centura de Sud</Link>.
                        </p>
                        <p className="mt-4 text-xl tracking-tight text-slate-700">
                            Recensământul din 2022 arată cum comuna Florești, cu o populație rezidentă de 52.735
                            locuitori, aproape a ajuns orașul Alba Iulia, care are o populație de 64.227 locuitori.<br/>
                            Din 2011, populația Florești a crescut cu 29.325 persoane, în timp ce Alba Iulia a crescut
                            cu 691.
                        </p>
                        <p className="mt-4 text-xl tracking-tight text-slate-700">
                            Din păcate, cetățenii din Florești nu au un număr comparabil de creșe, școli și grădinițe
                            unde să își ducă copiii așa că o iau pe drumul Clujului.
                        </p>
                        <p className="mt-4 text-xl tracking-tight text-slate-700">
                            În ajutorul nostru, Primăria Florești îngreunează traficul si <Link
                            href="https://www.facebook.com/photo/?fbid=10163087414964148&set=gm.6084801438285928&idorvanity=433634066736055"
                            target="_blank" className="text-blue-600 underline">crește intentionat disconfortul</Link>,
                            fără să finalizeze promisiunile.
                        </p>
                        <p className="mt-4 text-xl tracking-tight text-slate-700">
                            Noi credem ca Primăria Florești trebuie să desființeze acest sens unic, cel puțin pană la
                            momentul
                            în care zona e deservită de transport în comun.
                        </p>
                        <p className="mt-4 text-xl tracking-tight text-slate-700">
                            Dacă ești de acord, <Link
                            href="#"
                            className="mt-6 text-blue-600 underline hover:text-blue-800"
                        >semnează petiția
                        </Link>!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}