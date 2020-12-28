import React from "react";

import DemoImg from "../assets/image/demo.png";
import UserInputImg from "../assets/image/user-input.png";
import UserOne from "../assets/image/user-one.png";
import UserTwo from "../assets/image/user-two.png";

const Dashboard = () => {
  return (
    <>
      <div className="date">
        <span>Today</span>
      </div>
      <div className="chat_list_wrapper">
        <ul>
          <li>
            <div className="user_info_wrapper">
              <div className="user_image">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="2" fill="#1D1C1D" />
                  <path
                    d="M14 30C16.208 30 18 28.208 18 26V22H14C11.792 22 10 23.792 10 26C10 28.208 11.792 30 14 30Z"
                    fill="#0ACF83"
                  />
                  <path
                    d="M10 18C10 15.792 11.792 14 14 14H18V22H14C11.792 22 10 20.208 10 18Z"
                    fill="#A259FF"
                  />
                  <path
                    d="M10 10C10 7.792 11.792 6 14 6H18V14H14C11.792 14 10 12.208 10 10Z"
                    fill="#F24E1E"
                  />
                  <path
                    d="M18 6H22C24.208 6 26 7.792 26 10C26 12.208 24.208 14 22 14H18V6Z"
                    fill="#FF7262"
                  />
                  <path
                    d="M26 18C26 20.208 24.208 22 22 22C19.792 22 18 20.208 18 18C18 15.792 19.792 14 22 14C24.208 14 26 15.792 26 18Z"
                    fill="#1ABCFE"
                  />
                </svg>
              </div>
              <div className="user_tags">
                <h5>Figma</h5>
                <span className="tag">App</span>
                <p className="message_time">5.20PM</p>
              </div>
              <div className="user_message_wrapper">
                <a href="#">https://www.figma.com/resources/</a>
              </div>
            </div>
            <ul>
              <li>
                <div className="user_message_image">
                  <div className="user_message_inner">
                    <h3>Community Resources Hub</h3>
                    <p>
                      Assets, courses, guides, and more! made by the Figma
                      community, for the community.
                    </p>
                    <figure>
                      <img src={DemoImg} alt="" />
                    </figure>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="new_message">
            <div className="message_alert">
              <span>new messages</span>
            </div>
          </li>
          <li>
            <div className="user_info_wrapper message_list">
              <div className="user_image">
                <img src={UserTwo} alt="" />
              </div>
              <div className="user_tags">
                <h5>Robert Capa</h5>

                <p className="message_time">5.20PM</p>
              </div>
              <div className="user_message_wrapper">
                <p>
                  was added to product designers Alex jill along with 10 others.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="user_info_wrapper message_list">
              <div className="user_image">
                <img src={UserOne} alt="" />
              </div>
              <div className="user_tags">
                <h5>Alex Jill</h5>

                <p className="message_time">5.38 PM</p>
              </div>
              <div className="user_message_wrapper">
                <p>Hi, Happy to be here! Welocme All!</p>
              </div>
            </div>
          </li>
          <li>
            <div className="user_info_wrapper message_list">
              <div className="user_image">
                <img src={UserTwo} alt="" />
              </div>
              <div className="user_tags">
                <h5>Sebastian Salgoda</h5>

                <p className="message_time">5.44 PM</p>
              </div>
              <div className="user_message_wrapper">
                <p>Yes</p>
              </div>
            </div>
          </li>
          <li>
            <div className="user_info_wrapper message_list">
              <div className="user_image">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="2" fill="#1D1C1D" />
                  <path
                    d="M14 30C16.208 30 18 28.208 18 26V22H14C11.792 22 10 23.792 10 26C10 28.208 11.792 30 14 30Z"
                    fill="#0ACF83"
                  />
                  <path
                    d="M10 18C10 15.792 11.792 14 14 14H18V22H14C11.792 22 10 20.208 10 18Z"
                    fill="#A259FF"
                  />
                  <path
                    d="M10 10C10 7.792 11.792 6 14 6H18V14H14C11.792 14 10 12.208 10 10Z"
                    fill="#F24E1E"
                  />
                  <path
                    d="M18 6H22C24.208 6 26 7.792 26 10C26 12.208 24.208 14 22 14H18V6Z"
                    fill="#FF7262"
                  />
                  <path
                    d="M26 18C26 20.208 24.208 22 22 22C19.792 22 18 20.208 18 18C18 15.792 19.792 14 22 14C24.208 14 26 15.792 26 18Z"
                    fill="#1ABCFE"
                  />
                </svg>
              </div>
              <div className="user_tags">
                <h5>Elliot Erwitt</h5>

                <p className="message_time">5.46 PM</p>
              </div>
              <div className="user_message_wrapper">
                <p>Yup, Please tell me what are the issues you are facing?</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="user_input_section">
        <img src={UserInputImg} alt="" />
      </div>
    </>
  );
};

export default Dashboard;
