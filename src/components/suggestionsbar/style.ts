import styled from 'styled-components';

export const Container = styled.div`
	background-color: var(--quaternary-color);
	padding: 2rem 0.8rem;
	border-radius: 5px;
	height: fit-content;
	position: sticky;
	top: 7.5rem;
	overflow-y: scroll;

	.top {
		display: flex;
		width: 100%;
		justify-content: space-between;
		border-bottom: 1px solid var(--sextenary-color);
		margin-bottom: 2rem;
		padding-bottom: 1rem;
	}

	.top h3 {
		font-weight: bold;
		color: var(--sextenary-color);
	}

	.top span {
		color: var(--sextenary-color);
		cursor: pointer;
	}

	.users {
		flex: 2;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
`;
