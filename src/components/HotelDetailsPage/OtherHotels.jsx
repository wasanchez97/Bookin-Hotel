import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import HotelCard from '../HomePage/HotelCard';

const OtherHotels = ({ city, id }) => {
	const [hotelsByCity, getHotelsByCity] = useFetch();

	useEffect(() => {
		if (city) {
			const url = `https://hotels-api.academlo.tech/hotels?cityId=${city?.id}`;
			getHotelsByCity(url);
		}
	}, [city]);

	console.log(hotelsByCity);

	return (
		<section>
			<h3>
				Other Hotels in <span>{city?.country}</span>
			</h3>
			<div className="hotels__container flex-container">
				{hotelsByCity
					?.filter((hotel) => hotel.id !== id)
					.map((hotel) => (
						<HotelCard key={hotel.id} hotel={hotel} />
					))}
			</div>
		</section>
	);
};

export default OtherHotels;
