import { useCallback, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert, Avatar, Box, Button, Link, Stack, TextField, Typography, FormControlLabel, Checkbox, Grid, Paper } from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import ChartOverview from "src/components/overview/ChartOverview";
import { Layout as MainLayout } from "src/layouts/main/layout";

const Page = () => {
    return (
        <>
            <Head>
                <title>Home | CNA</title>
            </Head>
            <div>
                <ChartOverview />
            </div>
        </>
    );
};
Page.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Page;
