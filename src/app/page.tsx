import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "../components/header/Header";
import { CardSection } from "../components/CardSection/CardSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header title="Squirtle" />
      <main className={styles.main}>
        <section className={styles.cardSection}>
          <CardSection title="Informações sobre Squirtle">
            <div className={styles.cardImages}>
              <img className={`${styles.squirtleImg} ${styles.squirtleImg1}`} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="pokemon"></img>
              <img className={`${styles.squirtleImg} ${styles.squirtleImg2}`} src="https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png" alt="pokemon"></img>
            </div>

            <p>Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.</p>
          </CardSection>

          <CardSection title="Características">
            <p>Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.</p>
          </CardSection>

          <CardSection title="Curiosidades">
            <ul className={styles.cardUl}>
              <li className={styles.cardLi}>Squirtle é um dos Pokémon mais populares e adoráveis.</li>
              <li className={styles.cardLi}>Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).</li>
              <li className={styles.cardLi}>Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.</li>
            </ul>
          </CardSection>

          <CardSection title="Squirtle: O Amigo Aquático">
            <p>Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.
              <br />
              <br />

              Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.
              <br />
              <br />

              Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.</p>
          </CardSection>

          <CardSection title="Recursos adicionais">
            <ul className={styles.recursos}>
              <li><a href="https://www.pokemon.com/br/pokedex/squirtle">Pokédex - Squirtle</a></li>
              <li><a href="https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)">Bulbapedia - Squirtle</a></li>
            </ul>
          </CardSection>

          <CardSection title="Evoluções">
            <ul className={styles.evolutionList}>
              <li>
                <Link href={'/evolucoes?evolution=squirtle'} className={styles.evolutionLi}>
                  <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"></img>
                  <p>1. Squirtle</p>
                </Link>
              </li>

              <li className={styles.evolutionLi}>
                <Link href={'/evolucoes?evolution=wartortle'}>
                  <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"></img>
                  <p>2. Wartortle</p>
                </Link>
              </li>

              <li className={styles.evolutionLi}>
                <Link href={'/evolucoes?evolution=blastoise'}>
                  <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"></img>
                  <p>3. Blastoise</p>
                </Link>
              </li>
            </ul>
          </CardSection>
        </section>
      </main>
    </>
  );
}
