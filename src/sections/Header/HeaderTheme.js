import { createTheme } from '@mui/material/styles';
// import { makeStyles } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 950,
            lg: 1200,
            xl: 1536,
        },
    },
});

// const useStyles = makeStyles(theme => ({
//     root: {
//         [theme.breakpoints.up('sm')]: {
//             #hungerHurtsBox {
//                 top: 300,
//             }
//         },
//     },
//     #hungerHurtsBox: {
//         [theme.breakpoints.up('sm')]: {
//             top: 300,
//         }
//     }
// }));

// export default { theme, useStyles }
export default theme;