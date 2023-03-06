import { Button, Checkbox, Flex, Space, Table, Text } from '@mantine/core';
import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const CustomerTable: React.FC<{}> = () => {
	return (
		<div className='bg-[#212231] shadow-lg rounded-md'>
			<Table>
				<thead>
					<tr>
						<th className='!py-3'>Name</th>
						<th className='!py-3'>Location</th>
						<th className='!py-3'>Mail</th>
						<th className='!py-3'>Phone</th>
						<th className='!py-3'>Last Activity</th>
					</tr>
				</thead>
				<tbody>
					{elements.map((element) => (
						<tr key={element.name}>
							<td className='text-dimmed !py-2'>
								<Flex gap={8} align='center'>
									<Checkbox color='red' /> {element.name}
								</Flex>
							</td>
							<td className='text-dimmed !py-2'>{element.location}</td>
							<td className='text-dimmed !py-2'>{element.email}</td>
							<td className='text-dimmed !py-2'>{element.phone}</td>
							<td className='text-dimmed !py-2'>{element.lastActivity}</td>
						</tr>
					))}
				</tbody>
			</Table>
			<div className='flex gap-3 items-center w-[200px] mx-auto my-4'>
				<Text size='sm'>Page: 1/25</Text>
				<Button variant='subtle' size='xs' color='red'>
					<HiChevronLeft size={20} />
				</Button>
				<Button variant='subtle' size='xs' color='red'>
					<HiChevronRight size={20} />
				</Button>
			</div>
			<Space h={10} />
		</div>
	);
};

export default CustomerTable;

const elements = [
	{
		name: 'Mehedi H. Rafiz',
		location: 'Manddari Bazar, Lakshmipur',
		email: 'rafiz.mehedi@gmail.com',
		phone: '01611859756',
		lastActivity: '5min ago',
	},
	{
		name: 'Mehedi H. Rafiz',
		location: 'Manddari Bazar, Lakshmipur',
		email: 'rafiz.mehedi@gmail.com',
		phone: '01611859756',
		lastActivity: '5min ago',
	},
	{
		name: 'Mehedi H. Rafiz',
		location: 'Manddari Bazar, Lakshmipur',
		email: 'rafiz.mehedi@gmail.com',
		phone: '01611859756',
		lastActivity: '5min ago',
	},
	{
		name: 'Mehedi H. Rafiz',
		location: 'Manddari Bazar, Lakshmipur',
		email: 'rafiz.mehedi@gmail.com',
		phone: '01611859756',
		lastActivity: '5min ago',
	},
	{
		name: 'Mehedi H. Rafiz',
		location: 'Manddari Bazar, Lakshmipur',
		email: 'rafiz.mehedi@gmail.com',
		phone: '01611859756',
		lastActivity: '5min ago',
	},
	{
		name: 'Mehedi H. Rafiz',
		location: 'Manddari Bazar, Lakshmipur',
		email: 'rafiz.mehedi@gmail.com',
		phone: '01611859756',
		lastActivity: '5min ago',
	},
	{
		name: 'Mehedi H. Rafiz',
		location: 'Manddari Bazar, Lakshmipur',
		email: 'rafiz.mehedi@gmail.com',
		phone: '01611859756',
		lastActivity: '5min ago',
	},
];
