/* eslint-disable react/no-unescaped-entities */
import TabPane from "antd/lib/tabs/TabPane";
import { SubTitulo, Texto, Titulo } from "./styles";
import Oracao from "./oracao";

export default function Dia1() {
  return (
    <>
      <br />
      <Titulo style={{ textAlign: "center" }}>Dia 15 de Agosto</Titulo>
      <br />
      <Oracao />
      <br />
      <br />
      <Titulo style={{ textAlign: "center" }}>
        Evangelho: Mt 18,1-5.10.12-14
      </Titulo>
      <Texto style={{ textAlign: "center" }}>
        Naquele tempo: Os discípulos aproximaram-se de Jesus e perguntaram:{" "}
        <br />
        'Quem é o maior no Reino dos Céus?'
        <br /> Jesus chamou uma criança, colocou-a no meio deles e disse: <br />
        'Em verdade vos digo, se não vos converterdes, e não vos tornardes como
        crianças, não entrareis no Reino dos Céus.
        <br />
        Quem se faz pequeno como esta criança, esse é o maior no Reino dos Céus.{" "}
        <br />E quem recebe em meu nome uma criança como esta, é a mim que
        recebe. <br />
        Não desprezeis nenhum desses pequeninos, pois eu vos digo que os seus
        anjos nos céus vêem sem cessar a face do meu Pai que está nos céus.{" "}
        <br />
        Que vos parece? <br />
        Se um homem tem cem ovelhas, e uma delas se perde, não deixa ele as
        noventa e nove nas montanhas, para procurar aquela que se perdeu?
        <br /> Em verdade vos digo, se ele a encontrar, ficará mais feliz com
        ela, do que com as noventa e nove que não se perderam. <br />
        Do mesmo modo, o Pai que está nos céus não deseja que se perca nenhum
        desses pequeninos'.
        <br />
        <br /> Palavra da Salvação, glória a vós Senhor.
        <br />
        <br />
      </Texto>
      <SubTitulo style={{ textAlign: "center" }}>Para meditar:</SubTitulo>
      <Texto style={{ textAlign: "center" }}>
        Jesus aborda o tema do relacionamento na comunidade cristã, explorando
        questões como o perdão e a busca por importância no reino dos céus. Ele
        inicia com a pergunta de um adulto ambicioso sobre quem é o maior no
        reino celestial, destacando a inadequação dessa mentalidade e
        enfatizando que, embora todos sejam amados por Deus, não somos iguais
        aos olhos divinos. Jesus utiliza a figura da criança como um modelo de
        virtude, incentivando a conversão e a adoção da humildade infantil como
        um caminho para alcançar a plenitude da fé e da alegria espiritual. A
        mensagem central é que a busca por grandeza deve ser substituída pela
        busca por virtudes e pela simplicidade da infância espiritual para
        experimentar a verdadeira alegria na fé cristã.
      </Texto>
      <br />
    </>
  );
}
