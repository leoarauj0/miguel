import Image from "next/image";
import { Inter } from "next/font/google";

import { useEffect, useState } from "react";

import Background from "@/assets/images/back2.png";
import BackgroundMobile from "@/assets/images/back-mobile.png";
import LogoTitulo from "@/assets/images/titulo-logo.png";
import Logo from "@/assets/images/logo.png";
import {
  Cards,
  Container,
  SubTitulo,
  Texto,
  TextoSmall,
  Titulo,
} from "./styles";
import theme from "@/shared/theme";
import { Tabs } from "antd";
import TabPane from "antd/lib/tabs/TabPane";

const inter = Inter({ subsets: ["latin"] });
// const { useToken } = theme;

export default function Home() {
  // const { token } = useToken();

  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [mobile, setMobile] = useState<boolean>(false);

  const Oracao = (
    <>
      <Titulo style={{ textAlign: "center" }}>
        Oração inicial para a Quaresma
      </Titulo>
      <Texto style={{ textAlign: "center" }}>
        São Miguel Arcanjo, defendei-nos no combate, sede o nosso refúgio contra
        as maldades e ciladas do demônio. <br />
        Ordene-lhe, Deus, instantemente o pedimos. <br />E vós, príncipe da
        milícia celeste, pela virtude divina, precipitai ao inferno satanás e os
        outros espíritos malignos, que andam pelo mundo para perder as almas.{" "}
        <br />
        Amém. <br />
        <br />
        Sacratíssimo Coração de Jesus (3x).
      </Texto>
      <br />

      <br />

      <Titulo style={{ textAlign: "center" }}>
        Ladainha de São Miguel Arcanjo
      </Titulo>
      <Texto style={{ textAlign: "center" }}>
        Senhor, tende piedade de nós. <br />
        Jesus Cristo, tende piedade de nós. <br />
        Senhor, tende piedade de nós.
        <br /> Jesus Cristo, ouvi-nos.
        <br />
        Jesus Cristo, atendei-nos.
        <br /> Pai Celeste, que sois Deus, tende piedade de nós.
        <br /> Filho Redentor do Mundo, que sois Deus, tende piedade de nós.
        <br /> Espírito Santo, que sois Deus, tende piedade de nós.
        <br /> Trindade Santa, que sois um único Deus, tende piedade de nós.
        <br /> Santa Maria, Rainha dos Anjos, rogai por nós.
        <br /> São Miguel, rogai por nós.
        <br /> São Miguel, cheio da graça de Deus, rogai por nós.
        <br /> São Miguel, perfeito adorador do Verbo Divino, rogai por nós.
        <br /> São Miguel, coroado de honra e de glória, rogai por nós.
        <br /> São Miguel, poderosíssimo príncipe dos exércitos do Senhor, rogai
        por nós.
        <br /> São Miguel, porta-estandarte da Santíssima Trindade, rogai por
        nós.
        <br /> São Miguel, guardião do Paraíso, rogai por nós.
        <br /> São Miguel, guia e consolador do povo israelita, rogai por nós.
        <br /> São Miguel, esplendor e fortaleza da Igreja militante, rogai por
        nós.
        <br />
        São Miguel, honra e alegria da Igreja triunfante, rogai por nós.
        <br /> São Miguel, luz dos anjos, rogai por nós.
        <br /> São Miguel, baluarte dos cristãos, rogai por nós.
        <br /> São Miguel, força daqueles que combatem pelo estandarte da cruz,
        rogai por nós.
        <br /> São Miguel, luz e confiança das almas no último momento da vida,
        rogai por nós.
        <br /> São Miguel, socorro muito certo, rogai por nós.
        <br /> São Miguel, nosso auxílio em todas as adversidades, rogai por
        nós.
        <br /> São Miguel, arauto da sentença eterna, rogai por nós.
        <br /> São Miguel, consolador das almas que estão no Purgatório, rogai
        por nós.
        <br /> São Miguel, a quem o Senhor incumbiu de receber as almas que
        estão no Purgatório, rogai por nós.
        <br /> São Miguel, nosso príncipe, rogai por nós.
        <br />
        São Miguel, nosso advogado, rogai por nós.
        <br /> Cordeiro de Deus, que tirais o pecado do mundo, perdoai-nos,
        Senhor.
        <br /> Cordeiro de Deus, que tirais o pecado do mundo, ouvi-nos, Senhor.
        <br />
        Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós,
        Senhor.
        <br />
      </Texto>
    </>
  );

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 768 ? setMobile(true) : setMobile(false);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [mobile]);

  if (width && height) {
    return (
      <>
        <Container
          style={{
            margin: "-8px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Image
              width={width}
              height={height}
              style={{
                zIndex: -999,
                position: "absolute",

                backgroundSize: "cover",
              }}
              src={mobile ? BackgroundMobile : Background}
              alt={"Background"}
            />
            <Image
              // preview={true}
              width={mobile ? 300 : 400}
              style={{ padding: "25px", marginTop: "-5vh" }}
              //height={400}
              // style={{ borderRadius: "15px" }}
              src={LogoTitulo}
              alt={"Logo Titulo"}
            />
            <Cards
              style={{
                width: mobile ? width / 1.15 : width / 1.5,
                height: height / 1.5,
              }}
            >
              <Tabs
                tabBarStyle={{ color: "white", marginLeft: "20px" }}
                // tabPosition={mobile ? "top" : "right"}
                // defaultActiveKey="Preso"
                // defaultActiveKey={
                //   tabId !== undefined ? tabId?.toString() : `${Preso}`
                // }
                // onClick={() => setTab("Preso")}
                // onTabClick={(key) => {
                //   setTab(key);
                // }}
                // style={{ fontSize: "15px", fontWeight: "500" }}
              >
                <TabPane tab="Dia 1" key="Dia 1">
                  <br />
                  <Titulo style={{ textAlign: "center" }}>
                    Dia 15 de Agosto
                  </Titulo>
                  <br />
                  <>{Oracao}</>
                  <br />
                  <br />
                  <Titulo style={{ textAlign: "center" }}>
                    Evangelho: Mt 18,1-5.10.12-14
                  </Titulo>
                  <Texto style={{ textAlign: "center" }}>
                    Jesus aborda o tema do relacionamento na comunidade cristã,
                    explorando questões como o perdão e a busca por importância
                    no reino dos céus. Ele inicia com a pergunta de um adulto
                    ambicioso sobre quem é o maior no reino celestial,
                    destacando a inadequação dessa mentalidade e enfatizando
                    que, embora todos sejam amados por Deus, não somos iguais
                    aos olhos divinos. Jesus utiliza a figura da criança como um
                    modelo de virtude, incentivando a conversão e a adoção da
                    humildade infantil como um caminho para alcançar a plenitude
                    da fé e da alegria espiritual. A mensagem central é que a
                    busca por grandeza deve ser substituída pela busca por
                    virtudes e pela simplicidade da infância espiritual para
                    experimentar a verdadeira alegria na fé cristã.
                  </Texto>
                  <br />
                </TabPane>

                <TabPane tab="Dia 2" key="Dia 2">
                  <br />
                  <Titulo style={{ textAlign: "center" }}>
                    Dia 16 de Agosto
                  </Titulo>
                  <br />
                  <>{Oracao}</>
                  <br />
                  <br />
                  <Titulo style={{ textAlign: "center" }}>
                    Evangelho: Mt 18,15-20
                  </Titulo>
                  <Texto style={{ textAlign: "center" }}>
                    No evangelho do dia, Jesus aborda como lidar com situações
                    em que alguém peca contra nós. Ele nos aconselha a resolver
                    primeiramente em particular, depois envolver outras pessoas
                    se necessário, e, em última instância, levar o assunto à
                    igreja. Isso nos ensina a importância de relevar pequenas
                    picuinhas e não tornar tudo uma questão grave que mereça
                    atenção da comunidade. Devemos evitar querer que todos
                    sintam o mesmo que nós sobre a pessoa que nos feriu,
                    permitindo que ela seja bem falada por outros, e aprender a
                    soltar os problemas e seguir em frente, mesmo que doa. Esse
                    processo envolve perdão, correção, soltura e esquecimento,
                    com oração e sabedoria de pessoas experientes, lembrando que
                    algumas vezes, mesmo com as melhores intenções, as pessoas
                    podem agravar as situações ao invés de ajudar.
                  </Texto>
                  <br />
                </TabPane>

                <TabPane tab="Dia 3" key="Dia 3">
                  <br />
                  <Titulo style={{ textAlign: "center" }}>
                    Dia 17 de Agosto
                  </Titulo>
                  <br />
                  <>{Oracao}</>
                  <br />
                  <br />
                  <Titulo style={{ textAlign: "center" }}>
                    Evangelho: Mt 18,21-19,1
                  </Titulo>
                  <Texto style={{ textAlign: "center" }}>
                    Nesse trecho, Jesus ensina sobre o perdão, usando uma
                    parábola sobre um empregado que deve uma grande quantia ao
                    rei. Esse empregado, representando cada um de nós, recebeu o
                    perdão do rei, mesmo tendo uma dívida impagável. No entanto,
                    ao encontrar um companheiro que lhe devia uma pequena
                    quantia, o empregado se recusa a perdoar, mesmo após ter
                    sido perdoado. Jesus destaca a importância de perdoar
                    sempre, lembrando-nos de que todos temos falhas e
                    necessitamos do perdão divino. Ele nos alerta sobre a
                    necessidade de soltar os ressentimentos e as mágoas, não
                    prendendo os outros a dívidas impossíveis de serem pagas, e
                    nos encoraja a sermos compassivos, já que todos somos
                    companheiros na fragilidade e no pecado, sendo o perdão o
                    ponto de partida na vida cristã.
                  </Texto>
                  <br />
                </TabPane>
                <TabPane tab="Dia 4" key="Dia 4">
                  <br />
                  <Titulo style={{ textAlign: "center" }}>
                    Dia 18 de Agosto
                  </Titulo>
                  <br />
                  <>{Oracao}</>
                  <br />
                  <br />
                  <Titulo style={{ textAlign: "center" }}>
                    Evangelho: Mt 19,3-12
                  </Titulo>
                  <Texto style={{ textAlign: "center" }}>
                    No evangelho do dia, Jesus aborda temas como o celibato, o
                    matrimônio e a vocação humana para o amor. A discussão
                    começa com fariseus questionando sobre a possibilidade de
                    largar a esposa. Jesus destaca que homens e mulheres foram
                    criados para serem adultos, capazes de dar e receber amor. O
                    matrimônio é visto como a união de duas pessoas maduras,
                    dispostas a deixar pai e mãe, buscando uma união verdadeira.
                    Jesus enfatiza a importância da amizade, cumplicidade e alma
                    no matrimônio, alertando que muitos casamentos carecem
                    desses aspectos, sendo excessivamente focados na carne. Ele
                    ressalta que o casamento é uma responsabilidade, com um
                    compromisso de estar juntos na alegria e na tristeza, sendo
                    uma só carne. Além disso, Jesus menciona o celibato,
                    destacando que algumas pessoas escolhem essa vida por amor
                    ao Reino dos Céus, dedicando-se inteiramente a Deus. O
                    matrimônio deve ser um caminho para o Céu, buscando a
                    plenitude do amor divino.
                  </Texto>
                  <br />
                </TabPane>
                <TabPane tab="Dia 5" key="Dia 5">
                  <br />
                  <Titulo style={{ textAlign: "center" }}>
                    Dia 19 de Agosto
                  </Titulo>
                  <br />
                  <>{Oracao}</>
                  <br />
                  <br />
                  <Titulo style={{ textAlign: "center" }}>
                    Evangelho: Mt 19,13-15
                  </Titulo>
                  <Texto style={{ textAlign: "center" }}>
                    No Evangelho de hoje, destaca-se o magnetismo de Jesus em
                    relação às crianças, revelando características como doçura,
                    simplicidade, paciência e alegria. Jesus se deleitava com a
                    espontaneidade das crianças e, ao ensinar que o Reino dos
                    Céus pertence a elas, transmitiu a importância da pureza e
                    humildade presentes em suas atitudes. Devemos questionar o
                    papel dos adultos, pais, irmãos e professores, em permitir
                    que as crianças se aproximem de Jesus. A falta de exemplos
                    de fé e o desinteresse pela religião podem impedir que as
                    crianças sigam um caminho de fé. O autor enfatiza a
                    importância do exemplo dos pais, da participação nas
                    atividades religiosas e do respeito à fé para que as
                    crianças tenham acesso ao Reino de Deus. A criança é vista
                    como símbolo do fraco, do simples e do desprovido de
                    pretensões sociais, representando aqueles prontos para
                    receber o Reino de Jesus. A oração é feita para que a
                    simplicidade e a pureza de coração das crianças sirvam de
                    exemplo para ser fiel a Deus e merecer o Reino dos Céus.
                  </Texto>
                  <br />
                </TabPane>
                <TabPane tab="Dia 6" key="Dia 6">
                  <br />
                  <Titulo style={{ textAlign: "center" }}>
                    Dia 20 de Agosto
                  </Titulo>
                  <br />
                  <>{Oracao}</>
                  <br />
                  <br />
                  <Titulo style={{ textAlign: "center" }}>
                    Evangelho: Lc 1,39-56
                  </Titulo>
                  <Texto style={{ textAlign: "center" }}>
                    O texto aborda a solenidade da Assunção de Nossa Senhora, um
                    momento importante na vida de Maria, em que ela foi elevada
                    ao céu de corpo e alma, recebendo a recompensa prometida
                    àqueles que vivem em Cristo. A morte é considerada o último
                    inimigo a ser destruído, consequência do pecado, e todos
                    morremos devido à natureza decaída. A opção de seguir Cristo
                    é destacada como o caminho para a ressurreição. Paulo fala
                    sobre os que estão em Cristo e morrem, ressuscitando no
                    último dia, quando Cristo retornar. A morte também é vista
                    como a vinda de Cristo para cada indivíduo. Nossa Senhora é
                    ressaltada como imaculada, sem a consequência do pecado, e
                    sua Assunção é explicada como uma ascensão de corpo e alma,
                    resultando na plenitude da ressurreição. O texto afirma que
                    aqueles que morrem não estão dormindo, mas vivos em Deus,
                    cada um na glória ou no castigo, aguardando a ressurreição
                    com o corpo glorioso no último dia. Nossa Senhora e outros
                    santos intercedem por nós, mas apenas Maria já possui o
                    corpo glorioso, enquanto os outros o terão na ressurreição.
                    A ressurreição é vista como um retorno glorioso ou um
                    destino indesejável, dependendo das ações em vida.
                  </Texto>
                  <br />
                </TabPane>
              </Tabs>
            </Cards>
          </div>

          <div
            className="layout"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              justifyContent: "center",
              alignItems: "center",
              background: "transparent",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "5vh",
              backgroundRepeat: "no-repeat",
              marginTop: "-5vh",
            }}
          >
            {/* <img width={150} src={LogoGoverno} /> */}

            <Image
              // preview={true}
              width={20}
              //height={400}
              // style={{ borderRadius: "15px" }}
              src={Logo}
              alt={"LogoGoverno"}
            />
            <TextoSmall>Comunidade Católica Ebenezer</TextoSmall>
          </div>
        </Container>
      </>
    );
  }
}
