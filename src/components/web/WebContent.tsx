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
import axios from 'axios'

export default function WebContent() {

    // input button
    const linkRef = React.useRef<HTMLInputElement>();
    // res box
    const resBox = React.useRef<HTMLDivElement>();

    // res box display style
    const [resStyle, setResStyle] = React.useState({ xs: 'none', md: 'none' });
    // alert display
    const [open, setOpen] = React.useState(false);

    const handleRequest = () => {
        if (linkRef.current) {
            console.log(linkRef.current.value);

            if (true) {

                //  valid URL

                // send request
                axios.get(`http://localhost:5173/api/search/users?q=${linkRef.current.value}`).then(
                    response => {
                        console.log(response.data.items);
                    },
                    reason => {
                        console.log(reason.message);
                    }
                );

                // show result
                setResStyle(() => {
                    return { xs: 'none', md: 'flex' };
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
            {/* web name */}
            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                color: 'secondary.main',
                fontSize: 34,
                fontWeight: 'bold',
                mx: 'auto',
                mt: 20
            }}
            >
                URL Shortener
            </Box>

            {/* web content */}
            <Box sx={{
                width: '50%',
                mx: 'auto'
            }}
            >
                {/* input conmonent */}
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px',
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        my: 5,
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
                            sx={{ mb: 2 }}
                        >
                            Not a valid URL address!
                        </Alert>
                    </Collapse>
                </Box>

                {/* result box */}
                <Box
                    sx={{
                        // display: { xs: 'none', md: 'flex' },
                        display: resStyle,
                        p: 2,
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
