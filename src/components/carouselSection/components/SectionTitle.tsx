import { CaretIcon } from '~/assets';

const SectionTitle = () => {
	return (
		<div className="flex text-lg text-black font-semibold ml-8 items-center">
			<div>Categories</div>
			<CaretIcon classes="ml-2 h-4 w-4 -rotate-90 fill-black" />
		</div>
	);
};

export default SectionTitle;
