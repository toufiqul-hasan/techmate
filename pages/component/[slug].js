import Image from "next/image";
import MainLayout from "../../layout/MainLayout";

export default function ComponentDetails({ data }) {
  return (
    <MainLayout>
      <div className="bg-primary1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
          <div className="flex justify-center">
            <Image
              src={data.image}
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL={data.image}
              alt={data.product_name}
              className="rounded-3xl"
            />
          </div>
          <div className="mt-10 space-y-2.5 font-normal text-base">
            <h2 className="font-medium text-2xl">{data.product_name}</h2>
            <p>Price: {data.price} ৳</p>
            <p>Category: {data.category}</p>
            <p>Brand: {data.brand}</p>
            <p>Model: {data.model}</p>
            <p>Status: {data.status}</p>
            <p>Description: {data.description}</p>
            <p>Average Rating: {data.average_rating}</p>
            <p>Individual Rating: {data.individual_rating}</p>
            <p className="font-medium text-xl">Reviews:</p>
            {data.reviews.map((item, index) => (
              <div key={index} className="flex py-2 gap-3 items-center">
                <Image
                  src="/avatar.jpg"
                  width={40}
                  height={40}
                  alt="Avatar"
                  className="rounded-full"
                />
                <p>{item.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch("https://techmatebd.onrender.com/product");

  const data = await response.json();

  const paths = data.map((item) => ({
    params: { slug: String(item._id) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://techmatebd.onrender.com/product/${params.slug}`
  );

  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
};