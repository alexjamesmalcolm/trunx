import React, { useState } from 'react';
import { Navbar } from 'trunx';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { route } from '../routes/routes';
import { navContents } from '../helpers/navContent';

const Nav = (): JSX.Element => {
    const router = useRouter();

    const { pathname } = router;

    const [expanded, setExpanded] = useState<boolean>(false);
    const [redirect, setRedirect] = useState<string | null>(null);

    const redirectTo = (wantedPathname: string) => (): void => {
        if (pathname !== wantedPathname) {
          setRedirect(wantedPathname)
        }
    }
    const onClickBurger = (): void => {
        setExpanded(!expanded)
    }

    if (typeof redirect === 'string') {
        router.push(redirect);
    }
    return (
        <Navbar isPrimary>
            <Navbar.Brand>
                <Navbar.Item 
                    onClick={redirectTo(route.home)}
                >
                    <Image 
                        src='/assets/trunx-logotype-white.png' 
                        alt="me" 
                        width="100" 
                        height="100" 
                    />
                </Navbar.Item>
                <Navbar.Burger 
                    isActive={expanded} 
                    onClick={onClickBurger} 
                />
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Start>
                    {navContents.map(({ label, items }, i) => (
                        <Navbar.Item hasDropdown isHoverable key={i}>
                        <Navbar.Link>{label}</Navbar.Link>

                        <Navbar.Dropdown>
                            {items.map(({ label, route }, i) => (
                            <Navbar.Item
                                isActive={route === pathname}
                                key={i}
                                onClick={redirectTo(route)}
                            >
                                {label}
                            </Navbar.Item>
                            ))}
                        </Navbar.Dropdown>
                        </Navbar.Item>
                ))}
                </Navbar.Start>
            </Navbar.Menu>
        </Navbar>
    )
}

export default Nav;