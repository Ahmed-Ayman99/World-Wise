import Logo from "./Logo";
import MainNav from "./MainNav";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <MainNav />
    </header>
  );
}

export default Header;
