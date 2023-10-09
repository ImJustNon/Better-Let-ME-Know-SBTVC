import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [ buildingList, setBuildingList ] = useState([]);

    useEffect(() =>{
        fetch("https://nopapi.jaturontongchaiiii.com/index.php/api/Admin/GetBuildingAll").then(response => response.json()).then(response => {
            setBuildingList(response);
        });
    }, []);

    return(
        <>
            <main className="my-20">
                <div className="p-5 text-center">
                    <h2 className="mb-3 text-3xl ">ยินดีต้อนรับเข้าสู่</h2>
                    <h2 className="mb-3 text-xl ">{"ระบบเยี่ยมชมออนไลน์ วิทยาลัยอาชีวศึกษาเทคโนโลยีฐานวิทยาศาสตร์(ชลบุรี)"}</h2>
                </div>
                <div className="container mx-auto">
                    <hr className="mt-16" />
                    <section className="text-center">    
                        <h4 className="my-10 text-xl"><strong> เเผนผังจำลอง </strong></h4>
            
                        <img src="https://nop.jaturontongchaiiii.com/assets/img/NewIcogram%202023-08-09%2021_23%20(4).png" alt="" className="mx-auto rounded-lg" />
                    </section>
                    <section className="text-center">
                        <h4 className="my-10 text-xl"><strong> อาคารเรียน </strong></h4>
                        <div className="overflow-x-auto glass rounded-xl">
                            <table className="table">
                                <thead>
                                    <tr className="text-lg text-black ">
                                        <th></th>
                                        <th>หมายเลขอาคาร</th>
                                        <th>ชื่ออาคาร</th>
                                        <th>เพิ่มเติม</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {buildingList.map((building, i) =>(
                                        <tr key={i}>
                                            <td></td>
                                            <td>{building.numberbuilding}</td>
                                            <td>{building.nameBuilding}</td>
                                            <td><Link to={`/buildings?uuid=${building.uuid}`} className="btn btn-neutral">เพิ่มเติม</Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Home;