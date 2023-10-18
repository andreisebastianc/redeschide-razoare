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
                            Neavând transport în comun în această zonă, cetățenii sunt obligați să stea în coloană de
                            mașini sau
                            să se deplaseze pe jos, pe un drum fără trotuar, străbătut dimineața și seara, de mii de
                            mașini pe oră.
                        </p>
                        <p className="mt-4 text-xl tracking-tight text-slate-700">
                            Un an mai târziu, Primăria nu are o soluție de transport în comun pentru această zonă.
                        </p>
                        <p className="mt-4 text-xl tracking-tight text-slate-700">
                            Noi credem că Primăria Florești trebuie să desființeze acest sens unic, cel puțin până la
                            momentul în care zona e deservită de transport în comun.
                        </p>
                        <p className="mt-4 text-xl tracking-tight text-slate-700">
                            Dacă ești de acord, <Link
                            href="https://www.petitieonline.com/floresti_redeschide_razoare"
                            target="_blank"
                            className="mt-6 text-blue-600 underline hover:text-blue-800"
                        >semnează petiția
                        </Link>!
                        </p>
                        <p className="mt-4 text-xl tracking-tight text-slate-700">
                            Dacă ești curios, studiază soluția propusă de noi în <Link
                            href="https://drive.google.com/file/d/1LM064RWbsDVRskhhvmcZxl4Bj9RwrpjR/view?usp=share_link"
                            target="_blank"
                            className="mt-6 text-blue-600 underline hover:text-blue-800"
                        >anexă</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}