import Image from 'next/image';
import Link from 'next/link';

import { ApplicationPaths } from '~/utils';

import SearchBox from '../searchbox/SearchBox';

const Header = () => {
	return (
		<div className="flex flex-row items-center justify-center fixed w-full pt-4 md:p-4 md:justify-between md:border-b-2 md:border-primaryLight">
			<Link className="hidden flex-row items-center max-w-xxs md:flex" href={ApplicationPaths.Home}>
				<Image src="/logos/kitten.svg" alt="Logo" width={30} height={30} />
				<span className="text-black font-semibold ml-2">The Frugal Way</span>
			</Link>
			<SearchBox />
		</div>
	);
};

export default Header;
