import React from "react";

function Main() {
	return (
		<div className='container bg-pink-800 flex flex-col items-center'>
			<h1 className='text-6xl text-red-300 font-bold text-center p-10 '>
				{" "}
				My Cunt Closet ♥️
			</h1>
			<p className='text-2xl text-red-300 font-semibold  text-center mb-10 '>
				upload ur cute shitty clothes
			</p>
			<img
				className='absolute w-20 left-[30%]'
				src={process.env.PUBLIC_URL + "/kitty1.png"}
				alt='kitty'
			/>
			<img
				className='absolute w-40  right-[27%] top-32'
				src={process.env.PUBLIC_URL + "/kitty2.png"}
				alt='kitty'
			/>
			<img
				className='absolute w-28 right-[25%] top-64'
				src={process.env.PUBLIC_URL + "/kitty3.png"}
				alt='kitty'
			/>
			<img
				className='absolute opacity-30 w-[400px] left-[10%] top-16'
				src={process.env.PUBLIC_URL + "/kitty4.png"}
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
					<div className='text-2xl w-[50%] text-center'> item info </div>
					<div className='text-2xl w-[50%] text-center'> item image</div>
				</div>
				<div className='flex  w-[100%] text-center border-b-4 p-3 border-purple-400  '>
					<div className='flex flex-col items-center w-[50%] '>
						<div className='text-xl w-[50%] mt-10'>kitty dress </div>
						<div className='text-lg w-[50%] mt-10'>
							very pink dress lol with hello kitty stuff in it looks bad but i
							got it for cheap fml
						</div>
					</div>
					<div className='flex flex-col w-[50%] items-center  '>
						<img
							className='h-60 w-72 mt-10 items-center '
							src={process.env.PUBLIC_URL + "/hellokity.jpg"}
							alt='pic'
						/>
					</div>
				</div>
				<div className='flex  w-[100%] text-center border-b-4 p-3 border-purple-400  '>
					<div className='flex flex-col items-center w-[50%] '>
						<div className='text-xl w-[50%] mt-10'>fat kitty dress </div>
						<div className='text-lg w-[50%] mt-10'>
							lol fat hello kity dress
						</div>
					</div>
					<div className='flex flex-col w-[50%] items-center  '>
						<img
							className='h-60 w-72 mt-10 items-center '
							src={process.env.PUBLIC_URL + "/hellok.jpeg"}
							alt='pic'
						/>
					</div>
				</div>
				<div className='flex  w-[100%] text-center   '>
					<div className='flex flex-col items-center w-[50%] '>
						<div className='text-xl w-[50%] mt-10'>kitty dress </div>
						<div className='text-lg w-[50%] mt-10'>meow</div>
					</div>
					<div className='flex flex-col w-[50%] items-center  '>
						<img
							className='h-60 w-72 mt-10 items-center '
							src={process.env.PUBLIC_URL + "/hellok1.jpg"}
							alt='pic'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
