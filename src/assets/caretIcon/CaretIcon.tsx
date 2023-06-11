import { IconProps } from '../types';

const CaretIcon = ({ classes }: IconProps) => {
	return (
		<svg className={classes} viewBox="0 0 256 256">
			<path d="M128,188a11.96187,11.96187,0,0,1-8.48535-3.51465l-80-80a12.0001,12.0001,0,0,1,16.9707-16.9707L128,159.0293l71.51465-71.51465a12.0001,12.0001,0,0,1,16.9707,16.9707l-80,80A11.96187,11.96187,0,0,1,128,188Z" />
		</svg>
	);
};

export default CaretIcon;
