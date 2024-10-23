'use client';

import Link from 'next/link';
import styles from './Header.module.scss';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.title}>Fin Cottages</h1>
                <nav>
                    <ul className={styles.navList}>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/cottages">Cottages</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
