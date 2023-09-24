import { ethers } from 'ethers';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Verifier() {
    const abi = [
        {
            "inputs": [
                {
                    "internalType": "uint256[1]",
                    "name": "instances",
                    "type": "uint256[1]"
                },
                {
                    "internalType": "bytes",
                    "name": "proof",
                    "type": "bytes"
                }
            ],
            "name": "verify",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    const scroll_address = "0x9e13eE946052a39Ba4bA07d047cac26aA26B353A";
    const polygon_address = "0x5b99dF699A964ED73D5Da4752cCf4dBD7C7C5ACA";

    const [publicSignals, setPublicSignals] = useState<any>([]);
    const [proof, setProof] = useState<string>("");

    async function verify() {
        try {
            // Uncomment to change the contract interaction address

            // const scroll_provider = new ethers.JsonRpcProvider(
            //     'https://alpha-rpc.scroll.io/l2'
            // );
            // const contract = new ethers.Contract(scroll_address, abi, scroll_provider);

            const alchemy_provider = new ethers.AlchemyProvider(
                "matic-mumbai",
                process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
            );
            const contract = new ethers.Contract(polygon_address, abi, alchemy_provider);

            const result = await contract.verify(publicSignals, proof);
            if (result) {
                toast('Verified', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                toast.error('Proof failed', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            toast.error('Proof failed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
        }
    }

    function handleChange(e: any) {
        e.preventDefault();
        if (e.target.value !== "" || e.target.value !== null) {
            try {
                const data = JSON.parse(e.target.value);
                setProof(data.proof);
                setPublicSignals(data.publicSignals);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="flex items-center justify-between bg-white rounded-lg w-[20rem] lg:w-[50rem] h-[3rem]">
            <div className="flex items-center">
                <label className="text-black lg:ml-4 lg:mr-4 ml-1 mr-2 font-bold text-lg lg:text-2xl">Verify</label>
                <input className="w-[10rem] lg:w-[38rem] h-[2rem] rounded flex items-center pl-0 lg:pl-2 outline-0" placeholder="{publicSignals, proof}" onChange={(e) => { handleChange(e) }} />
            </div>
            <button className="font-bold mr-3 bg-black rounded text-white p-1 hover:bg-white hover:text-black hover:shadow border hover:underline" onClick={verify} >Submit</button>
        </div>
    )
}