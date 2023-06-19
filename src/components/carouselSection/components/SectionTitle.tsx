import { CaretIcon } from '~/assets';

type SectionTitleProps = {
	title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
	return (
		<div className="flex text-lg text-black font-semibold ml-8 items-center">
			<div>{title}</div>
			<CaretIcon classes="ml-2 h-4 w-4 -rotate-90 fill-black" />
		</div>
	);
};

export default SectionTitle;
