import Link from "next/link";
import { RoundButton } from "@/components";

export default function Form() {
	return (
		<section className="w-full padding-x padding-y">
			<div className="w-full flex flex-col gap-[15px]">
				<div className="w-full flex gap-[15px] sm:flex-col xm:flex-col">
					<div className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								Hey, I’m
							</h2>
						</div>
						<div className="w-[2000px]">
							<input
								type="text"
								placeholder="Your name goes here*"
								className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out"
							/>
						</div>
					</div>
					<div className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								from
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Company or brand name*"
								className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out"
							/>
						</div>
					</div>
				</div>

				<div className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								and we need help with
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="What are you building?*"
								className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full"
							/>
						</div>
					</div>
				</div>

				<div className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								and we’d love to get it done by
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Deadline? Be real.*"
								className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full"
							/>
						</div>
					</div>
				</div>

				<div className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								The budget we’re working with is
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="What range are we talking?*"
								className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full"
							/>
						</div>
					</div>
				</div>

				<div className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								You can hit me up at
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="email@company.com*"
								className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full"
							/>
						</div>
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								and we’ll take it from there.
							</h2>
						</div>
					</div>
				</div>

				<div className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								Want to add anything else?
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="The more context, the better."
								className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full"
							/>
						</div>
					</div>
				</div>

				<div className="w-full flex items-center justify-end sm:justify-start xm:justify-start pt-[50px]">
					<div className="flex sm:flex-col xm:flex-col gap-[25px]">
						<div className="flex gap-[10px] items-center">
							<div className="flex gap-[10px]">
								<input type="checkbox" className="w-[30px]" />
								<p className="paragraph text-secondry font-NeueMontreal font-normal">
									I’ve read and agree to the
								</p>
							</div>
							<Link
								className="paragraph font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover"
								href={"/privacy"}>
								Privacy Policy
							</Link>
						</div>
						<div className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
							<RoundButton
								bgcolor="#212121"
								href="/"
								title="send inquiry"
								className="bg-white text-black"
								style={{ color: "#fff" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
