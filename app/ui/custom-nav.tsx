import Link from 'next/link';

export default function CustomNav() {
  return (
    <div className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <ul className="flex items-center flex-shrink-0 text-white mr-6 gap-4">
        <li className="font-semibold text-xl tracking-tight">
          <Link href="/">Acme</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
