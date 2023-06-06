import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Header } from '~/components';

describe('Header', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders header full', () => {
		render(<Header />);

		const link = screen.getByRole('link');

		expect(link).toBeInTheDocument();
	});
});
