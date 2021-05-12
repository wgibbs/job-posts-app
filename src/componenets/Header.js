import HeaderSearch from './HeaderSearch';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__interior">
        <h1 className="header__title">Job Posts</h1>
        <HeaderSearch />
      </div>
    </header>
  );
}

export default Header;