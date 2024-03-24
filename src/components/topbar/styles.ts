import styled from 'styled-components';

export const Container = styled.div`
	background-color: var(--tertiary-color);

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.8rem 0;
	}
`;

export const SearchBar = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	.logo img {
		height: 50px;
	}

	form {
		display: flex;
		height: 35px;
	}

	form input,
	form button {
		height: 100%;
		border: 1px solid var(--sextenary-color);
		background-color: transparent;
		transition: all 0.5s ease;
	}

	form input {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		outline: none;
		padding: 0.3rem 0.3rem 0.3rem 0.5rem;
		color: var(--septenary-color);
		font-size: 1rem;
	}

	form input::placeholder {
		color: var(--sextenary-color);
	}

	form input:focus {
		border-color: var(--septenary-color);
	}

	form button {
		border-left: none;
		padding: 0 0.8rem;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		cursor: pointer;
		background-color: var(--sextenary-color);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.3rem;
	}

	form button:hover {
		background-color: var(--septenary-color);
	}
`;

export const Menu = styled.div`
	display: flex;
	gap: 2rem;
	font-size: 1.5rem;

	a {
		color: var(--sextenary-color);
		transition: all 0.3s ease-in;
	}

	a:hover {
		color: var(--septenary-color);
	}

	a:hover svg {
		transition: all 0.3s ease-in;
		transform: scale(1.4);
	}
`;

export const Profile = styled.div`
	.user {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.user img {
		height: 50px;
		width: 50px;
		border-radius: 50%;
		border: 2px solid var(--septenary-color);
		object-fit: cover;
	}

	.user span {
		color: var(--sextenary-color);
		font-weight: 500;
		font-size: 1.1rem;
	}
`;
