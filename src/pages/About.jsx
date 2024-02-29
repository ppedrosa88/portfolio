import { Divider, Grid, Typography } from "@mui/material";

export const About = () => {
  return (
    <Grid container xs={12} justifyContent={"center"}>
      <Grid item xs={10} margin={"30px 0 30px 0"}>
        <Typography variant="h4">¿Quien soy?</Typography>
        <Divider />
      </Grid>
      <Grid
        container
        item
        xs={10}
        display={"flex"}
        justifyContent={"center"}
        gap={10}
      >
        <Grid item xs={10} lg={5}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          fugit numquam hic eaque ad deleniti dignissimos quaerat est inventore
          in perferendis odio aspernatur magni saepe, eveniet sunt assumenda
          quibusdam libero.{" "}
        </Grid>
        <Grid item xs={10} lg={5}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, nam
          laudantium. Est ex rerum maxime doloremque cumque natus dignissimos
          harum nisi ipsam totam tempora voluptas hic suscipit, ipsa reiciendis.
          Alias?
        </Grid>
      </Grid>
    </Grid>
  );
};
