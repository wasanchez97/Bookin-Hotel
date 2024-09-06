import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { getHotelsThunk } from '../../store/slice/product.slice';
import './styles/FilterByCity.css';

const FilterByCity = ({
	setNameFiltered,
	setPriceFiltered,
	handleFiltersClose,
}) => {
	const [cities, getCities] = useFetch();
	const dispatch = useDispatch();

	useEffect(() => {
		const url = 'https://hotels-api.academlo.tech/cities';
		getCities(url);
	}, []);

	const handleCities = (cityId) => {
		const url = `https://hotels-api.academlo.tech/hotels${
			cityId ? `?cityId=${cityId}` : ''
		}`;
		dispatch(getHotelsThunk(url));
		setNameFiltered('');
		setPriceFiltered({
			from: 0,
			to: Infinity,
		});
		handleFiltersClose();
	};

	return (
		<article className="filtercity grid-container">
			<h4 className="filtercity__title">Cities</h4>
			<ul className="filtercity__list grid-container">
				<li className="filtercity__list-item" onClick={() => handleCities()}>
					All Cities
				</li>
				{cities?.map((city) => (
					<li
						className="filtercity__list-item"
						onClick={() => handleCities(city.id)}
						key={city.id}
					>
						{city.name}
					</li>
				))}
			</ul>
		</article>
	);
};

export default FilterByCity;
