import React from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './Team.css';

const Team = (props) => {
    const {strTeamLogo, strTeam , strSport , idTeam} = props.team;
    return (
        <div className="bg-primary">
            <div className="container">
                <div className="row team">
                    <div className="col-md-3 bg-light m-2 p-4 team">
                        <div className="text-center">
                            <img src={strTeamLogo} class="card-img-top" alt=""/>
                            <h5 class="card-title">{strTeam}</h5>
                            <p class="card-text">{strSport}</p>
                            <Link to={`/team/${idTeam}`}> 
                                <button className="btn btn-primary">
                                    Explore <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;