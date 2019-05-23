import React from 'react'
import './App.css'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import Mic from '@material-ui/icons/Mic'
import SettingsIcon from '@material-ui/icons/Settings'

const App: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className='App'>
      <SwipeableDrawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <PhotoCamera />
            </ListItemIcon>
            <ListItemText>Photo</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Mic />
            </ListItemIcon>
            <ListItemText>Record</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </div>
  )
}

export default App
