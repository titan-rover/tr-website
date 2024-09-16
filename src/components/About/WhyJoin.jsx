import { Card } from "../common/Card";

export const WhyJoin = () => {
	const cardsData = [
		{
			image:
				"https://images.unsplash.com/photo-1622674777904-386b3ef30c4a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Leadership Opportunity",
			description:
				"Titan Rover empowers you to take on leadership roles, guiding projects and teams, which helps build confidence and prepares you for managing responsibilities in your professional life.",
		},
		{
			image:
				"https://images.pexels.com/photos/9241769/pexels-photo-9241769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			title: "Technical Skills",
			description:
				"You'll gain hands-on experience solving complex engineering challenges, applying theoretical knowledge, and developing critical technical skills that are directly applicable to your future career.",
		},
		{
			image:
				"https://plus.unsplash.com/premium_photo-1672997189763-7002561b5e29?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Professional Development",
			description:
				"Joining Titan Rover enhances your professional growth by offering real-world experience, networking opportunities, and the chance to refine essential soft skills like teamwork and communication.",
		},
	];

	return (
		<div className="bg-gradient-to-b from-[rgba(19,65,117,0.46)] to-[rgba(26,33,65,0.46)] min-h-screen sm:pb-4">
			<section className="mx-auto container px-3">
				<h1 className="text-4xl font-bold py-8 md:py-14">
					Why Join Titan Rover?
				</h1>
				<div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-10">
					{cardsData.map((card, index) => (
						<Card key={index} {...card} />
					))}
				</div>
			</section>
		</div>
	);
};
