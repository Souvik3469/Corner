import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Row, Col, Card, Button, Spinner } from "react-bootstrap";
import CarCard from "./Card";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Lottie from "lottie-react";
import Loader from "./Loader";
const Home = ({ marketplace, nft }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const loadMarketplaceItems = async () => {
    // Load all unsold items
    const itemCount = await marketplace.itemCount();
    let items = [];
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketplace.items(i);
      if (!item.sold) {
        // get uri url from nft contract
        const uri = await nft.tokenURI(item.tokenId);
        // use uri to fetch the nft metadata stored on ipfs
        const response = await fetch(uri);
        const metadata = await response.json();
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(item.itemId);
        // Add item to items array
        items.push({
          totalPrice,
          itemId: item.itemId,
          seller: item.seller,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
        });
      }
    }
    setLoading(false);
    setItems(items);
  };


  useEffect(() => {
    loadMarketplaceItems();
  }, []);
  if (loading)
    return (
      <Loader/>
    );
  return (
    // <div className="flex justify-center">
    //   {items.length > 0 ?
    //     <div className="px-5 container">
    //       <Row xs={1} md={2} lg={4} className="g-4 py-5">
    //         {items.map((item, idx) => (
    //           <Col key={idx} className="overflow-hidden">
    //             <Card>
    //               <Card.Img variant="top" src={item.image} />
    //               <Card.Body color="secondary">
    //                 <Card.Title>{item.name}</Card.Title>
    //                 <Card.Text>
    //                   {item.description}
    //                 </Card.Text>
    //               </Card.Body>
    //               <Card.Footer>
    //                 <div className='d-grid'>
    //                   <Button onClick={() => buyMarketItem(item)} variant="primary" size="lg">
    //                     Buy for {ethers.utils.formatEther(item.totalPrice)} ETH
    //                   </Button>
    //                 </div>
    //               </Card.Footer>
    //             </Card>
    //           </Col>
    //         ))}
    //       </Row>
    //     </div>
    //     : (
    //       <main style={{ padding: "1rem 0" }}>
    //         <h2>No listed assets</h2>
    //       </main>
    //     )}
    // </div>
    <div className="p-10 ">
      <div className="flex items-center">
      
          <img
            className="w-2/3 h-2/3"
            src="https://imgd.aeplcdn.com/0x0/n/cw/ec/51378/s5-sportback-exterior-right-front-three-quarter-5.jpeg"
          />
        
      
        <div>
          <div>
            <h1 className="text-6xl font-bold text-blue-500 ">Decentralized</h1>
          </div>
        <div className="flex text-6xl font-bold justify-around gap-2 ">
            <h1 className="text-4xl font-bold text-orange-500">Buy </h1>
            
            <h1 className="text-4xl font-semibold text-blue-500">&</h1>
        
            
            <h1 className="text-4xl font-bold  text-orange-500">Sell</h1>

          </div>
          <div>
            <h1 className="text-6xl font-bold text-blue-500  ">Cars</h1>
          </div>
        </div>
        </div>
    <div className="text-5xl font-bold p-4 m-2">Available Listed Cars</div>
      <div className="grid gap-3 grid-cols-4 ">
     {
      items.length > 0 ? (
        items.map((item, idx) => {
          return (
            <CarCard
            f={loadMarketplaceItems}
            item={item}
            carbuy={false}
            marketplace={marketplace}
            nft={nft}
              key={idx}
             carImage={item.image}
             desc={item.description}
              carName={item.name}
              carPrice={ethers.utils.formatEther(item.totalPrice)}
            />
          );
        })
      ) :(  <div className="text-5xl font-bold p-4 m-2">
        Sorry No Listed Cars
      </div>)
     }
      </div>
    </div>
  );
};
export default Home;
