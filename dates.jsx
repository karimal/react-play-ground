class Dates extends React.Component {
    formatDate(dateString) {
        const date = new Date(dateString);
        return `${date.getDate()}.${(date.getMonth()+1)}.${date.getFullYear()}`;
    }

    render() {
        return (
            <div className="dates">
                {this.formatDate(this.props.start)}  -  {this.formatDate(this.props.end)}
            </div>
        )
    }
}
