import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-6 bg-[#003876] text-white font-semibold items-center justify-center max-auto h-8">
        <li>
          <Link href="/">
            <span className=" dark:text-gray-200 hover:underline">Inicio</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className=" dark:text-gray-200 hover:underline">Mis tramites</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className=" dark:text-gray-200 hover:underline">Perfil</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}