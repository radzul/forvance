import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }




  .item-view {
    height: 100%;
  }
  .tools-actions-view{
   position: fixed;
   display: flex;
   flex-direction: column;
   left: 0px;
   top: 0px;
   bottom: 0px;
   width: 70px;
   background: #343a40;
  }
  .tools-action-icon {
   font-size: 2rem;
   text-align: center;
   justify-content: center;
  }

  .actions-list-container .action-item{
   list-style: none;
  }

  .tools-actions-view .action-item .action-link  {
    font-size: 28px;
  }

  .actions-list-container{
    display: flex;
   margin: 0 auto;
   padding: 0;
   height: 100%;
   width: 100%;
   align-items: center;
  }

  .action-link {
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   padding: 4px;
   color: #868e96;
  }
  .action-link :hover {
   color: #e9ecef;
  }
  .actions-list-container.vertical {
    display: inline-block
  }

  .a-l-icon {
   display: inherit;

  }


`;
