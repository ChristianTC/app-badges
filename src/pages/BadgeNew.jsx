import React from 'react';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';

import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
    state = { form: {
        firstname: '',
        lastname: '',
        jobTitle: '',
        email: '',
        twitter: '',
    } };

    handleChange = e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;
        this.setState({
            form: { 
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt=""/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || "Christian"} 
                                lastName={this.state.form.lastName || "Tambo"} 
                                twitter={this.state.form.twitter || "@christiantambo"} 
                                jobTitle={this.state.form.jobTitle || "Frontend Developer"} 
                                avatarUrl="https://www.gravatar.com/avatar/27729f4e2e143f42dba6b578487e3788=https%3A%2F%2Fexample.com%2Fimages%2Favatar.jpg" 
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default BadgeNew;