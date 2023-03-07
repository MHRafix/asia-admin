import { gql } from '@apollo/client';

/**
 * Booking query
 */
// bookings get query
export const PACAKGE_BOOKINGS_QUERY = gql`
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

// booking delete query
export const DELETE_BOOKING_MUTATION = gql`
	mutation DELETE_BOOKING_MUTATION($id: String!) {
		removeBooking(input: { key: "_id", operator: eq, value: $id })
	}
`;

/**
 * Users query
 */

// users query
export const USERS_QUERY = gql`
	query USERS_QUERY($page: Int, $limit: Int) {
		users(input: { page: $page, limit: $limit }) {
			nodes {
				_id
				name
				email
				role
				avatar
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

// remove user
export const REMOVE_USER = gql`
	mutation REMOVE_CUSTOMER($id: String) {
		removeUser(input: { key: "_id", operator: eq, value: $id })
	}
`;
