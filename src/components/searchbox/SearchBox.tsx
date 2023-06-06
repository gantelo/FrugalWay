'use client';

import { FormEvent } from 'react';

import { SearchButton, SearchInput } from './components';

const SearchBox = () => {
	const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className="relative flex-auto max-w-xl px-6">
			<form onSubmit={handleOnSubmit}>
				<div className="relative">
					<SearchInput />
					<SearchButton />
				</div>
			</form>
		</div>
	);
};

export default SearchBox;
