import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts({ data }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
      <h1 className="font-semibold text-4xl lg:text-5xl text-center mb-2">
        Featured Products
      </h1>
      <h2 className="font-normal text-base lg:text-lg text-center mb-10">
        Check & Get Your Desired Product!
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {data.map((item) => (
          <div
            key={item._id}
            className="flex flex-col border border-white rounded-md shadow-md"
          >
            <div className="flex-1">
              <Image
                src={item.image}
                width={500}
                height={500}
                placeholder="blur"
                blurDataURL={item.image}
                alt={item.name}
                className="rounded-t-md"
              />

              <div className="px-4">
                <h2 className="font-medium text-xl my-2">
                  {item.product_name}
                </h2>
                <p className="font-normal text-base">{item.category}</p>
                <p className="font-normal text-base"> ৳ {item.price}</p>
                <p className="font-normal text-base">{item.status}</p>
                <p className="font-normal text-base">{item.average_rating}</p>
              </div>
            </div>

            <div className="px-4">
              <Link href={`/`}>
                <button className="flex items-center justify-center w-full py-4 font-medium text-base rounded-md shadow-lg transition ease-in-out duration-200 my-5 bg-primary3 px-4 hover:bg-primary7 hover:text-primary1">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}