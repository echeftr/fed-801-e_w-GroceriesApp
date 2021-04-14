import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
    render() {
        const listItems = this.props.list
            .map(item =>
                <ListItem
                    key={item.id}
                    item={item}
                    click={this.props.click}
                />)
        return (
            <div>
                <ul>
                {listItems}
                </ul>
            </div>
        )
    }
}


export default List