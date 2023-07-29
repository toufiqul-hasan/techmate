import Image from "next/image";
import { useSelector } from "react-redux";
import MainLayout from "../layout/MainLayout";

export default function PcBuilder() {
  const builderState = useSelector((state) => state);

  const isCompleteBuild = Object.values(builderState).every(
    (component) => component !== null
  );

  return (
    <MainLayout>
      <div className="bg-primary1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
          <h1 className="text-3xl font-bold text-center mb-10">PC Builder</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {builderState.processor && (
              <div className="flex flex-col border border-white rounded-md shadow-md">
                <Image
                  src={builderState.processor.image}
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL={builderState.processor.image}
                  alt={builderState.processor.product_name}
                  className="rounded-t-md"
                />
                <div className="px-4">
                  <h2 className="font-medium text-xl my-2">
                    {builderState.processor.product_name}
                  </h2>
                  <p className="font-normal text-base">
                    {builderState.processor.category}
                  </p>
                  <p className="font-normal text-base">
                    {" "}
                    ৳ {builderState.processor.price}
                  </p>
                  <p className="font-normal text-base">
                    {builderState.processor.status}
                  </p>
                  <p className="font-normal text-base mb-5">
                    {builderState.processor.average_rating}
                  </p>
                </div>
              </div>
            )}

            {builderState.motherboard && (
              <div className="flex flex-col border border-white rounded-md shadow-md">
                <Image
                  src={builderState.motherboard.image}
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL={builderState.motherboard.image}
                  alt={builderState.motherboard.product_name}
                  className="rounded-t-md"
                />
                <div className="px-4">
                  <h2 className="font-medium text-xl my-2">
                    {builderState.motherboard.product_name}
                  </h2>
                  <p className="font-normal text-base">
                    {builderState.motherboard.category}
                  </p>
                  <p className="font-normal text-base">
                    {" "}
                    ৳ {builderState.motherboard.price}
                  </p>
                  <p className="font-normal text-base">
                    {builderState.motherboard.status}
                  </p>
                  <p className="font-normal text-base mb-5">
                    {builderState.motherboard.average_rating}
                  </p>
                </div>
              </div>
            )}

            {builderState.ram && (
              <div className="flex flex-col border border-white rounded-md shadow-md">
                <Image
                  src={builderState.ram.image}
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL={builderState.ram.image}
                  alt={builderState.ram.product_name}
                  className="rounded-t-md"
                />
                <div className="px-4">
                  <h2 className="font-medium text-xl my-2">
                    {builderState.ram.product_name}
                  </h2>
                  <p className="font-normal text-base">
                    {builderState.ram.category}
                  </p>
                  <p className="font-normal text-base">
                    {" "}
                    ৳ {builderState.ram.price}
                  </p>
                  <p className="font-normal text-base">
                    {builderState.ram.status}
                  </p>
                  <p className="font-normal text-base mb-5">
                    {builderState.ram.average_rating}
                  </p>
                </div>
              </div>
            )}

            {builderState.psu && (
              <div className="flex flex-col border border-white rounded-md shadow-md">
                <Image
                  src={builderState.psu.image}
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL={builderState.psu.image}
                  alt={builderState.psu.product_name}
                  className="rounded-t-md"
                />
                <div className="px-4">
                  <h2 className="font-medium text-xl my-2">
                    {builderState.psu.product_name}
                  </h2>
                  <p className="font-normal text-base">
                    {builderState.psu.category}
                  </p>
                  <p className="font-normal text-base">
                    {" "}
                    ৳ {builderState.psu.price}
                  </p>
                  <p className="font-normal text-base">
                    {builderState.psu.status}
                  </p>
                  <p className="font-normal text-base mb-5">
                    {builderState.psu.average_rating}
                  </p>
                </div>
              </div>
            )}

            {builderState.storage && (
              <div className="flex flex-col border border-white rounded-md shadow-md">
                <Image
                  src={builderState.storage.image}
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL={builderState.storage.image}
                  alt={builderState.storage.product_name}
                  className="rounded-t-md"
                />
                <div className="px-4">
                  <h2 className="font-medium text-xl my-2">
                    {builderState.storage.product_name}
                  </h2>
                  <p className="font-normal text-base">
                    {builderState.storage.category}
                  </p>
                  <p className="font-normal text-base">
                    {" "}
                    ৳ {builderState.storage.price}
                  </p>
                  <p className="font-normal text-base">
                    {builderState.storage.status}
                  </p>
                  <p className="font-normal text-base mb-5">
                    {builderState.storage.average_rating}
                  </p>
                </div>
              </div>
            )}

            {builderState.monitor && (
              <div className="flex flex-col border border-white rounded-md shadow-md">
                <Image
                  src={builderState.monitor.image}
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL={builderState.monitor.image}
                  alt={builderState.monitor.product_name}
                  className="rounded-t-md"
                />
                <div className="px-4">
                  <h2 className="font-medium text-xl my-2">
                    {builderState.monitor.product_name}
                  </h2>
                  <p className="font-normal text-base">
                    {builderState.monitor.category}
                  </p>
                  <p className="font-normal text-base">
                    {" "}
                    ৳ {builderState.monitor.price}
                  </p>
                  <p className="font-normal text-base">
                    {builderState.monitor.status}
                  </p>
                  <p className="font-normal text-base mb-5">
                    {builderState.monitor.average_rating}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              disabled={!isCompleteBuild}
              className={`px-4 py-4 font-medium text-base rounded-md shadow-lg transition ease-in-out duration-200 my-5 bg-primary3 ${
                isCompleteBuild
                  ? "hover:bg-primary7 hover:text-primary1"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              Complete Build
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}