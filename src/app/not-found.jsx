import Link from 'next/link'

import { Container } from '@/components/Container'
import {Button} from "@/components/Button";

export default function NotFound() {
  return (
    <div className="relative flex flex-auto items-center">
      <Container className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-32">
        <p className="rounded-full px-4 py-1 text-base font-medium tracking-tight text-slate-900 ring-1 ring-inset ring-slate-900">
          404
        </p>
        <h1 className="mt-6 font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
          Pagina nu a fost găsită!
        </h1>
        <p className="mt-16 text-xl text-slate-600">
          Participă și tu la această inițiativă cetățenească. Redeschide strada Răzoare!
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="#" color="blue">
            Semnează petiția
          </Button>
          <Button href="https://www.facebook.com/groups/341837508295570" target="_blank" variant="outline" color="blue">
            Înscrie-te în grup
          </Button>
        </div>
        <Link
          href="/"
          className="mt-6 text-base font-medium text-blue-600 hover:text-blue-800"
        >
          Vezi mesajul nostru <span aria-hidden="true">&rarr;</span>
        </Link>
      </Container>
    </div>
  )
}
