import { useSearchParams } from 'react-router-dom';
import NotFound from './NotFound';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Rooms(){
    const [searchParams, setSearchParams] = useSearchParams();
    const uuid = searchParams.get("uuid");

    const [roomInfo, setRoomInfo] = useState([]);
    
    useEffect(() =>{
        fetch("https://nopapi.jaturontongchaiiii.com/index.php/api/Admin/GetRoom", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                uuid: uuid,
            }),
        }).then(response => response.json()).then(response =>{
            setRoomInfo(response);
            console.log(response);
        });
    }, []);

    if(!uuid){  
        return(<NotFound />);
    } 
    return(
        <>
            <main className="my-20">
                <div className="p-5 text-center">
                    <h2 className="mb-3 text-3xl ">{roomInfo[0]?.nameRoom}</h2>
                </div>
                <div className="container mx-auto">
                    <hr className='my-10'/>
                    <h1 className='text-xl text-center'>ภาพภายในห้องเรียน</h1>
                    <img className='mx-auto my-10 rounded-xl w-2/3' src={roomInfo[0]?.pathPicture} alt="buildingPic" />
                    <h1 className='text-xl text-center'>วีดีโอภายในห้องเรียน</h1>
                    <iframe 
                        className='text-center mx-auto my-10 w-2/3 h-96 rounded-xl'
                        width="560" 
                        height="315" 
                        src={roomInfo[0]?.pathVideo}
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe>
                    <hr className='my-10'/>
                </div>
            </main>
        </>
    );
}

export default Rooms;