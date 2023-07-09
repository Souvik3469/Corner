import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import market from './market.png'

const Navigation = ({ web3Handler, account }) => {
    return (
        <div className="bg-blue-700 flex items-center justify-between p-2">
            <div className="text-white font-bold text-xl ">
        Corner
            </div>
            <div>

            </div>
            <div className="">
 {account ? (
                            <div
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4">
                                <Button variant="outline-light">
                                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                                </Button>

                            </div>
                        ) : (
                            <Button onClick={web3Handler} variant="outline-light">Connect Wallet</Button>
                        )}
            </div>
        </div>
    )
}

export default Navigation;
