import { Burger, MediaQuery } from '@mantine/core';
import React from 'react';
import IconLogo from '../icons/adminNavbarIcons/IconLogo';
import HeaderUserMenu from './HeaderUserMenu';

interface Props {
	title?: string;
	Actions?: React.ReactNode;
	mobileMenuOpen: boolean;
	setMobileMenuOpen: () => void;
}

const AdminNavbar: React.FC<Props> = ({
	title,
	Actions,
	mobileMenuOpen,
	setMobileMenuOpen,
}) => {
	return (
		<div className='dark:bg-[#1D1E2B] flex items-center justify-between w-full gap-4 px-4  rounded-sm shadow-md h-14'>
			<div className='flex items-center justify-between w-full'>
				<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
					<Burger
						opened={mobileMenuOpen}
						onClick={setMobileMenuOpen}
						className='mr-2'
						size='sm'
						mr='xl'
					/>
				</MediaQuery>
				<div className='flex items-center justify-between w-full'>
					<IconLogo />
					<div>{Actions}</div>
				</div>
			</div>
			<HeaderUserMenu />
		</div>
	);
};

export default AdminNavbar;
