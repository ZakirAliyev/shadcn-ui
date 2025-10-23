import {DropdownMenuDemo} from "../../../components/shadcnui/DropDownMenu/index.jsx";
import DataTableDemo from "../../../components/shadcnui/DataTable/index.jsx";
import {NavigationMenuDemo} from "../../../components/shadcnui/Navigation/index.jsx";
import ChartAreaGradient from "../../../components/shadcnui/AreaChart/index.jsx";
import SonnerDemo from "../../../components/shadcnui/Sonner/index.jsx";
import Footer from "../../../components/shadcnui/Footer/index.jsx";
import Navbar from "../../../components/shadcnui/Navbar/index.jsx";
import Faq from "../../../components/shadcnui/Faq/index.jsx";

function HomePage() {
    return (
        <section id={"homePage"} className={"px-4"}>
            <div className={"container"}>
                <Navbar/>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: '16px',
                }}>
                    <DropdownMenuDemo/>
                    <SonnerDemo/>
                </div>
                <DataTableDemo/>
                <div className={"row"}>
                    <div className={"col-4 col-md 4 col-sm-12 col-xs-12"}>
                        <ChartAreaGradient/>
                    </div>
                    <div className={"col-4 col-md 4 col-sm-12 col-xs-12"}>
                        {/*<CarouselDemo/>*/}
                        <ChartAreaGradient/>
                    </div>
                    <div className={"col-4 col-md 4 col-sm-12 col-xs-12"}>
                        <ChartAreaGradient/>
                    </div>
                </div>
                <Faq/>
                <Footer/>
            </div>
        </section>
    );
}

export default HomePage;