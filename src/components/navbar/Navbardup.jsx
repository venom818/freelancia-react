

// //delete doewn
// import React, { useEffect, useState } from 'react';
// import "./Navbar.scss";

// const Navbar = () => {
//     const [active, setActive] = useState(false);
//     const [open, setOpen] = useState(false); // Menu click functionality

//     const isActive = () => {
//         window.scrollY > 0 ? setActive(true) : setActive(false);
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", isActive);
//         return () => {
//             window.removeEventListener("scroll", isActive);
//         };
//     }, []);

//     // Current user information
//     const currentUser  = {
//         id: 1,
//         username: "Ariana",
//         isSeller: true, // If you are not a seller, you won't see the menu
//     };

//     return (
//         <div className={active ? "navbar active" : "navbar"}>
//             <div className="container">
//                 <div className="logo">
//                     <span className="text">Freelancia</span>
//                 </div>
//                 <div className="links"> 
//                     <span>Business</span>
//                     <span>Explore</span>
//                     <span>English</span>
//                     <span>Sign In</span>
//                     {!currentUser ?.isSeller && <span>Become a Seller</span>}
//                     {!currentUser  && <button>Join</button>} 
//                     {currentUser  && (
//                         <div className={`user ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
//                             <img src="https://www.billboard.com/wp-content/uploads/2022/08/Ariana-Grande-the-voice-2021-billboard-1548.jpg?w=875&h=583&crop=1" alt=""/>
//                             <span>{currentUser ?.username}</span>
//                             <div className="options"> 
//                                 {currentUser ?.isSeller && (
//                                     <>
//                                         <span>Gigs</span>
//                                         <span>Add New Gig</span>
//                                     </>
//                                 )}
//                                 <span>Orders</span>
//                                 <span>Messages</span>
//                                 <span>Logout</span>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             {active && (
//                 <>
//                     <hr/>
//                     <div className="menu">
//                         <span>Test</span>
//                         <span>Test2</span>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Navbar;
