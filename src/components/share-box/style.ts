import styled from 'styled-components';

export const Container = styled.div`
	background-color: var(--quaternary-color);
	border-radius: 5px;
	padding: 1rem;
	color: var(--sextenary-color);

	.top {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		border-bottom: 1px solid var(--septenary-color);
		padding-bottom: 2rem;
		margin-bottom: 2rem;
	}

	.top img {
		height: 60px;
		width: 60px;
		object-fit: cover;
		border-radius: 50%;
		border: 2px solid var(--sextenary-color);
	}

	.top .share-form {
		width: 100%;
	}

	.top .share-form input {
		font-size: 1.1rem;
		color: var(--septenary-color);
		background-color: transparent;
		width: 100%;
		height: 40px;
		border: 1px solid var(--quintennial-color);
		outline: none;
		padding: 0.5rem;
		border-radius: 5px;
	}

	.top .share-form input:focus {
		border-color: 1px solid var(--sextenary-color);
	}

	.options {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.options .icon {
		display: flex;
		cursor: pointer;
		gap: 0.5rem;
		font-size: 1.2rem;
		font-weight: 500;
		transition: all 0.3s ease;
	}

	.options .icon:hover {
		color: var(--septenary-color);
		transform: scale(1.1);
	}
`;
