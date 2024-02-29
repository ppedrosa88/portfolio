import { Typography, Button, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        backgroundColor: "primary",
      }}
    >
      <Grid item xs={1}></Grid>
      <Grid
        item
        xs={10}
        lg={5}
        p={2}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography
          fontFamily={"indie flower"}
          fontWeight={400}
          variant="span"
          fontSize={"1rem"}
        >
          &lt;h1&gt;
        </Typography>
        <Typography variant="h1" fontSize={0}>
          <Typography
            sx={{
              backgroundColor: "#8DFCE3",
              borderRadius: "4px",
              color: "black",
              fontWeight: "bold",
            }}
            fontSize={42}
            marginLeft={3}
            variant="mark"
          >
            <Typography
              fontFamily={"indie flower"}
              fontWeight={400}
              variant="span"
              fontSize={"1rem"}
            >
              &lt;mark&gt;
            </Typography>
            {t("home.title")}
            <Typography
              fontFamily={"indie flower"}
              fontWeight={400}
              variant="span"
              fontSize={"1rem"}
            >
              &lt;/mark&gt;
            </Typography>
          </Typography>
        </Typography>
        <Typography
          fontFamily={"indie flower"}
          fontWeight={400}
          variant="span"
          fontSize={"1rem"}
        >
          &lt;/h1&gt;
        </Typography>
        <Typography
          fontFamily={"indie flower"}
          fontWeight={400}
          variant="span"
          fontSize={"1rem"}
        >
          &lt;p&gt;
        </Typography>
        <Typography
          fontWeight="bold"
          color={"white"}
          marginLeft={3}
          variant="p"
          fontSize={32}
        >
          {t("home.descrip1")}
          <Typography
            variant="span"
            fontWeight="bold"
            color={"secondary"}
            fontSize={32}
          >
            <Typography
              fontFamily={"indie flower"}
              fontWeight={400}
              variant="span"
              fontSize={"1rem"}
            >
              &lt;span&gt;
            </Typography>
            {t("home.descrip2")}
            <Typography
              fontFamily={"indie flower"}
              fontWeight={400}
              variant="span"
              fontSize={"1rem"}
            >
              &lt;/span&gt;
            </Typography>
          </Typography>
        </Typography>
        <Typography
          fontFamily={"indie flower"}
          fontWeight={400}
          variant="span"
          fontSize={"1rem"}
        >
          &lt;/p&gt;
        </Typography>
        {/* <Typography
          variant="span"
          fontWeight="bold"
          color={"white"}
          fontSize={32}
        >
          {t("home.descrip3")}
        </Typography> */}
        <Typography
          fontFamily={"indie flower"}
          variant="span"
          fontSize={"1rem"}
        >
          &lt;div&gt;
        </Typography>
        <Grid
          container
          component="div"
          display="flex"
          justifyContent="center"
          gap={2}
          marginTop={2}
        >
          <Grid item xs={5} variant="div">
            <Typography
              fontFamily={"indie flower"}
              variant="span"
              fontSize={"1rem"}
            >
              &lt;button&gt;
            </Typography>
            <Button
              variant="outlined"
              sx={{ width: "15em", border: "2px solid white" }}
              color="white"
            >
              Contacto
            </Button>
            <Typography
              fontFamily={"indie flower"}
              variant="span"
              fontSize={"1rem"}
            >
              &lt;/button&gt;
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography
              fontFamily={"indie flower"}
              variant="span"
              fontSize={"1rem"}
            >
              &lt;button&gt;
            </Typography>
            <Button variant="contained" sx={{ width: "15em" }} color="terciary">
              CV
            </Button>
            <Typography
              fontFamily={"indie flower"}
              variant="span"
              fontSize={"1rem"}
            >
              &lt;/button&gt;
            </Typography>
          </Grid>
        </Grid>
        <Typography
          fontFamily={"indie flower"}
          variant="span"
          fontSize={"1rem"}
        >
          &lt;/div&gt;
        </Typography>
      </Grid>
      <Grid item xs={10} lg={5}></Grid>
      <Grid item lg={1}></Grid>
    </Grid>
  );
};
