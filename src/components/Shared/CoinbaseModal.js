// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import Slide from '@mui/material/Slide';
// import { forwardRef, useContext } from 'react';
// import { Card, Col, Row } from 'react-bootstrap';
// import { CelebrityContext } from '../../context/CelebrityContext';


// const Transition = forwardRef(function Transition(props, ref) {
//     return <Slide direction="top" ref={ref} {...props} />;
// });

// const CoinbaseModal = () => {
//     const { coinbaseModal, closeCoinbaseModal, connectToCoinbase, BinanceModal, closeBinanceModal, connectToBinance } = useContext(CelebrityContext);

//     return (
//         <div className='dialogDiv-coinbase'>
//             {/* <Dialog
//                 open={coinbaseModal}
//                 TransitionComponent={Transition}
//                 keepMounted
//                 onClose={closeCoinbaseModal}
//                 aria-describedby="alert-dialog-slide-description"
//                 className='dialog'
//             >
//                 <div className="dialogWallet pt-4 dialogDiv-coinbase">
//                     <DialogContent className='alertWalletDiv coinbase-dialog'>
//                         <DialogContentText id="alert-dialog-slide-description ">
  
//                             <Row lg={2}  md={2} sm={2} className="">
//                                 <Col>
//                                     <div className='walletDiv border-0'
//                                         onClick={connectToBinance}
//                                     >
//                                         <Card.Img variant="top" src="https://i.ibb.co/XJnPgBq/92a1c4a2-d2e2-4a23-8d1e-6bfcd8a1c3c9-removebg-preview.png" className="imgWallet" />
//                                         <Card.Body>
//                                             <Card.Title className='walletName wallet-texts'>Coin Base</Card.Title>
//                                         </Card.Body>
//                                     </div>

//                                     <div className='walletDiv border-0'
//                                         onClick={connectToBinance}
//                                     >
//                                         <Card.Img variant="top" src="https://i.ibb.co/W0m7sF9/Binance.png" className="imgWallet" onClick={connectToBinance} />
//                                         <Card.Body>
//                                             <Card.Title className='walletName wallet-texts'>Binance coine</Card.Title>
//                                         </Card.Body>
//                                     </div>
//                                 </Col>
//                             </Row>
//                             <div className="contentDiv">
//                                 <p className='contents wallet-texts'>Login with coinbase and binance </p>
//                                 <p className='contents wallet-texts d-none'>Add Binance Chain in your Metamask as follows.</p>
//                                 <p className='contents px-2 wallet-texts d-none'><a className='contents1' href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain" target="_any" >https://academy.binance.com/en/articles
//                                     /connecting-metamask-to-binance-smart-chain</a></p>
//                             </div>
//                             <p className='text-center mt-4'>
//                                 <Button onClick={closeCoinbaseModal} className="text-white fs-6 bg-danger wallet-texts  coin-btn">Cancel</Button>
//                             </p>

//                         </DialogContentText>
//                     </DialogContent>
//                 </div>
//             </Dialog> */}


//             <Dialog
//                 open={BinanceModal}
//                 TransitionComponent={Transition}
//                 keepMounted
//                 onClose={closeBinanceModal}
//                 aria-describedby="alert-dialog-slide-description"
//                 className='dialog'
//             >
//                 <div className="dialogWallet pt-4 dialogDiv-coinbase">
//                     <DialogContent className='alertWalletDiv coinbase-dialog'>
//                         <DialogContentText id="alert-dialog-slide-description ">
  
//                             <Row lg={2}  md={2} sm={2} className="">
//                                 <Col>
//                                     <div className='walletDiv border-0'
//                                         onClick={connectToBinance}
//                                     >
//                                         <Card.Img variant="top" src="https://i.ibb.co/XJnPgBq/92a1c4a2-d2e2-4a23-8d1e-6bfcd8a1c3c9-removebg-preview.png" className="imgWallet" />
//                                         <Card.Body>
//                                             <Card.Title className='walletName wallet-texts'>Coin Base</Card.Title>
//                                         </Card.Body>
//                                     </div>

//                                     <div className='walletDiv border-0'
//                                         onClick={connectToBinance}
//                                     >
//                                         <Card.Img variant="top" src="https://i.ibb.co/W0m7sF9/Binance.png" className="imgWallet" onClick={connectToBinance} />
//                                         <Card.Body>
//                                             <Card.Title className='walletName wallet-texts'>Binance coine</Card.Title>
//                                         </Card.Body>
//                                     </div>
//                                 </Col>
//                             </Row>
//                             <div className="contentDiv">
//                                 <p className='contents wallet-texts'>Login with coinbase and binance </p>
//                                 <p className='contents wallet-texts d-none'>Add Binance Chain in your Metamask as follows.</p>
//                                 <p className='contents px-2 wallet-texts d-none'><a className='contents1' href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain" target="_any" >https://academy.binance.com/en/articles
//                                     /connecting-metamask-to-binance-smart-chain</a></p>
//                             </div>
//                             <p className='text-center mt-4'>
//                                 <Button onClick={closeBinanceModal} className="text-white fs-6 bg-danger wallet-texts  coin-btn">Cancel</Button>
//                             </p>

//                         </DialogContentText>
//                     </DialogContent>
//                 </div>
//             </Dialog>
//         </div>
//     );
// };

// export default CoinbaseModal;















import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { forwardRef, useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { CelebrityContext } from '../../context/CelebrityContext';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="top" ref={ref} {...props} />;
});

const CoinbaseModal = () => {
    const { coinbaseModal, closeCoinbaseModal, connectToCoinbase, connectToBinance, connectToWalletConnect } = useContext(CelebrityContext);

    return (
        <div className='dialogDiv-coinbase'>
            <Dialog
                open={coinbaseModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={closeCoinbaseModal}
                aria-describedby="alert-dialog-slide-description"
                className='dialog'
            >
                <div className="dialogWallet pt-4 dialogDiv-coinbase">
                    <DialogContent className='alertWalletDiv coinbase-dialog'>
                        <DialogContentText id="alert-dialog-slide-description ">
                            {/* <div className="d-none">
                                <p className=' contents  mt-1 text-center wallet-texts' style={{ fontSize: 14 }}>Please note:</p>
                                <p className='contents text-center mb-0 wallet-texts' style={{ fontSize: 14 }}>1. Login to Metamask before clicking the metamask icon below.</p>
                                <p className='contents text-center mb-0 wallet-texts' style={{ fontSize: 14 }}>2. Click again if you are not connected.</p>
                            </div> */}
                            <Row xs={2} md={2} className="g-2">
                                <Col>
                                    <Card className='walletDiv border-0'
                                        onClick={connectToCoinbase}
                                    >
                                        <Card.Img variant="top" src="https://i.ibb.co/XJnPgBq/92a1c4a2-d2e2-4a23-8d1e-6bfcd8a1c3c9-removebg-preview.png" className="imgWallet" />
                                        <Card.Body>
                                            <Card.Title className='walletName wallet-texts'>Coin Base</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='walletDiv border-0'
                                        onClick={connectToBinance}
                                    >
                                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Binance_Logo.svg/1200px-Binance_Logo.svg.png" className="imgWallet" />
                                        <Card.Body>
                                            <Card.Title className='walletName wallet-texts'>Binance</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='walletDiv border-0'
                                        onClick={connectToWalletConnect}
                                    >
                                        <Card.Img variant="top" src="https://1000logos.net/wp-content/uploads/2022/05/WalletConnect-Logo-500x281.png" className="imgWallet" />
                                        <Card.Body>
                                            <Card.Title className='walletName wallet-texts'>WalletConnect</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <div className="contentDiv">
                                <p className='contents wallet-texts'>Login with coinbase</p>
                                <p className='contents wallet-texts d-none'>Add Binance Chain in your Metamask as follows.</p>
                                <p className='contents px-2 wallet-texts d-none'><a className='contents1' href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain" target="_any" >https://academy.binance.com/en/articles
                                    /connecting-metamask-to-binance-smart-chain</a></p>
                            </div>
                            <p className='text-center mt-4'>
                                <Button onClick={closeCoinbaseModal} className="text-white fs-6 bg-danger wallet-texts  coin-btn">Cancel</Button>
                            </p>

                        </DialogContentText>
                    </DialogContent>
                </div>
            </Dialog>
        </div>
    );
};

export default CoinbaseModal;