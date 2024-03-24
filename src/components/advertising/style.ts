import styled from 'styled-components';

export const Container = styled.div`
	margin-bottom: 2rem;

	.birthdays {
		display: flex;
		align-items: center;
		color: var(--sextenary-color);
		gap: 1rem;
		font-weight: 400;
		margin-bottom: 2rem;
	}

	.birthdays img {
		height: 80px;
	}

	.birthdays span {
		color: var(--septenary-color);
		font-weight: bold;
	}

	.add img {
		width: 100%;
		border-radius: 5px;
	}
`;
