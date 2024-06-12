import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/" passHref>
              <img src='./TOKITI LOGO2 3D.jpg' />
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/" passHref>
            <a className="text-white hover:text-gray-300">Home</a>
          </Link>
          <Link href="/shop" passHref>
            <a className="text-white hover:text-gray-300">About</a>
          </Link>
          <Link href="/about" passHref>
            <a className="text-white hover:text-gray-300">Products</a>
          </Link>
          <Link href="/contact" passHref>
            <a className="text-white hover:text-gray-300">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
