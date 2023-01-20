import ActiveLink from "./ActiveLink";
import styles from "./NavBar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const NavBar = () => {
  return (
    <>
      <nav className={styles.menu_container}>
        {menuItems.map((item) => (
          <ActiveLink key={item.href} href={item.href} text={item.text} />
        ))}
      </nav>

      {/*
      <nav className={styles.menu_container}>
        <ActiveLink href="/" text="Home" />
        <ActiveLink href="/about" text="About" />
        <ActiveLink href="/contact" text="Contact" />
      </nav>
      */}
    </>
  );
};

export default NavBar;
