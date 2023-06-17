import { CartIcon, MapIcon } from '~/assets';
import { IconButton } from '~/components';
import { ApplicationPaths } from '~/utils';

const HeaderActions = () => {
	return (
		<div className="hidden md:flex flex-row gap-x-5">
			<IconButton href={ApplicationPaths.Home} Icon={CartIcon} outlined />
			<IconButton href={ApplicationPaths.Home} Icon={MapIcon} />
		</div>
	);
};

export default HeaderActions;
