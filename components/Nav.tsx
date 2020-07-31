import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

export default function Nav(props) {
    return (
        <NavWrap>
            <NavItem>
                <Link href={'/'}>
                    <a>Index</a>
                </Link>
            </NavItem>
            <NavItem>
                <Link href={'/test/1'}>
                    <a>Test1</a>
                </Link>
            </NavItem>
            <NavItem>
                <Link href={'/test/2'}>
                    <a>Test2</a>
                </Link>
            </NavItem>
        </NavWrap>
    );
}

const NavWrap = styled.nav`
    display: flex;
    padding: 10px;
    background: #eee;
`;

const NavItem = styled.div`
    margin: 0 10px;
`;
