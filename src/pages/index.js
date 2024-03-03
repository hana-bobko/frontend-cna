import { Box, Container, Typography } from "@mui/material";

function Page() {
  return (
    <Container>
      <Box>
        <Typography>Página inicial</Typography>
      </Box>
    </Container>
  );
}

Page.getLayout = (page) => <>{page}</>;

export default Page;
