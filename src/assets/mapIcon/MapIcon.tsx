import { IconProps } from '../types';

const MapIcon = ({ classes }: IconProps) => {
	return (
		<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={classes}>
			<path d="M24,4.5A14.82,14.82,0,0,0,9.18,19.32h0c0,.34,0,.68,0,1v.08C9.78,28.52,16.52,35.05,24,43.5,31.81,34.68,38.82,28,38.82,19.32h0A14.82,14.82,0,0,0,24,4.5Zm0,7.7a7.13,7.13,0,1,1-7.13,7.12A7.13,7.13,0,0,1,24,12.2Z" />
		</svg>
	);
};

export default MapIcon;