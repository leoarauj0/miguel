/* eslint-disable react/no-unescaped-entities */
import TabPane from "antd/lib/tabs/TabPane";
import { SubTitulo, Texto, Titulo } from "./styles";
import Oracao from "./oracao";

export default function Dia2() {
  return (
    <>
      <br />
      <Titulo style={{ textAlign: "center" }}>Dia 16 de Agosto</Titulo>
      <br />
      <Oracao />
      <br />
      <br />
      <Titulo style={{ textAlign: "center" }}>Evangelho: Mt 18,15-20</Titulo>
      <Texto style={{ textAlign: "center" }}>
        Naquele tempo, disse Jesus aos seus discípulos:
        <br /> "Se o teu irmão pecar contra ti, vai corrigi-lo, mas em
        particular, a sós contigo! Se ele te ouvir, tu ganhaste o teu irmão.
        <br /> Se ele não te ouvir, toma contigo mais uma ou duas pessoas, para
        que toda a questão seja decidida sob a palavra de duas ou três
        testemunhas.
        <br /> Se ele não vos der ouvido, dize-o à Igreja.
        <br /> Se nem mesmo à Igreja ele ouvir, seja tratado como se fosse um
        pagão ou um pecador público.
        <br /> Em verdade vos digo, tudo o que ligardes na terra será ligado no
        céu, e tudo o que desligardes na terra será desligado no céu.
        <br /> De novo, eu vos digo: se dois de vós estiverem de acordo na terra
        sobre qualquer coisa que quiserem pedir, isto vos será concedido por meu
        Pai que está nos céus.
        <br />
        Pois onde dois ou três estiverem reunidos em meu nome eu estou ali, no
        meio deles".
        <br />
        <br /> Palavra da Salvação, glória a vós Senhor.
        <br />
        <br />
      </Texto>
      <SubTitulo style={{ textAlign: "center" }}>Para meditar:</SubTitulo>
      <Texto style={{ textAlign: "center" }}>
        No evangelho do dia, Jesus aborda como lidar com situações em que alguém
        peca contra nós. <br />
        Ele nos aconselha a resolver primeiramente em particular, depois
        envolver outras pessoas se necessário, e, em última instância, levar o
        assunto à igreja. <br />
        Isso nos ensina a importância de relevar pequenas picuinhas e não tornar
        tudo uma questão grave que mereça atenção da comunidade. <br />
        Devemos evitar querer que todos sintam o mesmo que nós sobre a pessoa
        que nos feriu, permitindo que ela seja bem falada por outros, e aprender
        a soltar os problemas e seguir em frente, mesmo que doa. <br />
        Esse processo envolve perdão, correção, soltura e esquecimento, com
        oração e sabedoria de pessoas experientes, lembrando que algumas vezes,
        mesmo com as melhores intenções, as pessoas podem agravar as situações
        ao invés de ajudar.
        <br />
      </Texto>
      <br />
    </>
  );
}
