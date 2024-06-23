import * as React from "react";
import { Paper, Box, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ChartOverview() {
    const barChartOptions = {
        chart: {
            type: "bar",
            height: 290,
        },
        plotOptions: {
            bar: {
                borderRadius: 3,
                horizontal: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ["1 Semestre", "2 Semestre", "3 Semestre", "4 Semestre"],
        },
    };
    const barChartSeries = [
        { name: "Series 1", data: [35, 44, 24, 34] },
        { name: "Series 2", data: [51, 6, 49, 30] },
        { name: "Series 3", data: [15, 25, 30, 50] },
        { name: "Series 4", data: [60, 50, 15, 25] },
    ];

    const pieChartOptions = {
        chart: {
            type: "pie",
        },
        labels: ["Adoções em ONGs", "Adoções de municipais", "Devoluções", "Abandonos", "Denúncias"],
    };
    const pieChartSeries = [10, 15, 20, 25, 30];

    const lineChartOptions = {
        chart: {
            type: "line",
            height: 300,
        },
        xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
    };
    const lineChartSeries = [{ name: "Series 1", data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8] }];

    const gaugeChartOptions = {
        chart: {
            type: "radialBar",
            height: 250,
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: "22px",
                    },
                    value: {
                        fontSize: "40px",
                    },
                },
            },
        },
        labels: ["Resgates"],
    };
    const gaugeChartSeries = [60];

    return (
        <>
            <Box>
                <Paper elevation={3} sx={{ height: 800 }}>
                    <Grid container spacing={2}>
                        <Grid item sm={6} md={6} lg={6}>
                            <Typography sx={{ ml: 3 }} variant="h5">
                                Taxa de adoções em registro
                            </Typography>
                            <ReactApexChart options={barChartOptions} series={barChartSeries} type="bar" height={290} />
                        </Grid>
                        <Grid item sm={6} md={6} lg={6}>
                            <ReactApexChart options={pieChartOptions} series={pieChartSeries} type="pie" height={200} />
                        </Grid>
                        <Grid item sm={6} md={6} lg={6} xl={6}>
                            <Typography sx={{ ml: 3 }} variant="h5">
                                ONGs utilizando o sistema CNA
                            </Typography>
                            <ReactApexChart options={lineChartOptions} series={lineChartSeries} type="line" height={300} />
                        </Grid>
                        <Grid item sm={6} md={6} lg={6} xl={6}>
                            <Typography sx={{ ml: 3 }} variant="h5">
                                Resgates registrados
                            </Typography>
                            <ReactApexChart options={gaugeChartOptions} series={gaugeChartSeries} type="radialBar" height={250} />
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </>
    );
}
