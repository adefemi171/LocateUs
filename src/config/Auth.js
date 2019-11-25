// import * as React from 'react';
// export default class App extends React.Component {
//     state={
//         jsonData: '',
//     };
//     componentDidMount() {
//         fetch('159.203.70.113', {
//             method: 'POST'
//         })
//         .then(response => response.json())
//         .then(json => {
//             this.setState({
//                 jsonData: json.body,
//             });
//         })
//         .catch(error => {
//             console.error(error);
//         });
//     }
// }

import * as axios from 'axios';

const instance = axios.create({
    baseURL: "159.203.70.113:3300"
});

export default instance;
