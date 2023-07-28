import Link from "next/link";
import Image from "next/image";

export default function FeaturedCategory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 lg:mt-40">
      <h1 className="font-semibold text-4xl lg:text-5xl text-center mb-2">
        Featured Category
      </h1>
      <h2 className="font-normal text-base lg:text-lg text-center mb-10">
        Get Your Desired Product from Featured Category!
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-10">
        <Link href="/component/processor">
          <div className="flex flex-col items-center justify-center bg-white hover:bg-primary7 text-black rounded-md p-10">
            <Image
              src="https://www.startech.com.bd/image/cache/catalog/category-thumb/cpu-48x48.png"
              width={48}
              height={48}
              placeholder="blur"
              blurDataURL="https://www.startech.com.bd/image/cache/catalog/category-thumb/cpu-48x48.png"
              alt="Monitor"
            />
            <p className="font-medium text-base mt-2">Processor</p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center justify-center bg-white hover:bg-primary7 text-black rounded-md p-10">
            <Image
              src="https://www.startech.com.bd/image/cache/catalog/category-thumb/motherboard-48x48.png"
              width={48}
              height={48}
              placeholder="blur"
              blurDataURL="https://www.startech.com.bd/image/cache/catalog/category-thumb/motherboard-48x48.png"
              alt="Monitor"
            />
            <p className="font-medium text-base mt-2">Motherboard</p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center justify-center bg-white hover:bg-primary7 text-black rounded-md p-10">
            <Image
              src="https://www.startech.com.bd/image/cache/catalog/category-thumb/ram-48x48.png"
              width={48}
              height={48}
              placeholder="blur"
              blurDataURL="https://www.startech.com.bd/image/cache/catalog/category-thumb/ram-48x48.png"
              alt="Monitor"
            />
            <p className="font-medium text-base mt-2">RAM</p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center justify-center bg-white hover:bg-primary7 text-black rounded-md h-full">
            <Image
              src="https://www.startech.com.bd/image/cache/catalog/category-thumb/powerstation-48x48.png"
              width={48}
              height={48}
              placeholder="blur"
              blurDataURL="https://www.startech.com.bd/image/cache/catalog/category-thumb/powerstation-48x48.png"
              alt="Monitor"
            />
            <p className="font-medium text-base mt-2">Power Supply Unit</p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center justify-center bg-white hover:bg-primary7 text-black rounded-md h-full">
            <Image
              src="https://www.startech.com.bd/image/cache/catalog/category-thumb/ssd-48x48.png"
              width={48}
              height={48}
              placeholder="blur"
              blurDataURL="https://www.startech.com.bd/image/cache/catalog/category-thumb/ssd-48x48.png"
              alt="Monitor"
            />
            <p className="font-medium text-base mt-2">Storage Device</p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-center justify-center bg-white hover:bg-primary7 text-black rounded-md p-10">
            <Image
              src="https://www.startech.com.bd/image/cache/catalog/category-thumb/monitor-48x48.png"
              width={48}
              height={48}
              placeholder="blur"
              blurDataURL="https://www.startech.com.bd/image/cache/catalog/category-thumb/monitor-48x48.png"
              alt="Monitor"
            />
            <p className="font-medium text-base mt-2">Monitor</p>
          </div>
        </Link>
      </div>
    </div>
  );
}