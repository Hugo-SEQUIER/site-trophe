'use client'
import React, { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

interface ListItem {
    title: string;
    desc: ReactElement;
    buttonDesc : string;
}

export default function Home() {
    const router = useNavigate()
    const listCardDescription : ListItem[] = [
        {title : "Just a few clicks", desc : <p>Our platform is designed to be intuitive and easy to use, even for those without deep technical expertise</p>, buttonDesc : "Learn More"},
        {title : "Total transparency", desc : <p>Every operation is recorded with metadata on the blockchain, ensuring complete transparency and traceability</p>, buttonDesc : "Learn More"},
        {title : "Save money", desc : <p>Using decentralized GPU networks provides computing power at prices up to <b>70% lower</b> than traditional markets</p>, buttonDesc : "Learn More"},
    ];

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <>
            <div className={"home"}>
                <div className={"home-mainPhrase"}>
                    <h1>Bridging the gap between blockchain technology and the mainstream with innovative AI tools</h1>
                    <h3>Democratizing access to artificial intelligence through decentralized technologies, ensuring security, transparency, and cost reduction.</h3>
                </div>
                <div className={"home-listCard"}>
                    {listCardDescription.map((value, index) => {
                       return (
                            <div key={index} className={"home-card"}>
                                <h3>{value.title}</h3>
                                {value.desc}
                                <button type="button" disabled onClick={() => router('/')}>{value.buttonDesc}</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={"home-sectionHome"}>
                <div>
                    <div>
                        <h2>Secure and Stable Decentralization</h2>
                        <p>By leveraging the computing power of decentralized networks, we ensure a more secure and resilient infrastructure.</p>
                    </div>
                    <div>
                        <h2>Ease of Use</h2>
                        <p>Our platform is designed to be intuitive and easy to use, even for those without extensive technical expertise. With a clear user interface and detailed guides, we simplify the process of training and managing language models, allowing everyone to benefit from AI.</p>
                    </div>
                </div>
                <img src={'./Home/decentralized_network.png'} alt="Decentralized Network" width={600} height={600}/>
            </div>
            <div className={"home-sectionHome"}>
                <img src={"./Home/autonomy.png"} alt="Autonomy" width={600} height={600}/>
                <div>
                    <div>
                        <h2>Autonomy and Freedom of Use</h2>
                        <p>Users can export their models at any time and use them as they see fit, without being locked into our ecosystem. We also offer a dedicated API, allowing easy integration and continuous use of our platform if users wish.</p>
                    </div>
                    <div>
                        <h2>Significant Cost Savings</h2>  
                        <p>By using technologies such as Unsloth.AI for training models, we enable our users to save up to 60% of resources. Coupled with the low costs of decentralized GPU networks, this substantial cost reduction allows individuals and small businesses to access advanced AI capabilities previously reserved for large companies.</p>
                    </div>
                </div>
            </div>
            <div className={"home-sectionHome"}>
                <div>
                    <div>
                        <h2>Total Control and Transparency</h2>
                        <p>By using Web3 solutions for data management, we ensure that users always retain control of their information. Additionally, every transaction and operation is recorded with metadata on the blockchain, ensuring complete transparency and traceability.</p>
                    </div>
                    <div>
                        <h2>Vision of Change and Equality</h2>
                        <p>We are committed to empowering everyone with AI, thus reducing inequalities. Our mission is to democratize access to artificial intelligence, allowing everyone, regardless of size or resources, to benefit from the latest technological advancements.</p>
                    </div>
                </div>
                <img src={'./Home/traceability.png'} alt="Traceability" width={600} height={600}/>
            </div>
            <div className={"home-sectionHome"}>
                <div className={"home-sectionTitle"}>
                    <h1>OUR VISION</h1>
                    <div>
                        <p>The core of our project is ease of use while maintaining flexibility to meet user needs. We are committed to making advanced AI technologies accessible to everyone, regardless of their economic situation or technical skills.</p>
                        <p>By focusing on accessibility and the democratization of AI, our project aims to transform the way individuals and businesses interact with artificial intelligence. We firmly believe that making these advanced technologies accessible to all is key to creating an inclusive, equitable, and innovative future. By joining our platform, you are participating in a technological revolution that aims to enrich and serve the entire society.</p>
                    </div>
                    <div>
                        <p>By joining our platform, you become a key player in a technological revolution aimed at making AI beneficial for the entire society. You contribute to an initiative that values simplicity, accessibility, and equity, and you participate in creating a future where innovation is accessible to everyone.</p>
                        <p>Together, we are transforming AI to serve and enrich the entire society, paving the way for a new technological era where everyone has a place and can thrive.</p>
                    </div>
                </div>
            </div>
        </>
    )
}