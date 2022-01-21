import React from "react";

function Main() {
	return (
		<div className='container bg-pink-800 flex flex-col items-center'>
			<h1 className='text-6xl text-red-300 font-bold text-center p-10 '>
				{" "}
				closeted
			</h1>
			<p className='text-2xl text-red-300 font-semibold  text-center mb-10 '>
				coming out of the closet made easy!
			</p>
			<img
				className='absolute w-28 right-[25%] top-64'
				src={process.env.PUBLIC_URL + "/keithharing.png"}
				alt='kitty'
			/>
			<form className='flex flex-col items-center gap-4'>
				<input
					className='w-80'
					type='text'
					name='item name'
					placeholder='  item name'
				/>
				<input
					className='w-80'
					type='text'
					name='description'
					placeholder='  item description'
				/>
				<input className='items-center w-80' type='file' name=' ' id='' />
			</form>
			<div className='flex flex-col items-center mt-16 border-8 border-purple-400 text-fuchsia-400 w-[75%] p-3'>
				<div className='flex items-center w-[100%] border-b-4 p-3 border-purple-400'>
					<div className='text-2xl w-[50%] text-center'> piece </div>
					<div className='text-2xl w-[50%] text-center'> pic</div>
				</div>
				<div className='flex  w-[100%] text-center border-b-4 p-3 border-purple-400  '>
					<div className='flex flex-col items-center w-[50%] '>
						<div className='text-xl w-[50%] mt-10'>levi's 501 in light blue </div>
						<div className='text-lg w-[50%] mt-10'>
							24w 32l jeans in light blue
						</div>
					</div>
					<div className='flex flex-col w-[50%] items-center  '>
						<img
							className='h-60 w-72 mt-10 items-center '
							src={process.env.PUBLIC_URL + "/levis501lightblue.jpg"}
							alt='pic'
						/>
					</div>
				</div>
				<div className='flex  w-[100%] text-center border-b-4 p-3 border-purple-400  '>
					<div className='flex flex-col items-center w-[50%] '>
						<div className='text-xl w-[50%] mt-10'>adidas originals sweatpants </div>
						<div className='text-lg w-[50%] mt-10'>
							25w 32l sweatpants in black and the 3 stripes
						</div>
					</div>
					<div className='flex flex-col w-[50%] items-center  '>
						<img
							className='h-60 w-72 mt-10 items-center '
							src={process.env.PUBLIC_URL + "/adidasoriginalssweatpants.png"}
							alt='pic'
						/>
					</div>
				</div>
				<div className='flex  w-[100%] text-center   '>
					<div className='flex flex-col items-center w-[50%] '>
						<div className='text-xl w-[50%] mt-10'>h&m wife beater </div>
						<div className='text-lg w-[50%] mt-10'>tank top in green</div>
					</div>
					<div className='flex flex-col w-[50%] items-center  '>
						<img
							className='h-60 w-72 mt-10 items-center '
							src={process.env.PUBLIC_URL + "/hmwifebeatergreen.jpg"}
							alt='pic'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
