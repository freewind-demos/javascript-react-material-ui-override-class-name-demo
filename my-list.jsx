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
        width: '400px'
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    }
})

class MyListItem extends Component {
    state = {
        open: false
    }

    toggleSub = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const {classes} = this.props
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
                        <List className={classes.nested}>
                            {children.map((child, index) => <MyListItem data={child} classes={classes} key={index}/>)}
                        </List>
                    </Collapse>
                    : ''
            }
        </List>
    }
}

class MyList extends Component {

    render() {
        const {classes} = this.props
        return <div className={classes.root}>
            <List>
                {
                    treeData.map((node, index) => <MyListItem data={node} classes={classes} key={index}/>)
                }
            </List>
        </div>
    }
}

// export default Hello
export default withStyles(styles)(MyList)
