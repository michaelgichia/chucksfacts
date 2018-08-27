import styled from 'styled-components';

export const AppBar = styled.nav`
	display: flex;
	height: 70px;
	width: 100%;
	background-color: #001529;
	color: #fff;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30px;
	padding: 15px;
	font-weight: 700;
	letter-spacing: 1px;
	word-spacing: 1px;

	a {
		color: #fff;
		font-size: 24px;
	}
`;

export const Footer = styled.footer`
	margin: 15px;
	min-height: 70px;
	color: #d9d9d9
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	a {
		display: block;
		font-size: 18px;
	}
`