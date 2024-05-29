import { useState } from "react";
import classNames from 'classnames';
import { Link } from "react-router-dom";
// import { useLocation , useHistory  } from "react-router-dom";

const Sliderbar =()=>
    { 

      // const location = useLocation()
      // const history = useHistory();


        const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = (index, url) => {
        setIsExpanded(!isExpanded);
        setExpandedIndex(expandedIndex === index ? null : index);
        // history.push(url);  


    };

    const [expandedIndex, setExpandedIndex] = useState(null);

    

    const menuItems = [
        {
            icon: 'home',
            text: 'Dashboard',
            url : '/',
            subItems: [
             
            ],
        },
        {
            icon: 'school',
            text: 'Student',
            url : 'students',
            subItems: [
                { text: 'Students', href: 'students' },
                { text: 'Student Details', href: 'student-detail' },
                { text: 'Add Student', href: 'add-student' },
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
                                        <Link
                                            className={classNames('has-arrow', { 'is-expanded': isExpanded })}
                                            aria-expanded={isExpanded}
                                            onClick={(e) => toggleExpand(index ,item.url )}
                                        >
                                            <i className="material-symbols-outlined">{item.icon}</i>    
                                            <span className="nav-text">{item.text}</span>
                                        </Link>
                                        <ul aria-expanded={isExpanded} style={{ display: expandedIndex === index ? 'block' : 'none' }}>
                                            {item.subItems.map((item, index) => (
                                                <li key={index}>
                                                    <Link to={item.href}>{item.text}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>))}
                   
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