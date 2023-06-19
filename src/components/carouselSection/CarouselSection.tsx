import { SectionCardImageProps } from '~/assets';

import { SectionCard, SectionTitle } from './components';

export type Section = {
	title: string;
	cards: SectionCardImageProps[];
};

const CarouselSection = ({ title, cards }: Section) => {
	return (
		<div className="flex flex-col">
			<SectionTitle title={title} />
			<div className="flex flex-row">
				{cards.map((card) => {
					return (
						<div key={card.title}>
							<SectionCard card={card} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CarouselSection;
