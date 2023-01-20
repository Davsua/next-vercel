import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <h4>Home page</h4>

      <h1 className={"title"}>
        Ir a <Link href="/about">About</Link>
      </h1>

      <div>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/index.js</code>
        </p>
      </div>
    </MainLayout>
  );
}
