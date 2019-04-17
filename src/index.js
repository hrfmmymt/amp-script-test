import {html, render} from 'lit-html';

const doRender = () => {
  render(
    html`
      <p>hello, this is my custom component</p>
    `,
    document.getElementById('container')
  );
};

doRender();
