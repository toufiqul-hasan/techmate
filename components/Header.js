import Logo from "./Logo";
import Link from "next/link";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const submenus = {
  insights: [
    {
      name: "The Future of Technology",
      href: "/insights/the-future-of-technology",
    },
    {
      name: "Data and Analytics",
      href: "/insights/data-and-analytics",
    },
    {
      name: "Ethical AI",
      href: "/insights/ethical-ai",
    },
  ],
  services: [
    {
      name: "Business Process Management",
      href: "/services/business-process-management",
    },
    {
      name: "Cloud Services Automation",
      href: "/services/cloud-services-automation",
    },
    {
      name: "Customer Services Automation",
      href: "/services/customer-services-automation",
    },
    {
      name: "Predictive Data Modelling",
      href: "/services/predictive-data-modelling",
    },
    {
      name: "Visitor Management System",
      href: "/services/visitor-management-system",
    },
    {
      name: "Remote System Monitoring",
      href: "/services/remote-system-monitoring",
    },
  ],
  industries: [
    {
      name: "Robotics and AI",
      href: "/industries/robotics-and-ai",
    },
    {
      name: "Infrastructure Technology",
      href: "/industries/infrastructure-technology",
    },
    {
      name: "Life Sciences",
      href: "/industries/life-sciences",
    },
    {
      name: "Finance and Banking",
      href: "/industries/finance-and-banking",
    },
    {
      name: "Agriculture",
      href: "/industries/agriculture",
    },
  ],
  news: [
    {
      name: "News",
      href: "/news",
    },
    {
      name: "Media",
      href: "/news",
    },
    {
      name: "Blog",
      href: "/news",
    },
  ],
};

export default function Header() {
  const router = useRouter();

  return (
    <Popover className="sticky top-0 z-50 bg-primary1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 lg:justify-start">
          <div className="flex lg:flex-1">
            <Logo />
          </div>

          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button className="mt-2.5 inline-flex items-center justify-center p-2 pl-5 text-white">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="mt-2 hidden items-center lg:flex">
            <div className="hover-dropdown-menu">
              <div
                className={`relative ml-6 block whitespace-nowrap py-6 text-base font-medium hover:text-primary7 ${
                  router.pathname === "/insights"
                    ? "text-primary7"
                    : "text-white"
                }`}
              >
                <Link href="/insights" className="flex items-center">
                  Insights
                  <ChevronDownIcon className="ml-1 h-5 w-5" />
                </Link>
                <div className="dropdown-menu absolute left-0 z-40 mt-2 w-80 origin-top-left rounded-md border-t-8 border-primary7 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {submenus.insights.map((item) => (
                    <div key={item.name}>
                      <Link href={item.href}>
                        <button className="block cursor-pointer px-4 py-2 text-base font-normal text-primary1 hover:text-primary7">
                          {item.name}
                          <div className="bottom-border"></div>
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hover-dropdown-menu">
              <div
                className={`relative ml-6 block whitespace-nowrap py-6 text-base font-medium hover:text-primary7 ${
                  router.pathname === "/services"
                    ? "text-primary7"
                    : "text-white"
                }`}
              >
                <Link href="/services" className="flex items-center">
                  Services
                  <ChevronDownIcon className="ml-1 h-5 w-5" />
                </Link>
                <div className="dropdown-menu absolute left-0 z-40 mt-2 w-96 origin-top-left rounded-md border-t-8 border-primary7 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {submenus.services.map((item) => (
                    <div key={item.name}>
                      <Link href={item.href}>
                        <button className="block cursor-pointer px-4 py-2 text-base font-normal text-primary1 hover:text-primary7">
                          {item.name}
                          <div className="bottom-border"></div>
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hover-dropdown-menu">
              <div
                className={`relative ml-6 block whitespace-nowrap py-6 text-base font-medium hover:text-primary7 ${
                  router.pathname === "/industries"
                    ? "text-primary7"
                    : "text-white"
                }`}
              >
                <Link href="/industries" className="flex items-center">
                  Industries
                  <ChevronDownIcon className="ml-1 h-5 w-5" />
                </Link>
                <div className="dropdown-menu absolute left-0 z-40 mt-2 w-80 origin-top-left rounded-md border-t-8 border-primary7 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {submenus.industries.map((item) => (
                    <div key={item.name}>
                      <Link href={item.href}>
                        <button className="block cursor-pointer px-4 py-2 text-base font-normal text-primary1 hover:text-primary7">
                          {item.name}
                          <div className="bottom-border"></div>
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hover-dropdown-menu">
              <div
                className={`relative ml-6 block whitespace-nowrap py-6 text-base font-medium hover:text-primary7 ${
                  router.pathname === "/news" ? "text-primary7" : "text-white"
                }`}
              >
                <Link href="/news" className="flex items-center">
                  News
                  <ChevronDownIcon className="ml-1 h-5 w-5" />
                </Link>
                <div className="dropdown-menu absolute left-0 z-40 mt-2 w-28 origin-top-left rounded-md border-t-8 border-primary7 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {submenus.news.map((item) => (
                    <div key={item.name}>
                      <Link href={item.href}>
                        <button className="block cursor-pointer px-4 py-2 text-base font-normal text-primary1 hover:text-primary7">
                          {item.name}
                          <div className="bottom-border"></div>
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/careers"
              className={`ml-6 whitespace-nowrap text-base font-medium hover:text-primary7 ${
                router.pathname === "/careers" ? "text-primary7" : "text-white"
              }`}
            >
              Careers
            </Link>

            <Link
              href="/safety"
              className={`ml-6 whitespace-nowrap text-base font-medium hover:text-primary7 ${
                router.pathname === "/safety" ? "text-primary7" : "text-white"
              }`}
            >
              Safety
            </Link>

            <Link
              href="/about-us"
              className={`ml-6 whitespace-nowrap text-base font-medium hover:text-primary7 ${
                router.pathname === "/about-us" ? "text-primary7" : "text-white"
              }`}
            >
              About us
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-white"></div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden"
        >
          <div className="divide-y-2 rounded-2xl bg-primary1 shadow-2xl">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Logo />
                <div className="-mr-4 mt-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-white">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              <div className="mt-5">
                <nav className="grid grid-cols-2 gap-y-4 gap-x-8 pt-5">
                  <Link
                    href="/"
                    className={`py-2 text-base font-medium hover:text-primary7 ${
                      router.pathname === "/" ? "text-primary7" : "text-white"
                    }`}
                  >
                    Home
                  </Link>

                  <Menu
                    as="div"
                    className={`relative whitespace-nowrap py-2 text-base font-medium hover:text-primary7 ${
                      router.pathname === "/insights"
                        ? "text-primary7"
                        : "text-white"
                    }`}
                  >
                    <Link href="/insights">
                      <Menu.Button
                        type="button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="flex items-center"
                      >
                        Insights
                        <ChevronDownIcon
                          className="ml-1 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </Link>

                    <Menu.Items>
                      <div
                        className="absolute right-0 z-40 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:left-0"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabIndex="-1"
                      >
                        {submenus.insights.map((item) => (
                          <div key={item.name}>
                            <Link href={item.href}>
                              <button
                                role="menuitem"
                                tabIndex="-1"
                                className="block cursor-pointer px-4 py-2 text-base font-normal text-primary1 hover:text-primary7"
                              >
                                {item.name}
                              </button>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </Menu.Items>
                  </Menu>

                  <Menu
                    as="div"
                    className={`relative whitespace-nowrap py-2 text-base font-medium hover:text-primary7 ${
                      router.pathname === "/services"
                        ? "text-primary7"
                        : "text-white"
                    }`}
                  >
                    <Link href="/services">
                      <Menu.Button
                        type="button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="flex items-center"
                      >
                        Services
                        <ChevronDownIcon
                          className="ml-1 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </Link>

                    <Menu.Items>
                      <div
                        className="absolute left-0 z-40 mt-2 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:left-0 sm:w-96"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabIndex="-1"
                      >
                        {submenus.services.map((item) => (
                          <div key={item.name}>
                            <Link href={item.href}>
                              <button
                                role="menuitem"
                                tabIndex="-1"
                                className="block cursor-pointer px-4 py-2 text-base font-normal text-primary1 hover:text-primary7"
                              >
                                {item.name}
                              </button>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </Menu.Items>
                  </Menu>

                  <Menu
                    as="div"
                    className={`relative whitespace-nowrap py-2 text-base font-medium hover:text-primary7 ${
                      router.pathname === "/industries"
                        ? "text-primary7"
                        : "text-white"
                    }`}
                  >
                    <Link href="/industries">
                      <Menu.Button
                        type="button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="flex items-center"
                      >
                        Industries
                        <ChevronDownIcon
                          className="ml-1 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </Link>

                    <Menu.Items>
                      <div
                        className="absolute right-0 z-40 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:left-0"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabIndex="-1"
                      >
                        {submenus.industries.map((item) => (
                          <div key={item.name}>
                            <Link href={item.href}>
                              <button
                                role="menuitem"
                                tabIndex="-1"
                                className="block cursor-pointer px-4 py-2 text-base font-normal text-primary1 hover:text-primary7"
                              >
                                {item.name}
                              </button>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </Menu.Items>
                  </Menu>

                  <Menu
                    as="div"
                    className={`relative whitespace-nowrap py-2 text-base font-medium hover:text-primary7 ${
                      router.pathname === "/news"
                        ? "text-primary7"
                        : "text-white"
                    }`}
                  >
                    <Link href="/news">
                      <Menu.Button
                        type="button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="flex items-center"
                      >
                        News
                        <ChevronDownIcon
                          className="ml-1 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </Link>

                    <Menu.Items>
                      <div
                        className="absolute left-0 z-40 mt-2 origin-top-left rounded-md bg-white p-5 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:left-0"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabIndex="-1"
                      >
                        {submenus.news.map((item) => (
                          <div key={item.name}>
                            <Link href={item.href}>
                              <button
                                role="menuitem"
                                tabIndex="-1"
                                className="block cursor-pointer px-4 py-2 text-base font-normal text-primary1 hover:text-primary7"
                              >
                                {item.name}
                              </button>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </Menu.Items>
                  </Menu>

                  <Link
                    href="/careers"
                    className={`py-2 text-base font-medium hover:text-primary7 ${
                      router.pathname === "/careers"
                        ? "text-primary7"
                        : "text-white"
                    }`}
                  >
                    Careers
                  </Link>

                  <Link
                    href="/safety"
                    className={`py-2 text-base font-medium hover:text-primary7 ${
                      router.pathname === "/safety"
                        ? "text-primary7"
                        : "text-white"
                    }`}
                  >
                    Safety
                  </Link>

                  <Link
                    href="/about-us"
                    className={`py-2 text-base font-medium hover:text-primary7 ${
                      router.pathname === "/about-us"
                        ? "text-primary7"
                        : "text-white"
                    }`}
                  >
                    About us
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
