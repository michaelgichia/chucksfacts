import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
    font-size: 16px;
    background-color: #f0f2f5;
  }

  body.fontLoaded {
    font-family: 'Delius Swash Caps', cursive, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
	a {
		text-decoration: none;
	}
  
  h6, h5, h4, h3, h2, h1, p { margin: 0 }
`;
