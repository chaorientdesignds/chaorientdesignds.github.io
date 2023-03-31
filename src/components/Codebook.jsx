import { Grid, Table, TableCell, TableHead, TableRow, TableContainer, Paper, TableBody, Chip, Stack, Typography } from '@mui/material'
import Data from '../../public/codebook.json'
import { Link } from 'react-router-dom';
import { CharacterChip } from './Helpers';

function Codebook() {
    return (
        <Grid item sx={{ width: '100%', height: '100%' }} className='grid-container'>
            <CodeTable />
        </Grid> 
    )
}
//NOTE: customize the column width in this case
function CodeTable() {

    function TableTitle() {
        return (
            <TableHead>
                <TableRow> 
                    <TableCell align='center' style={{width: '25%'}}>Attribute</TableCell>
                    <TableCell align='center' style={{width: '40%'}}>Description</TableCell>
                    <TableCell align='center' style={{width: '10%'}}>Type</TableCell>
                    <TableCell align='center' style={{width: '25%'}}>Note</TableCell>
                </TableRow>
            </TableHead>
        )
    }

    /* <Typography noWrap variant="inherit" component={Link} target='_blank' to={citation.link}>{ " " + citation.insert}</Typography>
*/
    function handleDescription(description, citation) {
        let [firstHalf, secondHalf] = citation.content.split("INSERT")
        return (
            <>
                {description.concat(" ", firstHalf)}
                <a href={citation.link}>{citation.insert}</a>
                {secondHalf}
            </>
        )
    }

    const characters = ["Main Character (MC)", "Antagonist (AC/AF)", "Support Characters (SC)"]
    const mapping = {
        "Main Character (MC)": 'MC',
        "Antagonist (AC/AF)": 'AC',
        "Support Characters (SC)": 'SC',
    }

    function TableEntry({row, idx}) {
        return (
            <TableRow key={idx}>
                <TableCell component="th" scope="row" align="center">{(characters.includes(row.attribute) ? <CharacterChip character={mapping[row.attribute]} size='largecomm'/> : row.attribute)}</TableCell>
                <TableCell align='left'>{
                    (row.citation.content.length == 0) ? row.description : handleDescription(row.description, row.citation)
                }</TableCell>
                <TableCell align='center'>{row.type}</TableCell>
                <TableCell align='left'>{(row.note.length == 0) ? "" :
                    (<Stack direction='column' spacing={1} sx={{ margin: '0 auto', maxWidth: '15vw'}}>
                        {row.note.map((each, idx) => (<Chip sx={{height:"100%"}}
                            size='small' label={<Typography sx={{whiteSpace: 'normal', textAnchor: 'center', textAlign: 'center'}} variant="inherit">{each}</Typography>} key={idx} />))}
                    </Stack>)
                }</TableCell>
            </TableRow>
        )
    }

    return (
        <TableContainer component={Paper} sx={{width: '85vw', margin: '0 auto'}}>
            <Table aria-label="caption table" sx={{tableLayout: 'fixed'}}>
                <caption>This is the codebook used in the manuscript</caption>
                <TableTitle />
                <TableBody>
                    {Data.map((entry, idx) => (<TableEntry idx={idx} row={entry} key={idx} />))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Codebook