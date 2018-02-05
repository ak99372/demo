import * as React from 'react';


interface IEventTrigger {
    somedata: any;
}

var DataSource:any;

function registerComponentForEvent<IEventXTrigger>(WrappedComponent, callback) {

    return class extends React.Component<any,any> {
        constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
          this.state = {
            data: callback(DataSource, props)
          };
        }
    
        componentDidMount() {
          // ... that takes care of the subscription... 
          DataSource.addChangeListener(this.handleChange);
        }
    
        componentWillUnmount() {
          DataSource.removeChangeListener(this.handleChange);
        }
    
        handleChange() {
          this.setState({
            data: callback(DataSource, this.props)
          });
        }
    
        render() {
          // ... and renders the wrapped component with the fresh data!
          // Notice that we pass through any additional props
          return <WrappedComponent data={this.state.data} {...this.props} />;
        }
      };

}

function mapStateToProps(state) {
    return {
        //Comment here 
    };
}

class componentName extends React.Component {
    render() {
        return (
            <div>Hello Ya </div>
        );
    }
}




export default componentName;
