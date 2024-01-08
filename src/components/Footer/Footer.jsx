import { Facebook, Instagram, Telegram, Twitter } from '@mui/icons-material'
import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box
            component={"footer"}
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                p: 6,
            }}
        >
            <div>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4} >
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Biz haqimizda
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            We are XYZ company, dedicated to providing the best service to our
                            customers.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Bog'lanish
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Samarqand, O'zbekiston
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: info@example.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Telefon: +998 (99) 111-1111
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Typography variant="h6" color="text.primary" gutterBottom>Ijtimoiy tarmoqlar
                        </Typography>
                        <Link href="https://www.facebook.com/" color="inherit">
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"
                            color="inherit"
                            sx={{ pl: 1, pr: 1 }}
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://www.twitter.com/" color="inherit">
                            <Twitter />
                        </Link>
                        <Link href="https://www.telegram.org/" color="inherit">
                            <Telegram />
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {"Copyright © "}
                        <Link color="inherit" href="https://anodra.uz/" target="_blank" >
                            Barcha huquqlar himoyalangan
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </div>
        </Box>
    )
}

export default Footer