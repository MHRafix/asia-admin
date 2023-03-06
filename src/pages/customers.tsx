import PageTitleArea from '@/components/common/PageTitleArea';
import CustomerTable from '@/components/dashboard-components/Customers/CustomerTable';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Button, Select } from '@mantine/core';
import { NextPage } from 'next';
import { BiTrash } from 'react-icons/bi';

const CustomerPage: NextPage = () => {
	return (
		<AdminLayout>
			<PageTitleArea
				title='Custmers'
				tagline='Overall 1780 Customer connect with resox'
				actionComponent={
					<div className='flex items-center gap-2'>
						<Button
							variant='subtle'
							color='red'
							size='sm'
							leftIcon={<BiTrash size={20} />}
						>
							Remove
						</Button>
						<Select
							w={120}
							placeholder='Pick one'
							searchable
							// onSearchChange={onSearchChange}
							// searchValue={searchValue}
							nothingFound='No options'
							data={['Show 10', 'Show 20', 'Show 30', 'Show 40']}
						/>
						<Select
							w={120}
							placeholder='Pick one'
							searchable
							// onSearchChange={onSearchChange}
							// searchValue={searchValue}
							nothingFound='No options'
							data={['All Customers', 'Null']}
						/>
					</div>
				}
			/>
			<CustomerTable />
		</AdminLayout>
	);
};

export default CustomerPage;
