  const Students= () =>{
    
    return(
        <>
        <>
  <div id="preloader">
    <div className="loader" />
  </div>
  {/********************
  Preloader end
    *********************/}
  {/***********************************
  Main wrapper start
    ************************************/}
  <div id="main-wrapper">
    {/***********************************
      Nav header start
  ************************************/}
    <div className="nav-header">
      <a href="index.html" className="brand-logo">
        <svg
          className="logo-abbr"
          width={40}
          height={40}
          viewBox="0 0 48 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y={3} width={48} height={48} rx={16} fill="#FB7D5B" />
          <path
            d="M28.964 35.536H19.532L18.02 40H11.576L20.72 14.728H27.848L36.992 40H30.476L28.964 35.536ZM27.38 30.784L24.248 21.532L21.152 30.784H27.38Z"
            fill="white"
          />
        </svg>
        <div className="brand-title">
          <svg
            width={140}
            height={30}
            viewBox="0 0 167 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.964 24.536H8.532L7.02 29H0.576L9.72 3.728H16.848L25.992 29H19.476L17.964 24.536ZM16.38 19.784L13.248 10.532L10.152 19.784H16.38ZM41.051 29L34.931 20.576V29H28.775V2.36H34.931V17.084L41.015 8.912H48.611L40.259 18.992L48.683 29H41.051ZM49.8049 18.92C49.8049 16.856 50.1889 15.044 50.9569 13.484C51.7489 11.924 52.8169 10.724 54.1609 9.884C55.5049 9.044 57.0049 8.624 58.6609 8.624C60.0769 8.624 61.3129 8.912 62.3689 9.488C63.4489 10.064 64.2769 10.82 64.8529 11.756V8.912H71.0089V29H64.8529V26.156C64.2529 27.092 63.4129 27.848 62.3329 28.424C61.2769 29 60.0409 29.288 58.6249 29.288C56.9929 29.288 55.5049 28.868 54.1609 28.028C52.8169 27.164 51.7489 25.952 50.9569 24.392C50.1889 22.808 49.8049 20.984 49.8049 18.92ZM64.8529 18.956C64.8529 17.42 64.4209 16.208 63.5569 15.32C62.7169 14.432 61.6849 13.988 60.4609 13.988C59.2369 13.988 58.1929 14.432 57.3289 15.32C56.4889 16.184 56.0689 17.384 56.0689 18.92C56.0689 20.456 56.4889 21.68 57.3289 22.592C58.1929 23.48 59.2369 23.924 60.4609 23.924C61.6849 23.924 62.7169 23.48 63.5569 22.592C64.4209 21.704 64.8529 20.492 64.8529 18.956ZM74.2385 18.92C74.2385 16.856 74.6225 15.044 75.3905 13.484C76.1825 11.924 77.2505 10.724 78.5945 9.884C79.9385 9.044 81.4385 8.624 83.0945 8.624C84.4145 8.624 85.6145 8.9 86.6945 9.452C87.7985 10.004 88.6625 10.748 89.2865 11.684V2.36H95.4425V29H89.2865V26.12C88.7105 27.08 87.8825 27.848 86.8025 28.424C85.7465 29 84.5105 29.288 83.0945 29.288C81.4385 29.288 79.9385 28.868 78.5945 28.028C77.2505 27.164 76.1825 25.952 75.3905 24.392C74.6225 22.808 74.2385 20.984 74.2385 18.92ZM89.2865 18.956C89.2865 17.42 88.8545 16.208 87.9905 15.32C87.1505 14.432 86.1185 13.988 84.8945 13.988C83.6705 13.988 82.6265 14.432 81.7625 15.32C80.9225 16.184 80.5025 17.384 80.5025 18.92C80.5025 20.456 80.9225 21.68 81.7625 22.592C82.6265 23.48 83.6705 23.924 84.8945 23.924C86.1185 23.924 87.1505 23.48 87.9905 22.592C88.8545 21.704 89.2865 20.492 89.2865 18.956ZM118.832 18.632C118.832 19.208 118.796 19.808 118.724 20.432H104.792C104.888 21.68 105.284 22.64 105.98 23.312C106.7 23.96 107.576 24.284 108.608 24.284C110.144 24.284 111.212 23.636 111.812 22.34H118.364C118.028 23.66 117.416 24.848 116.528 25.904C115.664 26.96 114.572 27.788 113.252 28.388C111.932 28.988 110.456 29.288 108.824 29.288C106.856 29.288 105.104 28.868 103.568 28.028C102.032 27.188 100.832 25.988 99.9681 24.428C99.1041 22.868 98.6721 21.044 98.6721 18.956C98.6721 16.868 99.0921 15.044 99.9321 13.484C100.796 11.924 101.996 10.724 103.532 9.884C105.068 9.044 106.832 8.624 108.824 8.624C110.768 8.624 112.496 9.032 114.008 9.848C115.52 10.664 116.696 11.828 117.536 13.34C118.4 14.852 118.832 16.616 118.832 18.632ZM112.532 17.012C112.532 15.956 112.172 15.116 111.452 14.492C110.732 13.868 109.832 13.556 108.752 13.556C107.72 13.556 106.844 13.856 106.124 14.456C105.428 15.056 104.996 15.908 104.828 17.012H112.532ZM147.712 8.696C150.208 8.696 152.188 9.452 153.652 10.964C155.14 12.476 155.884 14.576 155.884 17.264V29H149.764V18.092C149.764 16.796 149.416 15.8 148.72 15.104C148.048 14.384 147.112 14.024 145.912 14.024C144.712 14.024 143.764 14.384 143.068 15.104C142.396 15.8 142.06 16.796 142.06 18.092V29H135.94V18.092C135.94 16.796 135.592 15.8 134.896 15.104C134.224 14.384 133.288 14.024 132.088 14.024C130.888 14.024 129.94 14.384 129.244 15.104C128.572 15.8 128.236 16.796 128.236 18.092V29H122.08V8.912H128.236V11.432C128.86 10.592 129.676 9.932 130.684 9.452C131.692 8.948 132.832 8.696 134.104 8.696C135.616 8.696 136.96 9.02 138.136 9.668C139.336 10.316 140.272 11.24 140.944 12.44C141.64 11.336 142.588 10.436 143.788 9.74C144.988 9.044 146.296 8.696 147.712 8.696ZM163.285 6.824C162.205 6.824 161.317 6.512 160.621 5.888C159.949 5.24 159.613 4.448 159.613 3.512C159.613 2.552 159.949 1.76 160.621 1.136C161.317 0.487998 162.205 0.163998 163.285 0.163998C164.341 0.163998 165.205 0.487998 165.877 1.136C166.573 1.76 166.921 2.552 166.921 3.512C166.921 4.448 166.573 5.24 165.877 5.888C165.205 6.512 164.341 6.824 163.285 6.824ZM166.345 8.912V29H160.189V8.912H166.345Z"
              fill="white"
            />
          </svg>
        </div>
      </a>
      <div className="nav-control">
        <div className="hamburger">
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <svg
            width={26}
            height={26}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x={22} y={11} width={4} height={4} rx={2} fill="#2A353A" />
            <rect x={11} width={4} height={4} rx={2} fill="#2A353A" />
            <rect x={22} width={4} height={4} rx={2} fill="#2A353A" />
            <rect x={11} y={11} width={4} height={4} rx={2} fill="#2A353A" />
            <rect x={11} y={22} width={4} height={4} rx={2} fill="#2A353A" />
            <rect width={4} height={4} rx={2} fill="#2A353A" />
            <rect y={11} width={4} height={4} rx={2} fill="#2A353A" />
            <rect x={22} y={22} width={4} height={4} rx={2} fill="#2A353A" />
            <rect y={22} width={4} height={4} rx={2} fill="#2A353A" />
          </svg>
        </div>
      </div>
    </div>
    {/***********************************
      Nav header end
  ************************************/}
    {/***********************************
      Chat box start
  ************************************/}
    <div className="chatbox">
      <div className="chatbox-close" />
      <div className="custom-tab-1">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#notes">
              Notes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#alerts">
              Alerts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#chat">
              Chat
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade active show" id="chat" role="tabpanel">
            <div className="card mb-sm-3 mb-md-0 contacts_card dlab-chat-user-box">
              <div className="card-header chat-list-header text-center">
                <a href="javascript:void(0);">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect
                        fill="#000000"
                        x={4}
                        y={11}
                        width={16}
                        height={2}
                        rx={1}
                      />
                      <rect
                        fill="#000000"
                        opacity="0.3"
                        transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                        x={4}
                        y={11}
                        width={16}
                        height={2}
                        rx={1}
                      />
                    </g>
                  </svg>
                </a>
                <div>
                  <h6 className="mb-1">Chat List</h6>
                  <p className="mb-0">Show All</p>
                </div>
                <a href="javascript:void(0);">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect x={0} y={0} width={24} height={24} />
                      <circle fill="#000000" cx={5} cy={12} r={2} />
                      <circle fill="#000000" cx={12} cy={12} r={2} />
                      <circle fill="#000000" cx={19} cy={12} r={2} />
                    </g>
                  </svg>
                </a>
              </div>
              <div
                className="card-body contacts_body p-0 dlab-scroll  "
                id="DLAB_W_Contacts_Body"
              >
                <ul className="contacts">
                  <li className="name-first-letter">A</li>
                  <li className="active dlab-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon" />
                      </div>
                      <div className="user_info">
                        <span>Archie Parker</span>
                        <p>Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dlab-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Alfie Mason</span>
                        <p>Taherah left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dlab-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/3.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon" />
                      </div>
                      <div className="user_info">
                        <span>AharlieKane</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dlab-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/4.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Athan Jacoby</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">B</li>
                  <li className="dlab-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/5.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Bashid Samim</span>
                        <p>Rashid left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dlab-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon" />
                      </div>
                      <div className="user_info">
                        <span>Breddie Ronan</span>
                        <p>Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dlab-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Ceorge Carson</span>
                        <p>Taherah left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">D</li>
                  <li className="dlab-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/3.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon" />
                      </div>
                      <div className="user_info">
                        <span>Darry Parker</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dlab-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/4.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Denry Hunter</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">J</li>
                  <li className="dlab-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/5.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Jack Ronan</span>
                        <p>Rashid left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dlab-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon" />
                      </div>
                      <div className="user_info">
                        <span>Jacob Tucker</span>
                        <p>Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dlab-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>James Logan</span>
                        <p>Taherah left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dlab-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/3.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon" />
                      </div>
                      <div className="user_info">
                        <span>Joshua Weston</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">O</li>
                  <li className="dlab-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/4.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Oliver Acker</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dlab-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/5.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline" />
                      </div>
                      <div className="user_info">
                        <span>Oscar Weston</span>
                        <p>Rashid left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card chat dlab-chat-history-box d-none">
              <div className="card-header chat-list-header text-center">
                <a
                  href="javascript:void(0);"
                  className="dlab-chat-history-back"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <polygon points="0 0 24 0 24 24 0 24" />
                      <rect
                        fill="#000000"
                        opacity="0.3"
                        transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) "
                        x={14}
                        y={7}
                        width={2}
                        height={10}
                        rx={1}
                      />
                      <path
                        d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z"
                        fill="#000000"
                        fillRule="nonzero"
                        transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "
                      />
                    </g>
                  </svg>
                </a>
                <div>
                  <h6 className="mb-1">Chat with Khelesh</h6>
                  <p className="mb-0 text-success">Online</p>
                </div>
                <div className="dropdown">
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x={0} y={0} width={24} height={24} />
                        <circle fill="#000000" cx={5} cy={12} r={2} />
                        <circle fill="#000000" cx={12} cy={12} r={2} />
                        <circle fill="#000000" cx={19} cy={12} r={2} />
                      </g>
                    </svg>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li className="dropdown-item">
                      <i className="fa fa-user-circle text-primary me-2" /> View
                      profile
                    </li>
                    <li className="dropdown-item">
                      <i className="fa fa-users text-primary me-2" /> Add to
                      btn-close friends
                    </li>
                    <li className="dropdown-item">
                      <i className="fa fa-plus text-primary me-2" /> Add to
                      group
                    </li>
                    <li className="dropdown-item">
                      <i className="fa fa-ban text-primary me-2" /> Block
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="card-body msg_card_body dlab-scroll"
                id="DLAB_W_Contacts_Body3"
              >
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    Hi, how are you samim?
                    <span className="msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Hi Khalid i am good tnx how about you?
                    <span className="msg_time_send">8:55 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/2.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    I am good too, thank you for your chat template
                    <span className="msg_time">9:00 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    You are welcome
                    <span className="msg_time_send">9:05 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/2.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    I am looking for your next templates
                    <span className="msg_time">9:07 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Ok, thank you have a good day
                    <span className="msg_time_send">9:10 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/2.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    Bye, see you
                    <span className="msg_time">9:12 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    Hi, how are you samim?
                    <span className="msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Hi Khalid i am good tnx how about you?
                    <span className="msg_time_send">8:55 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/2.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    I am good too, thank you for your chat template
                    <span className="msg_time">9:00 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    You are welcome
                    <span className="msg_time_send">9:05 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/2.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    I am looking for your next templates
                    <span className="msg_time">9:07 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Ok, thank you have a good day
                    <span className="msg_time_send">9:10 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/2.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    Bye, see you
                    <span className="msg_time">9:12 AM, Today</span>
                  </div>
                </div>
              </div>
              <div className="card-footer type_msg">
                <div className="input-group">
                  <textarea
                    className="form-control"
                    placeholder="Type your message..."
                    defaultValue={""}
                  />
                  <div className="input-group-append">
                    <button type="button" className="btn btn-primary">
                      <i className="fa fa-location-arrow" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="alerts" role="tabpanel">
            <div className="card mb-sm-3 mb-md-0 contacts_card">
              <div className="card-header chat-list-header text-center">
                <a href="javascript:void(0);">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect x={0} y={0} width={24} height={24} />
                      <circle fill="#000000" cx={5} cy={12} r={2} />
                      <circle fill="#000000" cx={12} cy={12} r={2} />
                      <circle fill="#000000" cx={19} cy={12} r={2} />
                    </g>
                  </svg>
                </a>
                <div>
                  <h6 className="mb-1">Notications</h6>
                  <p className="mb-0">Show All</p>
                </div>
                <a href="javascript:void(0);">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect x={0} y={0} width={24} height={24} />
                      <path
                        d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                        fill="#000000"
                        fillRule="nonzero"
                        opacity="0.3"
                      />
                      <path
                        d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                        fill="#000000"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                </a>
              </div>
              <div
                className="card-body contacts_body p-0 dlab-scroll"
                id="DLAB_W_Contacts_Body1"
              >
                <ul className="contacts">
                  <li className="name-first-letter">SEVER STATUS</li>
                  <li className="active">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont primary">KK</div>
                      <div className="user_info">
                        <span>David Nester Birthday</span>
                        <p className="text-primary">Today</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">SOCIAL</li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont success">RU</div>
                      <div className="user_info">
                        <span>Perfection Simplified</span>
                        <p>Jame Smith commented on your status</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">SEVER STATUS</li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont primary">AU</div>
                      <div className="user_info">
                        <span>AharlieKane</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont info">MO</div>
                      <div className="user_info">
                        <span>Athan Jacoby</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-footer" />
            </div>
          </div>
          <div className="tab-pane fade" id="notes">
            <div className="card mb-sm-3 mb-md-0 note_card">
              <div className="card-header chat-list-header text-center">
                <a href="javascript:void(0);">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect
                        fill="#000000"
                        x={4}
                        y={11}
                        width={16}
                        height={2}
                        rx={1}
                      />
                      <rect
                        fill="#000000"
                        opacity="0.3"
                        transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                        x={4}
                        y={11}
                        width={16}
                        height={2}
                        rx={1}
                      />
                    </g>
                  </svg>
                </a>
                <div>
                  <h6 className="mb-1">Notes</h6>
                  <p className="mb-0">Add New Nots</p>
                </div>
                <a href="javascript:void(0);">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect x={0} y={0} width={24} height={24} />
                      <path
                        d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                        fill="#000000"
                        fillRule="nonzero"
                        opacity="0.3"
                      />
                      <path
                        d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                        fill="#000000"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                </a>
              </div>
              <div
                className="card-body contacts_body p-0 dlab-scroll"
                id="DLAB_W_Contacts_Body2"
              >
                <ul className="contacts">
                  <li className="active">
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>New order placed..</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-primary btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-danger btn-xs sharp"
                        >
                          <i className="fa fa-trash" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>Youtube, a video-sharing website..</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-primary btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-danger btn-xs sharp"
                        >
                          <i className="fa fa-trash" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>john just buy your product..</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-primary btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-danger btn-xs sharp"
                        >
                          <i className="fa fa-trash" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>Athan Jacoby</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-primary btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt" />
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="btn btn-danger btn-xs sharp"
                        >
                          <i className="fa fa-trash" />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/***********************************
      Chat box End
  ************************************/}
    {/***********************************
      Header start
  ************************************/}
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div className="dashboard_bar">Students</div>
            </div>
            <ul className="navbar-nav header-right">
              <li className="nav-item dropdown notification_dropdown all">
                <a
                  className="nav-link"
                  href="javascript:void(0);"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <svg
                    height={24}
                    className="svg-main-icon"
                    viewBox="0 0 32 32"
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <clipPath id="clip_1">
                      <path
                        id="artboard_1"
                        clipRule="evenodd"
                        d="m0 0h32v32h-32z"
                      />
                    </clipPath>
                    <g id="select" clipPath="url(#clip_1)">
                      <path
                        id="Vector"
                        d="m4.70222 7.16834-.12871-.2574c-.0593-.11861-.13904-.22136-.23922-.30824-.10018-.08689-.21317-.1513-.33898-.19323-.1258-.04194-.25484-.0582-.38711-.0488-.13228.0094-.25772.04375-.37633.10306-.24699.12349-.41414.31622-.50147.5782-.08732.26197-.06923.51645.05426.76344l1.32093 2.64183c.0593.1186.13904.2214.23922.3083.10018.0868.21317.1512.33898.1932.1258.0419.25484.0582.38711.0488.13228-.0094.25772-.0438.37633-.1031.01854-.0092.03678-.0191.05471-.0295s.03552-.0214.05277-.0329l5.99999-3.99995c.1104-.07356.2024-.16543.2762-.27561s.1237-.23029.1497-.36032c.026-.13004.0261-.2601.0004-.39019-.0257-.13008-.0754-.25029-.1489-.36063-.1532-.22977-.3652-.37173-.636-.42588-.2707-.05416-.521-.00465-.7508.14853l-1.94316 1.29545-3.1143 2.07619zm11.29778-1.16834c-.2761 0-.5118.09763-.7071.29289s-.2929.43097-.2929.70711.0976.51184.2929.70711c.1953.19526.431.29289.7071.29289h14c.2761 0 .5118-.09763.7071-.29289.1953-.19527.2929-.43097.2929-.70711s-.0976-.51185-.2929-.70711-.431-.29289-.7071-.29289zm-11.27691 9.1683-.12871-.2574c-.12349-.2469-.31622-.4141-.5782-.5014-.26197-.0874-.51645-.0693-.76344.0542-.11861.0593-.22135.1391-.30824.2393-.08688.1001-.15129.2131-.19323.3389-.04193.1258-.0582.2549-.0488.3871.0094.1323.04376.2578.10306.3764l1.32092 2.6418c.1235.247.31623.4142.5782.5015.26198.0873.51646.0692.76345-.0543.01854-.0092.03678-.0191.05471-.0295s.03552-.0214.05277-.0329l6.00002-3.9999c.2298-.1532.3717-.3652.4259-.636.0541-.2708.0046-.521-.1486-.7508-.1531-.2298-.3651-.3717-.6359-.4259-.2708-.0541-.521-.0046-.7508.1485l-5.05749 3.3717zm11.27691-.1683c-.2761 0-.5118.0976-.7071.2929s-.2929.431-.2929.7071.0976.5118.2929.7071.431.2929.7071.2929h14c.2761 0 .5118-.0976.7071-.2929s.2929-.431.2929-.7071-.0976-.5118-.2929-.7071-.431-.2929-.7071-.2929zm-11.27691 8.1683-.12871-.2574c-.12349-.247-.31622-.4141-.5782-.5014-.26197-.0874-.51645-.0693-.76344.0542-.11861.0593-.22135.1391-.30824.2393-.08688.1001-.15129.2131-.19323.3389-.04193.1258-.0582.2549-.0488.3871.0094.1323.04376.2578.10306.3764l1.32092 2.6418c.1235.247.31623.4142.5782.5015.26198.0873.51646.0692.76345-.0543.01854-.0092.03678-.0191.05471-.0295s.03552-.0214.05277-.0329l6.00002-4c.1103-.0735.2024-.1654.2762-.2756.0738-.1101.1237-.2303.1497-.3603s.0261-.2601.0004-.3902c-.0258-.1301-.0754-.2503-.149-.3606-.1531-.2298-.3651-.3717-.6359-.4259-.2708-.0541-.521-.0046-.7508.1485l-1.94319 1.2955-3.1143 2.0762zm11.27691.8317c-.2761 0-.5118.0976-.7071.2929s-.2929.431-.2929.7071.0976.5118.2929.7071.431.2929.7071.2929h14c.2761 0 .5118-.0976.7071-.2929s.2929-.431.2929-.7071-.0976-.5118-.2929-.7071-.431-.2929-.7071-.2929z"
                        fillRule="evenodd"
                      />
                    </g>
                  </svg>
                </a>
                <div className="dropdown-menu dropdown-menu-end p-0">
                  <div className="card mb-0">
                    <div className="card-header border-0 d-block h-auto">
                      <ul className="d-flex align-items-center justify-content-around">
                        <li className="nav-item dropdown notification_dropdown">
                          <a
                            className="nav-link bell dz-theme-mode"
                            href="javascript:void(0);"
                          >
                            <svg
                              id="icon-light"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={1}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-sun"
                            >
                              <circle cx={12} cy={12} r={5} />
                              <line x1={12} y1={1} x2={12} y2={3} />
                              <line x1={12} y1={21} x2={12} y2={23} />
                              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                              <line
                                x1="18.36"
                                y1="18.36"
                                x2="19.78"
                                y2="19.78"
                              />
                              <line x1={1} y1={12} x2={3} y2={12} />
                              <line x1={21} y1={12} x2={23} y2={12} />
                              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                            <svg
                              id="icon-dark"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={1}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-moon"
                            >
                              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                          </a>
                        </li>
                        <li className="nav-item dropdown notification_dropdown">
                          <a
                            className="nav-link bell dz-fullscreen"
                            href="javascript:void(0);"
                          >
                            <svg
                              id="icon-full"
                              viewBox="0 0 24 24"
                              width={20}
                              height={20}
                              stroke="currentColor"
                              strokeWidth={2}
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="css-i6dzq1"
                            >
                              <path
                                d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                                style={{
                                  strokeDasharray: "37, 57",
                                  strokeDashoffset: 0
                                }}
                              />
                            </svg>
                            <svg
                              id="icon-minimize"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="A098AE"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-minimize"
                            >
                              <path
                                d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
                                style={{
                                  strokeDasharray: "37, 57",
                                  strokeDashoffset: 0
                                }}
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown notification_dropdown search-area-header">
                <a
                  className="nav-link"
                  href="javascript:void(0);"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.6 25.8L22 20.2C23.3 18.5 24.1 16.4 24.1 14.1C24.1 8.60001 19.6 4.10001 14.1 4.10001C8.6 4.10001 4 8.60001 4 14.1C4 19.6 8.5 24.1 14 24.1C16.3 24.1 18.5 23.3 20.2 21.9L25.8 27.5C26 27.7 26.4 27.9 26.7 27.9C27 27.9 27.3 27.8 27.6 27.5C28.1 27.1 28.1 26.3 27.6 25.8ZM6.5 14.1C6.5 10 9.9 6.60001 14 6.60001C18.1 6.60001 21.5 10 21.5 14.1C21.5 18.2 18.1 21.6 14 21.6C9.9 21.6 6.5 18.3 6.5 14.1Z"
                      fill="#A098AE"
                    />
                  </svg>
                </a>
                <div className="dropdown-menu dropdown-menu-end p-0 rounded">
                  <div className="card mb-0">
                    <div className="card-body px-0">
                      <div className="px-3">
                        <div className="input-group search-area w-100">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search here..."
                          />
                          <span className="input-group-text">
                            <a href="javascript:void(0)">
                              <svg
                                width={15}
                                height={15}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.5605 15.4395L13.7527 11.6317C14.5395 10.446 15 9.02625 15 7.5C15 3.3645 11.6355 0 7.5 0C3.3645 0 0 3.3645 0 7.5C0 11.6355 3.3645 15 7.5 15C9.02625 15 10.446 14.5395 11.6317 13.7527L15.4395 17.5605C16.0245 18.1462 16.9755 18.1462 17.5605 17.5605C18.1462 16.9747 18.1462 16.0252 17.5605 15.4395V15.4395ZM2.25 7.5C2.25 4.605 4.605 2.25 7.5 2.25C10.395 2.25 12.75 4.605 12.75 7.5C12.75 10.395 10.395 12.75 7.5 12.75C4.605 12.75 2.25 10.395 2.25 7.5V7.5Z"
                                  fill="#01A3FF"
                                />
                              </svg>
                            </a>
                          </span>
                        </div>
                        <h6 className="my-2 mt-3">Recently Searched:</h6>
                      </div>
                      <div className="dlab-scroll px-3 mt-3 height300">
                        <ul className="d-flex align-items-center mb-3">
                          <li>
                            <img
                              src="images/avatar/1.jpg"
                              className="avatar avatar-sm"
                              alt=""
                            />
                            <a href="javascript:void(0);" className="ms-2">
                              Benjamin
                            </a>
                          </li>
                          <li className="ms-auto">
                            <i className="fa-solid fa-trash" />
                          </li>
                        </ul>
                        <ul className="d-flex align-items-center mb-3">
                          <li>
                            <img
                              src="images/avatar/2.jpg"
                              className="avatar avatar-sm"
                              alt=""
                            />
                            <a href="javascript:void(0);" className="ms-2">
                              Oliver
                            </a>
                          </li>
                          <li className="ms-auto">
                            <i className="fa-solid fa-trash" />
                          </li>
                        </ul>
                        <ul className="d-flex align-items-center mb-3">
                          <li>
                            <img
                              src="images/avatar/1.jpg"
                              className="avatar avatar-sm"
                              alt=""
                            />
                            <a href="javascript:void(0);" className="ms-2">
                              Lucas
                            </a>
                          </li>
                          <li className="ms-auto">
                            <i className="fa-solid fa-trash" />
                          </li>
                        </ul>
                        <ul className="d-flex align-items-center mb-3">
                          <li>
                            <img
                              src="images/avatar/2.jpg"
                              className="avatar avatar-sm"
                              alt=""
                            />
                            <a href="javascript:void(0);" className="ms-2">
                              Benjamin
                            </a>
                          </li>
                          <li className="ms-auto">
                            <i className="fa-solid fa-trash" />
                          </li>
                        </ul>
                        <ul className="d-flex align-items-center mb-3">
                          <li>
                            <img
                              src="images/avatar/4.jpg"
                              className="avatar avatar-sm"
                              alt=""
                            />
                            <a href="javascript:void(0);" className="ms-2">
                              Benjamin
                            </a>
                          </li>
                          <li className="ms-auto">
                            <i className="fa-solid fa-trash" />
                          </li>
                        </ul>
                        <ul className="d-flex align-items-center mb-3">
                          <li>
                            <img
                              src="images/avatar/3.jpg"
                              className="avatar avatar-sm"
                              alt=""
                            />
                            <a href="javascript:void(0);" className="ms-2">
                              Benjamin
                            </a>
                          </li>
                          <li className="ms-auto">
                            <i className="fa-solid fa-trash" />
                          </li>
                        </ul>
                        <ul className="d-flex align-items-center mb-3">
                          <li>
                            <img
                              src="images/avatar/2.jpg"
                              className="avatar avatar-sm"
                              alt=""
                            />
                            <a href="javascript:void(0);" className="ms-2">
                              Benjamin
                            </a>
                          </li>
                          <li className="ms-auto">
                            <i className="fa-solid fa-trash" />
                          </li>
                        </ul>
                        <ul className="d-flex align-items-center mb-3">
                          <li>
                            <img
                              src="images/avatar/1.jpg"
                              className="avatar avatar-sm"
                              alt=""
                            />
                            <a href="javascript:void(0);" className="ms-2">
                              Benjamin
                            </a>
                          </li>
                          <li className="ms-auto">
                            <i className="fa-solid fa-trash" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown notification_dropdown">
                <a
                  className="nav-link bell dz-theme-mode"
                  href="javascript:void(0);"
                >
                  <i id="icon-light-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-sun"
                    >
                      <circle cx={12} cy={12} r={5} />
                      <line x1={12} y1={1} x2={12} y2={3} />
                      <line x1={12} y1={21} x2={12} y2={23} />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1={1} y1={12} x2={3} y2={12} />
                      <line x1={21} y1={12} x2={23} y2={12} />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  </i>
                  <i id="icon-dark-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-moon"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  </i>
                </a>
              </li>
              <li className="nav-item dropdown notification_dropdown">
                <a
                  className="nav-link bell dz-fullscreen"
                  href="javascript:void(0);"
                >
                  <svg
                    id="icon-full-1"
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <path
                      d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                      style={{ strokeDasharray: "37, 57", strokeDashoffset: 0 }}
                    />
                  </svg>
                  <svg
                    id="icon-minimize-1"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="A098AE"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-minimize"
                  >
                    <path
                      d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
                      style={{ strokeDasharray: "37, 57", strokeDashoffset: 0 }}
                    />
                  </svg>
                </a>
              </li>
              <li className="nav-item dropdown notification_dropdown">
                <a className="nav-link bell-link" href="javascript:void(0);">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A098AE"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item bell-icon blink dropdown notification_dropdown">
                <a
                  className="nav-link  "
                  href="javascript:void(0);"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.3677 18.9391V9.86768C25.3677 4.70215 21.1655 0.5 16 0.5C10.8345 0.5 6.63232 4.70215 6.63232 9.86768V18.9397C4.96704 19.4224 3.73828 20.9544 3.73828 22.8374C3.73828 25.0386 5.5293 26.8296 7.73096 26.8296H11.377V26.877C11.377 29.4263 13.4507 31.5 16 31.5C18.5493 31.5 20.6231 29.4263 20.6231 26.8769V26.8296H24.2691C26.4707 26.8296 28.2617 25.0386 28.2617 22.7583C28.2617 20.9406 27.033 19.4198 25.3677 18.9391ZM9.63232 9.86768C9.63232 6.35645 12.4888 3.5 16 3.5C19.5112 3.5 22.3677 6.35645 22.3677 9.86768V18.7661H9.63232V9.86768ZM17.6231 26.8769C17.6231 27.772 16.895 28.5 16 28.5C15.105 28.5 14.377 27.772 14.377 26.8769V26.8296H17.623V26.8769H17.6231ZM24.269 23.8296H7.73096C7.1836 23.8296 6.73828 23.3843 6.73828 22.7583C6.73828 22.2114 7.18359 21.7661 7.73096 21.7661H24.2691C24.8164 21.7661 25.2617 22.2114 25.2617 22.8374C25.2617 23.3843 24.8164 23.8296 24.269 23.8296Z"
                      fill="#A098AE"
                    />
                  </svg>
                </a>
                <div className="dropdown-menu dropdown-menu-end of-visible">
                  <div className="dropdown-header">
                    <h4 className="title mb-0">Notification</h4>
                    <a href="javascript:void(0);" className="d-none">
                      <i className="flaticon-381-settings-6" />
                    </a>
                  </div>
                  <div
                    id="DZ_W_Notification1"
                    className="widget-media dlab-scroll p-3"
                    style={{ height: 380 }}
                  >
                    <ul className="timeline">
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2">
                            <img
                              alt="image"
                              width={50}
                              src="images/avatar/1.jpg"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-info">KG</div>
                          <div className="media-body">
                            <h6 className="mb-1">
                              Resport created successfully
                            </h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-success">
                            <i className="fa fa-home" />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2">
                            <img
                              alt="image"
                              width={50}
                              src="images/avatar/1.jpg"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-danger">KG</div>
                          <div className="media-body">
                            <h6 className="mb-1">
                              Resport created successfully
                            </h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-primary">
                            <i className="fa fa-home" />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <a className="all-notification" href="javascript:void(0);">
                    See all notifications <i className="ti-arrow-end" />
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown notification_dropdown">
                <a
                  className="nav-link me-0 "
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                >
                  <svg
                    width={20}
                    className="setting-svg"
                    height={20}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2631 2.66667L11.4167 6.46615C10.9353 6.69779 10.4752 6.96458 10.0339 7.26563L6.32035 6.09636L2.58337 12.5703L5.39848 15.1484C5.28849 15.9648 5.33831 16.3672 5.39848 16.8516L2.58337 19.4297L6.32035 25.9037L10.0339 24.7344C10.4752 25.0354 10.9353 25.3022 11.4167 25.5339L12.2631 29.3333H19.737L20.5834 25.5339C21.0647 25.3022 21.5249 25.0354 21.9662 24.7344L25.6797 25.9037L29.4167 19.4297L26.6016 16.8516C26.6246 16.5682 26.6664 16.2845 26.6667 16C26.6678 15.7069 26.6216 15.4108 26.6016 15.1484L29.4167 12.5703L25.6797 6.09636L21.9662 7.26563C21.5249 6.96458 21.0647 6.69779 20.5834 6.46615L19.737 2.66667H12.2631ZM14.4037 5.33334H17.5964L18.2552 8.29167L18.9167 8.55209C19.6649 8.84512 20.3644 9.24846 20.9922 9.75001L21.5495 10.1927L24.4401 9.28386L26.0365 12.0495L23.8021 14.099L23.9089 14.8021C24.0346 15.5797 24.0101 16.4746 23.9089 17.1979L23.8021 17.901L26.0365 19.9505L24.4401 22.7162L21.5495 21.8073L20.9922 22.25C20.3644 22.7516 19.6649 23.1549 18.9167 23.4479L18.2552 23.7083L17.5964 26.6667H14.4037L13.7448 23.7083L13.0834 23.4479C12.3351 23.1549 11.6357 22.7516 11.0079 22.25L10.4506 21.8073L7.55994 22.7162L5.96358 19.9505L8.19796 17.901L8.09119 17.1979C7.96095 16.4046 7.98095 15.4967 8.09119 14.8021L8.19796 14.099L5.96358 12.0495L7.55994 9.28386L10.4506 10.1927L11.0079 9.75001C11.6357 9.24846 12.3351 8.84512 13.0834 8.55209L13.7448 8.29167L14.4037 5.33334ZM16 10.6667C13.0703 10.6667 10.6667 13.0703 10.6667 16C10.6667 18.9297 13.0703 21.3333 16 21.3333C18.9298 21.3333 21.3334 18.9297 21.3334 16C21.3334 13.0703 18.9298 10.6667 16 10.6667ZM16 13.3333C17.4886 13.3333 18.6667 14.5115 18.6667 16C18.6667 17.4886 17.4886 18.6667 16 18.6667C14.5115 18.6667 13.3334 17.4886 13.3334 16C13.3334 14.5115 14.5115 13.3333 16 13.3333Z"
                      fill="#A098AE"
                    />
                  </svg>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <div
                    id="DZ_W_TimeLine02"
                    className="widget-timeline dlab-scroll style-1 p-3 height370"
                  >
                    <ul className="timeline">
                      <li>
                        <div className="timeline-badge primary" />
                        <a
                          className="timeline-panel text-muted"
                          href="javascript:void(0);"
                        >
                          <span>10 minutes ago</span>
                          <h6 className="mb-0">
                            Youtube, a video-sharing website, goes live{" "}
                            <strong className="text-primary">$500</strong>.
                          </h6>
                        </a>
                      </li>
                      <li>
                        <div className="timeline-badge info"></div>
                        <a
                          className="timeline-panel text-muted"
                          href="javascript:void(0);"
                        >
                          <span>20 minutes ago</span>
                          <h6 className="mb-0">
                            New order placed{" "}
                            <strong className="text-info">#XF-2356.</strong>
                          </h6>
                          <p className="mb-0">
                            Quisque a consequat ante Sit amet magna at
                            volutapt...
                          </p>
                        </a>
                      </li>
                      <li>
                        <div className="timeline-badge danger"></div>
                        <a
                          className="timeline-panel text-muted"
                          href="javascript:void(0);"
                        >
                          <span>30 minutes ago</span>
                          <h6 className="mb-0">
                            john just buy your product{" "}
                            <strong className="text-warning">Sell $250</strong>
                          </h6>
                        </a>
                      </li>
                      <li>
                        <div className="timeline-badge success"></div>
                        <a
                          className="timeline-panel text-muted"
                          href="javascript:void(0);"
                        >
                          <span>15 minutes ago</span>
                          <h6 className="mb-0">
                            StumbleUpon is acquired by eBay.{" "}
                          </h6>
                        </a>
                      </li>
                      <li>
                        <div className="timeline-badge warning"></div>
                        <a
                          className="timeline-panel text-muted"
                          href="javascript:void(0);"
                        >
                          <span>20 minutes ago</span>
                          <h6 className="mb-0">
                            Mashable, a news website and blog, goes live.
                          </h6>
                        </a>
                      </li>
                      <li>
                        <div className="timeline-badge dark"></div>
                        <a
                          className="timeline-panel text-muted"
                          href="javascript:void(0);"
                        >
                          <span>20 minutes ago</span>
                          <h6 className="mb-0">
                            Mashable, a news website and blog, goes live.
                          </h6>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown header-profile2">
                  <a
                    className="nav-link ms-0"
                    href="javascript:void(0);"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="header-info2 d-flex align-items-center">
                      <div className="d-flex align-items-center sidebar-info"></div>
                      <img src="images/user.jpg" alt="" />
                    </div>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end pb-0"
                    style={{}}
                  >
                    <div className="card mb-0">
                      <div className="card-header p-3">
                        <ul className="d-flex align-items-center">
                          <li>
                            <img
                              src="images/user.jpg"
                              className="ms-0"
                              alt=""
                            />
                          </li>
                          <li className="ms-2">
                            <h4 className="mb-0">Nella Vita</h4>
                            <span>Admin</span>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body p-3">
                        <a
                          href="app-profile.html"
                          className="dropdown-item ai-icon "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            className="svg-main-icon"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <polygon points="0 0 24 0 24 24 0 24" />
                              <path
                                d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                                fill="#000000"
                                fillRule="nonzero"
                                opacity="0.3"
                              />
                              <path
                                d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                                fill="var(--primary)"
                                fillRule="nonzero"
                              />
                            </g>
                          </svg>
                          <span className="ms-2">Profile </span>
                        </a>
                        <a href="chat.html" className="dropdown-item ai-icon ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            className="svg-main-icon"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d="M21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L5,18 C3.34314575,18 2,16.6568542 2,15 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 Z M6.16794971,10.5547002 C7.67758127,12.8191475 9.64566871,14 12,14 C14.3543313,14 16.3224187,12.8191475 17.8320503,10.5547002 C18.1384028,10.0951715 18.0142289,9.47430216 17.5547002,9.16794971 C17.0951715,8.86159725 16.4743022,8.98577112 16.1679497,9.4452998 C15.0109146,11.1808525 13.6456687,12 12,12 C10.3543313,12 8.9890854,11.1808525 7.83205029,9.4452998 C7.52569784,8.98577112 6.90482849,8.86159725 6.4452998,9.16794971 C5.98577112,9.47430216 5.86159725,10.0951715 6.16794971,10.5547002 Z"
                                fill="var(--primary)"
                              />
                            </g>
                          </svg>
                          <span className="ms-2">Message </span>
                        </a>
                        <a
                          href="email-inbox.html"
                          className="dropdown-item ai-icon "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            className="svg-main-icon"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"
                                fill="#000000"
                              />
                              <circle
                                fill="var(--primary)"
                                opacity="0.3"
                                cx="19.5"
                                cy="17.5"
                                r="2.5"
                              />
                            </g>
                          </svg>
                          <span className="ms-2">Notification </span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item ai-icon "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            className="svg-main-icon"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z"
                                fill="#000000"
                                fillRule="nonzero"
                                opacity="0.3"
                              />
                              <path
                                d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                                fill="#000000"
                              />
                            </g>
                          </svg>
                          <span className="ms-2">Settings </span>
                        </a>
                      </div>
                      <div className="card-footer text-center p-3">
                        <a
                          href="page-login.html"
                          className="dropdown-item ai-icon btn btn-primary light"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--primary)"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1={21} y1={12} x2={9} y2={12} />
                          </svg>
                          <span className="ms-2 text-primary">Logout </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    {/***********************************
      Header end ti-comment-alt
  ************************************/}
    {/***********************************
      Sidebar start
  ************************************/}
    <div className="dlabnav">
      <div className="dlabnav-scroll">
        <ul className="metismenu" id="menu">
          <li>
            <a
              className="has-arrow "
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <i className="material-symbols-outlined">home</i>
              <span className="nav-text">Dashboard</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="index.html">Dashboard Light</a>
              </li>
              <li>
                <a href="index-2.html">Dashboard Dark</a>
              </li>
              <li>
                <a href="finance.html">Finance</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow "
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <i className="material-symbols-outlined">school</i>
              <span className="nav-text">Student</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="student.html">Student</a>
              </li>
              <li>
                <a href="student-detail.html">Student Detail</a>
              </li>
              <li>
                <a href="add-student.html">Add New Student</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow "
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <i className="material-symbols-outlined">person</i>
              <span className="nav-text">Teacher</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="teacher.html">Teacher</a>
              </li>
              <li>
                <a href="teacher-detail.html">Teacher Detail</a>
              </li>
              <li>
                <a href="add-teacher.html">Add New Teacher</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow "
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <i className="material-symbols-outlined">restaurant_menu</i>
              <span className="nav-text">Food</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="food.html">Food menu</a>
              </li>
              <li>
                <a href="food-details.html">Food Detail</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow "
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <i className="material-icons">folder</i>
              <span className="nav-text">File Manager</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="file-manager.html">File Manager</a>
              </li>
              <li>
                <a href="user.html">User</a>
              </li>
              <li>
                <a href="celandar.html">Calendar</a>
              </li>
              <li>
                <a href="chat.html">Chat</a>
              </li>
              <li>
                <a href="activity.html">Activity</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow "
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <i className="material-icons"> app_registration </i>
              <span className="nav-text">Apps</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="./app-profile.html">Profile</a>
              </li>
              <li>
                <a href="./edit-profile.html">Edit Profile</a>
              </li>
              <li>
                <a href="./post-details.html">Post Details</a>
              </li>
              <li>
                <a
                  className="has-arrow"
                  href="javascript:void(0);"
                  aria-expanded="false"
                >
                  Email
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="./email-compose.html">Compose</a>
                  </li>
                  <li>
                    <a href="./email-inbox.html">Inbox</a>
                  </li>
                  <li>
                    <a href="./email-read.html">Read</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="./app-calender.html">Calendar</a>
              </li>
              <li>
                <a
                  className="has-arrow"
                  href="javascript:void(0);"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="./ecom-product-grid.html">Product Grid</a>
                  </li>
                  <li>
                    <a href="./ecom-product-list.html">Product List</a>
                  </li>
                  <li>
                    <a href="./ecom-product-detail.html">Product Details</a>
                  </li>
                  <li>
                    <a href="./ecom-product-order.html">Order</a>
                  </li>
                  <li>
                    <a href="./ecom-checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="./ecom-invoice.html">Invoice</a>
                  </li>
                  <li>
                    <a href="./ecom-customers.html">Customers</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow "
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <i className="material-icons"> assessment </i>
              <span className="nav-text">Charts</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="./chart-flot.html">Flot</a>
              </li>
              <li>
                <a href="./chart-morris.html">Morris</a>
              </li>
              <li>
                <a href="./chart-chartjs.html">Chartjs</a>
              </li>
              <li>
                <a href="./chart-chartist.html">Chartist</a>
              </li>
              <li>
                <a href="./chart-sparkline.html">Sparkline</a>
              </li>
              <li>
                <a href="./chart-peity.html">Peity</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow "
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <i className="material-icons"> favorite </i>
              <span className="nav-text">Bootstrap</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="./ui-accordion.html">Accordion</a>
              </li>
              <li>
                <a href="./ui-alert.html">Alert</a>
              </li>
              <li>
                <a href="./ui-badge.html">Badge</a>
              </li>
              <li>
                <a href="./ui-button.html">Button</a>
              </li>
              <li>
                <a href="./ui-modal.html">Modal</a>
              </li>
              <li>
                <a href="./ui-button-group.html">Button Group</a>
              </li>
              <li>
                <a href="./ui-list-group.html">List Group</a>
              </li>
              <li>
                <a href="./ui-card.html">Cards</a>
              </li>
              <li>
                <a href="./ui-carousel.html">Carousel</a>
              </li>
              <li>
                <a href="./ui-dropdown.html">Dropdown</a>
              </li>
              <li>
                <a href="./ui-popover.html">Popover</a>
              </li>
              <li>
                <a href="./ui-progressbar.html">Progressbar</a>
              </li>
              <li>
                <a href="./ui-tab.html">Tab</a>
              </li>
              <li>
                <a href="./ui-typography.html">Typography</a>
              </li>
              <li>
                <a href="./ui-pagination.html">Pagination</a>
              </li>
              <li>
                <a href="./ui-grid.html">Grid</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow "
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <i className="material-icons"> extension </i>
              <span className="nav-text">Plugins</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="./uc-select2.html">Select 2</a>
              </li>
              <li>
                <a href="./uc-nestable.html">Nestedable</a>
              </li>
              <li>
                <a href="./uc-noui-slider.html">Noui Slider</a>
              </li>
              <li>
                <a href="./uc-sweetalert.html">Sweet Alert</a>
              </li>
              <li>
                <a href="./uc-toastr.html">Toastr</a>
              </li>
              <li>
                <a href="./map-jqvmap.html">Jqv Map</a>
              </li>
              <li>
                <a href="./uc-lightgallery.html">Light Gallery</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow "
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <i className="material-icons"> widgets </i>
              <span className="nav-text">Widget</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="./widget-chart.html">Chart</a>
              </li>
              <li>
                <a href="./widget-card.html">Card</a>
              </li>
              <li>
                <a href="./widget-list.html">List</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow "
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <i className="material-icons"> insert_drive_file </i>
              <span className="nav-text">Forms</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="./form-element.html">Form Elements</a>
              </li>
              <li>
                <a href="./form-wizard.html">Wizard</a>
              </li>
              <li>
                <a href="./form-ckeditor.html">CkEditor</a>
              </li>
              <li>
                <a href="form-pickers.html">Pickers</a>
              </li>
              <li>
                <a href="form-validation.html">Form Validate</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow "
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <i className="material-icons"> table_chart </i>
              <span className="nav-text">Table</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="table-bootstrap-basic.html">Bootstrap</a>
              </li>
              <li>
                <a href="table-datatable-basic.html">Datatable</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow "
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <i className="material-icons">article</i>
              <span className="nav-text">Pages</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="./page-login.html">Login</a>
              </li>
              <li>
                <a href="./page-register.html">Register</a>
              </li>
              <li>
                <a
                  className="has-arrow"
                  href="javascript:void(0);"
                  aria-expanded="false"
                >
                  Error
                </a>
                <ul aria-expanded="false">
                  <li>
                    <a href="./page-error-400.html">Error 400</a>
                  </li>
                  <li>
                    <a href="./page-error-403.html">Error 403</a>
                  </li>
                  <li>
                    <a href="./page-error-404.html">Error 404</a>
                  </li>
                  <li>
                    <a href="./page-error-500.html">Error 500</a>
                  </li>
                  <li>
                    <a href="./page-error-503.html">Error 503</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="./page-lock-screen.html">Lock Screen</a>
              </li>
              <li>
                <a href="./empty-page.html">Empty Page</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="copyright">
          <p>
            <strong>School Admission Dashboard</strong>
          </p>
          <p className="fs-12">
            Made with <span className="heart" /> by DexignLab
          </p>
        </div>
      </div>
    </div>
    {/***********************************
      Sidebar end
  ************************************/}
    {/***********************************
      Content body start
  ************************************/}
    <div className="content-body">
      {/* row */}
      <div className="container-fluid">
        {/* Row */}
        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-title flex-wrap">
                  <div className="input-group search-area mb-md-0 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here..."
                    />
                    <span className="input-group-text">
                      <a href="javascript:void(0)">
                        <svg
                          width={15}
                          height={15}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5605 15.4395L13.7527 11.6317C14.5395 10.446 15 9.02625 15 7.5C15 3.3645 11.6355 0 7.5 0C3.3645 0 0 3.3645 0 7.5C0 11.6355 3.3645 15 7.5 15C9.02625 15 10.446 14.5395 11.6317 13.7527L15.4395 17.5605C16.0245 18.1462 16.9755 18.1462 17.5605 17.5605C18.1462 16.9747 18.1462 16.0252 17.5605 15.4395V15.4395ZM2.25 7.5C2.25 4.605 4.605 2.25 7.5 2.25C10.395 2.25 12.75 4.605 12.75 7.5C12.75 10.395 10.395 12.75 7.5 12.75C4.605 12.75 2.25 10.395 2.25 7.5V7.5Z"
                            fill="#01A3FF"
                          />
                        </svg>
                      </a>
                    </span>
                  </div>
                  <div>
                    <select
                      className="image-select bs-select dashboard-select me-3"
                      aria-label="Default"
                    >
                      <option selected="">Newest</option>
                      <option value={1}>Oldest</option>
                      <option value={2}>Recent</option>
                    </select>
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      + New Student
                    </button>
                  </div>
                </div>
              </div>
              {/*column*/}
              <div className="col-xl-12 wow fadeInUp" data-wow-delay="1.5s">
                <div className="table-responsive full-data">
                  <table
                    className="table-responsive-lg table display dataTablesCard student-tab dataTable no-footer"
                    id="example-student"
                  >
                    <thead>
                      <tr>
                        <th>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkAll"
                            required=""
                          />
                        </th>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Parent Name</th>
                        <th>City</th>
                        <th>Contact</th>
                        <th>Grade</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check8"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check8"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/1.jpg"
                              alt=""
                              className="avatar avatar-sm me-3"
                            />
                            <h4>Samantha William</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Mana William </h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-secondary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check81"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check81"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/2.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Tony Soap</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">James Soap </h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-warning">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check82"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check82"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/3.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Karen Hope</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Justin Hope</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-primary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check83"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check83"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/4.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Jordan Nico</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Amanda Nico</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-secondary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check84"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check84"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/5.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Nadila Adja</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Jack Adja</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-warning">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check800"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check800"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/1.jpg"
                              alt=""
                              className="avatar avatar-sm me-3"
                            />
                            <h4>Samantha William</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Mana William </h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-secondary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check810"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check810"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/2.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Tony Soap</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">James Soap </h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-warning">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check820"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check820"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/3.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Karen Hope</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Justin Hope</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-primary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check830"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check830"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/4.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Jordan Nico</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Amanda Nico</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-secondary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check85"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check85"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/6.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Johnny Ahmad</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Danny Ahmad</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-primary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check86"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check86"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/7.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Jack Sally</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Lula Beatrice</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-secondary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check850"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check850"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/6.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Johnny Ahmad</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Danny Ahmad</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-primary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check87"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check87"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/8.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Dakota Farral</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Miranda Adila</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-warning">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check88"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check88"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/9.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Dimitres Viga</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Salvadore Morbeau</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-primary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check851"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check851"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/6.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Johnny Ahmad</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Danny Ahmad</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-primary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check89"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check89"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/10.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Indiana Barker</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Maria Historia</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-secondary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check90"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check90"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/1.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Samantha William</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Mana William </h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-secondary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check91"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check91"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/2.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Tony Soap</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">James Soap </h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-warning">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check92"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check92"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/3.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Karen Hope</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Justin Hope</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-primary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check93"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check93"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/4.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Jordan Nico</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Amanda Nico</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-secondary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check94"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check94"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/5.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Nadila Adja</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Jack Adja</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-warning">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check95"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check95"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/6.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Johnny Ahmad</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Danny Ahmad</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-primary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check96"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check96"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/7.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Jack Sally</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Lula Beatrice</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-secondary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check97"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check97"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/8.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Dakota Farral</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Miranda Adila</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-warning">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check98"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check98"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/9.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Dimitres Viga</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Salvadore Morbeau</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-primary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check99"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check99"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/10.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Indiana Barker</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Maria Historia</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-secondary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check100"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check100"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/1.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Samantha William</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Mana William </h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-secondary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check101"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check101"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/2.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Tony Soap</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">James Soap </h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-warning">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check9"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check9"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/3.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Karen Hope</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Justin Hope</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-primary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check10"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check10"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/4.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Jordan Nico</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Amanda Nico</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-secondary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check11"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check11"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/5.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Nadila Adja</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Jack Adja</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-warning">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check12"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check12"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/6.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Johnny Ahmad</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Danny Ahmad</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-primary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check13"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check13"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/7.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Jack Sally</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Lula Beatrice</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-secondary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check14"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check14"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/8.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Dakota Farral</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Miranda Adila</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-warning">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check15"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check15"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/9.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Dimitres Viga</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Salvadore Morbeau</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-primary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="checkbox me-0 align-self-center">
                            <div className="custom-control custom-checkbox ">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="check16"
                                required=""
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check16"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="trans-list">
                            <img
                              src="./images/trans/10.jpg"
                              alt=""
                              className="avatar me-3"
                            />
                            <h4>Indiana Barker</h4>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary font-w600">
                            ID 123456789
                          </span>
                        </td>
                        <td>
                          <div className="date">March 25, 2021</div>
                        </td>
                        <td>
                          <h6 className="mb-0">Maria Historia</h6>
                        </td>
                        <td>
                          <h6 className="mb-0">Jakarta</h6>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="icon-box icon-box-sm bg-light me-2">
                              <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                            <div className="icon-box icon-box-sm bg-light">
                              <svg
                                width={22}
                                height={16}
                                viewBox="0 0 22 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                  fill="var(--primary)"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="badge bg-secondary">VII A</div>
                        </td>
                        <td>
                          <div className="dropdown custom-dropdown float-end">
                            <div
                              className="btn sharp tp-btn "
                              data-bs-toggle="dropdown"
                            >
                              <svg
                                width={24}
                                height={6}
                                viewBox="0 0 24 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                  fill="#A098AE"
                                />
                              </svg>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Option 3
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/*/column*/}
            </div>
          </div>
        </div>
        {/***********************************
					Footer start
				************************************/}
      </div>
    </div>
    {/***********************************
      Content body end
  ************************************/}
    {/* footer-start */}
    <div className="footer out-footer style-2">
      <div className="copyright">
        <p>
          Copyright © Designed &amp; Developed by{" "}
          <a href="https://dexignlab.com/" target="_blank">
            DexignLab
          </a>{" "}
          2023
        </p>
      </div>
    </div>
    {/***********************************
      Footer end
  ************************************/}
    {/***********************************
     Support ticket button start
  ************************************/}
    {/***********************************
     Support ticket button end
  ************************************/}
  </div>
  {/***********************************
  Main wrapper end
    ************************************/}
  {/***********************************
		Modal
	************************************/}
  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-center">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            New Student Deatils
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-xl-6">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Yatin"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Current Class
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="VII A"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="xarma"
                />
              </div>
              <label className="form-label d-block">Gender</label>
              <select
                className="default-select"
                aria-label="Default select example"
              >
                <option selected="">Select</option>
                <option value={1}>Male</option>
                <option value={2}>Female</option>
                <option value={3}>Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-danger light"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</>

        </>
    )

  }
  export default Students