import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--sextenary-color);

	.user-id {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.user-id img {
		height: 40px;
		width: 40px;
		object-fit: cover;
		border-radius: 50%;
		border: 2px solid var(--sextenary-color);
	}
`;
