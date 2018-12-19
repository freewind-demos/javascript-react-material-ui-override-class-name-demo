import React, {Component} from 'react'

import List from '@material-ui/core/List'
import {withStyles} from '@material-ui/core/styles'
import treeData from './tree-data'
import MyListItem from './my-list-item.jsx'

const styles = (theme) => ({
    root: {
        width: '400px',
        border: '3px solid red'
    },
})

class MyList extends Component {
    render() {
        const {classes} = this.props
        return <div>
            <List classes={{
                root: classes.root
            }}>
                {
                    treeData.map((node, index) => <MyListItem data={node} key={index}/>)
                }
            </List>
        </div>
    }
}

export default withStyles(styles)(MyList)
