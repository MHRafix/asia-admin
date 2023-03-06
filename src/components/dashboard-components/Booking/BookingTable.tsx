import { ActionIcon, Button, Space, Table, Text } from '@mantine/core';
import { format } from 'date-fns';
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const BookingTable: React.FC<{}> = () => {
	return (
		<div className='bg-[#212231] shadow-lg rounded-md'>
			<Table>
				<thead>
					<tr>
						<th className='!py-3'>Name</th>
						<th className='!py-3'>Mail</th>
						<th className='!py-3'>Call</th>
						<th className='!py-3'>Date</th>
						<th className='!py-3'>Time</th>
						<th className='!py-3'>Food Item</th>
						<th className='!py-3'>Action</th>
					</tr>
				</thead>
				<tbody>
					{elements.map((element) => (
						<tr key={element.name}>
							<td className='text-dimmed'>{element.name}</td>
							<td className='text-dimmed'>{element.email}</td>
							<td className='text-dimmed'>{element.phone}</td>
							<td className='text-dimmed'>
								{format(element.date, 'd MMMM yyyy')}
							</td>
							<td className='text-dimmed'>{format(element.date, 'p')}</td>
							<td className='text-dimmed'>{element.foodItem}</td>
							<td className='flex gap-2 items-center'>
								<ActionIcon>
									<FiEdit size={20} />
								</ActionIcon>
								<Button variant='light' color='teal' size='xs'>
									Details
								</Button>
							</td>
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

export default BookingTable;

const elements = [
	{
		name: 'Carbon',
		email: 'carbon@gmail.com',
		phone: '01611859756',
		date: new Date(),
		time: new Date(),
		foodItem: 'Package-1',
	},
	{
		name: 'Carbon',
		email: 'carbon@gmail.com',
		phone: '01611859756',
		date: new Date(),
		time: new Date(),
		foodItem: 'Package-1',
	},
	{
		name: 'Carbon',
		email: 'carbon@gmail.com',
		phone: '01611859756',
		date: new Date(),
		time: new Date(),
		foodItem: 'Package-1',
	},
	{
		name: 'Carbon',
		email: 'carbon@gmail.com',
		phone: '01611859756',
		date: new Date(),
		time: new Date(),
		foodItem: 'Package-1',
	},
	{
		name: 'Carbon',
		email: 'carbon@gmail.com',
		phone: '01611859756',
		date: new Date(),
		time: new Date(),
		foodItem: 'Package-1',
	},
	{
		name: 'Carbon',
		email: 'carbon@gmail.com',
		phone: '01611859756',
		date: new Date(),
		time: new Date(),
		foodItem: 'Package-1',
	},
	{
		name: 'Carbon',
		email: 'carbon@gmail.com',
		phone: '01611859756',
		date: new Date(),
		time: new Date(),
		foodItem: 'Package-1',
	},
	{
		name: 'Carbon',
		email: 'carbon@gmail.com',
		phone: '01611859756',
		date: new Date(),
		time: new Date(),
		foodItem: 'Package-1',
	},
	{
		name: 'Carbon',
		email: 'carbon@gmail.com',
		phone: '01611859756',
		date: new Date(),
		time: new Date(),
		foodItem: 'Package-1',
	},
];
