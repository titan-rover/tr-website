export const Card = ({ image, title, description }) => {
	return (
		<article className="w-full bg-[#D9D9D9] shadow hover:shadow-lg rounded-3xl group">
			<div className="p-6">
				<div className="w-full h-52 overflow-hidden rounded-3xl">
					<img
						src={image}
						alt=""
						className="w-full h-full object-cover object-center"
					/>
				</div>
			</div>
			<h2 className="font-semibold text-lg">{title}</h2>
			<span className="inline-block bg-[#E88B33] w-16 h-1 group-hover:w-32 transition-all duration-300 ease-in-out -mt-38 "></span>
			<p className="text-left px-10 pb-10 pt-5">{description}</p>
		</article>
	);
};
