import Link from "next/link";

const Navbara = () => {
  return (
    <nav className="flex items-center justify-center gap-4 dark:bg-gray-1000 p-4 rounded-lg shadow-md">
      <Link href="/albums">
        Albums
      </Link>

      <Link href="/members">
        Members
      </Link>

      <Link href="/timeline">
        Timeline
      </Link>

      <Link href="/chat">
        Chat
      </Link>
    </nav>
  );
};

export default Navbara;