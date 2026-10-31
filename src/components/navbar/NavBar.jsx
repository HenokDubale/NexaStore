import Link from "next/link";

const NavBar = () => {
  return (
    <header className="border-b bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          Nexa<span className="text-primary">Store</span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
