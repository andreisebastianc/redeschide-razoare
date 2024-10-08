import Image from 'next/image'

import { Button } from '@/components/Button'
import coverImage1 from '@/images/cover-1.png'
import coverImage2 from '@/images/cover-2.png'
import {CheckIcon} from "@/components/CheckIcon";
import Link from "next/link";


export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="hidden lg:flex relative items-end lg:col-span-5 lg:row-span-2 ">
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            <Image className="w-full" src={coverImage2} alt="" priority />
          </div>
        </div>
        <div className="hidden lg:block relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
        </div>
        <div className="pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              Redeschideți Răzoare!
            </h1>
            <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-700">
              Cerem Primăriei Florești redeschiderea imediată a sensului unic pe strada Răzoare, pe sectorul cuprins între intersecția str. Valea Gârboului nr. 1 și până la str. Răzoare nr. 199, pentru trafic din ambele sensuri.
            </p>
            <p className="mt-16 text-xl text-slate-600">
              Participă și tu la această inițiativă cetățenească.<br/> Înscrie-te in <Link
                href="https://www.facebook.com/groups/341837508295570"
                target="_blank"
                className="mt-6 text-blue-600 underline hover:text-blue-800"
            >grupul de Facebook
            </Link>.
            </p>
            <div className="mt-8 flex gap-4">
              <Button
                  href="https://www.petitieonline.com/floresti_redeschide_razoare"
                  target="_blank"
                  color="blue">
                Semnează petiția
              </Button>
              <Button href="https://drive.google.com/file/d/1LM064RWbsDVRskhhvmcZxl4Bj9RwrpjR/view?usp=share_link" target="_blank" variant="outline" color="blue">
                Vezi propunerea
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
