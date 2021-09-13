import Category1 from "./utils/Category1"
import Collection from "./utils/Collection"
import Featured from "./utils/Featured"
import Footer from "./utils/Footer"
import HeaderOne from "./utils/HeaderOne"
import Home from "./utils/Home"
import NewCollection from "./utils/NewCollection"
import Newsletter from "./utils/Newsletter"

const Body = () => {
    return (
        <main className='l-main'>
            <HeaderOne/>
            <Home/>
            <Featured/>
            <Collection/>
            <Category1/>
            <NewCollection/>
            <Newsletter/>
            <Footer/>
        </main>
    )
}

export default Body
