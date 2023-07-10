import axios from 'axios';
import { useRef, useState } from 'react'
import { ethers } from "ethers"
import { Row, Form, Button } from 'react-bootstrap'
// import { create as ipfsHttpClient } from 'ipfs-http-client'
import Lottie from "react-lottie-player";
// const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
import datajson from "./car.json"
import { Input, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom/dist';
const Create = ({ marketplace, nft }) => {
    const router = useNavigate()
  const [fileImg, setFile] = useState();
  const [name, setName] = useState("")
  const [desc, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [display, setDisplay] = useState(false)
  
  // const uploadToIPFS = async (event) => {
  //   event.preventDefault()
  //   const file = event.target.files[0]
  //   if (typeof file !== 'undefined') {
  //     try {
  //       const result = await client.add(file)
  //       console.log(result)
  //       setImage(`https://ipfs.infura.io/ipfs/${result.path}`)
  //     } catch (error){
  //       console.log("ipfs image upload error: ", error)
  //     }
  //   }
  // }

  ////////////////////////////////////////////////////////



  const sendJSONtoIPFS = async (ImgHash) => {

    try {

      const resJSON = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinJsonToIPFS",
        data: {
          "name": name,
          "description": desc,
          "image": ImgHash
        },
        headers: {
          'pinata_api_key': process.env.REACT_APP_PINATA_API_KEY,
          'pinata_secret_api_key': process.env.REACT_APP_PINATA_SECRET_API_KEY,

        },
      });

      // https://gateway.pinata.cloud/ipfs/QmZ6iZAhazHyakzynC4sxZ6r6cikJmS69mZaCoyburKuq


      const tokenURI = `https://gateway.pinata.cloud/ipfs/${resJSON.data.IpfsHash}`;
      console.log("Token URI", tokenURI);
      //mintNFT(tokenURI, currentAccount)   // pass the winner
      mintThenList(tokenURI)
      
    } catch (error) {
      console.log("JSON to IPFS: ")
      console.log(error);
    }


  }



  const sendFileToIPFS = async (e) => {

    e.preventDefault();
    console.log("123");
    console.log(e);


    if (fileImg) {
      try {

        console.log("1234");
        const formData = new FormData();
        formData.append("file", fileImg);
        console.log(formData)
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            'pinata_api_key': process.env.REACT_APP_PINATA_API_KEY,
            'pinata_secret_api_key': process.env.REACT_APP_PINATA_SECRET_API_KEY,
            "Content-Type": "multipart/form-data"
          },
        });

        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        console.log(ImgHash);
        sendJSONtoIPFS(ImgHash)
        setDisplay(true)
        

      } catch (error) {
        console.log("File to IPFS: ")
        console.log(error)
      }
    }
  }

  ////////////////////////////////////////////////////////
  // const createNFT = async () => {
  //   if (!image || !price || !name || !description) return
  //   try{
  //     sendJSONtoIPFS(image)
  //     // const result = await client.add(JSON.stringify({image, price, name, description}))
  //     // mintThenList(result)
  //   } catch(error) {
  //     console.log("ipfs uri upload error: ", error)
  //   }
  // }

  const mintThenList = async (uri) => {
    // const uri = `https://ipfs.infura.io/ipfs/${result.path}`
    // mint nft 
    await (await nft.mint(uri)).wait()
    
    const id = await nft.tokenCount()
    // approve marketplace to spend nft
    await (await nft.setApprovalForAll(marketplace.address, true)).wait()
    // add nft to marketplace
    const listingPrice = ethers.utils.parseEther(price.toString())
    await (await marketplace.makeItem(nft.address, id, listingPrice)).wait()
    
    
  }
  return (

<div >
<div className='flex flex-col justify-center my-20'>
    <h1 className="text-6xl font-extrabold py-2">Enlist Your Car</h1>
    <div >
      
     <div className='flex items-center justify-center'>
     <div className='flex flex-col w-1/3 gap-4 p-10 '>
     
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white p-2" for="file_input">Upload file</label>
<input onChange={(e) =>setFile(e.target.files[0]) } class="block w-full text-sm text-gray-900 border border-gray-600 rounded-lg border-2  cursor-pointer dark:text-gray-200 focus:outline-none text-black p-2" id="file_input" type="file"/>
      <TextField id="outlined-basic" label="Description" variant="outlined" onChange={(e) => setDescription(e.target.value)} />
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)}  />
<TextField id="outlined-basic" label="ETH" variant="outlined" onChange={(e) => setPrice(e.target.value)}  />

<Button onClick={sendFileToIPFS} disabled={display}   className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' >
  Enlist
</Button>
<Link to='/my-listed-items'>
<Button     className='bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' >
  Go to listings
</Button>
</  Link>

      </div>
 
      <div>
        <Lottie
        animationData={datajson}
        play
        style={{ width: 700, height: 300 }}
        />
      </div>
      </div>
    </div>
  </div>
</div>
    
    )
}

export default Create
// < onChange={(e) => setFile(e.target.files[0])} size="lg" required type="file" name="file" />
// <Form.Control onChange={(e) => setName(e.target.value)} size="lg" required type="text" placeholder="Name" />
// <Form.Control onChange={(e) => setDescription(e.target.value)} size="lg" required as="textarea" placeholder="Description" />
// <Form.Control onChange={(e) => setPrice(e.target.value)} size="lg" required type="number" placeholder="Price in ETH" />