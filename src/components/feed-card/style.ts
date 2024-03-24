import styled from 'styled-components';

export const Container = styled.div`
	background-color: var(--quaternary-color);
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	color: var(--septenary-color);
	box-shadow: 1px 1px 25px 1px rgba(210, 210, 210, 0.1);

	.top {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.top .user {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.top .user img {
		height: 45px;
		width: 45px;
		object-fit: cover;
		border-radius: 50%;
		border: 2px solid var(--septenary-color);
	}

	.top .user .date {
		color: var(--sextenary-color);
		font-weight: 200;
	}

	.top .description {
		width: 100%;
		margin: 1.5rem 0;
		font-style: italic;
		font-weight: 300;
	}

	.top .more {
		cursor: pointer;
	}

	.photo {
		height: 80vh;
	}

	.photo img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px;
	}

	.status {
		display: flex;
		justify-content: space-between;
		margin-top: 2rem;
	}

	.status .like {
		display: flex;
		gap: 1rem;
	}

	.status .like set-like {
		background-color: transparent;
		font-size: 1.2rem;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.status .like a.set-like > svg {
		color: var(--sextenary-color);
	}

	.status .like a.set-like:hover svg {
		color: var(--septenary-color);
		transition: all 0.3s ease;
		transform: scale(1.2);
	}

	.status .like .likes-number {
		font-weight: 900;
	}
`;
