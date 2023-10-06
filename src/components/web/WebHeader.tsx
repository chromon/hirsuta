import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

export default function WebHeader() {

    const pages = ['Why Hirsuta?', 'Products', 'Developers', 'About'];

    return (
        <>
            {/* web logo icon */}
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
            >
                <img src="/vite.svg" alt="logo" />
            </IconButton>

            {/* web title */}
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                    display: { xs: "none", md: "flex" },
                    color: "inherit",
                    textDecoration: "none",
                    flexGrow: 1
                }}
            >
                Hirsuta
            </Typography>

            {/* web page */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        // onClick={}
                        sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold' }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
        </>
    )
}
