import Image from "next/image";
import Link from "next/link";

import logo from "/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/assets/logo-light.png" alt="Logo" height="120" width="120" /> */}
      <Image src={logo} alt="Logo" height="60" width="60" quality={80} />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
