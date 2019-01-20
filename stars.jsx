class Stars extends React.Component {
    render() {
        return (
            <div className="stars">
                {[...Array(this.props.stars)].map((star, index) => {
                    return (<span key={index}>&#9733;</span>)
                })}
            </div>
        )
    }
}
