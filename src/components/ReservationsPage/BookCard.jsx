import './styles/BookCard.css';

const BookCard = ({
	book,
	deleteReservation,
	setBookSelected,
	setFormIsOpen,
}) => {
	const initialDate = new Date(book.checkIn).getTime();
	const finalDate = new Date(book.checkOut).getTime();
	const reservationDays = (finalDate - initialDate) / (1000 * 60 * 60 * 24);

	const handleDelete = () => {
		const url = `https://hotels-api.academlo.tech/bookings/${book.id}`;
		deleteReservation(url, book.id, true);
	};

	const handleReview = () => {
		setFormIsOpen(true);
		setBookSelected(book);
	};

	return (
		<article className="reservation flex-container">
			<header className="reservation__header">
				<img
					className="reservation__image"
					src={book.hotel.images[0].url}
					alt={book.hotel.name}
				/>
			</header>
			<section className="reservation__body">
				<h3 className="reservation__name">{book.hotel.name}</h3>

				<div className="reservation__city">
					{book.hotel.city.name}, {book.hotel.city.country}
				</div>

				<p onClick={handleReview} className="reservation__review">
					Rate and comment this visit... ¡Click Here!
				</p>

				<ul className="reservation__list">
					<li className="reservation__list-item flex-container">
						<span className="reservation__list-label">Reservations Days</span>
						<span className="reservation__list-value">{reservationDays}</span>
					</li>
					<li className="reservation__list-item flex-container">
						<span className="reservation__list-label">Subtotal Price</span>
						<span className="reservation__list-value">
							USD ${reservationDays * +book.hotel.price}
						</span>
					</li>
				</ul>
				<button className="reservation__btn" onClick={handleDelete}>
					<i className="bx bx-trash"></i>
				</button>
			</section>
		</article>
	);
};

export default BookCard;
