import Link from "next/link";
import { useRouter } from "next/router";
import MainLayout from "../components/layouts/MainLayout";
import DarkLayout from "../components/layouts/DarkLayout";

export default function ContactPage() {
  const { asPath } = useRouter();

  return (
    <>
      <h4>Contact page</h4>

      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <div>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages{asPath}</code>
        </p>
      </div>
    </>
  );
}

ContactPage.getLayout = function getLayout(page:any) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
