import Link from "next/link";
import { Fragment } from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { Menu, Popover, Transition } from "@headlessui/react";

const submenus = {
  component: [
    {
      name: "Processor",
      href: "/component/processor",
    },
    {
      name: "Motherboard",
      href: "/component/motherboard",
    },
    {
      name: "RAM",
      href: "/component/ram",
    },
    {
      name: "Power Supply Unit",
      href: "/component/power-supply-unit",
    },
    {
      name: "Storage Device",
      href: "/component/storage-device",
    },
    {
      name: "Monitor",
      href: "/component/monitor",
    },
    {
      name: "Graphics Card",
      href: "/component/graphics-card",
    },
  ],
};

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <Popover className="top-0 z-50 bg-primary1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 lg:justify-start">
          <div className="flex lg:flex-1">
            <Link href="/">
              <h1 className="text-white font-bold text-3xl">TECHMATE</h1>
            </Link>
          </div>

          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 pl-5 text-white">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="mt-2 hidden items-center lg:flex">
            <div className="hover-dropdown-menu">
              <div
                className={`relative ml-6 block whitespace-nowrap py-6 text-lg font-medium hover:text-primary7 ${
                  router.pathname === "/component"
                    ? "text-primary7"
                    : "text-white"
                }`}
              >
                <Link href="/component" className="flex items-center">
                  Component
                  <ChevronDownIcon className="ml-1 h-5 w-5" />
                </Link>

                <div className="dropdown-menu absolute left-0 z-40 mt-2 w-80 origin-top-left rounded-md border-t-8 border-primary7 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {submenus.component.map((item) => (
                    <div key={item.name}>
                      <Link href={item.href}>
                        <button className="block cursor-pointer px-4 py-2 text-lg font-normal text-primary1 hover:text-primary7">
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
              href="/pc-builder"
              className={`ml-6 whitespace-nowrap text-lg font-medium hover:text-primary7 ${
                router.pathname === "/pc-builder"
                  ? "text-primary7"
                  : "text-white"
              }`}
            >
              PC Builder
            </Link>

            {session?.user ? (
              <Link
                href="/login"
                onClick={() => signOut()}
                className={`ml-6 whitespace-nowrap text-lg font-medium hover:text-primary7 ${
                  router.pathname === "/login" ? "text-primary7" : "text-white"
                }`}
              >
                Logout
              </Link>
            ) : (
              <Link
                href="/login"
                className={`ml-6 whitespace-nowrap text-lg font-medium hover:text-primary7 ${
                  router.pathname === "/login" ? "text-primary7" : "text-white"
                }`}
              >
                Login
              </Link>
            )}
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
          <div className="divide-y-2 rounded-2xl bg-primary3 shadow-2xl">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Link href="/">
                  <h1 className="text-white font-bold text-3xl">TECHMATE</h1>
                </Link>
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
                    className={`py-2 text-lg font-medium hover:text-primary7 ${
                      router.pathname === "/" ? "text-primary7" : "text-white"
                    }`}
                  >
                    Home
                  </Link>

                  <Menu
                    as="div"
                    className={`relative whitespace-nowrap py-2 text-lg font-medium hover:text-primary7 ${
                      router.pathname === "/component"
                        ? "text-primary7"
                        : "text-white"
                    }`}
                  >
                    <Link href="/component">
                      <Menu.Button
                        type="button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="flex items-center"
                      >
                        Component
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
                        {submenus.component.map((item) => (
                          <div key={item.name}>
                            <Link href={item.href}>
                              <button
                                role="menuitem"
                                tabIndex="-1"
                                className="block cursor-pointer px-4 py-2 text-lg font-normal text-primary1 hover:text-primary7"
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
                    href="/pc-builder"
                    className={`py-2 text-lg font-medium hover:text-primary7 ${
                      router.pathname === "/pc-builder"
                        ? "text-primary7"
                        : "text-white"
                    }`}
                  >
                    PC Builder
                  </Link>

                  {session?.user ? (
                    <Link
                      href="/login"
                      onClick={() => signOut()}
                      className={`py-2 text-lg font-medium hover:text-primary7 ${
                        router.pathname === "/login"
                          ? "text-primary7"
                          : "text-white"
                      }`}
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link
                      href="/login"
                      className={`py-2 text-lg font-medium hover:text-primary7 ${
                        router.pathname === "/login"
                          ? "text-primary7"
                          : "text-white"
                      }`}
                    >
                      Login
                    </Link>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}