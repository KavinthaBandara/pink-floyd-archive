import Link from "next/link";

export default function AdminPage() {
  return (
    <>
      <div>
        <h1>Admin Level</h1>
        <p>Welcome Boss!!!</p>
      </div>

      <div>
        <h2>Actions</h2>

        <ul>
          <li>
            <Link href="/admin/albums">Manage Albums</Link>
          </li>

          <li>
            <Link href="/admin/members">Manage Members</Link>
          </li>

          <li>
            <Link href="/admin/timeline">Manage Timeline</Link>
          </li>

          <li>
            <Link href="/admin/about">Manage About</Link>
          </li>
        </ul>
      </div>
    </>
  );
}