import {
  selectPSU,
  selectRAM,
  selectMonitor,
  selectStorage,
  selectProcessor,
  selectMotherboard,
} from "../redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";
import MainLayout from "../layout/MainLayout";

export default function PcBuilder() {
  const ram = useSelector(selectRAM);
  const psu = useSelector(selectPSU);
  const monitor = useSelector(selectMonitor);
  const storage = useSelector(selectStorage);
  const processor = useSelector(selectProcessor);
  const motherboard = useSelector(selectMotherboard);

  const isCompleteBuild =
    processor !== null &&
    motherboard !== null &&
    ram !== null &&
    psu !== null &&
    storage !== null &&
    monitor !== null;

  return (
    <MainLayout>
      <div className="bg-primary1 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
          <h1 className="text-3xl font-bold text-center mb-10">PC Builder</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {processor && (
              <div className="flex flex-col border border-white rounded-md shadow-md">
                <Image
                  src={processor.image}
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL={processor.image}
                  alt={processor.product_name}
                  className="rounded-t-md"
                />
                <div className="px-4">
                  <h2 className="font-medium text-xl my-2">
                    {processor.product_name}
                  </h2>
                  <p className="font-normal text-base">{processor.category}</p>
                  <p className="font-normal text-base"> ৳ {processor.price}</p>
                  <p className="font-normal text-base">{processor.status}</p>
                  <p className="font-normal text-base mb-5">
                    {processor.average_rating}
                  </p>
                </div>
              </div>
            )}

            {motherboard && (
              <div className="flex flex-col border border-white rounded-md shadow-md">
                <Image
                  src={motherboard.image}
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL={motherboard.image}
                  alt={motherboard.product_name}
                  className="rounded-t-md"
                />
                <div className="px-4">
                  <h2 className="font-medium text-xl my-2">
                    {motherboard.product_name}
                  </h2>
                  <p className="font-normal text-base">
                    {motherboard.category}
                  </p>
                  <p className="font-normal text-base">
                    {" "}
                    ৳ {motherboard.price}
                  </p>
                  <p className="font-normal text-base">{motherboard.status}</p>
                  <p className="font-normal text-base mb-5">
                    {motherboard.average_rating}
                  </p>
                </div>
              </div>
            )}

            {ram && (
              <div className="flex flex-col border border-white rounded-md shadow-md">
                <Image
                  src={ram.image}
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL={ram.image}
                  alt={ram.product_name}
                  className="rounded-t-md"
                />
                <div className="px-4">
                  <h2 className="font-medium text-xl my-2">
                    {ram.product_name}
                  </h2>
                  <p className="font-normal text-base">{ram.category}</p>
                  <p className="font-normal text-base"> ৳ {ram.price}</p>
                  <p className="font-normal text-base">{ram.status}</p>
                  <p className="font-normal text-base mb-5">
                    {ram.average_rating}
                  </p>
                </div>
              </div>
            )}

            {psu && (
              <div className="flex flex-col border border-white rounded-md shadow-md">
                <Image
                  src={psu.image}
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL={psu.image}
                  alt={psu.product_name}
                  className="rounded-t-md"
                />
                <div className="px-4">
                  <h2 className="font-medium text-xl my-2">
                    {psu.product_name}
                  </h2>
                  <p className="font-normal text-base">{psu.category}</p>
                  <p className="font-normal text-base"> ৳ {psu.price}</p>
                  <p className="font-normal text-base">{psu.status}</p>
                  <p className="font-normal text-base mb-5">
                    {psu.average_rating}
                  </p>
                </div>
              </div>
            )}

            {storage && (
              <div className="flex flex-col border border-white rounded-md shadow-md">
                <Image
                  src={storage.image}
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL={storage.image}
                  alt={storage.product_name}
                  className="rounded-t-md"
                />
                <div className="px-4">
                  <h2 className="font-medium text-xl my-2">
                    {storage.product_name}
                  </h2>
                  <p className="font-normal text-base">{storage.category}</p>
                  <p className="font-normal text-base"> ৳ {storage.price}</p>
                  <p className="font-normal text-base">{storage.status}</p>
                  <p className="font-normal text-base mb-5">
                    {storage.average_rating}
                  </p>
                </div>
              </div>
            )}

            {monitor && (
              <div className="flex flex-col border border-white rounded-md shadow-md">
                <Image
                  src={monitor.image}
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL={monitor.image}
                  alt={monitor.product_name}
                  className="rounded-t-md"
                />
                <div className="px-4">
                  <h2 className="font-medium text-xl my-2">
                    {monitor.product_name}
                  </h2>
                  <p className="font-normal text-base">{monitor.category}</p>
                  <p className="font-normal text-base"> ৳ {monitor.price}</p>
                  <p className="font-normal text-base">{monitor.status}</p>
                  <p className="font-normal text-base mb-5">
                    {monitor.average_rating}
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