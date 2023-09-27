import React from 'react';
import { Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import './scss/Dashboard.scss'


export default function Header(props) {

    const [anchorEl, setAnchorEl] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenu = () => {
        setAnchorEl(!anchorEl);
    };


    return (
        <div className='header'>
            <div>
                <h2>Countries</h2>
            </div>
            <div className='mobile-header'>
                <MenuIcon onClick={() => handleMenu()} className='menu-icon' />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenu}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={() => { props.handleFilter("All"); handleMenu() }}>All</MenuItem>
                    <MenuItem onClick={() => { props.handleFilter("Asia"); handleMenu() }}>Asia</MenuItem>
                    <MenuItem onClick={() => { props.handleFilter("Europe"); handleMenu() }}>Europe</MenuItem>
                </Menu>
            </div>
            <div className='web-header'>

                <MenuItem onClick={() => { props.handleFilter("All"); handleMenu() }}>All</MenuItem>
                <MenuItem onClick={() => { props.handleFilter("Asia"); handleMenu() }}>Asia</MenuItem>
                <MenuItem onClick={() => { props.handleFilter("Europe"); handleMenu() }}>Europe</MenuItem>
            </div>
        </div>
    )

}