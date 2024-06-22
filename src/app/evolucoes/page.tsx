'use client'

import { EvolutionCard } from "@/components/EvolutionCard/EvolutionCard";
import { Header } from "@/components/header/Header";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from './page.module.css';

export default function Evolucao() {
    const params = useSearchParams();
    const [pageTitle, setPageTitle] = useState('');
    const [urls, setUrls] = useState<string[]>([]);
    const [cont, setCont] = useState(0);
    const [img, setImg] = useState('');


    const getParam = (param: string) => {
        return params.get(param);
    }

    const callApi = async () => {
        try {
            const fetchRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${getParam('evolution')}`);
            const data = await fetchRes.json();
            const object = Object.values(data.sprites);
            let urlArray = object.filter((el) => typeof el === 'string');
            console.log(urlArray)
            setUrls([urlArray[2], urlArray[3], urlArray[0], urlArray[1]] as string[]);
        } catch (error) {
            console.log(error);
        }
    }

    const loadPageTitle = () => {
        const title = getParam('evolution');
        if (title) {
            setPageTitle(title);
        } else {
            setPageTitle("Erro");
        }
    }

    function setImage(urls: string[], count: number) {
        setImg(urls[cont]);
    }

    function changeCont() {
        cont >= urls.length - 1 ? setCont(0) : setCont(cont + 1);
    }

    const onclick = () => {
        changeCont();
    }

    useEffect(() => {
        loadPageTitle();
        callApi()
    }, []);

    useEffect(() => {
        setImage(urls, cont);
    }, [urls, cont]);

    return (
        <>
            <Header title={pageTitle}></Header>
            <main className={styles.main}>
                <EvolutionCard img={img} onclick={onclick} ></EvolutionCard>
            </main>
        </>
    );
}
