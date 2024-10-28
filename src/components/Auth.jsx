import React from "react";
import { NavLink } from "react-router-dom";

const AuthBtn = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    const logOut = (params) => {
        localStorage.removeItem(`${params}`);
        localStorage.removeItem("login");
        localStorage.removeItem("activeUser");
        window.location.reload();
    };

    const auth = () => {
        if (user) {
            return (
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {activeUser ? activeUser.fullname : "User"} {/* Yoxlama burada */}
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" onClick={() => logOut("user")}>
                                Log out
                            </a>
                        </li>
                    </ul>
                </div>
            );
        } else if (admin) {
            return (
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Hi {activeUser ? activeUser.fullname : "Admin"} {/* Yoxlama burada */}
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="#" onClick={() => logOut("admin")}>
                                Log out
                            </a>
                        </li>
                        <li>
                            <NavLink className="dropdown-item" to='/dashboard'>
                                Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </div>
            );
        } else {
            return (
                <NavLink to="/login">
                    <i className="fa-solid fa-user"></i>
                </NavLink>
            );
        }
    };

    return <>{auth()}</>;
};

export default AuthBtn;
















































































































































// import React from "react";
// import { NavLink } from "react-router-dom";

// const AuthBtn = () => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const activeUser = JSON.parse(localStorage.getItem("activeUser"));

//     const admin = JSON.parse(localStorage.getItem("admin"));

//     const logOut = (params) => {
//         localStorage.removeItem(`${params}`)
//         localStorage.removeItem("login");
//         localStorage.removeItem("activeUser");
//         window.location.reload()
//     }

//     const auth = () => {
//         if (user) {
//             return (
//                 <div className="dropdown">
//                     <button
//                         className="btn btn-secondary dropdown-toggle"
//                         type="button"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                     >
//                         {activeUser.fullname}
//                     </button>
//                     <ul className="dropdown-menu">
//                         <li>
//                             <a className="dropdown-item" onClick={() => logOut("user")}>
//                                 Log out
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             );
//         } else if (admin) {
//             return (
//                 <div className="dropdown">
//                     <button
//                         className="btn btn-secondary dropdown-toggle"
//                         type="button"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                     >
//                         Hi {activeUser.fullname}
//                     </button>
//                     <ul className="dropdown-menu">
//                         <li>
//                             <a className="dropdown-item" href="#" onClick={() => logOut("admin")}>
//                                 Log out
//                             </a>
//                         </li>
//                         <li>
//                             <NavLink className="dropdown-item" to='/dashboard'>
//                                 Dashboard
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             );
//         } else {
//             return <NavLink to="/login">
//                 <i className="fa-solid fa-user"></i>
//             </NavLink>;
//         }
//     };

//     return <>{auth()}</>;
// };

// export default AuthBtn;