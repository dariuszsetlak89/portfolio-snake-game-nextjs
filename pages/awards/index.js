import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "awards"])),
        },
    };
}

export default function Awards() {
    const { t } = useTranslation("awards");

    return (
        <div>
            <Head>
                <title>Snake Game Dapp | Awards</title>
                <link rel="icon" href="/snake-icon.ico" />
            </Head>
            <div>
                <h1 className="text-5xl font-bold text-lime-600 text-center pr-10 pt-5">
                    {t("awards:title")}
                </h1>
            </div>
        </div>
    );
}