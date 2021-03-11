import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt , faFlag , faFutbol , faTransgender} from '@fortawesome/free-solid-svg-icons';
import './TeamDetail.css';
import maleImg from '../../images/male.png';
import femaleImg from '../../images/female.png';
import { SocialIcon } from 'react-social-icons';

const TeamDetail = () => {
    const {idTeam} = useParams();
    const [team , setTeam] = useState({});
    useEffect( () => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    }, [idTeam])
    return (
        <div>
            <div style={{ backgroundImage: `url(${team.strTeamBanner})`}}>
                <h1 className="text-center p-5">
                    <img className="img-fluid w-25" src={team.strTeamLogo} alt=""/>
                </h1>
            </div>
            <div className="bg-light">
                <div class="container bg-primary d-flex align-itme-center">
                    <div className="col-md-6 text-white p-4 info pt-5">
                        <h2>{team.strTeam}</h2>
                        <br/>
                        <h5><FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon> Founded: {team.intFormedYear}</h5>
                        <h5><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon> Founded: {team.strCountry}</h5>
                        <h5><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon> Sport Type: {team.strSport}</h5>
                        <h5><FontAwesomeIcon icon={faTransgender}></FontAwesomeIcon> Gender: {team.strGender}</h5>
                    </div>
                    <div className="col-md-6">
                        {
                            team.strGender === 'Male' ? <img alt="Male"
                            className="img-fluid p-3"
                            src={maleImg}/> : <img alt="Fimale"
                            src={femaleImg}/>
                        }
                    </div>
                </div>
            </div>
            <div className="container pt-4">
                <p>{team.strDescriptionEN}</p>
                <br/>
                <p>{team.strStadiumDescription}</p>
            </div>
            <div className="container text-center">
                <SocialIcon className="m-md-3 m-sm-1" url={team.strTwitter} />
                <SocialIcon className="m-md-3" url={team.strWebsite} />
            </div>
        </div>
    );
};

export default TeamDetail;