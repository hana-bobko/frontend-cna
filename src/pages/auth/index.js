import { useCallback, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useAuth } from "src/hooks/use-auth";
//componentes
import LandingPage from "src/layouts/laddingpage";

const Page = () => {
  return (
    <>
      <Head>
        <title>Login | CNA</title>
      </Head>
      <LandingPage />
    </>
  );
};

Page.getLayout = (page) => <>{page}</>;

export default Page;
