import React from 'react';
import header from '../images/platziconf-logo.svg';

import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import api from '../api';

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

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading:true, error: null })
        try {
            await api.badges.create(this.state.form)
            this.setState({ loading:false })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    } 

    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt=""/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || "FIRST_NAME"} 
                                lastName={this.state.form.lastName || "LAST_NAME"} 
                                twitter={this.state.form.twitter || "twitter"} 
                                jobTitle={this.state.form.jobTitle || "Job_Title"} 
                                email={this.state.form.email || "Email"} 
                                avatarUrl="https://www.gravatar.com/avatar/27729f4e2e143f42dba6b578487e3788=https%3A%2F%2Fexample.com%2Fimages%2Favatar.jpg" 
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form} 
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
} 

export default BadgeNew;