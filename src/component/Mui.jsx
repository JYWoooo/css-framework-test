import React from 'react'
import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: '90%',
    margin: `${theme.spacing(1)}px auto`,
    paddingRight: '30px',
    paddingLeft: '30px',
    paddingTop: `30px`,
    paddingBottom: `30px`,
    // borderColor: `#F0F8FF`,
  },
  grid: {
    padding: `20px`,
  },
  timeGrid: {
    paddingLeft: `20px`,
    paddingRight: `20px`,
    marginTop: `20px`,
    marginBottom: `10px`,
    borderRadius: `3px`,
    border: `1px solid`,
    borderColor: `#DCDCDC`,
  },
  networkGrid: {
    paddingLeft: `20px`,
    paddingRight: `20px`,
    marginTop: `20px`,
    marginBottom: `20px`,
    borderRadius: `3px`,
    backgroundColor: `#E0F5FF`,
  },
  button: {
    width: '130px',
    height: '50px',
  },
  textField: {
    width: '400px',
    margin: '10px',
    marginLeft: '30px',
    backgroundColor: `white`,
  },
  typography: {
    margin: '30px',
  },
  title: {
    fontSize: `25px`,
    padding: `10px`,
  },
  networkTextField: {
    width: '300px',
    margin: '10px',
    marginLeft: '30px',
    backgroundColor: `white`,
  },
}));

const Mui = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography style={{fontSize: `30px`, fontWeight: `bolder`, marginLeft: `5%`, marginTop: `20px`, marginBottom: `20px`, color: `#191970`}}>
        장비 기본 설정
      </Typography>
      
      <Paper className={classes.paper} variant='outlined'>
        <Grid container spacing={4} justifyContent="space-between" alignItems='center' className={classes.grid}>
          <Grid item>
            <Grid container display='inline-flex' direction='row' alignItems='center'>
              <Typography noWrep>모델명</Typography>
              <TextField label='모델명' variant='outlined' className={classes.textField} />
            </Grid>
          </Grid>
          <Grid item>
            <Grid container display='inline-flex' direction='row' alignItems='center'>
              <Typography noWrep>시리얼 넘버</Typography>
              <TextField label='시리얼 넘버' variant='outlined' className={classes.textField} />
            </Grid>
          </Grid>
          <Grid item>
            <Button variant='contained' color="primary" size='large' className={classes.button}>
              설정 적용
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper} variant='outlined'>
        <Grid direction='column'>
          <Grid item>
            <Typography className={classes.title}>시간 설정</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={4} justifyContent="space-between" alignItems='center' className={classes.timeGrid}>
              <Grid item>
                <Grid container display='inline-flex' direction='row' alignItems='center'>
                  <Typography noWrep>날짜 및 시간</Typography>
                  <TextField label='날짜 및 시간' variant='outlined' className={classes.textField} />
                </Grid>
              </Grid>
              <Grid item>
                <Grid container display='inline-flex' direction='row' alignItems='center'>
                  <Typography noWrep>표준 시간대</Typography>
                  <TextField label='표준 시간대' variant='outlined' className={classes.textField} />
                </Grid>
              </Grid>
              <Grid item>
                <Button variant='contained' color="primary" size='large' className={classes.button}>
                  설정 적용
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper} variant='outlined'>
        <Grid direction='column'>
          <Grid item>
            <Typography className={classes.title}>네트워크 설정</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={4} justifyContent="space-between" alignItems='center' className={classes.networkGrid}>
              <Grid item>
                <Typography className={classes.title}>LAN1</Typography>
              </Grid>
              <Grid item>
                <Grid container display='inline-flex' direction='row' alignItems='center'>
                  <Typography noWrep>IP 주소</Typography>
                  <TextField label='IP 주소' variant='outlined' className={classes.textField} />
                </Grid>
              </Grid>
              <Grid item>
                <Grid container display='inline-flex' direction='row' alignItems='center'>
                  <Typography noWrep>NETMASK</Typography>
                  <TextField label='NETMASK' variant='outlined' className={classes.networkTextField} />
                </Grid>
              </Grid>
              <Grid item>
                <Grid container display='inline-flex' direction='row' alignItems='center'>
                  <Typography noWrep>GATEWAY</Typography>
                  <TextField label='GATEWAY' variant='outlined' className={classes.networkTextField} />
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={4} justifyContent="space-between" alignItems='center' className={classes.networkGrid}>
              <Grid item>
                <Typography className={classes.title}>LAN2</Typography>
              </Grid>
              <Grid item>
                <Grid container display='inline-flex' direction='row' alignItems='center'>
                  <Typography noWrep>IP 주소</Typography>
                  <TextField label='IP 주소' variant='outlined' className={classes.textField} />
                </Grid>
              </Grid>
              <Grid item>
                <Grid container display='inline-flex' direction='row' alignItems='center'>
                  <Typography noWrep>NETMASK</Typography>
                  <TextField label='NETMASK' variant='outlined' className={classes.networkTextField} />
                </Grid>
              </Grid>
              <Grid item>
                <Grid container display='inline-flex' direction='row' alignItems='center'>
                  <Typography noWrep>GATEWAY</Typography>
                  <TextField label='GATEWAY' variant='outlined' className={classes.networkTextField} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item direction='column' style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
              <Button variant='contained' color="primary" size='large' style={{width: '180px', height: '50px'}}>
                네트워크 설정 적용
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>



    </div>
  );
}

export default Mui