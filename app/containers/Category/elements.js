import styled from 'styled-components'

export const CategoryCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	max-width: 768px;
	min-height: 450px;
	border-radius: 6px;
	overflow: hidden;
	position: relative;
	box-sizing: border-box;
	margin: 0 7px;

	h3 {
		color: #fff;
		font-size: 24px;
		font-weight: 500;
		font-family: 'Delius Swash Caps', cursive;
		width: 100%;
		text-align: center;
		padding: 0 15px;
	}

	h3:before {
	  color: #fff;
	  content: '"';
	  font-size: 4em;
	  line-height: 0.1em;
	  margin-right: 15px;
	  vertical-align: -0.4em;
	}

	.label {
		color: #fff;
		width: 100%;
		text-align: right;
		padding: 15px 30px;
	}

	img {
	  position: absolute;
	  top: 15px;
	  right: 15px;
	}
`

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`

export const Loading = styled.p`
	width: 100%;
	text-align: center;
	color: #fff;
`

export const ButtonWrapper = styled.div`
	border-top: 2px solid #fff;
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 15px;

	button {
		width: 150px;
		padding: 6px 22px;
		border-radius: 4px;
		border: 1px solid #fff;
		color: #fff;
		font-size: 18px;
		font-weight: 500;
		margin-right: 30px;
		cursor: pointer;
	}

	[disabled] {
    color #fdfdfd;
    border-color: #d9d9d9;
    cursor: not-allowed;
	}
`

export default CategoryCard;