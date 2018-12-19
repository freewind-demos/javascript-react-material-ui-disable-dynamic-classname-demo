import React, {Component} from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'

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
    const {title, children} = this.props.data;
    const haveChildren = children && children.length > 0;
    return <List component='div' className='MyListItem'>
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
                {children.map((child, index) => <MyListItem data={child} key={index}/>)}
              </List>
            </Collapse>
            : ''
      }
    </List>
  }
}

export default MyListItem;
