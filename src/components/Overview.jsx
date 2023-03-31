import { useState, useRef, createRef, useEffect } from 'react'
import { Box, Grid, List, ListItem, ListItemButton, ListItemText, Divider, Typography, Stack, ListSubheader, ListItemIcon} from '@mui/material'
import { ContentText, ContentTitle, CharacterChip } from './Helpers';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';

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
            <Stack direction='row' spacing={2} sx={{alignItems: 'center'}}>
                <ContentTitle hashtag='main-character' sx={{margin: 0}}>Main Character</ContentTitle>
                <CharacterChip character='MC' />
            </Stack>
            <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lorem non tortor maximus blandit. In venenatis, eros eu luctus mattis, massa diam elementum velit, vel tincidunt lacus velit et ipsum. Cras euismod massa non diam ullamcorper dapibus. Vivamus quis varius est, et mattis enim. Nunc volutpat risus nibh, eget feugiat velit ultrices sed. Pellentesque ut pulvinar nisi, eu molestie erat. Pellentesque condimentum orci enim, ut vulputate elit efficitur ut. Quisque ornare leo eu arcu hendrerit, nec vulputate metus tempor. Nam tortor elit, tristique sit amet ipsum in, euismod pretium ligula. Nam porttitor bibendum mi consequat dictum. Vivamus eu nisi dignissim, viverra augue sit amet, venenatis nisl. Phasellus in gravida arcu. Morbi scelerisque a velit in malesuada. Nullam et semper tellus, in faucibus lacus. Cras interdum erat id ipsum hendrerit, rutrum efficitur mi lacinia.<br />
            Nunc tempor nunc lacus, sed placerat nisl porta eget. Nulla sit amet vulputate est, vitae porta sem. Etiam sem dui, tempus in consequat vitae, gravida ac urna. Phasellus mattis felis eget lectus imperdiet vehicula. Donec ut quam id nunc pulvinar pulvinar a eu erat. Etiam luctus augue vitae varius pharetra. In convallis varius tellus, ac volutpat sem scelerisque bibendum. Donec scelerisque cursus sapien, in tincidunt nunc sollicitudin nec. Aliquam id dictum quam, at auctor libero. In hac habitasse platea dictumst.<br />
            Etiam quis tellus ligula. Vivamus sit amet felis magna. Curabitur tempor augue id odio porta rutrum. In fringilla felis elit, nec auctor arcu pulvinar eu. Sed non ligula eros. Duis blandit diam ac nulla aliquam, nec commodo purus suscipit. Etiam fermentum urna ac scelerisque vulputate. Sed porttitor dignissim egestas. In consectetur ligula eu erat volutpat facilisis. Pellentesque pellentesque placerat lorem. Praesent cursus tempor augue, eget pellentesque lacus pulvinar vitae. Nulla gravida, ante nec auctor convallis, quam ligula venenatis nulla, sit amet viverra velit lorem quis felis. Maecenas fringilla gravida ullamcorper. Maecenas a metus fringilla, convallis justo id, ullamcorper sapien. In hac habitasse platea dictumst. Maecenas sollicitudin gravida urna eget auctor.
            </ContentText>
            <ContentTitle hashtag='icc'>Identifiable Central Character</ContentTitle>
            <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lorem non tortor maximus blandit. In venenatis, eros eu luctus mattis, massa diam elementum velit, vel tincidunt lacus velit et ipsum. Cras euismod massa non diam ullamcorper dapibus. Vivamus quis varius est, et mattis enim. Nunc volutpat risus nibh, eget feugiat velit ultrices sed. Pellentesque ut pulvinar nisi, eu molestie erat. Pellentesque condimentum orci enim, ut vulputate elit efficitur ut. Quisque ornare leo eu arcu hendrerit, nec vulputate metus tempor. Nam tortor elit, tristique sit amet ipsum in, euismod pretium ligula. Nam porttitor bibendum mi consequat dictum. Vivamus eu nisi dignissim, viverra augue sit amet, venenatis nisl. Phasellus in gravida arcu. Morbi scelerisque a velit in malesuada. Nullam et semper tellus, in faucibus lacus. Cras interdum erat id ipsum hendrerit, rutrum efficitur mi lacinia.<br />
            Nunc tempor nunc lacus, sed placerat nisl porta eget. Nulla sit amet vulputate est, vitae porta sem. Etiam sem dui, tempus in consequat vitae, gravida ac urna. Phasellus mattis felis eget lectus imperdiet vehicula. Donec ut quam id nunc pulvinar pulvinar a eu erat. Etiam luctus augue vitae varius pharetra. In convallis varius tellus, ac volutpat sem scelerisque bibendum. Donec scelerisque cursus sapien, in tincidunt nunc sollicitudin nec. Aliquam id dictum quam, at auctor libero. In hac habitasse platea dictumst.<br />
            Etiam quis tellus ligula. Vivamus sit amet felis magna. Curabitur tempor augue id odio porta rutrum. In fringilla felis elit, nec auctor arcu pulvinar eu. Sed non ligula eros. Duis blandit diam ac nulla aliquam, nec commodo purus suscipit. Etiam fermentum urna ac scelerisque vulputate. Sed porttitor dignissim egestas. In consectetur ligula eu erat volutpat facilisis. Pellentesque pellentesque placerat lorem. Praesent cursus tempor augue, eget pellentesque lacus pulvinar vitae. Nulla gravida, ante nec auctor convallis, quam ligula venenatis nulla, sit amet viverra velit lorem quis felis. Maecenas fringilla gravida ullamcorper. Maecenas a metus fringilla, convallis justo id, ullamcorper sapien. In hac habitasse platea dictumst. Maecenas sollicitudin gravida urna eget auctor.
            </ContentText>
            <Stack direction='row' spacing={2} sx={{alignItems: 'center'}}>
                <ContentTitle hashtag='antagonist' sx={{ margin: 0 }}>Antagonist</ContentTitle>
                <CharacterChip character='AC' />
            </Stack>
            <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lorem non tortor maximus blandit. In venenatis, eros eu luctus mattis, massa diam elementum velit, vel tincidunt lacus velit et ipsum. Cras euismod massa non diam ullamcorper dapibus. Vivamus quis varius est, et mattis enim. Nunc volutpat risus nibh, eget feugiat velit ultrices sed. Pellentesque ut pulvinar nisi, eu molestie erat. Pellentesque condimentum orci enim, ut vulputate elit efficitur ut. Quisque ornare leo eu arcu hendrerit, nec vulputate metus tempor. Nam tortor elit, tristique sit amet ipsum in, euismod pretium ligula. Nam porttitor bibendum mi consequat dictum. Vivamus eu nisi dignissim, viverra augue sit amet, venenatis nisl. Phasellus in gravida arcu. Morbi scelerisque a velit in malesuada. Nullam et semper tellus, in faucibus lacus. Cras interdum erat id ipsum hendrerit, rutrum efficitur mi lacinia.<br />
            Nunc tempor nunc lacus, sed placerat nisl porta eget. Nulla sit amet vulputate est, vitae porta sem. Etiam sem dui, tempus in consequat vitae, gravida ac urna. Phasellus mattis felis eget lectus imperdiet vehicula. Donec ut quam id nunc pulvinar pulvinar a eu erat. Etiam luctus augue vitae varius pharetra. In convallis varius tellus, ac volutpat sem scelerisque bibendum. Donec scelerisque cursus sapien, in tincidunt nunc sollicitudin nec. Aliquam id dictum quam, at auctor libero. In hac habitasse platea dictumst.<br />
            Etiam quis tellus ligula. Vivamus sit amet felis magna. Curabitur tempor augue id odio porta rutrum. In fringilla felis elit, nec auctor arcu pulvinar eu. Sed non ligula eros. Duis blandit diam ac nulla aliquam, nec commodo purus suscipit. Etiam fermentum urna ac scelerisque vulputate. Sed porttitor dignissim egestas. In consectetur ligula eu erat volutpat facilisis. Pellentesque pellentesque placerat lorem. Praesent cursus tempor augue, eget pellentesque lacus pulvinar vitae. Nulla gravida, ante nec auctor convallis, quam ligula venenatis nulla, sit amet viverra velit lorem quis felis. Maecenas fringilla gravida ullamcorper. Maecenas a metus fringilla, convallis justo id, ullamcorper sapien. In hac habitasse platea dictumst. Maecenas sollicitudin gravida urna eget auctor.
            </ContentText>
            <ContentTitle hashtag='conflict'>Conflict</ContentTitle>
            <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lorem non tortor maximus blandit. In venenatis, eros eu luctus mattis, massa diam elementum velit, vel tincidunt lacus velit et ipsum. Cras euismod massa non diam ullamcorper dapibus. Vivamus quis varius est, et mattis enim. Nunc volutpat risus nibh, eget feugiat velit ultrices sed. Pellentesque ut pulvinar nisi, eu molestie erat. Pellentesque condimentum orci enim, ut vulputate elit efficitur ut. Quisque ornare leo eu arcu hendrerit, nec vulputate metus tempor. Nam tortor elit, tristique sit amet ipsum in, euismod pretium ligula. Nam porttitor bibendum mi consequat dictum. Vivamus eu nisi dignissim, viverra augue sit amet, venenatis nisl. Phasellus in gravida arcu. Morbi scelerisque a velit in malesuada. Nullam et semper tellus, in faucibus lacus. Cras interdum erat id ipsum hendrerit, rutrum efficitur mi lacinia.<br />
            Nunc tempor nunc lacus, sed placerat nisl porta eget. Nulla sit amet vulputate est, vitae porta sem. Etiam sem dui, tempus in consequat vitae, gravida ac urna. Phasellus mattis felis eget lectus imperdiet vehicula. Donec ut quam id nunc pulvinar pulvinar a eu erat. Etiam luctus augue vitae varius pharetra. In convallis varius tellus, ac volutpat sem scelerisque bibendum. Donec scelerisque cursus sapien, in tincidunt nunc sollicitudin nec. Aliquam id dictum quam, at auctor libero. In hac habitasse platea dictumst.<br />
            Etiam quis tellus ligula. Vivamus sit amet felis magna. Curabitur tempor augue id odio porta rutrum. In fringilla felis elit, nec auctor arcu pulvinar eu. Sed non ligula eros. Duis blandit diam ac nulla aliquam, nec commodo purus suscipit. Etiam fermentum urna ac scelerisque vulputate. Sed porttitor dignissim egestas. In consectetur ligula eu erat volutpat facilisis. Pellentesque pellentesque placerat lorem. Praesent cursus tempor augue, eget pellentesque lacus pulvinar vitae. Nulla gravida, ante nec auctor convallis, quam ligula venenatis nulla, sit amet viverra velit lorem quis felis. Maecenas fringilla gravida ullamcorper. Maecenas a metus fringilla, convallis justo id, ullamcorper sapien. In hac habitasse platea dictumst. Maecenas sollicitudin gravida urna eget auctor.
            </ContentText>
            <ContentTitle hashtag='resolution'>Resolution</ContentTitle>
            <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lorem non tortor maximus blandit. In venenatis, eros eu luctus mattis, massa diam elementum velit, vel tincidunt lacus velit et ipsum. Cras euismod massa non diam ullamcorper dapibus. Vivamus quis varius est, et mattis enim. Nunc volutpat risus nibh, eget feugiat velit ultrices sed. Pellentesque ut pulvinar nisi, eu molestie erat. Pellentesque condimentum orci enim, ut vulputate elit efficitur ut. Quisque ornare leo eu arcu hendrerit, nec vulputate metus tempor. Nam tortor elit, tristique sit amet ipsum in, euismod pretium ligula. Nam porttitor bibendum mi consequat dictum. Vivamus eu nisi dignissim, viverra augue sit amet, venenatis nisl. Phasellus in gravida arcu. Morbi scelerisque a velit in malesuada. Nullam et semper tellus, in faucibus lacus. Cras interdum erat id ipsum hendrerit, rutrum efficitur mi lacinia.<br />
            Nunc tempor nunc lacus, sed placerat nisl porta eget. Nulla sit amet vulputate est, vitae porta sem. Etiam sem dui, tempus in consequat vitae, gravida ac urna. Phasellus mattis felis eget lectus imperdiet vehicula. Donec ut quam id nunc pulvinar pulvinar a eu erat. Etiam luctus augue vitae varius pharetra. In convallis varius tellus, ac volutpat sem scelerisque bibendum. Donec scelerisque cursus sapien, in tincidunt nunc sollicitudin nec. Aliquam id dictum quam, at auctor libero. In hac habitasse platea dictumst.<br />
            Etiam quis tellus ligula. Vivamus sit amet felis magna. Curabitur tempor augue id odio porta rutrum. In fringilla felis elit, nec auctor arcu pulvinar eu. Sed non ligula eros. Duis blandit diam ac nulla aliquam, nec commodo purus suscipit. Etiam fermentum urna ac scelerisque vulputate. Sed porttitor dignissim egestas. In consectetur ligula eu erat volutpat facilisis. Pellentesque pellentesque placerat lorem. Praesent cursus tempor augue, eget pellentesque lacus pulvinar vitae. Nulla gravida, ante nec auctor convallis, quam ligula venenatis nulla, sit amet viverra velit lorem quis felis. Maecenas fringilla gravida ullamcorper. Maecenas a metus fringilla, convallis justo id, ullamcorper sapien. In hac habitasse platea dictumst. Maecenas sollicitudin gravida urna eget auctor.
            </ContentText>
            <Stack direction='row' spacing={2} sx={{alignItems: 'center'}}>
                <ContentTitle hashtag='support-character' sx={{margin: 0}}>Support Characters</ContentTitle>
                <CharacterChip character='SC'/>
            </Stack>
            <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lorem non tortor maximus blandit. In venenatis, eros eu luctus mattis, massa diam elementum velit, vel tincidunt lacus velit et ipsum. Cras euismod massa non diam ullamcorper dapibus. Vivamus quis varius est, et mattis enim. Nunc volutpat risus nibh, eget feugiat velit ultrices sed. Pellentesque ut pulvinar nisi, eu molestie erat. Pellentesque condimentum orci enim, ut vulputate elit efficitur ut. Quisque ornare leo eu arcu hendrerit, nec vulputate metus tempor. Nam tortor elit, tristique sit amet ipsum in, euismod pretium ligula. Nam porttitor bibendum mi consequat dictum. Vivamus eu nisi dignissim, viverra augue sit amet, venenatis nisl. Phasellus in gravida arcu. Morbi scelerisque a velit in malesuada. Nullam et semper tellus, in faucibus lacus. Cras interdum erat id ipsum hendrerit, rutrum efficitur mi lacinia.<br />
            Nunc tempor nunc lacus, sed placerat nisl porta eget. Nulla sit amet vulputate est, vitae porta sem. Etiam sem dui, tempus in consequat vitae, gravida ac urna. Phasellus mattis felis eget lectus imperdiet vehicula. Donec ut quam id nunc pulvinar pulvinar a eu erat. Etiam luctus augue vitae varius pharetra. In convallis varius tellus, ac volutpat sem scelerisque bibendum. Donec scelerisque cursus sapien, in tincidunt nunc sollicitudin nec. Aliquam id dictum quam, at auctor libero. In hac habitasse platea dictumst.<br />
            Etiam quis tellus ligula. Vivamus sit amet felis magna. Curabitur tempor augue id odio porta rutrum. In fringilla felis elit, nec auctor arcu pulvinar eu. Sed non ligula eros. Duis blandit diam ac nulla aliquam, nec commodo purus suscipit. Etiam fermentum urna ac scelerisque vulputate. Sed porttitor dignissim egestas. In consectetur ligula eu erat volutpat facilisis. Pellentesque pellentesque placerat lorem. Praesent cursus tempor augue, eget pellentesque lacus pulvinar vitae. Nulla gravida, ante nec auctor convallis, quam ligula venenatis nulla, sit amet viverra velit lorem quis felis. Maecenas fringilla gravida ullamcorper. Maecenas a metus fringilla, convallis justo id, ullamcorper sapien. In hac habitasse platea dictumst. Maecenas sollicitudin gravida urna eget auctor.
            </ContentText>

            <ContentTitle hashtag='relationship'>Relationships among Characters</ContentTitle>
            <ContentText>
                Insert figure
            </ContentText>

            <Divider sx={{mt: 3, mb: 10}} />

            <ContentTitle hashtag='through-line'>Through-line</ContentTitle>
            <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lorem non tortor maximus blandit. In venenatis, eros eu luctus mattis, massa diam elementum velit, vel tincidunt lacus velit et ipsum. Cras euismod massa non diam ullamcorper dapibus. Vivamus quis varius est, et mattis enim. Nunc volutpat risus nibh, eget feugiat velit ultrices sed. Pellentesque ut pulvinar nisi, eu molestie erat. Pellentesque condimentum orci enim, ut vulputate elit efficitur ut. Quisque ornare leo eu arcu hendrerit, nec vulputate metus tempor. Nam tortor elit, tristique sit amet ipsum in, euismod pretium ligula. Nam porttitor bibendum mi consequat dictum. Vivamus eu nisi dignissim, viverra augue sit amet, venenatis nisl. Phasellus in gravida arcu. Morbi scelerisque a velit in malesuada. Nullam et semper tellus, in faucibus lacus. Cras interdum erat id ipsum hendrerit, rutrum efficitur mi lacinia.<br />
            Nunc tempor nunc lacus, sed placerat nisl porta eget. Nulla sit amet vulputate est, vitae porta sem. Etiam sem dui, tempus in consequat vitae, gravida ac urna. Phasellus mattis felis eget lectus imperdiet vehicula. Donec ut quam id nunc pulvinar pulvinar a eu erat. Etiam luctus augue vitae varius pharetra. In convallis varius tellus, ac volutpat sem scelerisque bibendum. Donec scelerisque cursus sapien, in tincidunt nunc sollicitudin nec. Aliquam id dictum quam, at auctor libero. In hac habitasse platea dictumst.<br />
            Etiam quis tellus ligula. Vivamus sit amet felis magna. Curabitur tempor augue id odio porta rutrum. In fringilla felis elit, nec auctor arcu pulvinar eu. Sed non ligula eros. Duis blandit diam ac nulla aliquam, nec commodo purus suscipit. Etiam fermentum urna ac scelerisque vulputate. Sed porttitor dignissim egestas. In consectetur ligula eu erat volutpat facilisis. Pellentesque pellentesque placerat lorem. Praesent cursus tempor augue, eget pellentesque lacus pulvinar vitae. Nulla gravida, ante nec auctor convallis, quam ligula venenatis nulla, sit amet viverra velit lorem quis felis. Maecenas fringilla gravida ullamcorper. Maecenas a metus fringilla, convallis justo id, ullamcorper sapien. In hac habitasse platea dictumst. Maecenas sollicitudin gravida urna eget auctor.
            </ContentText>
            <ContentTitle hashtag='sub-concepts'>Sub-concepts</ContentTitle>
            <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lorem non tortor maximus blandit. In venenatis, eros eu luctus mattis, massa diam elementum velit, vel tincidunt lacus velit et ipsum. Cras euismod massa non diam ullamcorper dapibus. Vivamus quis varius est, et mattis enim. Nunc volutpat risus nibh, eget feugiat velit ultrices sed. Pellentesque ut pulvinar nisi, eu molestie erat. Pellentesque condimentum orci enim, ut vulputate elit efficitur ut. Quisque ornare leo eu arcu hendrerit, nec vulputate metus tempor. Nam tortor elit, tristique sit amet ipsum in, euismod pretium ligula. Nam porttitor bibendum mi consequat dictum. Vivamus eu nisi dignissim, viverra augue sit amet, venenatis nisl. Phasellus in gravida arcu. Morbi scelerisque a velit in malesuada. Nullam et semper tellus, in faucibus lacus. Cras interdum erat id ipsum hendrerit, rutrum efficitur mi lacinia.<br />
            Nunc tempor nunc lacus, sed placerat nisl porta eget. Nulla sit amet vulputate est, vitae porta sem. Etiam sem dui, tempus in consequat vitae, gravida ac urna. Phasellus mattis felis eget lectus imperdiet vehicula. Donec ut quam id nunc pulvinar pulvinar a eu erat. Etiam luctus augue vitae varius pharetra. In convallis varius tellus, ac volutpat sem scelerisque bibendum. Donec scelerisque cursus sapien, in tincidunt nunc sollicitudin nec. Aliquam id dictum quam, at auctor libero. In hac habitasse platea dictumst.<br />
            Etiam quis tellus ligula. Vivamus sit amet felis magna. Curabitur tempor augue id odio porta rutrum. In fringilla felis elit, nec auctor arcu pulvinar eu. Sed non ligula eros. Duis blandit diam ac nulla aliquam, nec commodo purus suscipit. Etiam fermentum urna ac scelerisque vulputate. Sed porttitor dignissim egestas. In consectetur ligula eu erat volutpat facilisis. Pellentesque pellentesque placerat lorem. Praesent cursus tempor augue, eget pellentesque lacus pulvinar vitae. Nulla gravida, ante nec auctor convallis, quam ligula venenatis nulla, sit amet viverra velit lorem quis felis. Maecenas fringilla gravida ullamcorper. Maecenas a metus fringilla, convallis justo id, ullamcorper sapien. In hac habitasse platea dictumst. Maecenas sollicitudin gravida urna eget auctor.
            </ContentText>
            <ContentTitle hashtag='intent'>Intent</ContentTitle>
            <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lorem non tortor maximus blandit. In venenatis, eros eu luctus mattis, massa diam elementum velit, vel tincidunt lacus velit et ipsum. Cras euismod massa non diam ullamcorper dapibus. Vivamus quis varius est, et mattis enim. Nunc volutpat risus nibh, eget feugiat velit ultrices sed. Pellentesque ut pulvinar nisi, eu molestie erat. Pellentesque condimentum orci enim, ut vulputate elit efficitur ut. Quisque ornare leo eu arcu hendrerit, nec vulputate metus tempor. Nam tortor elit, tristique sit amet ipsum in, euismod pretium ligula. Nam porttitor bibendum mi consequat dictum. Vivamus eu nisi dignissim, viverra augue sit amet, venenatis nisl. Phasellus in gravida arcu. Morbi scelerisque a velit in malesuada. Nullam et semper tellus, in faucibus lacus. Cras interdum erat id ipsum hendrerit, rutrum efficitur mi lacinia.<br />
            Nunc tempor nunc lacus, sed placerat nisl porta eget. Nulla sit amet vulputate est, vitae porta sem. Etiam sem dui, tempus in consequat vitae, gravida ac urna. Phasellus mattis felis eget lectus imperdiet vehicula. Donec ut quam id nunc pulvinar pulvinar a eu erat. Etiam luctus augue vitae varius pharetra. In convallis varius tellus, ac volutpat sem scelerisque bibendum. Donec scelerisque cursus sapien, in tincidunt nunc sollicitudin nec. Aliquam id dictum quam, at auctor libero. In hac habitasse platea dictumst.<br />
            Etiam quis tellus ligula. Vivamus sit amet felis magna. Curabitur tempor augue id odio porta rutrum. In fringilla felis elit, nec auctor arcu pulvinar eu. Sed non ligula eros. Duis blandit diam ac nulla aliquam, nec commodo purus suscipit. Etiam fermentum urna ac scelerisque vulputate. Sed porttitor dignissim egestas. In consectetur ligula eu erat volutpat facilisis. Pellentesque pellentesque placerat lorem. Praesent cursus tempor augue, eget pellentesque lacus pulvinar vitae. Nulla gravida, ante nec auctor convallis, quam ligula venenatis nulla, sit amet viverra velit lorem quis felis. Maecenas fringilla gravida ullamcorper. Maecenas a metus fringilla, convallis justo id, ullamcorper sapien. In hac habitasse platea dictumst. Maecenas sollicitudin gravida urna eget auctor.
            </ContentText>
            <ContentTitle hashtag='plot-type'>Plot type</ContentTitle>
            <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lorem non tortor maximus blandit. In venenatis, eros eu luctus mattis, massa diam elementum velit, vel tincidunt lacus velit et ipsum. Cras euismod massa non diam ullamcorper dapibus. Vivamus quis varius est, et mattis enim. Nunc volutpat risus nibh, eget feugiat velit ultrices sed. Pellentesque ut pulvinar nisi, eu molestie erat. Pellentesque condimentum orci enim, ut vulputate elit efficitur ut. Quisque ornare leo eu arcu hendrerit, nec vulputate metus tempor. Nam tortor elit, tristique sit amet ipsum in, euismod pretium ligula. Nam porttitor bibendum mi consequat dictum. Vivamus eu nisi dignissim, viverra augue sit amet, venenatis nisl. Phasellus in gravida arcu. Morbi scelerisque a velit in malesuada. Nullam et semper tellus, in faucibus lacus. Cras interdum erat id ipsum hendrerit, rutrum efficitur mi lacinia.<br />
            Nunc tempor nunc lacus, sed placerat nisl porta eget. Nulla sit amet vulputate est, vitae porta sem. Etiam sem dui, tempus in consequat vitae, gravida ac urna. Phasellus mattis felis eget lectus imperdiet vehicula. Donec ut quam id nunc pulvinar pulvinar a eu erat. Etiam luctus augue vitae varius pharetra. In convallis varius tellus, ac volutpat sem scelerisque bibendum. Donec scelerisque cursus sapien, in tincidunt nunc sollicitudin nec. Aliquam id dictum quam, at auctor libero. In hac habitasse platea dictumst.<br />
            Etiam quis tellus ligula. Vivamus sit amet felis magna. Curabitur tempor augue id odio porta rutrum. In fringilla felis elit, nec auctor arcu pulvinar eu. Sed non ligula eros. Duis blandit diam ac nulla aliquam, nec commodo purus suscipit. Etiam fermentum urna ac scelerisque vulputate. Sed porttitor dignissim egestas. In consectetur ligula eu erat volutpat facilisis. Pellentesque pellentesque placerat lorem. Praesent cursus tempor augue, eget pellentesque lacus pulvinar vitae. Nulla gravida, ante nec auctor convallis, quam ligula venenatis nulla, sit amet viverra velit lorem quis felis. Maecenas fringilla gravida ullamcorper. Maecenas a metus fringilla, convallis justo id, ullamcorper sapien. In hac habitasse platea dictumst. Maecenas sollicitudin gravida urna eget auctor.
            </ContentText>

            <ContentTitle hashtag='genres'>Genres</ContentTitle>
            <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lorem non tortor maximus blandit. In venenatis, eros eu luctus mattis, massa diam elementum velit, vel tincidunt lacus velit et ipsum. Cras euismod massa non diam ullamcorper dapibus. Vivamus quis varius est, et mattis enim. Nunc volutpat risus nibh, eget feugiat velit ultrices sed. Pellentesque ut pulvinar nisi, eu molestie erat. Pellentesque condimentum orci enim, ut vulputate elit efficitur ut. Quisque ornare leo eu arcu hendrerit, nec vulputate metus tempor. Nam tortor elit, tristique sit amet ipsum in, euismod pretium ligula. Nam porttitor bibendum mi consequat dictum. Vivamus eu nisi dignissim, viverra augue sit amet, venenatis nisl. Phasellus in gravida arcu. Morbi scelerisque a velit in malesuada. Nullam et semper tellus, in faucibus lacus. Cras interdum erat id ipsum hendrerit, rutrum efficitur mi lacinia.<br />
            Nunc tempor nunc lacus, sed placerat nisl porta eget. Nulla sit amet vulputate est, vitae porta sem. Etiam sem dui, tempus in consequat vitae, gravida ac urna. Phasellus mattis felis eget lectus imperdiet vehicula. Donec ut quam id nunc pulvinar pulvinar a eu erat. Etiam luctus augue vitae varius pharetra. In convallis varius tellus, ac volutpat sem scelerisque bibendum. Donec scelerisque cursus sapien, in tincidunt nunc sollicitudin nec. Aliquam id dictum quam, at auctor libero. In hac habitasse platea dictumst.<br />
            Etiam quis tellus ligula. Vivamus sit amet felis magna. Curabitur tempor augue id odio porta rutrum. In fringilla felis elit, nec auctor arcu pulvinar eu. Sed non ligula eros. Duis blandit diam ac nulla aliquam, nec commodo purus suscipit. Etiam fermentum urna ac scelerisque vulputate. Sed porttitor dignissim egestas. In consectetur ligula eu erat volutpat facilisis. Pellentesque pellentesque placerat lorem. Praesent cursus tempor augue, eget pellentesque lacus pulvinar vitae. Nulla gravida, ante nec auctor convallis, quam ligula venenatis nulla, sit amet viverra velit lorem quis felis. Maecenas fringilla gravida ullamcorper. Maecenas a metus fringilla, convallis justo id, ullamcorper sapien. In hac habitasse platea dictumst. Maecenas sollicitudin gravida urna eget auctor.
            </ContentText>
        </Box>
    )
}

function NavBar() {
    return (
        <Box sx={{ position: 'fixed', width: '20vw', textAlign: 'start' }}>
            <List aria-labelledby="character-subheader" component="nav" dense={true}
                subheader={<ListSubheader component="div" id="character-subheader" sx={{maxWidth: '10vw'}}>Story Characters</ListSubheader>}>
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
                        <ListItemText primary={"Support Characters"} primaryTypographyProps={{ color: 'secondary' }} />
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