import React from 'react';
import Link from 'next/link';

export default function Nav(props) {
    return (
        <nav>
            <Link href={'/'}>
                <a>Index</a>
            </Link>
            <Link href={'/test/1'}>
                <a>Test1</a>
            </Link>
            <Link href={'/test/2'}>
                <a>Test2</a>
            </Link>
        </nav>
    );
}
