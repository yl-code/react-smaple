import './index.css';

import { ReactDOM } from './my-react/ReactDOM';

// function FuncComponent({ name }) {
//   return (
//     <div className='border'>
//       <p>{name}</p>
//     </div>
//   );
// }

// class ClassComponent extends Component {
//   render() {
//     const { name } = this.props;
//     return (
//       <div className='border'>
//         <p>{name}</p>
//       </div>
//     );
//   }
// }

const jsx = (
  <div className='border'>
    <h1>my-react</h1>
    <a href='/'>link</a>

    {/* <FuncComponent name='function' /> */}
    {/* <ClassComponent name='class' /> */}
  </div>
);

ReactDOM.render(jsx, document.querySelector('#root'));
