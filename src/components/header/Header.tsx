import Image from 'next/image';
import Link from 'next/link';

import { CartIcon, MapIcon } from '~/assets';
import { ApplicationPaths } from '~/utils';

import IconButton from '../iconButton/IconButton';
import SearchBox from '../searchbox/SearchBox';

const Header = () => {
	return (
		<div className="flex flex-row items-center justify-center fixed w-full pt-4 md:p-4 md:justify-between md:border-b-2 md:border-slate">
			<Link className="hidden flex-row items-center max-w-xxs md:flex" href={ApplicationPaths.Home}>
				<span className="text-secondary font-semibold mr-2 text-xl">The Frugal Way</span>
				<Image src="/logos/kitten.svg" alt="Logo" width={30} height={30} />
			</Link>
			<SearchBox />
			<div className="hidden md:flex flex-row gap-x-5">
				<IconButton href={ApplicationPaths.Home} Icon={CartIcon} outlined />
				<IconButton href={ApplicationPaths.Home} Icon={MapIcon} />
			</div>
		</div>
	);
};

export default Header;
