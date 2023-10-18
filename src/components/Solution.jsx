import {Container} from '@/components/Container'
import solution1 from "@/images/resources/sol-1.jpg";
import solution2 from "@/images/resources/sol-2.jpg";
import Image from "next/image";
import {SectionHeading} from "@/components/SectionHeading";
import Link from "next/link";
import {Button} from "@/components/Button";

export function Solution() {
    return (
        <section
            id="introduction"
            aria-label="Introduction"
            className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
        >
            <Container className="text-lg tracking-tight text-slate-700">
                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                    Cum ar putea arăta redeschiderea sensului de mers pe direcția Răzoare-Valea Gârboului?
                </p>
                <div className="mt-8">
                    <Image className="flex-shrink-0 shadow-lg rounded-lg" src={solution1} alt="" priority/>
                </div>
                <p className="mt-8 font-display text-2xl font-bold tracking-tight text-slate-900">
                    Ideal, credem că Primăria ar trebui să semaforizeze intersecția
                </p>
                <div className="mt-8">
                    <Image className="flex-shrink-0 shadow-lg rounded-lg" src={solution2} alt="" priority/>
                </div>
                <div className="mt-16 text-center relative">
                    <Button href="https://drive.google.com/file/d/1LM064RWbsDVRskhhvmcZxl4Bj9RwrpjR/view?usp=share_link"
                            target="_blank"
                            variant="outline"
                            color="blue"
                            className="flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        Descarcă propunerea completă
                    </Button>
                </div>
            </Container>
        </section>
    )
}
