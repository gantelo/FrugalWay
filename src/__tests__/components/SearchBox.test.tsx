import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { SearchBox } from '~/components';

describe('SearchBox', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders searchbox', () => {
		render(<SearchBox />);

		const searchBox = screen.getByRole('textbox');

		expect(searchBox).toBeInTheDocument();
	});

	it('submits searchbox, nothing happens (yet)', () => {
		render(<SearchBox />);

		const textBox = screen.getByRole('textbox');
		fireEvent.change(textBox, { target: { value: 'example search' } });
		const submitButton = screen.getByLabelText('Search Button');

		fireEvent.click(submitButton);
	});
});
