import Footer from "@/components/footer";
import Navigation from "@/components/navigation";


export default function Homelayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Navigation />
            <div className="">
                {children}
            </div>
            <Footer />
        </div >
    );
}
