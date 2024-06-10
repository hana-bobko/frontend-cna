import * as React from "react";
import { BarChart, PieChart, LineChart, Gauge, gaugeClasses } from "@mui/x-charts";
import { Paper, Box, Grid, Typography } from "@mui/material";

export default function ChartOverview() {
    const settings = {
        width: 200,
        height: 200,
        value: 60,
    };
    return (
        <>
            <Box>
                <Paper elevation={3} sx={{ height: 800 }}>
                    <Grid container spacing={2}>
                        <Grid item sm={6} md={6} lg={6}>
                            <Typography sx={{ ml: 3 }} variant="h5">
                                Taxa de adoções em registro
                            </Typography>
                            <BarChart
                                series={[{ data: [35, 44, 24, 34] }, { data: [51, 6, 49, 30] }, { data: [15, 25, 30, 50] }, { data: [60, 50, 15, 25] }]}
                                height={290}
                                xAxis={[{ data: ["1 Semestre", "2 Semestre", "3 Semestre", "4 Semestre"], scaleType: "band" }]}
                                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                                borderRadius={3}
                            />
                        </Grid>
                        <Grid item sm={6} md={6} lg={6}>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 10, label: "Adoções em ONGs" },
                                            { id: 1, value: 15, label: "Adoções de municipais" },
                                            { id: 2, value: 20, label: "Devoluções" },
                                            { id: 2, value: 25, label: "Abandonos" },
                                            { id: 2, value: 30, label: "Denúncias" },
                                        ],

                                        innerRadius: 30,
                                        outerRadius: 100,
                                        paddingAngle: 5,
                                        cornerRadius: 5,
                                        startAngle: -90,
                                        endAngle: 180,
                                        cx: 150,
                                        cy: 150,
                                    },
                                ]}
                            />
                        </Grid>
                        <Grid item sm={6} md={6} lg={6} xl={6}>
                            <Typography sx={{ ml: 3 }} variant="h5">
                                ONGs utilizando o sistema CNA
                            </Typography>
                            <LineChart
                                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
                                series={[
                                    {
                                        data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                                        showMark: ({ index }) => index % 2 === 0,
                                        color: "#06AED4",
                                    },
                                ]}
                                width={700}
                                height={300}
                            />
                        </Grid>
                        <Grid item sm={6} md={6} lg={6} xl={6}>
                            <Typography sx={{ ml: 3 }} variant="h5">
                                Resgates registrados
                            </Typography>
                            <Gauge
                                {...settings}
                                cornerRadius="50%"
                                sx={(theme) => ({
                                    [`& .${gaugeClasses.valueText}`]: {
                                        fontSize: 40,
                                    },
                                    [`& .${gaugeClasses.valueArc}`]: {
                                        fill: "#06AED4",
                                    },
                                    [`& .${gaugeClasses.referenceArc}`]: {
                                        fill: theme.palette.text.light,
                                    },
                                })}
                                width={600}
                                height={250}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </>
    );
}
