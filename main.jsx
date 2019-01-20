class Main extends React.Component {
    constructor() {
        super();
        this.state = { hotels: [], loadingState: '' };
    }

    loadHotels = () => {
        axios.get('//fake-hotel-api.herokuapp.com/api/hotels/?count=5')
            .then((response) => {
                this.setState({
                    hotels: response.data,
                    loadingState: 'loaded'
                })
            })
            .catch(() => {
                this.setState({
                    loadingState: 'errorVisible'
                })
            });
    }

    render() {
        return (
            <section className="container">
                <LoadBtn loadHotels={this.loadHotels} loadingState={this.state.loadingState} />
                <div className="hotelsContainer">
                    {this.state.hotels.map((hotel) => {
                        return (
                            <Hotel key={hotel.id} hotel={hotel} />
                        );
                    })}
                    <div className={`hotels__error ${this.state.loadingState}`}>
                        An error occured!
                    </div>
                </div>
            </section>
        )
    }
}
