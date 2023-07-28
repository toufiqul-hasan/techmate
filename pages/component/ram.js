import MainLayout from "../../layout/MainLayout";
import Product from "../../components/component/Product";

export default function RAM({ data }) {
  return (
    <MainLayout>
      <div className="bg-primary1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
          <h1 className="font-semibold text-4xl lg:text-5xl text-center mb-2">
            RAM
          </h1>
          <h2 className="font-normal text-base lg:text-lg text-center mb-10">
            Check & Get Your Desired RAM!
          </h2>
          <Product data={data} />
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://techmatebd.onrender.com/product");
  const data = await response.json();
  const filteredData = data.filter((item) => item.category === "RAM");
  return {
    props: {
      data: filteredData,
    },
    revalidate: 10,
  };
};
