
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'

const FooterComponent = (props: any) => {
	const [open, setOpen] = useState(false);
	const [privacyOpen, setPrivacyOpen] = useState(false);
	const [termsOpen, setTermsOpen] = useState(false)

	return (
		<>
			<footer className="bg-black">
				<div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-10 lg:px-8">
					<nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-6" aria-label="Footer">
						<div className="pb-6">
							<a href='/' className="text-sm leading-6 text-white">
								Home
							</a>
						</div>
						<div className="pb-6">
							<button type='button' className="text-sm leading-6 text-white" onClick={() => setPrivacyOpen(true)}>
								Privacy Policy
							</button>
						</div>
						<div className="pb-6">
							<button type='button' className="text-sm leading-6 text-white" onClick={() => setOpen(true)}>
								Cancellation Policy
							</button>
						</div>
						<div className="pb-6">
							<button type='button' className="text-sm leading-6 text-white" onClick={() => setTermsOpen(true)}>
								T&C
							</button>
						</div>
					</nav>
					<div className="mt-10 flex justify-center space-x-10">
						<a href='https://www.linkedin.com/company/bizspoke-pvt-ltd/about/' className="text-white" target='_blank' rel='noreferrer'>
							Linkedin
						</a>
						<a href='https://www.instagram.com/bizspoke_events/' className="text-white" target='_blank' rel='noreferrer'>
							Instagram
						</a>
					</div>
					{/* <p className="mt-10 text-center text-xs leading-5 text-gray-500">
		  &copy; 2023 Bizspoke, Inc. All rights reserved.
		</p> */}
				</div>
			</footer>


			{/* Privacy policy */}
			<Transition.Root show={privacyOpen} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-white bg-opacity-50 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[60rem] sm:p-6">
									<div>
										<div className="mt-3 text-left sm:mt-5">
											<Dialog.Title as="h3" className="text-base text-center mb-8 font-semibold leading-6 text-white">
												Privacy Policy
											</Dialog.Title>
											<div className="mt-2">
												<p className="text-sm text-white">
													This website, bizspoke.co.in (the “Site”) is operated by Bizspoke Private Limited located at Suite No. 1603, 16th Floor, Lodha Supremus, Opp World Tower, Lower Parel. 400013. India (“we”, “us” and/or “our”).
													This privacy policy (the “Privacy Policy”) outlines the basis on which any personal data we collect, or that you provide to us, will be processed by us. We are not responsible for the privacy policies of other websites or applications, and encourage you read all applicable terms, conditions and privacy policies when using other websites and applications.
													For the purpose of data protection law, we are the data controller. Questions, comments and requests regarding this Privacy Policy.

													<h4 className='font-bold my-5'>Agreeing to our Privacy Policy</h4>
													By using our site, you acknowledge that we will use your data in accordance with this Privacy Policy. There are certain services that we may not be able to provide if you do not choose to provide relevant information.

													<h4 className='font-bold my-5'>Updating Privacy Policy</h4>
													We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
												</p>
											</div>
										</div>
									</div>

									<div className="mt-5 sm:mt-6">
										<button
											type="button"
											className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											onClick={() => setPrivacyOpen(false)}
										>
											close
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>

			{/* Cancellation policy */}
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-white bg-opacity-50 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[60rem] sm:p-6">
									<div>
										<div className="mt-3 text-left sm:mt-5">
											<Dialog.Title as="h3" className="text-base text-center mb-8 font-semibold leading-6 text-white">
												Bizspoke CANCELLATION, RETURN AND REFUND POLICY
											</Dialog.Title>
											<div className="mt-2">
												<p className="text-sm text-white">
													This cancellation, return and refund policy (“Policy”), sets out the terms and conditions for cancellation, return and refund of The products/service listed and sold on Bizspoke shall be referred to herein as <span className='font-bold'>"Products/Service"</span>.
													<h4 className='font-bold my-5'>APPLICABILITY OF POLICY</h4>
													By using Bizspoke and/or initiating a request for purchase of services on Bizspoke, you agree to be bound by the terms contained in this Policy without modification. If you do not agree to the terms contained in this Policy, you are advised not to transact on Bizspoke. Please note that, we may from time to time change the terms of the Policy that govern your terms of cancellation, return or refund of an order for Product bought on Bizspoke. Every time you wish to use Bizspoke, please check the Policy to ensure you understand the terms and conditions that apply at that time.

													<h4 className='font-bold my-5'>TERMS OF CANCELLATION</h4>
													(a) The request for cancellation of the service can be made by cancelling the service by calling our customer care number, or any other method, as may be intimated by Bizspoke to you from time to time.

													(b) On the receipt of service cancellation request, your service will be cancelled with immediate effect, and the refund process will be initiated within 24 hours of confirmation of cancellation.

													<h4 className='font-bold my-5'>TERMS OF RETURN AND REFUND</h4>
													(a) The cancellation of the service will be at the sole discretion of Bizspoke and the request for cancellation can be made by calling our customer care number, or communicating by any other method, as may be intimated by Bizspoke from time to time.

													(b) You may initiate the cancellation by calling our customer service number and selecting the reason for return. In case of any complain or concern that may arise after the closure of the return window, you may contact the customer care.

													(c) Please be informed that when you opt to cancel or return the Products, upon our verification of the Products and the documents relating thereto, the refund amount for such Products which are eligible for return as per the terms of this Policy, will be processed within a period of 1 business day from the date of us verifying the defect or the non-compliance in the Product. Your refund will be processed only when the conditions as may be stipulated by Bizspoke are fulfilled. The refund amount will be credited to the original payment mode opted by you. You acknowledge that after initiation of refund, it may take additional time for your refund to reflect in your account which is subject to your financial institution or payment solution provider terms and conditions.

													(d) The amount claimed as refund will be refunded to you within 15 working days depending upon the mode of payment chosen by you. Sometimes banks or financial intermediaries take a longer time to process the refund request. However, if the refund does not happen by the date advised, you may contact us, and we will gladly help you.
												</p>
											</div>
										</div>
									</div>

									<div className="mt-5 sm:mt-6">
										<button
											type="button"
											className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											onClick={() => setOpen(false)}
										>
											close
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>

			{/* Cancellation policy */}
			<Transition.Root show={termsOpen} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-white bg-opacity-50 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[60rem] sm:p-6">
									<div>
										<div className="mt-3 text-left sm:mt-5">
											<Dialog.Title as="h3" className="text-base text-center mb-8 font-semibold leading-6 text-white">
												TERMS AND CONDITIONS FOR USE OF Bizspoke
											</Dialog.Title>
											<div className="mt-2">
												<p className="text-sm text-white">


													<h4 className='font-bold my-5'>Welcome to Bizspoke!</h4>

													The portal www.bizspoke.co.in and its corresponding website, is managed and operated by Bizspoke Private Limited ("<b>Bizspoke</b>", "<b>we</b>", "<b>us</b>" or "<b>our</b>"). Any natural or legal person who accesses and/or uses Bizspoke in any manner ("<b>you</b>" or "<b>your</b>") or uses any current or future service or functionality or offer made available on Bizspoke ("<b>Service</b>") will be subject to these terms and conditions for use of Bizspoke ("<b>Terms of Use</b>"), as updated from time to time and such terms, guidelines and conditions as may be applicable to such Service ("<b>Service Terms</b>"). If these Terms of Use are inconsistent with such Service Terms, the Service Terms will control to the extent of such inconsistency with respect to the applicable Service.
													<div className='my-4'></div>
													These Terms of Use constitute an electronic record within the meaning of the applicable law. This electronic record is generated by a computer system and does not require any physical or digital signatures.
												</p>
											</div>
										</div>
									</div>

									<div className="mt-5 sm:mt-6">
										<button
											type="button"
											className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											onClick={() => setTermsOpen(false)}
										>
											close
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	)
}

export default FooterComponent;