import { SectionCardImage, SectionCardImageProps } from '~/assets';

type SectionCardProps = {
	card: SectionCardImageProps;
};

const SectionCard = ({ card }: SectionCardProps) => {
	return (
		<div className="ml-5 mt-3">
			<SectionCardImage {...card} />
		</div>
	);
};

export default SectionCard;
