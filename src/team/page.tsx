
import './Team.css'
import { LinkedinIcon } from "react-share";
import { Link } from 'react-router-dom'
import React, { useEffect }  from 'react';
interface ListTeam {
    nom: string;
    function: string;
    img : string;
    social : string;
}

export default function Team() {

    const listCardTeam : ListTeam[] = [
        {nom : "Hugo SEQUIER", function : "Founder", img : "./Team/HugoSequier.jpg", social : "https://www.linkedin.com/in/hugo-sequier/"}
    ]

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <>
        <div className={"team-title"}>
            <h1>
                Team
            </h1>
            <p>Currently, I am the sole contributor to the Trophē project, dedicating my time and efforts to bring my vision to life.
                 As I continue to make significant progress towards my goals, I plan to expand the team. Once the project reaches a more advanced stage, 
                I will be seeking passionate and skilled individuals to join me. This will help to accelerate our progress and ensure that Trophē evolves into a robust and innovative platform.</p>
        </div>
        <div className={"team-section"}>
            <div>
                <div className={"team-sectionTeamCard"}>
                {listCardTeam.map((value, index) => {
                    return (
                        <div key={index} className={"team-teamCard"}>
                            <img src={value.img} width={347.4} height={463.2} alt={value.nom}/>
                            <div>
                                <div>
                                    <h1>{value.nom}</h1>
                                    <h2>{value.function}</h2>
                                </div>
                                <LinkedinIcon size={32} round onClick={() => window.open("https://www.linkedin.com/in/hugo-sequier/", "_blank")}/>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <div>
                <p>
                    My name is <strong>Hugo SEQUIER</strong>, a 22-year-old French student based in Paris, currently working as a Data Scientist apprentice in the construction industry. 
                    I am deeply passionate about new technologies and am committed to contributing to the ongoing revolution within this ever-evolving ecosystem.
                    <br />
                    <br />
                    I aim to democratize access to advanced technologies and redefine how individuals and businesses interact with these powerful tools. 
                    Alongside my professional work, I am pursuing studies in Data Science and Artificial Intelligence, equipping myself to lead innovative and ambitious projects in the future.
                    <br />
                    <br />
                    In 2021, I discovered cryptocurrencies from a builder's perspective, learning to use Solidity for smart contract development. However, I decided to refocus on my studies and the themes of AI to develop my skills and specialize in this field. 
                    I revisited blockchain technology in November 2023, adding a financial perspective to my understanding.
                    <br />
                    <br />
                    Since April 2024, I have been working on the Trophē project, merging my expertise in AI and blockchain to create innovative solutions.
                    My enthusiasm for technology extends beyond AI and data science. I have a strong interest in blockchain technology, which I believe has immense potential to transform various sectors. 
                    Blockchain goes beyond cryptocurrencies; it offers robust solutions for securing transactions, ensuring data traceability, and creating decentralized computing networks, among other applications.
                    <br />
                    <br />
                    If you wish to contact me, feel free to reach out through email at{" "}
                    <Link to='/contact'>CONTACT</Link>, or connect
                    with me on Discord at <strong>_hugo_12</strong>.
                    <br />
                    <br />
                    Thank you for visiting my site, and I hope you find it informative and inspiring.
                    </p>
            </div>
        </div>
        </>
    );
}