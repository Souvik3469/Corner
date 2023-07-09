import {
    Link
} from "react-router-dom";
//import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import market from './market.png'

const Navigation = ({ web3Handler, account }) => {
    return (
        <div className="bg-blue-900 flex items-center justify-between p-2">
            <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="text-white font-bold text-2xl pl-6">
        Corner
            </div>
            </Link>
            <Link to="/home  " style={{ textDecoration: 'none' }}>
             <div className="  text-gray-100 no-underline text-xl font-semibold  hover:text-blue-300 group cursor-pointer hover:shadow-lg">
        Home
            </div>
            </Link>
             <Link to="/create" style={{ textDecoration: 'none' }}>
              <div className=" text-gray-100 text-xl font-semibold  hover:text-blue-300 group cursor-pointer hover:shadow-lg">
        Create
            </div>
            </Link>
                <Link to="/my-listed-items" style={{ textDecoration: 'none' }}>
             <div className=" text-gray-100 text-xl font-semibold  hover:text-blue-300 group cursor-pointer hover:shadow-lg">
        Listed Items
            </div>
            </Link>
                <Link to="/my-purchases" style={{ textDecoration: 'none' }}>
             <div className=" text-gray-100 text-xl font-semibold  hover:text-blue-300 group cursor-pointer hover:shadow-lg">
        Purchased Items
            </div>
            </Link>
            <div className="flex px-8">
 {account ? (
                            <div
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white font-bold py-2 px-4 rounded-full">
                          
                                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                              

                            </div>
                        ) : (
                                 <button className="bg-red-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full" onClick={web3Handler}>
  Connect Wallet
</button>
                           
                        )}
            </div>
        </div>
    )
}

export default Navigation;
