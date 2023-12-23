import React from 'react';
import { Box, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, IconButton } from '@mui/material';
import { MdForwardToInbox } from "react-icons/md";
import Logo from "../../assets/images/logo-web.png";
import { GrClose } from "react-icons/gr";
const CustomDrawer = ({ open, onClose }) => {

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box
                sx={{
                    width: 250, height: "100vh", backgroundColor: '#d9d9e3', color: "#  ",
                }}
                role="presentation"
            >
                {/* Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, backgroundColor: "#fff", color: '#000' }}>
                    <div className='d-flex align-items-center'>
                        <img src={Logo} alt="Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                        <Typography variant="h6">EadgHome</Typography>
                    </div>
                    <IconButton color="inherit" onClick={onClose} edge="end">
                        <GrClose />
                    </IconButton>
                </Box>

                {/* Drawer Content */}
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{index % 2 === 0 ? <MdForwardToInbox /> : <MdForwardToInbox />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{index % 2 === 0 ? <MdForwardToInbox /> : <MdForwardToInbox />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default CustomDrawer;
