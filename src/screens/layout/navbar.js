import * as React from 'react';
import { Appbar,Menu } from 'react-native-paper';

const Navbar = (props) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return(
    <Appbar.Header>
        <Appbar.BackAction  
        onPress={() => props.navigation.navigate('Login')} />
       <Appbar.Content title={props.title} />
          <Menu
          visible={visible}
          onDismiss={closeMenu}
        
          anchor={
            <Appbar.Action icon="menu" color="black" onPress={openMenu}  accessible={true}
            accessibilityLabel="Menu de opciones"/>
          }>
          <Menu.Item icon = "account-arrow-right-outline" onPress={() => {props.navigation.navigate('Login'); closeMenu()}} title="Login"/>
          <Menu.Item icon = "alert-decagram" onPress={() => {props.navigation.navigate('Register'); closeMenu()}} title="Register"/>
          <Menu.Item icon = "account-tie-voice" onPress={() => {props.navigation.navigate('Dashboard'); closeMenu()}} title="Dashboard" />
        </Menu>
    </Appbar.Header>
    )
};

export default Navbar;