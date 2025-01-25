import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import "./../styles/Header.css";

const Header = () => {
  const {t, i18n} = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }

  return (
    <header className="header">
      <h1>Week 10</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">{t("Home")}</Link>
          </li>
          <li>
            <Link to="/about">{t("About")}</Link>
          </li>
          <li>
            <button id="fi" onClick={()=>changeLanguage("fi")}>FI</button>
          </li>
          <li>
            <button id="en" onClick={()=>changeLanguage("en")}>EN</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header