import Image from 'next/image';
import Link from 'next/link';

import { ApplicationPaths } from '~/utils';

const HeaderTitle = () => {
	return (
		<Link className="hidden flex-row items-center max-w-xxs md:flex" href={ApplicationPaths.Home}>
			<span className="text-secondary font-semibold mr-2 text-xl">The Frugal Way</span>
			<Image src="/logos/kitten.svg" alt="Logo" width={30} height={30} />
		</Link>
	);
};

export default HeaderTitle;
