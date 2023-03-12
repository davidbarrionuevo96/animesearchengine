import { NavLink } from "react-router-dom";
import styles from "./NotFoundView.module.css";
export default function NotFoundView() {
    // const pruebaClassName = (data) => {
    //     console.log(data)
    //     // Object { isActive: true, isPending: false }
    //     return ""
    // }
    return (
        <div>
            Not Found
            <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/" >Search</NavLink>
        </div>
    )
}