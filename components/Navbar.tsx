"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react"

export default function Nav() {
    return (
        <Navbar shouldHideOnScroll isBordered>
            <NavbarBrand></NavbarBrand>
            <NavbarContent>
                <NavbarItem>
                    <Link href="#">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#">Locations</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#">Leadership</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#">About</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#">Contact</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button>
                        <Link href="#">Give</Link>
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}