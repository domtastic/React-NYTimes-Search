import React, { Component } from 'react';
import './NYTSearch.css';

class NYTSearch extends Component {
    render() {
        return (
            <div className="NYTSearch">
                <div className="jumbotron text-center animated fadeInDown">
                    <h1 className="display-3">
                        <i className="fa fa-newspaper-o"></i>&nbsp;New York Times Search</h1>
                </div>
                <div className="container-fluid animated fadeInUp">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card mb-5">
                                <div className="card-header">
                        <span className="lead">
                            <i className="fa fa-list-alt"></i>&nbsp;&nbsp;Search Parameters</span>
                                </div>
                                <div className="card-body animated">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="searchTerm">Search Term:</label>
                                            <input type="text" className="form-control" id="searchTerm" required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="numberRecords">Number of Records to Retrieve:</label>
                                            <select className="custom-select form-control" id="numberRecords">
                                                <option value="1">1</option>
                                                <option value="5" selected>5</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="startYear">Start Year (Optional):</label>
                                            <input type="text" className="form-control" id="startYear"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="endYear">End Year (Optional):</label>
                                            <input type="text" className="form-control" id="endYear"/>
                                        </div>
                                        <div className="text-center">
                                            <button id="searchBtn" type="submit" className="btn btn-primary">
                                                <i className="fa fa-search"></i>&nbsp;Search
                                            </button>
                                            <button id="clearBtn" className="btn btn-primary">
                                                <i className="fa fa-trash"></i>&nbsp;Clear Results
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animated">
                            <div className="card mb-5">
                                <div className="card-header">
                        <span className="lead">
                            <i className="fa fa-table"></i>&nbsp;&nbsp;Top Articles</span>
                                </div>
                                <div className="card-body" id="queryResults">

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default NYTSearch;
