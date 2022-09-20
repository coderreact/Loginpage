import React from "react";

class Validation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: {}
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    formValidation = () => {
        const { username, password } = this.state;
        let isValid = true;
        const errors = {};

        if (!username) {
            errors.username = "Enter name";
            isValid = false;
        }
       

        if (!password) {
            errors.password = "Enter password";
            isValid = false;
        }
        this.setState({ errors });
        return isValid;
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const isValid = this.formValidation();
        if (isValid){
        console.log("onSubmit" + this.state.username + this.state.password);
        this.setState({ username : "" , password : "", errors:{} })
    }
    }

    render() {
        const { username, password, errors } = this.state;
        return (
            <React.Fragment>
                <h1>React Validate page</h1>
                <form onSubmit={this.onSubmit}>
                    {Object.keys(errors).map((key) => {
                        return <div style={{ color: 'red' }} key={key}>{errors[key]}</div>
                    })}


                Name:<input type="text" name="username" value={username} onChange={this.onChange.bind(this)} /><br />
                Password:<input type="text" name="password" value={password} onChange={this.onChange.bind(this)} /><br />
                  <br/>  <input type="submit" value="Login" />

                </form>
            </React.Fragment>
        );
    }
}
export default Validation;