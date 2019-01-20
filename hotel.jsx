class Hotel extends React.Component {
    constructor() {
        super();
        this.state = { reviews: [], loadingState: '' };
    }

    cutString(text, limit) {
        return text.length >= limit ? `${text.substring(0, limit)}...` : text;
    }

    isRecommended(rate) {
        return Math.floor(rate) >= 4;
    }

    loadReviews = () => {
        axios.get(`//fake-hotel-api.herokuapp.com/api/reviews?hotel_id=${this.props.hotel.id}`)
            .then((response) => {
                if (response.data.length > 0) {
                    this.setState({
                        reviews: response.data,
                        loadingState: 'loaded'
                    })
                }
            });
    }

    render() {
        return (
            <div className="hotel">
                <div className="hotelContainer">
                    <div className="hotel__imageContainer">
                        {this.isRecommended(this.props.hotel.rating) &&
                            <Ribbon />
                        }
                        {/* <img className="hotel__image" src={this.props.hotel.images[0]} alt={this.props.hotel.name} /> */}
                        <img className="hotel__image" src="https://placeimg.com/640/480/arch" alt={this.props.hotel.name} />
                    </div>
                    <div className="hotel__info">
                    <div>
                        <div className="hotel__header">
                            <h2 className="hotel__name">
                                {this.cutString(this.props.hotel.name, 33)}
                            </h2>
                            <Stars stars={this.props.hotel.stars} />
                        </div>
                        <span className="hotel__place">
                            {this.props.hotel.city} - {this.props.hotel.country}
                        </span>
                    </div>

                    <div className="hotel__description">
                        {this.cutString(this.props.hotel.description, 200)}
                    </div>

                    <div className="hotel__footerContainer">
                        <input
                            className="hotel__showReview"
                            type="submit"
                            value="Show Reviews"
                            onClick={this.loadReviews}
                        />
                        <div className="hotel__priceContainer">
                            <span className="hotel__price">
                                <span className="hotel__priceNumber">
                                    {this.props.hotel.price}
                                </span> €
                            </span>
                            <Dates start={this.props.hotel.date_start} end={this.props.hotel.date_end} />
                        </div>
                    </div>
                </div>
                </div>
                <Reviews data={this.state.reviews} loadingState={this.state.loadingState}/>
            </div>
        )
    }
}
