import './Roadmap.css'
import React, {useEffect}  from 'react';
export default function Roadmap(){

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <>
        <div className={"roadmap-title"}>
            <h1>Roadmap</h1>
            <p>Explore our plans for future development of Trophē</p>
        </div>
        <div className={`${"roadmap-sectionHome"} ${"roadmap-sectionFirst"}`}>
            <div className={"roadmap-sectionTexte"}>
                <div>
                    <div className={"rd"}/>
                    <div className={"tag"}>
                        <p>Q2 2024 | Basics P1</p>
                        <p style={{backgroundColor: "#97cf97", color: "#444444"}}>Live</p>
                    </div>
                    <div>
                        <h2>Building the idea</h2>
                        <p>The AI market is booming, characterized by rapid growth, significant innovation, and a large user base. Despite strong competitors with major partnerships, they face issues such as high costs, data ownership concerns, and centralization.
                        <br />Our target audience includes individuals aged 26-40, small businesses, and those with limited technical skills or blockchain knowledge but are aware of AI. We aim to offer decentralized, low-cost AI solutions with an easy-to-use interface and clear data policies. Our platform will provide accessible APIs and support both training and inference, making advanced AI tools available to a wider audience.</p>
                        <div className={"roadmap-sectionPoint"}>
                            <div>
                                <li>Define the need</li>
                                <li>Market research</li>
                                <li>Solution definition</li>
                            </div>
                            <div>
                                <li>Business plan</li>
                                <li>Brand creation</li>
                                <li>Roadmap</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${"roadmap-sectionHome"}`}>
            <div className={"roadmap-sectionTexte"}>
                <div>
                    <div className={"rd"}/>
                    <div className={"tag"}>
                        <p>Q3 2024 | Basics P2</p>
                        <p style={{backgroundColor: "#ffdfa5", color: "#444444"}}>Development</p>
                    </div>
                    <div>
                        <h2>Showcase Website</h2>
                        <p>We will start by developing a strong branding and marketing strategy to define our identity and position in the market. Researching legal requirements and securing protections for our intellectual property is crucial. We will build our brand presence on social media to engage with our audience and share updates. 
                        <br/>Creating a showcase website will highlight our ideas and project progress, gradually adding functionalities. Additionally, we will set up efficient and scalable processes, choosing the right technologies for development and deployment.</p>
                        <div className={"roadmap-sectionPoint"}>
                            <div>
                                <li>Branding and marketing strategy</li>
                                <li>Market entry strategy</li>
                                <li>Legal research and protection</li>
                            </div>
                            <div>
                                <li>Social media branding</li>
                                <li>Showcase Website creation</li>
                                <li>Process and technology setup</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${"roadmap-sectionHome"}`}>
            <div className={"roadmap-sectionTexte"}>
                <div>
                    <div className={"rd"}/>
                    <div className={"tag"}>
                        <p>Q4 2024 | dApp</p>
                        <p style={{backgroundColor: "#fb9e9e", color: "#444444"}}>Pending</p>
                    </div>
                    <div>
                        <h2>Coding Our AI Solution</h2>
                        <p>We will utilize solutions as AKT, IO.NET, or AETHIR to leverage decentralized GPU networks. These platforms will provide the necessary computational power for our AI models, ensuring high performance and scalability.<br/>
                        To ensure data security and privacy, we will integrate encryption technologies such as Fully Homomorphic Encryption (FHE) and Zero-Knowledge Proofs (ZKP). These will enable secure processing and verification of data without exposing sensitive information.<br/> 
                        For efficient and decentralized data storage, we will probably use AR, Web3.Storage, or Filecoin. These solutions will provide reliable and scalable storage options, ensuring data integrity and availability.<br/>
                        We will implement AI functionalities using Unsloth and HuggingFace. These platforms offer powerful tools and libraries for building and deploying advanced AI models, enabling us to create innovative and effective AI-driven solutions.
                        </p>
                        <div className={"roadmap-sectionPoint"}>
                            <div>
                                <li>Decentralized GPU Networks</li>
                                <li>Encryption Technologies</li>
                            </div>
                            <div>
                                <li>Storage Solutions</li>
                                <li>AI Solutions</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${"roadmap-sectionHome"}`}>
            <div className={"roadmap-sectionTexte"}>
                <div>
                    <div className={"rd"}/>
                    <div className={"tag"}>
                        <p>Q1 2025 | Alpha</p>
                        <p style={{backgroundColor: "#fb9e9e", color: "#444444"}}>Pending</p>
                    </div>
                    <div>
                        <h2>Next Steps in Developing Our AI Solution</h2>
                        <p>Ensuring the security of our solution is paramount. We will conduct comprehensive security audits to identify and mitigate any vulnerabilities. This process will involve thorough testing of our encryption methods, data storage solutions, and overall system architecture to ensure robust protection against potential threats.<br/>
                        We will move into the alpha testing phase, where our initial version of the AI solution will be tested internally. This phase will help us identify bugs, gather user feedback, and make necessary improvements. It will also allow us to assess the performance and functionality of our solution in a controlled environment.<br/> 
                        Concurrently, we will focus on developing a user-friendly API that allows seamless integration with other systems and applications. This API will provide access to our AI functionalities, making it easier for developers and businesses to leverage our solution. Ensuring the API is well-documented, secure, and efficient will be a top priority.<br/>
                        By following these steps, we will ensure that our AI solution is secure, thoroughly tested, and easily accessible through a robust API.
                        </p>
                        <div className={"roadmap-sectionPoint"}>
                            <div>
                                <li>Alpha Testing</li>
                                <li>API Development</li>
                            </div>
                            <div>
                                <li>Security and Audit</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}