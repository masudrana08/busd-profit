import React from 'react'
import Coin1 from "../../assets/img/coin/1.png"
import Coin2 from "../../assets/img/coin/2.png"
import Coin3 from "../../assets/img/coin/3.png"
import Coin4 from "../../assets/img/coin/4.png"
import Coin5 from "../../assets/img/coin/5.png"
import Coin6 from "../../assets/img/coin/6.png"
import Coin7 from "../../assets/img/coin/7.png"
import Coin8 from "../../assets/img/coin/8.png"
import BannerBg2 from "../../assets/img/banner-bg-2.png"
import { Button, Modal } from 'react-bootstrap'


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body style={{ height: '80vh' }}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4DCTTrGjGU4?autoplay=1&controls=0" controls="false" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Modal.Body>
        </Modal>
    );
}

export default function Header() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <div className="banner headerBanner" id="transfer">

                <div className="man">
                    <img src={Coin1} alt="" className="coin-1" />
                    <img src={Coin2} alt="" className="coin-2" />
                    <img src={Coin3} alt="" className="coin-3" />
                    <img src={Coin4} alt="" className="coin-4" />
                    <img src={Coin5} alt="" className="coin-5" />
                    <img src={Coin6} alt="" className="coin-6" />
                    <img src={Coin7} alt="" className="coin-7" />
                    <img src={Coin8} alt="" className="coin-8" />
                    <img className="bg-sape-1" src={BannerBg2} alt="" />
                </div>
                <div className="hero-area">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                <div className="banner-content">
                                    <h3 className="subtitle">Stable & Profitable Yield Farming Dapp With</h3>
                                    <h1 className="head">Automated Users Insurance</h1>
                                    <p className="text">
                                        10% Daily for 30 days. <br />
                                        30% Auto Reinvestment on Withdrawal. <br />
                                        5 Level Referral System <br />
                                    </p>

                                    <div className="vide">
                                        <div className="video-box">

                                            <div className="video-img" onClick={() => setModalShow(true)}>
                                                <div className="youtube-video mfp-iframe video-play-btn video-icon" >
                                                    <i className="fas fa-play"></i>
                                                </div>
                                            </div>


                                            <div className="video-text">
                                                <p className="text">Watch Video Now</p>
                                                <span><i className="far fa-clock"></i> 2:32 minutes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-cus wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                {/* <div className="right-box">
                        
                            <div className="tab-content" id="pills-tabContent">
                            
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="pills-home-tab">
                                    <div className="exchange">
                                    <div className="exchange-box">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12 gx-2">
                                                        <div className="form-group">
                                                            <input type="number" placeholder=" Total BNB available to invest"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 gx-2">
                                                        <div className="form-group">
                                                            <input type="number" placeholder="Enter BNB Amount"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 gx-2">
                                                        <div className="form-group">
                                                            <div className="selector">
                                                                <div className="coin">
                                                                    <img src="./assets/img/btc.png" alt="" />
                                                                    <div className="language-select">
                                                                        <select className="select-bar">
                                                                            <option value="">BTC</option>
                                                                            <option value="">USD</option>
                                                                            <option value="">BTC</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="button-box">
                                            <a href="#" className="button button-1">Invest Now !</a>
                                        </div>
                                        </div>
                                        <div className="exchange-box">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12 gx-2">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="Profit ($)"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </form>
                                        </div>

                                        
                                       
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                    aria-labelledby="pills-profile-tab">
                                    <div className="exchange">
                                    <div className="exchange-box">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12 gx-2">
                                                        <div className="form-group">
                                                            <input type="number" placeholder=" Total BNB available to invest"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 gx-2">
                                                        <div className="form-group">
                                                            <input type="number" placeholder="Enter BNB Amount"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 gx-2">
                                                        <div className="form-group">
                                                            <div className="selector">
                                                                <div className="coin">
                                                                    <img src="./assets/img/btc.png" alt="" />
                                                                    <div className="language-select">
                                                                        <select className="select-bar">
                                                                            <option value="">BTC</option>
                                                                            <option value="">USD</option>
                                                                            <option value="">BTC</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="button-box">
                                            <a href="#" className="button button-1">Invest Now !</a>
                                        </div>
                                        </div>
                                        <div className="exchange-box">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12 gx-2">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="User Profit ($)"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </form>
                                        </div>

                                        
                                       
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-pills pt-3" id="pills-tab" role="tablist" style={{width:'80%', margin:'auto'}}>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                        aria-selected="true">Reinvest</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile" type="button" role="tab"
                                        aria-controls="pills-profile" aria-selected="false">Claim</button>
                                </li>
                            </ul>
                            
                        </div> */}
                                <div className="right-box">
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Earn Interest</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Get Loan</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="exchange">
                                                <div className="exchange-box">
                                                    <div className="selector">
                                                        <p className="text"> Deposit Amount </p>
                                                        <div className="coin">
                                                            <img src="./assets/img/btc.png" alt="" />
                                                            <div className="language-select">
                                                                <select className="select-bar" style={{display:'none'}}>
                                                                    <option value="btc">BTC</option>
                                                                    <option value="usd">USD</option>
                                                                    <option value="btc">BTC</option>
                                                                </select><div className="nice-select select-bar" tabIndex="0"><span className="current">BTC</span><ul className="list"><li data-value="" className="option selected focus">BTC</li><li data-value="" className="option">USD</li><li data-value="" className="option">BTC</li></ul></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <form action="#">
                                                        <div className="form-group">
                                                            <input type="text" name="number" placeholder="100" className="form-control" />
                                                        </div>
                                                    </form>
                                                    <span className="rate">1 BTC = 11724.597423 USD</span>
                                                </div>
                                                <div className="exchange-box">
                                                    <div className="selector">
                                                        <p className="text">Deposit Period</p>
                                                    </div>
                                                    <div className="time">
                                                        <div className="language-select">
                                                            <select className="select-bar" style={{display:'none'}}>
                                                                <option value="">1 year</option>
                                                                <option value="">2 year</option>
                                                                <option value="">3 year</option>
                                                            </select><div className="nice-select select-bar" tabIndex="0"><span className="current">1 year</span><ul className="list"><li data-value="" className="option selected focus">1 year</li><li data-value="" className="option">2 year</li><li data-value="" className="option">3 year</li></ul></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="content">
                                                    <div className="text-box">
                                                        <p className="text"> <span className="one">Deposit Amount</span> <span className="two">100
                                                            BTC</span></p>
                                                        <p className="text"> <span className="one">Annual Interest</span> <span className="two">9.4%
                                                            BTC</span></p>
                                                    </div>
                                                    <div className="earn">
                                                        <p className="text">You’ll Earn</p>
                                                        <p className="text two">9.4 BTC</p>
                                                    </div>
                                                </div>

                                                <div className="button-box">
                                                    <a href="#" className="button button-1">Start Earning Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="exchange">
                                                <div className="exchange-box">
                                                    <div className="selector">
                                                        <p className="text"> Loan Amount </p>
                                                        <div className="coin">
                                                            <img src="./assets/img/eth.png" alt="" />
                                                            <div className="language-select">
                                                                <select className="select-bar" style={{display:'none'}}>
                                                                    <option value="">ETH</option>
                                                                    <option value="">USD</option>
                                                                    <option value="">BTC</option>
                                                                </select><div className="nice-select select-bar" tabIndex="0"><span className="current">ETH</span><ul className="list"><li data-value="" className="option selected">ETH</li><li data-value="" className="option">USD</li><li data-value="" className="option">BTC</li></ul></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <form action="#">
                                                        <div className="form-group">
                                                            <input type="text" name="number" placeholder="50" className="form-control" />
                                                        </div>
                                                    </form>
                                                </div>

                                                <div className="exchange-box">
                                                    <div className="selector">
                                                        <p className="text"> Сollateral Amount </p>
                                                        <div className="coin">
                                                            <img src="./assets/img/btc.png" alt="" />
                                                            <div className="language-select">
                                                                <select className="select-bar" style={{display:'none'}}>
                                                                    <option value="">BTC</option>
                                                                    <option value="">USD</option>
                                                                    <option value="">BTC</option>
                                                                </select><div className="nice-select select-bar" tabIndex="0"><span className="current">BTC</span><ul className="list"><li data-value="" className="option selected">BTC</li><li data-value="" className="option">USD</li><li data-value="" className="option">BTC</li></ul></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <form action="#">
                                                        <div className="form-group">
                                                            <input type="text" name="number" placeholder="50.0076" className="form-control" />
                                                        </div>
                                                    </form>
                                                </div>

                                                <div className="exchange-box">
                                                    <div className="selector">
                                                        <p className="text">Deposit Period</p>
                                                    </div>
                                                    <div className="time">
                                                        <div className="language-select">
                                                            <select className="select-bar" style={{display:'none'}}>
                                                                <option value="">1 year</option>
                                                                <option value="">2 year</option>
                                                                <option value="">3 year</option>
                                                            </select>
                                                            <div className="nice-select select-bar" tabIndex="0"><span className="current">1 year</span><ul className="list"><li data-value="" className="option selected">1 year</li><li data-value="" className="option">2 year</li><li data-value="" className="option">3 year</li></ul></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="content">
                                                    <div className="text-box">
                                                        <p className="text">
                                                            <span className="one">Total Interest Amount</span>
                                                            <span className="two">68.411597 ETH</span>
                                                        </p>
                                                        <p className="text">
                                                            <span className="one">LTV (Loan-to-Value Ratio)</span>
                                                            <span className="two">70%</span>
                                                        </p>
                                                        <p className="text">
                                                            <span className="one">Interest Rate</span>
                                                            <span className="two">6.8%</span>
                                                        </p>
                                                        <p className="text">
                                                            <span className="one">Service Fee</span>
                                                            <span className="two">0.350053 BTC</span>
                                                        </p>
                                                    </div>
                                                    <div className="earn">
                                                        <p className="text">Repayment Amount</p>
                                                        <p className="text two">1074.464494 ETH</p>
                                                    </div>
                                                </div>

                                                <div className="button-box">
                                                    <a href="#" className="button button-1">Start Earning Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
