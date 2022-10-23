import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "game"])),
        },
    };
}

export default function Game() {
    const { t } = useTranslation("game");

    return (
        <div>
            <Head>
                <title>Snake Game Dapp | Game</title>
                <link rel="icon" href="/snake-icon.ico" />
            </Head>
            <div>
                <h1 className="text-5xl font-bold text-lime-600 text-center  pr-10 pt-5">
                    {t("game:title")}
                </h1>
            </div>
        </div>
    );
}