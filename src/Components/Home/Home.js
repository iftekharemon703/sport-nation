import { useEffect } from 'react';
import { useState } from 'react';
import Team from '../Team/Team';
import heroImg from '../../images/heroImg.jpg';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams.slice(0 , 15)))
    }, [])
    return (
        <div className="heroArea">
            <div style={{ backgroundImage: `url(${heroImg})`}}>
                <h1 className="text-center p-5 text-danger">Sport Nation</h1>
            </div>
            {
                teams.map(team =>  <Team team={team}></Team>)
            }
        </div>
    );
};

export default Home;