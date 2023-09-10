function Buildings(){
    return(
        <>
            <main className="my-20">
                <div className="p-5 text-center">
                    <h2 className="mb-3 text-3xl ">อาคาร / ตึก</h2>
                </div>
                <div className="container mx-auto">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>1</td>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td><button className="btn btn-neutral">เพิ่มเติม</button></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>2</td>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                    <td><button className="btn btn-neutral">เพิ่มเติม</button></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>3</td>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                    <td><button className="btn btn-neutral">เพิ่มเติม</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Buildings;