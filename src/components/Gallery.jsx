import { useState, useEffect, useMemo, forwardRef } from 'react'
import {
    Box, Grid, CardContent, Card, CardMedia, Typography, CardActionArea, Divider,
    Table, TableCell, TableHead, TableRow, TableContainer, Paper, TableBody, 
    Stack, TextField, InputLabel, MenuItem, FormControl, Select, Chip, OutlinedInput, Modal
} from '@mui/material'
import { intentOptions, genreOptions } from '../helper';
import { CardChip, CharacterChip } from './Helpers'
import DataStories from '../../public/stories.json'
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const SearchHeight = {
    sm: 2,
    md: 2,
    lg: 2,
    xl: 2,
};

const toyData = [...Array(120).keys()]

//TODO: handle the route with locations
function Gallery() {
    const [filterGenres, setFilterGenres] = useState([])
    const [filterIntents, setFilterIntents] = useState([])
    const [keyword, setKeyword] = useState('')
    const [selectedId, setSelectedId] = useState(null) 
    const [open, setOpen] = useState(false)

    const data = useMemo(() => {
        if (!DataStories) return [];
        let result = DataStories
        if (filterGenres.length != 0) {
            result = result.filter(each => filterGenres.includes(each.genres))
        }
        if (filterIntents.length != 0) {
            result = result.filter(each => filterIntents.includes(each.intent))
        }
        if (keyword.length != 0) {
            result = result.filter(each => each.title.toLowerCase().includes(keyword.toLowerCase()))
        }
        return result
    }, [DataStories, filterGenres, filterIntents, keyword])

    const handleFilterGenres = (event, type) => {
        if (type === 'add') {
            setFilterGenres(event.target.value)
            return;
        }
        let update = filterGenres.filter(d => d !== event)
        setFilterGenres(update)
    }

    const handleFilterIntents = (event, type) => {
        if (type === 'add') {
            setFilterIntents(event.target.value)
            return;
        }
        let update = filterIntents.filter(d => d !== event)
        setFilterIntents(update)
    }

    const handleKeyword = (event) => {
        setTimeout(() => {
            setKeyword(event.target.value)
        }, 500);
    }

    const handleSelect = (id) => {
        setSelectedId(id)
        setOpen(true)
    }
    const handleClose = () => (setOpen(false))

    return (
        <Grid container direction='column' sx={{width: '100%', height: '100%', flexWrap: 'nowrap'}}>
            <Grid item className='grid-container' sm={SearchHeight.sm} md={SearchHeight.md} lg={SearchHeight.lg} xl={SearchHeight.xl}>
                <SearchBar genres={filterGenres} intents={filterIntents} keyword={keyword}
                    handleGenres={handleFilterGenres} handleIntents={handleFilterIntents} handleKeyword={handleKeyword} />
            </Grid>
            <Grid item sm={12 - SearchHeight.sm} md={12 - SearchHeight.md} lg={12 - SearchHeight.lg} xl={12 - SearchHeight.xl} className='grid-container'>
                <AnimatePresence>
                    <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: { lg: '1fr 1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr 1fr' }, gap: 3, overflow: true }}>
                        {data.map((each, idx) => (
                            <StoryCard key={idx} data={each} handleSelect={handleSelect} />
                        ))}
                    </Box>
                </AnimatePresence>  
                <AnimatePresence>
                    {(selectedId !== null) && (
                        <Modal open={open} onClose={handleClose} aria-labelledby="story-title" aria-describedby="story-source">
                            <StoryContent story={data.find(each => each.id == selectedId)} />
                        </Modal>
                    )}
                </AnimatePresence>
            </Grid>
        </Grid> 
    )
}

function SearchBar({genres, intents, keyword, handleGenres, handleIntents, handleKeyword}) {
    return (
        <Stack direction='row' spacing={3} sx={{ display: 'block' }}>
            <FormControl>
                <InputLabel id="genres-label" sx={{mt: 0}}>Genres</InputLabel>
                <Select labelId='genres-label' id='genres-select' multiple value={genres}
                    onChange={(event) => handleGenres(event, 'add')} size='small' sx={{width: 350}}
                    input={<OutlinedInput id='genres-multiple-chip' label="Genres" />}
                    renderValue={(selected) => (<Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                        {selected.map((each) => (<Chip key={each} label={each} size='small'
                            onMouseDown={(event) => {event.stopPropagation();}}
                            onDelete={() => {handleGenres(each, 'delete')}}
                        />))}</Box>
                )}>
                    {genreOptions.map((genre, idx) => (
                        <MenuItem key={idx} value={genre}>{genre}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="intent-label" sx={{mt: 0}}>Intents</InputLabel>
                <Select labelId='intent-label' id='intent-select' multiple value={intents}
                    onChange={(event) => handleIntents(event, 'add')} size='small' sx={{width: 350}}
                    input={<OutlinedInput id='intent-multiple-chip' label="Intents" />}
                    renderValue={(selected) => (<Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                        {selected.map((each) => (<Chip key={each} label={each} size='small'
                            onMouseDown={(event) => {event.stopPropagation();}}
                            onDelete={() => {handleIntents(each, 'delete')}} />))
                        }</Box>
                )}>
                    {intentOptions.map((intent) => (
                        <MenuItem key={intent} value={intent}>{intent}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField label="Search Title" id='keyword-search' size="small"
                defaultValue={keyword} onChange={handleKeyword} />
        </Stack>
    )
}

function StoryCard({ data, handleSelect }) {
    return (
        <Card component={motion.div} layout key={data.id} initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0, transition: { duration: 0.15 } }} transition={{ delay: 0.05 * data.id }}>
            <CardActionArea component={Link} to={{ hash: `#${data.id}` }}
                sx={{ height: '100%', textAlign: 'center' }} onClick={() => { handleSelect(data.id) }}>
                <CardMedia component='img' height='200' image={data.thumbnail} />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {data.title}
                    </Typography>
                    <Stack direction='row' spacing={1} sx={{ display: 'block', mb: 2 }}>
                        <Typography gutterBottom variant="body2">
                            {`${data.source} (${data.year})`}
                        </Typography>
                    </Stack>
                    <Stack direction='row' spacing={2} sx={{display: 'block', mb: 2}} >
                        <CardChip info={data.genres} />
                        <CardChip info={data.intent} />
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

const StoryContent = forwardRef(function StoryContent(props, ref) {
    const { story } = props;

    function ElementTable() {

        function TableEntry({row, idx, chipContent=''}) {
            return (
                <TableRow key={idx}>
                    <TableCell component="th" scope="row">{row.attribute}</TableCell>
                    <TableCell align='justify'>
                        {row.value}
                        {(chipContent.length !== 0) ? <CardChip info={chipContent} /> : <></>}
                    </TableCell>
                </TableRow>
            )
        }

        return (
            <TableContainer component={Paper} sx={{ width: '30vw' }} variant="outlined" elevation={0}>
                <Table height='100%'>
                    <TableTitle info={'Element'} />
                    <TableBody>
                    <TableRow key={0}>
                            <TableCell component="th" scope="row">Through-line</TableCell>
                            <TableCell align='justify'>{( story.throughLine ) ? story.primaryConcept : 'None'}</TableCell>
                        </TableRow>
                        <TableEntry idx={1} row={{ attribute: 'Sub-concepts', value: story.subConcepts }} />
                        <TableEntry idx={2} row={{ attribute: 'Primary Plot Type', value: '' }} chipContent={story.plotType} />
                        <TableEntry idx={3} row={{ attribute: 'Primary Intent', value: '' }} chipContent={story.intent} />
                        <TableEntry idx={4} row={{ attribute: 'Genre', value: '' }} chipContent={story.genres}/>
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    function CharacterTable() {
        return (
            <TableContainer component={Paper} sx={{width: '50vw'}} variant="outlined" elevation={0}>
                <Table height='100%'>
                    <TableTitle info={'Character and Their Relationships'} />
                    <TableBody>
                        <TableRow key={0}>
                            <TableCell component="th" scope="row"><CharacterChip character='MC' size='large'/></TableCell>
                            <TableCell align='justify' spacing={3}>
                                {story.MC}
                                <CardChip info={(story.MCVisible) ? 'Visible' : 'Invisible'} sx={{ ml: 1 }} />
                                <CardChip info={(story.MCConsistent) ? 'Consistent' : 'Inconsistent'} sx={{ ml: 1 }} />
                            </TableCell>
                        </TableRow>
                        <TableRow key={1}>
                            <TableCell component="th" scope="row">ICC</TableCell>
                            <TableCell align='justify' spacing={3}>
                                {(story.ICC !==  null) ? story.ICC : 'N/A' }
                                {story.ICCDoA && <CardChip info={story.ICCDoA} sx={{ ml: 1 }} />}
                            </TableCell>
                        </TableRow>
                        <TableRow key={2}>
                            <TableCell component="th" scope="row"><CharacterChip character='AC' size='large'/></TableCell>
                            <TableCell align='justify' spacing={3}>
                                {(story.AC !==  null) ? story.AC : 'N/A' }
                                {story.ACForm && <CardChip info={story.ACForm} sx={{ ml: 1 }} />}
                            </TableCell>
                        </TableRow>
                        <TableRow key={3}>
                            <TableCell component="th" scope="row">Conflict</TableCell>
                            <TableCell align='justify' spacing={3}>
                                {(story.conflict !== null) ? story.conflict : 'None'}
                                {story.conflict && <CardChip info={story.conflictType} sx={{ ml: 1 }} />}
                            </TableCell>
                        </TableRow>
                        <TableRow key={4}>
                            <TableCell component="th" scope="row"><CharacterChip character='SC' size='large'/></TableCell>
                            <TableCell align='justify' spacing={3}>
                                {(story.SC !==  null) ? story.SC : 'N/A' }
                                {story.SCVisible && <CardChip info={(story.SCVisible) ? 'Visible' : 'Invisible'} sx={{ ml: 1 }} />}
                                {story.SCForm && <CardChip info={story.SCForm} sx={{ ml: 1 }} />}
                            </TableCell>
                        </TableRow>
                        <TableRow key={5}>
                            <TableCell component="th" scope="row">Resolution</TableCell>
                            <TableCell align='justify' spacing={3}>
                                <CardChip info={(story.resolution) ? 'Introduced' : 'Not introduced'} />
                            </TableCell>
                        </TableRow>             
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    function TableTitle({ info}) {
        return (
            <TableHead>
                <TableRow>
                    <TableCell >{info}</TableCell>
                    <TableCell align='justify'>Description</TableCell>
                </TableRow>
            </TableHead>
        )
    }

    return (
        <Card ref={ref} component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            sx={{ position: 'absolute', top: '50%',left: '50%',transform: 'translate(-50%, -50%)', width: '90%', maxHeight: '90vh', overflow: 'scroll', textAlign: 'center'}} >
            <motion.img key={story.thumbnail} src={story.thumbnail}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ height: '400px', objectFit: "contain", }} />
            <CardContent>
                <Stack spacing={2} sx={{margin: '0 auto', justifyContent: 'center'}}>
                    <Typography id={`story-title`} gutterBottom variant="h4" sx={{textAlign: 'center'}}>
                        {story.title}
                    </Typography>
                    <Typography id={`story-source`} gutterBottom variant="h5" component={Link} target='_blank' to={story.url} sx={{textAlign: 'center', mb: 2}}>
                    {`${story.source} (${story.year})`}
                    </Typography>
                </Stack>
                <Stack direction='row' spacing={2} sx={{mt: 4, mb: 2 , justifyContent: 'center'}}>
                    <ElementTable />
                    <CharacterTable />
                </Stack>
            </CardContent>
        </Card>
    )
})

export default Gallery