import { CarouselSection, Section } from '~/components';

const MOCK_SECTIONS: Section[] = [
	{
		title: 'Categories',
		cards: [
			{
				imagePath: '/categories/lettuce.png',
				fill: '#b0df82',
				textColor: '#406c14',
				title: 'Vegetables',
			},
			{
				imagePath: '/categories/meat.png',
				fill: '#AA3C3B',
				textColor: '#693d3d',
				title: 'Meat',
			},
		],
	},
];

const getData = async (): Promise<Section[]> => {
	return Promise.resolve(MOCK_SECTIONS);
};

export default async function Home() {
	const sections = await getData();

	return (
		<main className="flex min-h-screen flex-col pt-32">
			{sections.map((section) => (
				<CarouselSection {...section} key={section.title} />
			))}
		</main>
	);
}
