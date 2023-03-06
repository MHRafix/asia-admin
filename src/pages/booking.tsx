import PageTitleArea from '@/components/common/PageTitleArea';
import BookingTable from '@/components/dashboard-components/Booking/BookingTable';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Select } from '@mantine/core';
import { format } from 'date-fns';
import { NextPage } from 'next';
import { TbCalendarTime } from 'react-icons/tb';

const BookingPage: NextPage = () => {
	const result = format(new Date(), 'MMMM yyyy');

	return (
		<AdminLayout>
			<BookingTable />
		</AdminLayout>
	);
};

export default BookingPage;
