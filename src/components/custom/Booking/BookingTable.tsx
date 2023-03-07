import { PACAKGE_BOOKINGS_QUERY } from '@/app/config/gql-query';
import { IBooking } from '@/app/models/bookings.model';
import { IPaginationMeta } from '@/app/models/CommonPagination.model';
import EmptyPannel from '@/components/common/EmptyPannel';
import CircularLoader from '@/components/common/Loader';
import Pagination from '@/components/common/Pagination';
import { useQuery } from '@apollo/client';
import { Space, Table } from '@mantine/core';
import Router, { useRouter } from 'next/router';
import React, { useState } from 'react';
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
