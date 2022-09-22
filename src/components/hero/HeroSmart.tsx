import React from "react"
import Spacing from "@components/spacing"
import { Grid, Typography, Button } from "@material-ui/core"
import { Image } from "@components/image"
import ArrowDownIcon from "@material-ui/icons/ArrowDownward"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { UserProps } from "@services/user"

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: "100%",
    backgroundColor: "#fff",
    fontFamily: "inherit",
    borderRadius: "8px",
    textTransform: "none",
    padding: '24px',
    color: theme.palette.text.secondary
  },
  howWorks: {
    position: 'absolute',
    width: "100%",
    fontWeight: 100,
    display: `inline-flex`,
    justifyContent: `center`,
    bottom: '30px'
  },
  progressionContainer: {
    width: '80vw',
    display: 'block',
    margin: '0px auto 24px auto'
  },
  progression: {
    border: '5px solid #fff',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: 50,
    padding: '10px 30px'
  },
  textProgress: {
    width: '60vw',
    display: 'block',
    margin: '0px auto'
  },
  active: {
    borderBottom: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: 7
  },
  titleDate: {
    lineHeight: "4rem",
    fontWeight: "lighter",
    fontSize: "4rem",
    fontFeatureSettings: "'pnum' on, 'lnum' on, 'ss03' on",
    paddingLeft: "2rem"
  }
}))

const LoggedView = (user: UserProps) => {
  const classes = useStyles()
  const currentEdition = user.editions?.[2021]
  const opened = currentEdition?.totalMergeRequests || 0
  const merged = currentEdition?.totalMergeRequestsMerged || "nenhum"

  return (
    <React.Fragment>
      <Grid container direction="column" alignContent="center" justifyContent="center">
        <Spacing smart={{margin: "20px 0px 5px"}}>
          <Grid item>
            <Typography align="center" component="p"> Olá <b>@{user.githubUser}!</b></Typography>
          </Grid>
        </Spacing>
        <Spacing smart={{margin: "0px 0px 30px"}}>
          <Grid item md={5}>
            <Typography align="center" component="p"> Acompanhe seu progresso: </Typography>
          </Grid>
        </Spacing>
          <div className={classes.progressionContainer}>
            <div className={classes.progression}>
              <Image className={!currentEdition?.approved && !currentEdition?.completed ? classes.active : '' } src="hero/PR.svg"/> * Ativo se Approved e Completed for false
              <Image className={currentEdition?.approved && !currentEdition.completed ? classes.active : '' } src="hero/Check.svg"/> {/** Ativo se Approved true e completed false */}
              <Image className={currentEdition?.approved && currentEdition.completed ? classes.active : '' } src="hero/Shirt.svg"/> {/** Ativo se completed e aproved for true */}
            </div>
          </div>
          <div className={classes.textProgress}>
            {currentEdition?.completed ? <CongratsMessage/> : <ProgressMessage opened={opened} merged={merged}/>}
          </div>
      </Grid>
    </React.Fragment>
  )
}

const ProgressMessage = (props: any) => (
    <Typography align="center" component="p">  Você tem <b> {props.opened} PRs enviados e {props.merged} aceito(s) </b> </Typography>
)

const CongratsMessage = () => (
    <Typography align="center" component="p">  <b>Parabéns!</b> Você concluiu o desafio Hacktoberfest. Confirme o endereço de envio no Minha Área. </Typography>
)

const UnloggedView = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
          <Grid container className="containerUserViewSmart">
            <Grid item xs={12}>
              <Typography align="center" variant="h3" component="h3" style={{fontSize: '16px', fontWeight: 700 }}>
                contribua e ganhe uma camiseta exclusiva
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                href="/login"
                className={classes.button}
                fullWidth
                variant="contained"
              >
                <Typography component="p" variant="body2" align="center" style={{fontSize: '16px' }}>
                  <b>participar</b> com sua conta do github
                </Typography>
              </Button>
            </Grid>
          </Grid>
    </React.Fragment>
  )
}


const SmartView = (props: SmartViewProps) => {
  const classes = useStyles();
    return (
      <React.Fragment>
          <Grid
            container
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            className="headerContainer"
          >
              <Grid item xs={12}>

              </Grid>
              <Grid item xs={12}>
                  <Image
                    className="logoEdition"
                    src={`2022/logo_smart.png`}
                  />
                  <Typography variant="h2" align="left" component="h2" className={classes.titleDate}>
                    01.10.2022 - 31.10.2022
                  </Typography>
              </Grid>

            {props.user ? <LoggedView {...props.user}/> : <UnloggedView/>}
          </Grid>

      </React.Fragment>
    )
  }

  interface SmartViewProps {
    user?: UserProps
  }

  export default SmartView