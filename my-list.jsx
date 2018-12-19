import React, {Component} from 'react'

import List from '@material-ui/core/List'
import treeData from './tree-data'
import MyListItem from './my-list-item.jsx'
import withStyles from '@material-ui/core/styles/withStyles';

class MyList extends Component {
  render() {
    return <div className='MyList'>
      <List>
        {
          treeData.map((node, index) =>
              <MyListItem data={node} key={index}/>
          )
        }
      </List>
    </div>
  }
}

export default withStyles({}, {name: 'aaa'})(MyList);
