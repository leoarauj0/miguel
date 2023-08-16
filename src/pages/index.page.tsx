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
                  <>{Oracao}</>
                  <br />
                </TabPane>

                <TabPane tab="Dia 2" key="Dia 2">
                  <br />
                  <>{Oracao}</>
                  <br />
                </TabPane>

                <TabPane tab="Dia 3" key="Dia 3">
                  <br />
                  <>{Oracao}</>
                  <br />
                </TabPane>
                <TabPane tab="Dia 4" key="Dia 4">
                  <br />
                  <>{Oracao}</>
                  <br />
                </TabPane>
                <TabPane tab="Dia 5" key="Dia 5">
                  <br />
                  <>{Oracao}</>
                  <br />
                </TabPane>
                <TabPane tab="Dia 6" key="Dia 6">
                  <br />
                  <>{Oracao}</>
                  <br />
                </TabPane>
                <TabPane tab="Dia 7" key="Dia 7">
                  <br />
                  <>{Oracao}</>
                  <br />
                </TabPane>
                <TabPane tab="Dia 8" key="Dia 8">
                  <br />
                  <>{Oracao}</>
                  <br />
                </TabPane>
                <TabPane tab="Dia 9" key="Dia 9">
                  <br />
                  <>{Oracao}</>
                  <br />
                </TabPane>
                <TabPane tab="Dia 10" key="Dia 10">
                  <br />
                  <>{Oracao}</>
                  <br />
                </TabPane>
                <TabPane tab="Dia 11" key="Dia 11">
                  <br />
                  <>{Oracao}</>
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
