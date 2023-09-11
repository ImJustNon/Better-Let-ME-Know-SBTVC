import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { config } from '../config/config.jsx'

function Google(){
    const clientId = config.googleClientId;

    useEffect(() =>{
        const initClient = () =>{
            gapi.client.init({
                clientId: clientId,
                scope: ''
            }); 
        }
        gapi.load("client:auth2", initClient);
    }, []);

    function onSuccess(res){
        console.log("Success", res);
    }
    function onError(res){
        console.log("Error", res);
    }
    return(
        <>
            <main className="my-20">
                <div className="p-5 text-center">
                    <h2 className="mb-20 text-3xl ">เข้าสู่ระบบ</h2>
                </div>
                <hr />
                <div className='container mt-5 mx-auto'>
                    <div className="mx-auto card card-compact w-60 glass shadow-xl">
                        <figure><img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="card-actions justify-center">
                                <button className='btn btn-neutral'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        
        </>
    );
}

export default Google;
