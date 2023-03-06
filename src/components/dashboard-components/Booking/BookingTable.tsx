import {
	TABLE_DATA_LIMITS,
	TABLE_DEFAULT_LIMIT,
} from '@/app/config/configuration';
import { IBooking } from '@/app/models/Bookings/bookings.model';
import { IPaginationMeta } from '@/app/models/CommonPagination.model';
import EmptyPannel from '@/components/common/EmptyPannel';
import CircularLoader from '@/components/common/Loader';
import PageTitleArea from '@/components/common/PageTitleArea';
import Pagination from '@/components/common/Pagination';
import { gql, useQuery } from '@apollo/client';
import { Select, Space, Table } from '@mantine/core';
import Router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import { TbCalendarTime } from 'react-icons/tb';
import BookingTableBody from './BookingTableBody';

const BookingTable: React.FC<{}> = () => {
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(5);
	const router = useRouter();

	// get booking packages
	const {
		data: bookings,
		loading: fetching,
		refetch,
	} = useQuery<{
		bookings: { nodes: IBooking[]; meta: IPaginationMeta };
	}>(PACAKGE_BOOKINGS_QUERY, {
		variables: {
			page: parseInt(router.query.page as string) || page,
			limit: parseInt(router.query.limit + '') || limit,
		},
	});

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
				title='Package Bookings'
				tagline='Booked travel packages'
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
						<TbCalendarTime size={20} />
						<span className='text-dimmed'>{'12 Feb, 23'}</span>
					</div>
				}
			/>

			<div className='bg-[#212231] shadow-lg rounded-md'>
				<Table>
					<thead>
						<tr>
							<th className='!py-3'>Name</th>
							<th className='!py-3'>Mail</th>
							<th className='!py-3'>Call</th>
							<th className='!py-3'>Date</th>
							<th className='!py-3'>Status</th>
							<th className='!py-3'>Track</th>
							<th className='!py-3'>Action</th>
						</tr>
					</thead>
					<tbody>
						{bookings?.bookings?.nodes?.map(
							(booking: IBooking, idx: number) => (
								<BookingTableBody
									key={idx}
									booking={booking}
									refetchBooking={refetch}
								/>
							)
						)}
					</tbody>
				</Table>
				<EmptyPannel isShow={!bookings?.bookings?.nodes?.length && !fetching} />
				<CircularLoader isShow={fetching} />
				<Pagination
					isShow={
						(bookings?.bookings?.nodes?.length! as number) &&
						(!fetching as boolean)
					}
					limit={limit}
					onPageChange={setPage}
					page={page}
					meta={bookings?.bookings?.meta!}
				/>

				<Space h={10} />
			</div>
		</>
	);
};

export default BookingTable;

// bookings query
const PACAKGE_BOOKINGS_QUERY = gql`
	query PACAKGE_BOOKINGS_QUERY($page: Int, $limit: Int) {
		bookings(input: { page: $page, limit: $limit, sort: DESC, sortBy: "_id" }) {
			nodes {
				_id
				name
				email
				phone
				packageId
				status
			}
			meta {
				totalCount
				currentPage
				hasNextPage
				totalPages
			}
		}
	}
`;
