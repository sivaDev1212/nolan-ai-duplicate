
import React, { useState } from "react";
import '../assets/css/home.css'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';


// Define props interface
interface HomepageProps {
    prop: string;
    name: string[];
}

const Homepage: React.FC<HomepageProps> = ({ prop, name }) => {
    
    const [value, setValue] = useState<string>('');
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/login'); // Redirect to the login page
      };
    return (
        <div>
            
            {/* ---------------first hero component=------------- */}
            <div className="card flex justify-content-center">
                
                <div className="grid grid-nogutter surface-section text-800">
                    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                        <section>
                            <span className="block text-6xl font-bold mb-1">Bring your film project to life</span>
                            <div className="text-6xl text-primary font-bold mb-3">from idea to production</div>
                            <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                            <Button className="homepage-btn" onClick={handleButtonClick} label="Start Creating" />
                        </section>
                    </div>
                    <div className="col-12 md:col-6 overflow-hidden">
                        {/* <img src="" alt="" /> */}
                        <img src={require('../assets/images/hero-1.png')} alt="Image" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                    </div>
                </div>
            {/* <InputText value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} /> */}

            
        </div>
        {/* ---------------card component=------------- */}
            <div className="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
                <div className="mb-3 font-bold text-3xl">
                    <span className="text-900">NolanAI is a collaborative </span>
                    <span className="text-blue-600">film production suite</span>
                </div>
                <div className="text-700 mb-6">"covering the full film production process from concept creation and screenwriting to planning and stage production"</div>
                <div className="grid">
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{borderRadius: '10px'}}>
                            <i className="pi pi-desktop text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">AI Co-Pilot Editor </div>
                        <span className="text-700 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-lock text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">AI Pitch Deck</div>
                        <span className="text-700 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-check-circle text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Multilingual</div>
                        <span className="text-700 line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-globe text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Analytics</div>
                        <span className="text-700 line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-github text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Automated Breakdown</div>
                        <span className="text-700 line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
                    </div>
                    {/* <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
                        <span className="p-3 shadow-2 mb-3 inline-block surface-card" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-shield text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Trusted Securitty</div>
                        <span className="text-700 line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
                    </div> */}
                </div>
            </div>

            {/* ---------------news component=------------- */}
            <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                <div className="text-700 text-center">
                    {/* <div className="text-blue-600 font-bold mb-3"><i className="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div> */}
                    <div className="text-900 font-bold text-5xl mb-3">Leading the charge in Ethical AI</div>
                    <div className="text-700 text-2xl mb-5">At NolanAI, we prioritize the ethical implications of AI in the creative industry.
                    We believe in AI-powered tools that enhance human-driven storytelling.</div>
                    <Button className="homepage-btn"  label="Start Creating" />
                </div>
            </div>
        </div>
    );
};

export default Homepage
