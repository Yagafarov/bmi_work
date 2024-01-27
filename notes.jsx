<Grid maxWidth={{ md: '400px' }} mb={3}>
    <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', marginTop: '1rem' }}
    >
        <InputBase
            size='small'
            sx={{ ml: 1, flex: 1 }}
            placeholder="Kurslarni qidirish"
            inputProps={{ 'aria-label': 'search google maps' }}
        />

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <Search />
        </IconButton>
    </Paper>
</Grid>