import { useState, useRef, createRef, useEffect } from 'react'
import { Box, Grid, List, ListItem, ListItemButton, ListItemText, Divider, Typography, Stack, ListSubheader, ListItemIcon, Chip} from '@mui/material'
import { ContentText, ContentTitle, CharacterChip } from './Helpers';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import { genreOptions, ICCOptions, intentOptions, plotOptions } from '../helper';

const NavWidth = {
    sm: 3,
    md: 3,
    lg: 2.5,
    xl: 2.5,
};

const navItemVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.9,
            ease: 'easeIn',
        },
    },
    exit: {
        opacity: 0,
    }
}

//TODO: have a guide based on the current location we're at??
function Overview() {
    const { pathname, hash, key } = useLocation();

    //source: https://stackoverflow.com/questions/40280369/use-anchors-with-react-router
    useEffect(() => {
        if (hash === '') { // if not a hash link, scroll to top
            window.scrollTo(0, 0);
            return;
        }
        setTimeout(() => {
            let id = `title-${hash.replace('#', '')}`;
            let element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }, 300);
    }, [hash, key]);

    return (
        <Grid component={motion.div} initial={{ opacity: 0 }} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ delay: 0.1 }}
            container direction='row' sx={{ width: '100%', height: '100%' }}>
            <Grid item sm={NavWidth.sm} md={NavWidth.md} lg={NavWidth.lg} xl={NavWidth.xl}
                sx={{ borderRight: '1px solid lightgray', pt: '1rem', pb: '1rem', pl: '1rem'}}>
                <NavBar />
            </Grid>
            <Grid item sm={12 - NavWidth.sm} md={12 - NavWidth.md} lg={12 - NavWidth.lg} xl={12 - NavWidth.xl}
                className='grid-container' sx={{overflow: 'auto'}}> 
                <OverviewContent />
            </Grid>
        </Grid> 
    )
}

function OverviewContent() {
    return (
        <Box sx={{ textAlign: 'left', pt: '1rem' }}>
            <ContentText>
                When telling a data story, an author has an intention they seek to convey to an audience.
                This intention can be of <Link to={{hash: 'intent'}}>many forms</Link>. <br />
                In addition to expressing their intention, <Typography variant='inline' sx={{fontWeight: 'bold'}}>the story plot must balance being consumable and enjoyable while preserving scientific integrity. </Typography> <br />
                In data stories, numerous methods have been identified for constructing and presenting a plot.
                However, there is an opportunity to expand how we think and create the visual elements that present the story. 
                <Typography variant='inline' sx={{ fontWeight: 'bold' }}> Stories are brought to life by characters</Typography>; often they are what make a story captivating, enjoyable, memorable, and facilitate following the plot till the end. <br />
                Through the analysis of 160 existing data stories, we systematically investigate and identify distinguishable features of characters in data stories, and we illustrate how they feed into the broader concept of “character-oriented
                design". <br />
                We identify the roles and visual representations data characters assume as well as the types of relationships these roles have
                with one another. 
                We identify characteristics of <Link to={{hash: 'antagonist'}}>antagonists</Link> in data stories. 
                We find the need for having <Link to={{hash: 'icc'}}>an identifiable central character</Link> for the audience to latch on to and follow along and the representations they should assume. 
                We then illustrate “character-oriented design” by showing how to model data characters with common data story plots. <br />
                With this work, we present a design space for data characters derived from our analysis and offer our extension on the data storytelling process using character-oriented design.
                <br /><br />
                This website provides <Link to={{pathname: '/gallery'}}>the 160 data stories</Link> we have visited and <Link to={{pathname: '/codebook'}}>the codebook</Link> used for our analysis.
            </ContentText>
            <ContentTitle hastag='character'>What is a Character?</ContentTitle>
            <ContentText>
                A data character inherits the properties of <Typography variant='inline' sx={{fontWeight: 'bold'}}>a data-driven visual element</Typography>, as it would likely contain a set of attributes, methods, and behaviors that relate to explaining the concept.
                A character is a lens into a concept. <br />
                Initially, a character represents an idea in a world full of misconceptions, misunderstandings, and uncertainty.
                A character’s role in the story is often to explore its relationship to this perceived identity and <Link to={{hash: 'resolution'}}>attempt to overcome</Link> these misconceptions and assert its place. <br />
                Contextualized for communicating scientific information, a data character would be borne from data or namely analytics. <br />
                A character’s actions and interactions are driven by its desire to reach a personal goal.
                Each desire is determined by the author by factoring in the author’s intent, the core concept, and the story pieces.
                Thus, at the center of a character and the first requirement to make a data character is a concept. <br />
                Depending on the complexity of <Link to={{ hash: 'through-line' }}>the core concept</Link> we often require multiple characters to best convey it.
                This is due to concepts having <Link to={{hash: 'sub-concepts'}}>many dimensions</Link> that should be viewed and expressed with
                varying lenses. <br /><br />
                The concept we prioritize and give the main lens would be the basis of a <Link to={{hash: 'main-character'}} style={{color: '#ff9100'}}>main character</Link>.
                Whereas collections of smaller aspects that exemplify and illustrate concepts as a collection would result in <Link to={{hash: 'support-character'}} style={{color: '#2e7d32'}}>supporting characters</Link>.
                Aspects from the data that help demonstrate the existence via contradiction can lead to identifying potential <Link to={{hash: 'antagonist'}} style={{color: '#b71c1c'}}>antagonists</Link>.
            </ContentText>
            <Stack direction='row' spacing={2} sx={{alignItems: 'center'}}>
                <ContentTitle hashtag='main-character' sx={{margin: 0}}>Main Character</ContentTitle>
                <CharacterChip character='MC' />
            </Stack>
            <ContentText>
                Our data characters core is a concept, and although concepts are often ideas with no tangible, let alone visual, presence this can not be the case for our main character. <br />
                <Typography variant='inline' sx={{color: '#ff9100', fontWeight: 'bold'}}> The main character (MC)</Typography><Typography variant='inline' sx={{fontWeight: 'bold'}}> has to be visually present in the storytelling</Typography>.
                Furthermore, the main character should be central, meaning they are core to the story and the audience can rely on the main character as a device to make sense of and contextualize what is transpiring. <br />
                Stories can have many characters but there should be <Typography variant='inline' sx={{ fontWeight: 'bold' }}>only one main character</Typography>, as they will be the audience's lens into the story. <br />
                Note that under these requirements, it remains possible to switch different characters to be the main character, hence the necessity of the following character, ICC. 
            </ContentText>
            <ContentTitle hashtag='icc'>Identifiable Central Character</ContentTitle>
            <ContentText>
                Since data storytelling is a visual medium, we require a character to be visually identifiable. <br />
                The audience should be able to easily identify which visual element is central to the story, where this element should navigate the audience throughout the entire story plot. <br />
                We refer to this as an identifiable central character (ICC), which can range from abstraction to a human. <br />
                There are 7 types of ICC on this spectrum: {ICCOptions.map((each, idx) => (<Chip key={idx} label={each} size='small' sx={{mr: 1,}}></Chip>))}
            </ContentText>
            <Stack direction='row' spacing={2} sx={{alignItems: 'center'}}>
                <ContentTitle hashtag='antagonist' sx={{ margin: 0 }}>Antagonist</ContentTitle>
                <CharacterChip character='AC' />
            </Stack>
            <ContentText>
                <Typography variant='inline' sx={{color: '#b71c1c' }}>An antagnonist</Typography> challenges the main character throughout the story by introducing the conflict. <br />
                An antagnonist can take two forms: <Chip label='character' size='small'/> or <Chip label='force' size='small'/>. 
                The difference between an antagonist force and antagonist character is that one is an ethereal presence that exists but is not seen directly, whereas the other is visually present. <br />
                We found that when the antagonist appears as a visual character in data stories it is often the main character driving the story forward. <br />
                Contextualized for data storytelling, the antagonist force needs to be present to push the main character to the story goal. <br />
                Further, the antagnonist force can be either <Chip label='misconception' size='small' /> or <Chip label='misunderstanding' size='small' />. <br />
                Misconception is mistaken belief, e.g., it is a misconception to hold the belief that the earth is flat.
                Misunderstanding suggests the difference in the interpretations of a concept, e.g., thinking that a rainbow color map implies weather data.
                <br /><br />
                From our analysis, we find the antagonist in data stories often is a force.
                Furthermore, we find we identify three forms that these forces assume that generate these misconceptions and misunderstandings; 
                <Typography variant='inline' sx={{fontWeight: 'bold'}}> lack of value</Typography>, <Typography variant='inline' sx={{fontWeight: 'bold'}}>lack of context</Typography>, and <Typography variant='inline' sx={{fontWeight: 'bold'}}>lack of trust</Typography>.
            </ContentText>
            <ContentTitle hashtag='conflict'>Conflict</ContentTitle>
            <ContentText> 
                Conflict contextualizes for more science-based works, akin to debate. <br />
                The difference between an explanation and a story is conflict. <Typography variant='inline' sx={{fontWeight: 'bold'}}>Conflict sets up the motivation of the story and the expectations of the audience</Typography>. <br />
                When the story starts, the MC begins in the “ordinary world” or an expected state, which provides the relevant context and understanding to our audience of what we are observing.
                The introduction of the character must get across the relevant context, and background information as well as decoding information to relate the visual element to what they mean. <br />
                Conflict introduces doubts, the uncertainty, and challenges the character in its purpose. <br />
                Conflict assumes two forms, <Chip label='internal' size='small' /> and <Chip label='external' size='small' /> conflict. <br />
                Internal conflict is when a character struggles with their opposing desires or belief, driving their development as a character. 
                In data stories, we found this type of conflict often occurred in stories explaining the "black box" of machine learning models or uncertainty within the data.  <br />
                External conflict is when a character is against something beyond their control, creating tension as they try to reach their goals. 
                A majority of the stories we reviewed tended to contain external conflict.
            </ContentText>
            <ContentTitle hashtag='resolution'>Resolution</ContentTitle>
            <ContentText>
                Whether the conflict is addressed visually, e.g., the story provides context when the conflict is associated with lack of context, or misconsption/misunderstanding is eventually removed when the antagnonist is force.
            </ContentText>
            <Stack direction='row' spacing={2} sx={{alignItems: 'center'}}>
                <ContentTitle hashtag='support-character' sx={{margin: 0}}>Supporting Characters</ContentTitle>
                <CharacterChip character='SC'/>
            </Stack>
            <ContentText>
                <Typography variant='inline' sx={{color: '#2e7d32', }}>A supporting character (SC)</Typography> brings out dimensions of a character and helps push them towards their desire.
                Supporting characters must have some relationship with either the <Typography variant='inline' sx={{ color: '#ff9100' }}>main character</Typography> or the  <Typography variant='inline' sx={{ color: '#b71c1c' }}>antagonist</Typography>, but do not require a relationship among themselves. <br />
                For the sake of illustration, it is recommended to not have a supporting character do both, however, it is possible. <br />
                The SC also need not actively work towards getting the MC to its desire but it should never intentionally impede the main character. 
                We found SC’s in data stories are often relied on to provide missing context, such as <Chip label='extra information' size='small'/> and <Chip label='alternative representations' size='small'/> of the data.
            </ContentText>
            <ContentTitle hashtag='relationship'>Relationships among Characters</ContentTitle>
            <ContentText sx={{textAlign: 'center'}}>
                <img src='https://i.imgur.com/7iGJuWk.png' style={{height: '20rem', objectFit: "contain"}}></img>
            </ContentText>
            <ContentTitle hashtag='through-line'>Through-line</ContentTitle>
            <ContentText>
                A single theme that runs from the start to the end of a story. It interweaves the roles of the characters with the plot. <br />
                When contextualized for data storytelling, <Typography variant='inline' sx={{ fontWeight: 'bold' }}>it is a primary concept that all the sub-concepts relate to</Typography>, driving the story and motivating the characters to take actions. <br />
                If we know our through-line, we can understand how our characters relate to the plot (see below).
            </ContentText>
            <ContentTitle hashtag='sub-concepts'>Sub-concepts</ContentTitle>
            <ContentText>
                The distinguishable aspects that are relevant to the primary concept. They become desires for data characters. <br />
                For example, when the through-line is COVID-19, the sub-concepts can include mortality, infection rate, and demographics. <br />
                Our characters can be: a line chart displaying the infection rate, person icons to denote the number of deaths, or a grouped bar chart for demographics of infected patients. <br />
                While the choice of the MC depends on how the author composes the story, an option of ICC could be a consistent color encoding for people tested positive for covid (e.g., line, icon, and bar colors).
            </ContentText>
            <ContentTitle hashtag='intent'>Intent</ContentTitle>
            <ContentText>
                The primary intent of an author when composing a story.
                Identified by <Link target='_blank' to={"https://www.tandfonline.com/doi/abs/10.1080/21670811.2017.1403291"} >[Ojo and Heravi, 2018]</Link>. <br />
                There are 6 types of intents: {intentOptions.map((each, idx) => (<Chip key={idx} label={each} size='small' sx={{mr: 1}} />))}
            </ContentText>
            <ContentTitle hashtag='plot-type'>Plot type</ContentTitle>
            <ContentText>
                The distinguishable aspects that are relevant to the primary concept. <br />
                They become desires for data characters.
                Initially identified as 7 types by <Link target='_blank' to={"https://www.tandfonline.com/doi/abs/10.1080/21670811.2017.1403291"} >[Ojo and Heravi, 2018]</Link>, later re-organized as 5 types by us. <br />
                The 5 types include: {plotOptions.map((each, idx) => (<Chip key={idx} label={each} size='small' sx={{mr: 1}} />))}
            </ContentText>

            <ContentTitle hashtag='genres'>Genres</ContentTitle>
            <ContentText>
                Classification and organization of works into categories. <br />
                Contextualized for data storytelling, they are identified as 7 genres by <Link target='_blank' to={"https://ieeexplore.ieee.org/document/5613452/"} >[Segel and Heer, 2010]</Link>, 
                including: {genreOptions.map((each, idx) => (<Chip key={idx} label={each} size='small' sx={{ mr: 1 }} />))}
            </ContentText>
        </Box>
    )
}

function NavBar() {
    return (
        <Box sx={{ position: 'fixed', width: '20vw', textAlign: 'start' }}>
            <List aria-labelledby="character-subheader" component="nav" dense={true}
                subheader={<ListSubheader component="div" id="character-subheader" sx={{ maxWidth: '10vw' }}>Story Characters</ListSubheader>}>
                <ListItem key={'character'} disablePadding component={motion.div} variants={navItemVariant}>
                    <ListItemButton component={Link} to={{hash: 'character'}}>
                        <ListItemText primary={"Data Character"}/>
                    </ListItemButton>
                </ListItem>
                <ListItem key={"MC"} disablePadding component={motion.div} variants={navItemVariant} >
                    <ListItemButton component={Link} to={{ hash: 'main-character' }}>
                        <ListItemIcon sx={{color: '#ff9100', maxWidth: '24px', minWidth: '24px', marginRight: '1rem'}}><PersonIcon /></ListItemIcon>
                        <ListItemText primary={"Main Character"} primaryTypographyProps={{ style: { color: '#ff9100' } }} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={"ICC"} disablePadding component={motion.div} variants={navItemVariant} >
                    <ListItemButton component={Link} to={{hash: 'icc'}}><ListItemText primary={"Identifiable Central Character"} /></ListItemButton>
                </ListItem>
            </List>
            <Divider variant='middle'/>
            <List dense={true}>
                <ListItem key={"AC"} disablePadding component={motion.div} variants={navItemVariant} >
                    <ListItemButton component={Link} to={{ hash: 'antagonist' }}>
                        <ListItemIcon sx={{color: '#b71c1c', maxWidth: '24px', minWidth: '24px', marginRight: '1rem'}}><PersonIcon /></ListItemIcon>
                        <ListItemText primary={"Antagonist"} primaryTypographyProps={{ color: 'error' }} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={"conflict"} disablePadding component={motion.div} variants={navItemVariant} >
                    <ListItemButton component={Link} to={{hash: 'conflict'}}><ListItemText primary={"Conflict"} /></ListItemButton>
                </ListItem>
                <ListItem key={"resolution"} disablePadding component={motion.div} variants={navItemVariant}>
                    <ListItemButton component={Link} to={{hash: 'resolution'}}><ListItemText primary={"Resolution"} /></ListItemButton>
                </ListItem>
            </List>
            <Divider variant='middle'/>
            <List dense={true}>
                <ListItem key={"SC"} disablePadding component={motion.div} variants={navItemVariant}>
                    <ListItemButton component={Link} to={{ hash: 'support-character' }}>
                        <ListItemIcon sx={{color: '#2e7d32', maxWidth: '24px', minWidth: '24px', marginRight: '1rem'}}><PersonIcon /></ListItemIcon>
                        <ListItemText primary={"Supporting Characters"} primaryTypographyProps={{ color: 'secondary' }} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Relationship'} disablePadding component={motion.div} variants={navItemVariant}>
                    <ListItemButton component={Link} to={{hash: 'relationship'}}><ListItemText primary={"Relationships"} /></ListItemButton>
                </ListItem>
            </List>
            <List aria-labelledby="story-subheader" component="nav" dense={true}
                subheader={<ListSubheader component="div" id="story-subheader" sx={{maxWidth: '10vw'}}>Story Elements</ListSubheader>}>
                <ListItem key={"through-line"} disablePadding component={motion.div} variants={navItemVariant}>
                    <ListItemButton component={Link} to={{hash: 'through-line'}}><ListItemText primary={"Through-line"} /></ListItemButton>
                </ListItem>
                <ListItem key={"sub-concepts"} disablePadding component={motion.div} variants={navItemVariant}>
                    <ListItemButton component={Link} to={{hash: 'sub-concepts'}}><ListItemText primary={"Sub-concepts"} /></ListItemButton>
                </ListItem>
                <ListItem key={"intent"} disablePadding component={motion.div} variants={navItemVariant}>
                    <ListItemButton component={Link} to={{hash: 'intent'}}><ListItemText primary={"Intent"} /></ListItemButton>
                </ListItem>
                <ListItem key={"type"} disablePadding component={motion.div} variants={navItemVariant}>
                    <ListItemButton component={Link} to={{hash: 'plot-type'}}><ListItemText primary={"Plot type"} /></ListItemButton>
                </ListItem>
                <ListItem key={"genres"} disablePadding component={motion.div} variants={navItemVariant}>
                    <ListItemButton component={Link} to={{hash: 'genres'}}><ListItemText primary={"Genres"} /></ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}
export default Overview