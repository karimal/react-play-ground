class LoadBtn extends React.Component {
    render() {
        return (
            <div className={`loadBtnContainer ${this.props.loadingState}`}>
                <input onClick={this.props.loadHotels}
                    type="submit"
                    value="Load Hotels"
                    className="loadBtn"
                />
            </div>
        )
    }
}
