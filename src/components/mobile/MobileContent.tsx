import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import DirectionsIcon from '@mui/icons-material/Directions';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function MobileContent() {

    const linkRef = React.useRef<HTMLInputElement>();
    const resBox = React.useRef<HTMLDivElement>();

    const [resStyle, setResStyle] = React.useState({ xs: 'none', md: 'none' });
    // alert display
    const [open, setOpen] = React.useState(false);

    const handleRequest = () => {
        if (linkRef.current) {
            console.log(linkRef.current.value);

            if (true) {

                //  valid URL

                // show result
                setResStyle(() => {
                    return { xs: 'flex', md: 'none' };
                });

            } else {

                //  invalid URL

                // show alert
                setOpen(true);

            }
        }
    }

    return (
        <>
            {/* mobile name */}
            <Box sx={{
                display: { xs: 'flex', md: 'none' },
                color: 'secondary.main',
                fontSize: 34,
                fontWeight: 'bold',
                mx: 'auto',
                mt: 10
            }}
            >
                URL Shortener
            </Box>

            {/* mobile content */}
            <Box sx={{
                width: '100%',
                mx: 'auto'
            }}
            >
                {/* input  component */}
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px',
                        display: { xs: 'flex', md: 'none' },
                        alignItems: 'center',
                        my: 5,
                        mx: 3,
                        boxShadow: 0,
                        border: 1,
                        borderColor: 'grey.500'
                    }}
                >
                    {/* input button */}
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Enter link here"
                        inputProps={{ 'aria-label': 'Enter link here' }}
                        inputRef={linkRef}
                    />
                    <IconButton
                        color="secondary"
                        sx={{ p: '10px' }}
                        aria-label="directions"
                        onClick={handleRequest}
                    >
                        <DirectionsIcon />
                    </IconButton>
                </Paper>

                {/* alert box */}
                <Box>
                    <Collapse in={open}>
                        <Alert
                            severity="error"
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{
                                mx: 3,
                            }}
                        >
                            Not a valid URL address!
                        </Alert>
                    </Collapse>
                </Box>

                {/* result box */}
                <Box
                    sx={{
                        // display: { xs: 'flex', md: 'none' },
                        display: resStyle,
                        p: 2,
                        m: 2,
                        flexDirection: 'column',
                    }}
                    ref={resBox}
                >
                    <Box sx={{ color: 'text.secondary' }}>Source: </Box>
                    <Typography
                        variant="h6"
                        noWrap
                    >
                        www.zhihu.com/follow
                    </Typography>

                    <Box sx={{ color: 'text.secondary', mt: 3 }}>Shortened: </Box>
                    <Typography
                        variant="h6"
                        noWrap
                    >
                        rb.gy/86tn7
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="copy">
                            <CopyAllIcon />
                        </IconButton>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
