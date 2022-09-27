import { useState } from "react";
import styles from "./LoginView.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faKiwiBird } from '@fortawesome/free-solid-svg-icons';

export default function LoginView() {
    const [query, setQuery] = useState("");
    const handleSubmit = () => {
        console.log("???",query)
    }
    const handleKeyDown = (k) => {
        if(k === 'Enter'){
            console.log("-----------",k.key)
        }
    }
    // MantinoRe87
    return (
        <div className={styles.box}>
            <FontAwesomeIcon className={styles.logo} icon={faKiwiBird} />
            {/* {query} */}
            <form onSubmit={handleSubmit}>
                <label>
                    <FontAwesomeIcon className={styles.search} icon={faMagnifyingGlass} />
                    <input onKeyDown={handleKeyDown} className={styles.input} placeholder={"Buscar anime..."} value={query} onChange={(e) => setQuery(e.target.value)} />
                </label>
            </form>
        </div>
    );
}