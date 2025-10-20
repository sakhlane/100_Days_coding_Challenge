console.log('script is running')

// it logs a React object 
console.log(React);
// it logs the React DOM  or virtural dom 
console.log(ReactDOM);


// const h1 = React.createElement('h1',{id: 'heading1'},'heading one')
// console.log(h1)

// const h2 = React.createElement('h2',{id:'heading2'},'heading2')
// const root = ReactDOM.createRoot(document.querySelector('#root')) 
// console.log(root);

// root.render(h1);
// root.render(h2);

// =>  the abve code over ride the root element which is form h1 to h2 thats why it shows only h2 on the ui

const div = React.createElement('div',{id:'container'},
    React.createElement('h1',{id:'heading1'},'heading1'),
    React.createElement('h2',{id:'heading2'},'heading2',React.createElement('span',{id:'span'},'  am span'))
)

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(div)
