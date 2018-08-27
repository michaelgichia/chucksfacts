import styled from 'styled-components';

export const Card = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 200px;
	width: 100%;
	border-radius: 6px;
	margin-bottom: 30px;
  transform: translateZ(0px);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 6px;
  transition: transform 0.3s ease-in-out 0s;

	&:hover {
		transform: translate(0px, -3px);
		box-shadow: rgba(49, 56, 62, 0.5) 0px 0px 6px;
	}

 	h1 {
		color: #fff;
		letter-spacing: 2px;
		text-transform: capitalize;
		font-family: 'Delius Swash Caps', cursive;	
	}


	p {
		color: #fafafa;
		transform: translateY(0);
		transition: all 0.3s ease-in-out;
	}

	&:hover > p {
		transform: translateY(-4px);
	}
`

export const Description = styled.p`
	width: 100%;
	text-align: center;
	color: #31383e;
	margin-bottom: 15px;
	padding: 0 15px 15px;
`

export default Card;
