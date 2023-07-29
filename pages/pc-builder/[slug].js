import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import MainLayout from "../../layout/MainLayout";
import { addComponent } from "../../redux/actions";

export default function ProductList({ data }) {
  const router = useRouter();

  const query = router.query.slug;

  function categoryMaker(string) {
    return string
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const slug = categoryMaker(query);

  const filteredData = data.filter((item) => item.category === slug);

  function toPascalCase(string) {
    return string
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  }

  const category = toPascalCase(query);

  const dispatch = useDispatch();

  const handleAddToBuilder = (item) => {
    dispatch(addComponent(category, item));
  };
  return (
    <MainLayout>
      <div className="bg-primary1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredData.map((item) => (
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
                    alt={item.product_name}
                    className="rounded-t-md"
                  />
                  <div className="px-4">
                    <h2 className="font-medium text-xl my-2">
                      {item.product_name}
                    </h2>
                    <p className="font-normal text-base">{item.category}</p>
                    <p className="font-normal text-base"> ৳ {item.price}</p>
                    <p className="font-normal text-base">{item.status}</p>
                    <p className="font-normal text-base">
                      {item.average_rating}
                    </p>
                  </div>
                </div>

                <div className="px-4">
                  <button
                    onClick={() => handleAddToBuilder(item)}
                    className="flex items-center justify-center w-full py-4 font-medium text-base rounded-md shadow-lg transition ease-in-out duration-200 my-2 bg-primary3 px-4 hover:bg-primary7 hover:text-primary1"
                  >
                    Add To Builder
                  </button>
                  <Link href={`/component/${item._id}`}>
                    <button className="flex items-center justify-center w-full py-4 font-medium text-base rounded-md shadow-lg transition ease-in-out duration-200 my-5 bg-primary3 px-4 hover:bg-primary7 hover:text-primary1">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("https://techmatebd.onrender.com/product");
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
};