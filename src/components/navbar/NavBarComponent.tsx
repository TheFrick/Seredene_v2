import React, { useState } from "react";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import logo from './../../assets/images/svg/logo.svg'

const navigation = [
	{ name: 'SHOP NOW', href: 'https://www.amazon.in/dp/1513695541/ref=sr_1_1?crid=11VSFLNJHV9CQ&keywords=seredene&qid=1692683831&sprefix=serene%2Caps%2C282&sr=8-1' },
]

export const NavbarComponent = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<>
			<header className="bg-transparent fixed top-0 left-0 z-30 w-full">
				<nav className="mx-auto flex w-full items-center justify-between md:p-6 lg:px" aria-label="Global">
					<div className="flex lg:flex-1">
						<a href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Bizspoke</span>
							{/* <img className="h-8 w-auto" src={logo} alt="logo" /> */}
						</a>
					</div>
					{/* Nav mobile button */}
					{/* <div className="flex lg:hidden text-white">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div> */}
					{/* Nav Items */}
					<div className="lg:flex lg:gap-x-12 p-3 xl:p-0">
						{navigation.map((item) => (
							<a key={item.name} href={item.href} className="text-xl font-bold text-white">
								{item.name}
							</a>
						))}
					</div>
				</nav>
				<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
					<div className="fixed inset-0 z-10" />
					<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
						<div className="flex items-center justify-between">
							<a href="/" className="-m-1.5 p-1.5">
								<span className="sr-only">Bizspoke</span>
								{/* <img className="h-8 w-auto" src={logo} alt="" /> */}
							</a>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-400"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6">
								<div className="space-y-2 py-6">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white"
										>
											{item.name}
										</a>
									))}
								</div>

							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</header>
		</>
	);
};
