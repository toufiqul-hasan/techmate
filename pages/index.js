import MainLayout from "../layout/MainLayout";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import FeaturedCategory from "../components/Home/FeaturedCategory";

export default function Home({ data }) {
  return (
    <MainLayout>
      <div className="bg-primary1 text-white">
        <FeaturedProducts data={data} />
        <FeaturedCategory />
      </div>
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://techmatebd.onrender.com/product");
  const data = await response.json();
  const originalData = data;
  const getRandom = () => Math.random() - 0.5;
  const randomItems = originalData.sort(getRandom).slice(0, 6);
  return {
    props: {
      data: randomItems,
    },
    revalidate: 10,
  };
};