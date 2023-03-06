import PageTitleArea from '@/components/common/PageTitleArea';
import BookingTable from '@/components/dashboard-components/Booking/BookingTable';
import AdminLayout from '@/components/layouts/AdminLayout';
import { format } from 'date-fns';
import { NextPage } from 'next';
import { TbCalendarTime } from 'react-icons/tb';

const BookingPage: NextPage = () => {
	const result = format(new Date(), 'MMMM yyyy');

	return (
		<AdminLayout>
			<PageTitleArea
				title='Bookings'
				tagline='Overall 1780 Customer connect with resox'
				actionComponent={
					<div className='flex items-center gap-2'>
						<TbCalendarTime size={20} />
						<span className='text-dimmed'>{result}</span>
					</div>
				}
			/>

			<BookingTable />
		</AdminLayout>
	);
};

export default BookingPage;
