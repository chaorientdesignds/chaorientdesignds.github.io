import { Typography, Chip } from "@mui/material";
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';

export function CharacterChip({character, size='small'}) {
    return (
        <>
            {(character == 'AC') ? <Chip icon={<PersonIcon />} label='Antagonist' color='error' variant='outlined' size={size} />
                : (character == 'SC') ? <Chip icon={<PersonIcon />} label='Support Character' color='secondary' variant='outlined' size={size} />
                    : <Chip icon={<PersonIcon />} label='Main Character' color='warning' variant='outlined' size={size} />}
        </>
    )
}

export function CardChip({ info, size='small', sx={} }) {
    return (
        <Chip label={info} variant='primary' size={size} sx={sx} />
    )
}

export function ContentTitle({ children, hashtag, sx }) {

    return (
        <Typography id={`title-${hashtag}`} variant="h4" gutterBottom sx={{ textDecoration: 'none', ...sx}}
            component={Link} to={{ hash: `#${hashtag}` }}>
            {children}
        </Typography>
    )
}

export function ContentText({children}){
    return (
        <Typography variant="body1" component="div" gutterBottom sx={{mb: 5, mt: 1}}>
            {children}
        </Typography>
    )
}