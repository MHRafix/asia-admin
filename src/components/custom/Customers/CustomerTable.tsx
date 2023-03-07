import {
	TABLE_DATA_LIMITS,
	TABLE_DEFAULT_LIMIT,
} from '@/app/config/configuration';
import { USERS_QUERY } from '@/app/config/gql-query';
import { IPaginationMeta } from '@/app/models/CommonPagination.model';
import { IUser } from '@/app/models/users.model';
import EmptyPannel from '@/components/common/EmptyPannel';
import CircularLoader from '@/components/common/Loader';
import PageTitleArea from '@/components/common/PageTitleArea';
import Pagination from '@/components/common/Pagination';
import { useQuery } from '@apollo/client';
import { Select, Space, Table } from '@mantine/core';
import Router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import CustomersTableBody from './CustomersTableBody';

const CustomerTable: React.FC<{}> = () => {
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(5);
	const router = useRouter();

	// get booking packages
	const {
		data: customers,
		loading: fetching,
		refetch,
	} = useQuery<{
		users: { nodes: IUser[]; meta: IPaginationMeta };
	}>(USERS_QUERY, {
		variables: {
			page: parseInt(router.query.page as string) || page,
			limit: parseInt(router.query.limit + '') || limit,
		},
	});

	console.log(customers);
	// change booking limits
	const handleLimitChange = (limit: string) => {
		Router.replace({
			query: { ...Router.query, limit, page: 1 },
		});
		setLimit(parseInt(limit));
	};

	return (
		<>
			<PageTitleArea
				title='Our customers'
				tagline='Our solid customers'
				actionComponent={
					<div className='flex items-center gap-2'>
						<Select
							w={120}
							placeholder='Pick one'
							onChange={(value) => handleLimitChange(value!)}
							data={TABLE_DATA_LIMITS}
							defaultValue={
								// (router.query.limit as string) ||

								TABLE_DEFAULT_LIMIT
							}
						/>
						<Select
							w={120}
							placeholder='Pick one'
							searchable
							nothingFound='No options'
							data={['All Customers', 'Null']}
						/>
					</div>
				}
			/>

			<div className='bg-[#212231] shadow-lg rounded-md'>
				<Table>
					<thead>
						<tr>
							<th className='!py-3'>Name</th>
							<th className='!py-3'>Mail</th>
							<th className='!py-3'>Role</th>
							<th className='!py-3'>Avatar</th>
							<th className='!py-3'>Action</th>
						</tr>
					</thead>
					<tbody>
						{customers?.users?.nodes?.map((customer: IUser, idx: number) => (
							<CustomersTableBody
								key={idx}
								customer={customer}
								refetchUser={refetch}
							/>
						))}
					</tbody>
				</Table>

				<EmptyPannel isShow={!customers?.users?.nodes?.length && !fetching} />
				<CircularLoader isShow={fetching} />
				<Pagination
					isShow={
						(customers?.users?.nodes?.length! as number) &&
						(!fetching as boolean)
					}
					limit={limit}
					onPageChange={setPage}
					page={page}
					meta={customers?.users?.meta!}
				/>
				<Space h={10} />
			</div>
		</>
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
