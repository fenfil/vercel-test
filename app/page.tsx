import Link from "next/link";
import { MaxWidthWrapper } from "../components/MaxWidthWrapper";
import { Button, buttonVariants } from "../components/ui/button";
import { Thing } from "./thing";
import { Suspense } from "react";
import { Fallback } from "../components/Fallback";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl text-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high quality <span className="text-blue-600">digital assets</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>
            go to products
          </Link>
          <Button variant="ghost">go &rarr;</Button>
        </div>
        <div className="flex">
          <Suspense fallback={<Fallback />}>
            <Thing />
          </Suspense>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
