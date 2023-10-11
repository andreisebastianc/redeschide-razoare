import Link from "next/link";
import {Button} from "@/components/Button";

export function Footer() {
    return (
        <footer className="pb-20 pt-5 sm:pb-32 sm:pt-14">
            <div className="text-center text-sm text-slate-600 flex gap-2 justify-center">
                <p>
                    <Link
                        href="#"
                        className="mt-6 text-blue-600 underline hover:text-blue-800"
                    >
                        Semnează petiția
                    </Link></p>
                <p>
                    <Link href="https://www.facebook.com/groups/341837508295570"
                          target="_blank"
                          className="mt-6 text-blue-600 underline hover:text-blue-800"
                    >
                        Înscrie-te în grup
                    </Link>
                </p>
            </div>
        </footer>
    )
}
