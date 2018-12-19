import React, {Component} from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import {withStyles} from '@material-ui/core/styles'

const styles = (theme) => ({
  root: {
    border: '1px solid blue',
    margin: 10,
  }
});

class MyListItem extends Component {
  state = {
    open: false
  };

  toggleSub = () => {
    this.setState({
      open: !this.state.open
    })
  };

  render() {
    const {classes} = this.props;
    const {title, children} = this.props.data;
    const haveChildren = children && children.length > 0;
    return <List component='div' classes={{root: classes.root}}>
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
                {children.map((child, index) => <MyListItem data={child} classes={classes} key={index}/>)}
              </List>
            </Collapse>
            : ''
      }
    </List>
  }
}

export default withStyles(styles)(MyListItem)
