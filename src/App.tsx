import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { CssBaseline } from '@mui/material';
import WebHeader from './components/web/WebHeader';
import MobileHeader from './components/mobile/MobileHeader';
import WebContent from './components/web/WebContent';
import MobileContent from './components/mobile/MobileContent';

export default function App() {

    return (
        <>
            <Box sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'flex' },
                flexDirection: 'column'
            }}>
                <CssBaseline />
                <AppBar position="static" sx={{
                    bgcolor: 'secondary.main',
                    fontWeight: 'bold',
                    boxShadow: 0
                }}>
                    <Toolbar>
                        <WebHeader />
                        <MobileHeader />
                    </Toolbar>
                </AppBar>

                <WebContent />
                <MobileContent />
            </Box>
        </>
    );
}