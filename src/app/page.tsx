import { CarouselSection, Section } from '~/components';

const MOCK_SECTIONS: Section[] = [
	{
		title: 'Categories',
		cards: [
			{
				imagePath: '/categories/lettuce.png',
				title: 'Vegetables',
			},
			{
				imagePath: '/categories/apple.png',
				title: 'Fruits',
			},
			{
				imagePath: '/categories/fish.png',
				title: 'Fish & Others',
			},
			{
				imagePath: '/categories/bottle.png',
				title: 'Drinks',
			},
			{
				imagePath: '/categories/meat.png',
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
