import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

type HeaderProps = {
  children: React.ReactNode;
};

/**
 * ヘッダーコンポーネント
 * @param props
 */
const Header: React.FC<HeaderProps> = (props) => {
  const { children } = props;

  return (
    <>
      <header className="w-full flex p-2 px-12 justify-between items-center sticky">
        <div className="flex justify-start items-center gap-6">
          <Link href="/">
            <Image src="/digg_13171628.png" alt="header_logo" width={40} height={40} />
          </Link>
          <div className="flex justify-between items-center gap-2">
            <Link href="/">
              <Button variant="link">HOME</Button>
            </Link>
            <Link href="/">
              <Button variant="link">HOME</Button>
            </Link>
            <Link href="/">
              <Button variant="link">HOME</Button>
            </Link>
          </div>
        </div>
        <div>
          <Link href="https://github.com/happymgr-s">
            <Image width={20} height={20} src="/github-mark.png" alt="github_page" />
          </Link>
        </div>
      </header>
      {children}
    </>
  );
};

export default Header;
