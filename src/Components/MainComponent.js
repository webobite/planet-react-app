import React, {useEffect, useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Loader from 'react-loader-spinner';
import CheckBoxListComponent from './CheckBoxListComponent';
import ListComponent from './ListComponent';


const MainComponent = (props) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPlanet, setSelectedPlanet] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const res = await fetch(
                `https://assignment-machstatz.herokuapp.com/planet`
            );
            const resJSON = await res.json();
            setData(resJSON);

            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading)
        return (
            <div>
                <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={10000} //3 secs

                />
            </div>
        );

    return (
        <Tabs>
            <TabList>
                <Tab>All Planets List</Tab>
                <Tab>Faviorate Planets</Tab>
            </TabList>

            <TabPanel>
                <h2>Select Planets</h2>
                <CheckBoxListComponent options={data} onChange={(data) => {
                    setSelectedPlanet(data)
                    // console.log(data);
                }} />
            </TabPanel>
            <TabPanel>
                <h2>Your Selections</h2>
                {/* TODO : Change the data --> selectedPlanetData */}
                <ListComponent optionSelected={selectedPlanet} />
            </TabPanel>
        </Tabs>
    )
}

export default MainComponent
