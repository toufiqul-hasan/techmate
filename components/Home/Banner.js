import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-10 sm:px-6 lg:grid-cols-2">
      <div className="order-last lg:order-none">
        <h1 className="mb-2 text-3xl font-bold lg:text-6xl lg:leading-[77px]">
          Build Your Own PC With Us!
        </h1>

        <Link href="/pc-builder">
          <button className="my-7 flex items-center rounded-full border border-white px-4 py-2 hover:border-primary7 hover:text-primary7">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:animate-spin"
            >
              <rect
                x="13.2949"
                y="0.654297"
                width="9.49288"
                height="35.2593"
                fill="#03AEF4"
              />
              <rect
                x="35.6719"
                y="13.5381"
                width="9.49288"
                height="35.2593"
                transform="rotate(90 35.6719 13.5381)"
                fill="#03AEF4"
              />
              <rect
                x="27.1523"
                y="2.46191"
                width="9.49288"
                height="35.2593"
                transform="rotate(45 27.1523 2.46191)"
                fill="#03AEF4"
              />
              <rect
                x="33.8633"
                y="27.3936"
                width="9.49288"
                height="35.2593"
                transform="rotate(135 33.8633 27.3936)"
                fill="#03AEF4"
              />
            </svg>
            <span className="ml-2 mt- text-3xl font-normal">PC Builder</span>
          </button>
        </Link>
      </div>
      <Image
        priority={true}
        src="/banner.avif"
        width={600}
        height={600}
        alt="PC Components"
        className="rounded-3xl"
      />
    </div>
  );
}