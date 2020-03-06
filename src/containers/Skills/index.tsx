import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getSkill } from '../../actions/skillActions';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';

interface DataType {
    data: {
        title: string;
        imageUrl: string;
        type: string;
        order: number;
    }[];
}

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: 'center',
    },
    content: {
        flexGrow: 1,
        alignContent: 'center',
    },
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    cardRow: {
        position: 'relative',
        padding: theme.spacing(3),
        paddingRight: 0,
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

const Skills: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSkill());
    }, [dispatch]);
    const languageData = useSelector((state: any) => state.Skill.languageData);
    const toolData = useSelector((state: any) => state.Skill.toolData);
    const classes = useStyles();

    const DataRow: React.FC<DataType> = ({ data }: DataType) => {
        return (
            <React.Fragment>
                <Grid item container md={6} xs={12} sm={6} spacing={3} className={classes.cardRow}>
                    <Grid item md={12} xs={12} sm={12}>
                        <Typography variant="h4" className={classes.title}>
                            {data.length > 0 ? (data[0].type === 'language' ? 'Languages' : 'Tools') : ''}
                        </Typography>
                    </Grid>
                    {data && data.length > 0 ? (
                        _.map(data, function(skill) {
                            return (
                                <Grid item md={6} xs={6} sm={6} key={skill.title ? skill.title : ''}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={skill.imageUrl ? skill.imageUrl : ''}
                                            title={skill.title ? skill.title : ''}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {skill.title ? skill.title : ''}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            );
                        })
                    ) : (
                        <React.Fragment />
                    )}
                </Grid>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container maxWidth="xs">
                    <div className={classes.title}>
                        <h1>Skills</h1>
                    </div>
                </Container>
                <Container className={classes.content} maxWidth="lg">
                    <Grid container>
                        <DataRow data={languageData} />
                        <DataRow data={toolData} />
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
};

export default Skills;
