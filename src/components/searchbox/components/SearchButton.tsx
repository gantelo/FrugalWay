import { SearchIcon } from '~/assets';

const SearchButton = () => {
	return (
		<button
			type="submit"
			className="absolute right-4 top-1/3 fill-primaryLight peer-focus:fill-primary"
			aria-label="Search Button"
		>
			<SearchIcon classes="h-4 w-4" />
		</button>
	);
};

export default SearchButton;
