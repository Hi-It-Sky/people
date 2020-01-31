'use strict';

const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }
// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);

// class Searchbox extends React.Component {
//    constructor(props) {
//        super(props);
//    }
//    render() {
//        return (<input onKeyUp= { (e) => {if(e.keyCode === 13){ ReactDOM.render (
//            <ProductList search="samsung"/>, document.querySelector('#results')
//                 ) } }}/>  );
//    }
// }

class PeopleList extends React.Component {
   constructor(props) {
       super(props);
       this.people=[{name:"Joe Smith",phone: "1234",email:"joe@company.com"},{name:"Tim Jones",phone: "1235",email:"tim@company.com"},{name:"Sue Smith",phone: "1236",email:"sue@company.com"},{name:"Simon Batty",phone: "6155551212",email:"sbatty@contractor.com"}];
       this.state = { sort: 'none' };
       this.filter = { filter: '' };
   }

   handleChange(event) {
    this.setState({filter: event.target.value});
  }

    render() {
      var outpeople=this.people;
      if(this.state.filter){
        var t=[];
        var f=this.state.filter.toLowerCase();
        for(var i=0;i<outpeople.length;i++){
          if(outpeople[i].name.toLowerCase().includes(f)||outpeople[i].phone.toLowerCase().includes(f)||outpeople[i].email.toLowerCase().includes(f)){
            t.push(outpeople[i]);
          }
        }
        outpeople=t;
      }
      if(this.state.sort!='none'){
        outpeople= [].concat(this.people)
        .sort((a, b) => a[this.state.sort] > b[this.state.sort]);
      }
      return(
        <div>
        <span class="tiptext">Click on head to sort</span>
        <table class="people">
          <thead>
            <tr><th onClick={() => this.setState({ sort: 'name' })}>Name</th><th onClick={() => this.setState({ sort: 'phone' })}>Phone</th><th onClick={() => this.setState({ sort: 'email' })}>email</th></tr>
          </thead>
          <tbody>
            {outpeople.map(item => (
              <tr><td>{item.name}</td>
                <td>{item.phone}</td><td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <span class="tiptext">Enter text to filter: <input type="text" value={this.state.filter} onChange={this.handleChange.bind(this)} /></span>
            
         </div>
      );
    }

}

const domContainer = document.querySelector('#app_container');
ReactDOM.render(e(PeopleList), domContainer);

//const domContainer2 = document.querySelector('#search');
//ReactDOM.render(e(Searchbox), domContainer2);
