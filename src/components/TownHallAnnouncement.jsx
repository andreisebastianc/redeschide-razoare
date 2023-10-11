import Image from 'next/image'
import coverImage1 from "@/images/cover-1.png";

export function TownHallAnnouncement() {
  return (
    <section
      id="town-hall-announcement"
      aria-labelledby="town-hall-announcement"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <p className="mt-8 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              În <span className="text-blue-600">11 Octombrie 2022</span>, Primăria Florești publica acest <a
                className="underline text-blue-600 hover:text-blue-800"
                href="https://www.facebook.com/primariacomuneifloresti/posts/pfbid02SMrGQrPo4Cg2ZPQb8LyCZtLzybqrXNdoy4jXWFgAAZjbLUkHDJAa6zcYxXXsgcTMl?locale=ro_RO"
                target="_blank">
              anunț</a> pe Facebook:
            </p>
            <div
                className="flex flex-col sm:flex-col lg:flex-row gap-8 mt-8 items-center">
              <Image className="lg:w-1/2 flex-shrink-0 shadow-lg rounded-lg" src={coverImage1} alt="" priority/>
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                &quot;UNIC pe o porțiune din strada Răzoare, pe direcția Cluj Napoca-Florești începând de joi 13
                octombrie a.c. (2022) <br/><br/>
                Se instituie sens unic pe strada Răzoare, pe sectorul cuprins între intersecția str. Valea
                Gârboului nr. 1 și până la str. Răzoare nr. 199. <br/><br/>
                <span className={"font-semibold"}>Măsura este parte din proiectul privind adaptarea infrastructurii rutiere la condițiile cerute pentru a face posibilă introducerea noii linii de transport în comun care va deservi această zonă.</span>&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
