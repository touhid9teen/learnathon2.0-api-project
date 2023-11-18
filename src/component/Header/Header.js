import "./style.css";
import Searchbar from "../Searchbar/Searchbar";

function Header() {
    return (
        //<div className="border-b p-3 flex justify-between items-center">
        <div>
            <header>
                <spn className="app-header">My App</spn>
                <Searchbar />

            </header>
        </div>
    );
}
export default Header;
