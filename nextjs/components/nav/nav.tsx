
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faHome, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/dist/client/link';
import { isLoggedIn, logout as authLogout } from "@/lib/auth";

export default function Nav({ id, notificationCount }: { id: number; notificationCount: number }) {
  return (
    <>
        <div className="navContainer">
        {!isLoggedIn() && <nav>
            <Link href="/login">Log In</Link>
        </nav>}
        {isLoggedIn() && <nav>
            <ul>
            <li>
                <Link href="/home" className="nav-link">
                    <span className="icon"> <FontAwesomeIcon icon={faHome}/> </span>
                    <span className="text">Home</span>
                </Link>

            </li>
            <li>
                <Link href={`/profile/${id}`} className="nav-link">
                    <span className="icon"> <FontAwesomeIcon icon={faUser} /> </span>
                    <span className="text">Profile</span>
                </Link>
            </li>
            <li>
                <Link href={`/notifications/`} className="nav-link">
                {notificationCount > 0 && (<span className="badge"
                     aria-label={notificationCount + " unread notifications"}>
                    { notificationCount > 99 ? '99+' : notificationCount }
                </span>)}
                <span className="icon"> <FontAwesomeIcon icon={faBell}/> </span>
                <span className="text">Notifications</span>
                </Link>
            </li>
            <li>
                <a onClick={() => logout()} className="nav-link">
                <span className="icon"><FontAwesomeIcon icon={faRightFromBracket} /></span>
                <span className="text">Log Out</span>
                </a>
            </li>
            </ul>
        </nav>}
        </div>
    </>
);

function showNav() {    
    return true;
    return location.pathname.indexOf('/login') === -1;
}

function logout() {
    authLogout();
    window.location.href = "/";
}

}