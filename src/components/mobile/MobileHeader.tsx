import React from "react";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const pages = ['Why Hirsuta?', 'Products', 'Developers', 'About'];

export default function MobileHeader() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            {/* mobile logo icon */}
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            >
                <img src="/vite.svg" alt="logo" />
            </IconButton>

            {/* mobile title */}
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                    display: { xs: "flex", md: "none" },
                    color: "inherit",
                    textDecoration: "none",
                    flexGrow: 1
                }}
            >
                Hirsuta
            </Typography>

            {/* mobile menu */}
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left"
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: "block", md: "none" }
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    )
}
