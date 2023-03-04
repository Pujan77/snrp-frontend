import React from "react";
import {
  Background,
  Car1,
  Car2,
  Franklin,
  Towelman,
  car,
  gangster,
  wallet,
} from "../assets";

const HomePage = () => {
  return (
    <section>
      {" "}
      <div className="white-container">
        <div className="small-container">
          <p className="heading-text">
            <span>GTAV</span> Roleplay Server
          </p>
          <p className="text">
            Join a massive english <span>Grand Theft Auto V</span> roleplaying
            community. Our voice chat based server will provide you the best
            playing experience! With our players you will never feel alone in
            the sunny city of Los Santos! Join a gang or law enforcement
            faction, work as business, or pursue a professional poker playing
            career. The opportunities are endless!{" "}
            <span>The best GTA V RP server</span>
            is waiting for you! Download & Play now!
          </p>
        </div>
      </div>
      <div className="two-images-container">
        <div className="img-1">
          <img src={Car1} alt="" />
          <div className="img-1-text">
            <p>What You need to play?</p>
            <ul>
              <li className="b-text">
                Licensed Copy Of <span>GTAV</span>
                <p className="text">
                  You Can get GTAV from Steam, Epic Games Store & Rockstar Games
                </p>
              </li>
              <li className="b-text">
                <span>FiveM</span> installed in your PC
                <p className="text">
                  You Can Download FiveM Client Form Official Website of FiveM
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="img-2">
          <img src={Car2} alt="" />
          <div className="img-2-text">
            <p>Why to play roleplay?</p>
            <li className="text">New Friendships On The Horizon</li>
            <li className="text">Modded Real-life Vehicles</li>
            <li className="text">Unique Housing Opportunities</li>
            <li className="text">Criminal Activity Galore</li>
            <li className="text">Plenty Of Jobs To Choose From</li>
            <li className="text">Deep Character Creation</li>
            <li className="text">Realism Is Key</li>
            <li className="text">The Biggest Game On Twitch</li>
          </div>
        </div>
      </div>
      <div className="pop-img-1">
        <img src={gangster} alt="" />
      </div>
      <div className="white-container-2">
        <div className="small-container-2">
          <p className="heading-text">
            <span>Things</span> you can do
          </p>
          <p className="text"></p>
        </div>
      </div>
      <div className="image-container">
        <img src={Background} alt="background" />
        <div className="box">
          <div className="boxes left">
            <p className="feature_big">Ride your dream cars</p>
            <p className="b-text">
              <span>Select from 300+ vehicles!</span>
            </p>
            <p className="text">
              DO YOU LIKE TO DRIVE? CHOOSE A CAR FOR YOURSELF, <br /> A NIGHT
              DRIFTER OR A DASHING DRAG RACER?
            </p>
            <div className="car-float-img">
              <img src={car} alt="car" />
            </div>
          </div>
          <div className="boxes right">
            <p>Get Ahead of the residents</p>
            <p className="b-text">
              <span>COmpete in over more than 15+ EVENTS!</span>
            </p>
            <p className="text">
              YOU WILL DEFINITELY NOT BE BORED! <br /> 15+ DIFFERENT EVENTS WITH
              COOL REWARDS.
            </p>
            <div className="man-float-img">
              <img src={Towelman} alt="man with towel" />
            </div>
          </div>
          <div className="boxes left">
            <p>Become a gangster</p>
            <p className="b-text">
              <span>Break the law on Supreme Nepal Roleplay server</span>
            </p>
            <p className="text">
              BECOME A GANGSTER OR CREATE YOUR OWN CRIMINAL FAMILY?? <br /> GET
              INTO ONE OF THE CRIMINAL GANGS AND DO DANGEROUS BUSINESS.
            </p>
            <div className="gangster-float-img">
              <img src={Franklin} alt="gangster" />
            </div>
          </div>
          <div className="boxes right">
            <p>Manage A BUSINESS</p>
            <p className="b-text">
              <span>Manage supplies set prices</span>
            </p>
            <p className="text">
              MAKE THIS STATE PAY YOU MONEY, IT'S ALL IN YOUR HANDS.
            </p>
            <div className="bag-float-img">
              <img src={wallet} alt="man with towel" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
