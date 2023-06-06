import Link from 'next/link';

import { IconProps } from '~/assets/types';
import { ApplicationPaths, ValueOf } from '~/utils';

type IconButtonProps = {
	href: ValueOf<typeof ApplicationPaths>;
	Icon: ({ classes }: IconProps) => JSX.Element;
	outlined?: boolean;
};

const IconButton = ({ href, Icon, outlined }: IconButtonProps) => {
	const actionClasses = outlined
		? 'stroke-secondary hover:stroke-secondaryLight fill-none'
		: 'fill-secondary hover:fill-secondaryLight';

	return (
		<Link href={href}>
			<Icon classes={`h-10 w-10 ${actionClasses}`} />
		</Link>
	);
};

export default IconButton;
