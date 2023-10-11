import {Hero} from '@/components/Hero'
import {Introduction} from '@/components/Introduction'
import {TownHallAnnouncement} from "@/components/TownHallAnnouncement";
import {OneYearLater} from "@/components/OneYearLater";
import {WhatCityHallOwes} from "@/components/WhatCityHallOwes";
import {RazoareYoutube} from "@/components/RazoareYoutube";
import {Footer} from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Hero/>
            <Introduction/>
            <RazoareYoutube />
            <OneYearLater />
            <WhatCityHallOwes />
            <Footer />
        </>
    )
}
