import {Container} from "@/components/Container";
import {SectionHeading} from "@/components/SectionHeading";
import Youtube from "@/components/Youtube";

export function RazoareYoutube() {
 return (
     <section
         id="razoare-street"
         className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
     >
         <Container>
             <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                 Rezultatul:
             </p>
             <div className="mt-8 flex justify-center">
                 <Youtube/>
             </div>
         </Container>
     </section>
 )
}