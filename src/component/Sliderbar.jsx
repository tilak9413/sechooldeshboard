import { useState } from "react";
import classNames from 'classnames';
import { Link } from "react-router-dom";

const Sliderbar =()=>
    { 
        const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = (index) => {
        setIsExpanded(!isExpanded);
        setExpandedIndex(expandedIndex === index ? null : index);


    };

    const [expandedIndex, setExpandedIndex] = useState(null);

    

    const menuItems = [
        {
            icon: 'home',
            text: 'Dashboard',
            subItems: [
                { text: 'Dashboard Light', href: 'index.html' },
                { text: 'Dashboard Dark', href: 'index-2.html' },
                { text: 'Finance', href: 'finance.html' },
            ],
        },
        {
            icon: 'school',
            text: 'Student',
            subItems: [
                { text: 'Students', href: 'students.html' },
                { text: 'Student Details', href: 'student-detail.html' },
                { text: 'Add Student', href: 'add-student.html' },
            ],
        }
    ];
        return (
 <>
          <div className="dlabnav">
                        <div className="dlabnav-scroll">
                            <ul className="metismenu" id="menu">
                                {menuItems.map((item, index) => (
                                    <li>
                                        <a
                                            className={classNames('has-arrow', { 'is-expanded': isExpanded })}
                                            href="javascript:void(0);"
                                            aria-expanded={isExpanded}
                                            onClick={(e) => toggleExpand(index)}
                                        >
                                            <i className="material-symbols-outlined">{item.icon}</i>    
                                            <span className="nav-text">{item.text}</span>
                                        </a>
                                        <ul aria-expanded={isExpanded} style={{ display: expandedIndex === index ? 'block' : 'none' }}>
                                            {item.subItems.map((item, index) => (
                                                <li key={index}>
                                                    <a href={item.href}>{item.text}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>))}
                                 <li>
      <a
        className={classNames('has-arrow', { 'is-expanded': isExpanded })}
        href="javascript:void(0);"
        aria-expanded={isExpanded}
        onClick={toggleExpand}
      >
        <i className="material-symbols-outlined">home</i>
        <span className="nav-text">Dashboard</span>
      </a>
      <ul aria-expanded={isExpanded} style={{ display: isExpanded ? 'block' : 'none' }}>
        <li>
          <a href="index.html"><Link to="/" ></Link></a>
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
 </>
        )
    }
    export default Sliderbar