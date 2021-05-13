import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    imageUrl: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3']
  };

  // constructor() {
  //   // constructor is a method that is called when a class object is created.. must use "super()" to inherit parent element properties and have access to 'this' you can use this approach as an alternative to the handleIncrement arrow function.
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  styles = {
    boxShadow: "1px 1px 5px #9E9E9E",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>

    return  <ul style={{listStyle: 'none'}}>
    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
  </ul>
  }

  handleIncrement = () => {
    console.log('Increment Clicked', this);
    this.setState({count: this.state.count + 1});
  }

  render() {

    return (
      <React.Fragment>
        {/* <img className="m-2" style={this.styles} src={this.state.imageUrl} alt=""/> */}
        {this.props.children}
        <span style={ {fontSize: 20}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-tertiary btn-sm">Increment</button>
        <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        {/* below is optional conditional rendering using truthy/falsey. 1st half of mustache is condition/if statement, second half is what we want to render in plain text or jsx experession */}
        {/* {this.state.length === 0 && "Please create a new tag"} */}
       {/* {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
