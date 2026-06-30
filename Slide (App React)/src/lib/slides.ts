import Cover from "@/components/slides/decks/01-cover";
import Projeto from "@/components/slides/decks/02-projeto";
import Baseline from "@/components/slides/decks/03-baseline";
import Smells from "@/components/slides/decks/04-smells";
import Melhorou from "@/components/slides/decks/05-melhorou";
import Piorou from "@/components/slides/decks/06-piorou";
import Analise from "@/components/slides/decks/07-analise";
import Conclusao from "@/components/slides/decks/08-conclusao";

export const slides = [
  { title: "Capa", Component: Cover },
  { title: "O projeto", Component: Projeto },
  { title: "Ponto de partida", Component: Baseline },
  { title: "Code smells", Component: Smells },
  { title: "O que melhorou", Component: Melhorou },
  { title: "O preço cobrado", Component: Piorou },
  { title: "Leitura crítica", Component: Analise },
  { title: "Aprendizados", Component: Conclusao },
];