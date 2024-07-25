import './Product.css'
import React, {useEffect}  from 'react';
export default function Product(){

    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    
    return (
        <>
            <div className={"product-sectionHome"} style={{borderTop: 0}}>
                <img src={'./Solution/1.png'} width={425} height={425} alt={"Training"}/>
                <div>
                    <div>
                        <div><strong>Virtual Machine Connection</strong>
                            <li>Users can connect to a virtual machine powered by a decentralized network of graphics cards.</li>
                        </div>
                        <div><strong>LLM Training</strong>
                            <li>Enables training of a large language model (LLM), likely from UnslothAI and HuggingFace.</li>
                        </div>
                        <div><strong>Blockchain Recording</strong>
                            <li>Each step of the training process is recorded and stored on a blockchain for transparency and traceability.</li>
                        </div>
                        <div><strong>Model Storage</strong>
                                <li>Upon completion, the model is saved to a specific address linked to the user.</li>
                                <li>The model is accessible outside the application via a decentralized storage solution.</li>
                        </div>
                        <div><strong>Customizable Python Script</strong>
                                <li>A modifiable training script template is provided directly on the platform.</li>
                                <li>Users can customize the script to fit their specific needs.</li>
                                <li>Users can also use their own templates or training scripts if they prefer.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"product-sectionHome"}>
                <div>
                    <div>
                        <div><strong>API Access</strong>
                            <li>An API will be available to interact with the trained model.</li>
                            <li>This API will be hosted on a virtual machine powered by decentralized GPUs, similar to the training process.</li>
                        </div>
                        <div><strong>Chatbot</strong>
                            <li>The user will also have access to a chatbot connected to their model, allowing for more intuitive and real-time interactions.</li>
                        </div>
                        <div><strong>Blockchain Recording</strong>
                            <li>Each interaction with the model via the API or chatbot will be encrypted and stored on a blockchain.</li>
                        </div>
                        <div><strong>Model Export</strong>
                                <li>The user can export the model to use it in other configurations or environments beyond what we offer.</li>
                        </div>
                    </div>
                </div>
                <img src={'./Solution/2.png'} width={425} height={425} alt={"Inference"}/>
            </div>
            <div className={"product-sectionHome"}>
                <img src={"./Solution/3.png"} width={425} height={425} alt={"SaaS"}/>
                <div>
                    <div>
                        <div><strong>User-Friendly Design</strong>
                            <li>Our platform is designed to be intuitive and easy to use, even for those without extensive technical expertise.</li>
                        </div>
                        <div><strong>Online Application</strong>
                            <li>While the previous steps might seem challenging, everything is centralized on an online application.</li>
                            <li>All tasks can be performed in just a few clicks thanks to a clear and precise interface.</li>
                        </div>
                        <div><strong>This approach ensures that users can effortlessly navigate the platform and leverage AI technology with ease.</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}