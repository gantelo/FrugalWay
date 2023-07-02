import Image from 'next/image';

export type SectionCardImageProps = {
	imagePath: string;
	title: string;
	textColor?: string;
	fill?: string;
};

const SectionCardImage = ({ imagePath, textColor, fill = '#b0df82', title }: SectionCardImageProps) => {
	return (
		<div className="w-64 h-32 flex ">
			<svg width="239" height="133" viewBox="0 0 239 133" style={{ fill }} xmlns="http://www.w3.org/2000/svg">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M235 1H4C2.34315 1 1 2.34315 1 4V129C1 130.657 2.34314 132 4 132H235C236.657 132 238 130.657 238 129V4C238 2.34314 236.657 1 235 1ZM4 0C1.79086 0 0 1.79086 0 4V129C0 131.209 1.79086 133 4 133H235C237.209 133 239 131.209 239 129V4C239 1.79086 237.209 0 235 0H4Z"
					fillOpacity="0.6"
				/>
				<path
					d="M237.801 1.99771C237.784 2.02956 237.765 2.06422 237.745 2.10164C237.616 2.34201 237.425 2.69632 237.176 3.15286C236.678 4.06591 235.95 5.3879 235.025 7.02514C233.177 10.2994 230.546 14.8355 227.415 19.8835C221.158 29.9704 212.884 42.1347 204.858 50.3494C193.729 61.7388 175.391 70.2301 154.23 77.1339C133.249 83.9788 109.415 89.2868 86.9262 94.2951L86.3001 94.4346C63.6106 99.4878 42.3501 104.244 26.7601 109.98C18.9639 112.849 12.6254 115.949 8.24398 119.429C3.86643 122.905 1.5 126.71 1.5 131H1L2.5 132.5H236L238.5 130.5V3.15286L237.801 1.99771Z"
					fillOpacity="0.6"
				/>
			</svg>

			<span
				className="absolute font-semibold text-xl text-primary"
				style={{ marginLeft: 25, marginTop: 15, color: textColor }}
			>
				{title}
			</span>

			<Image
				className="absolute"
				style={{ marginLeft: 170, marginTop: 70 }}
				src={imagePath}
				alt="Lettuce"
				width={60}
				height={60}
			/>
		</div>
	);
};

export default SectionCardImage;
