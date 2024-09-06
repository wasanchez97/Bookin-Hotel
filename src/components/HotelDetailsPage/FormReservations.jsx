import { useForm } from 'react-hook-form';
import useCrud from '../../hooks/useCrud';
import { useNavigate } from 'react-router-dom';

const FormReservations = ({ hotelId }) => {
	const { reset, handleSubmit, register } = useForm();
	const [, , createBooking] = useCrud();
	const navigate = useNavigate();

	const submit = (data) => {
		const url = 'https://hotels-api.academlo.tech/bookings';

		const objData = { ...data, hotelId };

		createBooking(url, objData, true);
		reset({
			checkIn: '',
			checkOut: '',
		});
		navigate('/reservations');
	};

	return (
		<form onSubmit={handleSubmit(submit)}>
			<h3>Make your reservation here:</h3>
			<label>
				<span>Check-in</span>
				<input {...register('checkIn')} type="date" />
			</label>
			<label>
				<span>Check-out</span>
				<input {...register('checkOut')} type="date" />
			</label>
			<button>Reserve a Room</button>
		</form>
	);
};

export default FormReservations;
