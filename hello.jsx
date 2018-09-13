import React, {Component} from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import {withStyles} from '@material-ui/core/styles'

const treeData = [{
    title: 'Hello',
    children: [{
        title: 'Hello',
        children: []
    }, {
        title: 'Hello',
        children: []
    }]
}, {
    title: 'Hello',
    children: [{
        title: 'Hello',
        children: []
    }, {
        title: 'Hello',
        children: [{
            title: 'Hello',
            children: []
        }, {
            title: 'Hello',
            children: []
        }, {
            title: 'Hello',
            children: []
        }]
    }, {
        title: 'Hello',
        children: []
    }]
}, {
    title: 'Hello',
    children: [{
        title: 'Hello',
        children: []
    }, {
        title: 'Hello',
        children: []
    }]
}]

const styles = (theme) => ({
    root: {
        width: '200px'
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    }
})

class MyListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    toggleSub = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const {title, children} = this.props.data
        const haveChildren = children && children.length > 0
        return <List component='div'>
            <ListItem onClick={this.toggleSub} button key={title}>
                <ListItemText primary={title}/>
                {
                    haveChildren
                        ? (this.state.open ? <ExpandLess/> : <ExpandMore/>)
                        : ''
                }
            </ListItem>
            {
                haveChildren
                    ? <Collapse in={this.state.open} timeout='auto'>
                        <List>
                            {children.map(child => <MyListItem data={child}/>)}
                        </List>
                    </Collapse>
                    : ''
            }
        </List>
    }
}

class Hello extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <List>
                {
                    treeData.map(node => <MyListItem data={node}/>)
                }
            </List>
        </div>
    }
}

export default Hello
// export default withStyles(styles)(Hello)
