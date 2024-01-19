import React from "react";
import { AiOutlineFullscreen, AiOutlineSetting } from "react-icons/ai";

type PreferenceNavProps = {};

const PreferenceNav: React.FC<PreferenceNavProps> = () => {
	return (
		<div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full'>
			<div className='flex items-center text-white'>
				<button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium'>
					<div className='flex items-center px-1'>
						<div className='text-xs text-label-2 dark:text-dark-label-2'>JavaScript</div>
					</div>
				</button>
			</div>
		</div>
	);
};
export default PreferenceNav;