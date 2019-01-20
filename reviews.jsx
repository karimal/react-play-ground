class Reviews extends React.Component {
    render() {
        return (
            <div className={`reviews ${this.props.loadingState}`}>
                {this.props.data.map((review, index) => {
                    const reviewValue = review.positive ? '+' : '-';
                    return (
                        <div key={index} className="review">
                            <div className="review__container">
                                <div className="review__valueContainer">
                                    <div className="review__value">
                                        {reviewValue}
                                    </div>
                                </div>
                                <div className="review__details">
                                    <h4 className="review__name">
                                        {review.name}
                                    </h4>
                                    <div className="review__comment">
                                        {review.comment}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}