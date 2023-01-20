import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

export default function PricingPage() {
  return (
    <MainLayout>
      <h4>Pricing page</h4>

      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <div>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/pricing.js</code>
        </p>
      </div>
    </MainLayout>
  );
}
