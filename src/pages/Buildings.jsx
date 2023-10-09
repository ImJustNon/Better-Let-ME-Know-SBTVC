import { useSearchParams } from 'react-router-dom';
import NotFound from './NotFound';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Buildings(){
    const [searchParams, setSearchParams] = useSearchParams();
    const uuid = searchParams.get("uuid");

    const [ buildingInfo, setBuildingInfo ] = useState([]);
    const [ rooms, setRooms ] = useState([]);
    useEffect(() =>{
        fetch("https://nopapi.jaturontongchaiiii.com/index.php/api/Admin/GetBuilding", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                uuid: uuid,
            }),
        }).then(response => response.json()).then(response =>{
            setBuildingInfo(response.res);
            setRooms(response.resRoom);
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
                    <h2 className="mb-3 text-3xl ">{buildingInfo[0]?.nameBuilding}</h2>
                </div>
                
                <div className="container mx-auto">
                    <hr className='my-16'/>
                    <img className='mx-auto rounded-xl w-2/3' src="https://nop.jaturontongchaiiii.com/assets/img/2020-12-20.jpg" alt="buildingPic" />
                    <div className="overflow-x-auto mt-16 glass rounded-xl">
                        <table className="table">
                            <thead>
                                <tr className='text-lg text-black'>
                                    <th></th>
                                    <th>หมายเลขห้อง</th>
                                    <th>ชื่อห้อง</th>
                                    <th>เพิ่มเติม</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rooms.map((room, i) =>(
                                    <tr key={i}>
                                        <td></td>
                                        <td>{room.numberRoom}</td>
                                        <td>{room.nameRoom}</td>
                                        <td><Link to={`/rooms?uuid=${room.uuidRoom}`} className="btn btn-neutral">ดูข้อมูลเพิ่มเติม</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Buildings;