import { Outlet } from "react-router";
import { Header } from "./header/header.tsx";
import { Nav } from "./navigation/Navigation.tsx";
import { Footer } from "./footer/footer.tsx";

export function Layout() {
    return (
        <>
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}
