import { SearchBox } from '..';
import { HeaderActions, HeaderTitle } from './components';

const Header = () => {
	return (
		<div className="flex flex-row items-center justify-center fixed w-full pt-4 md:p-4 md:justify-between md:border-b-2 md:border-slate">
			<HeaderTitle />
			<SearchBox />
			<HeaderActions />
		</div>
	);
};

export default Header;
