/* eslint-disable react/no-unescaped-entities */
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
import dayjs from "dayjs";
import Dia1 from "@/modules/1";
import Oracao from "@/modules/oracao";
import Dia2 from "@/modules/2";
import Dia3 from "@/modules/3";
import Dia4 from "@/modules/4";
import Dia5 from "@/modules/5";
import Dia6 from "@/modules/6";

const inter = Inter({ subsets: ["latin"] });
// const { useToken } = theme;

export default function Home() {
  // const { token } = useToken();

  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [mobile, setMobile] = useState<boolean>(false);

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
            backgroundColor: "#000000",
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
                defaultActiveKey={dayjs().format("DD-MM")}
                // defaultActiveKey={
                //   tabId !== undefined ? tabId?.toString() : `${Preso}`
                // }
                // onClick={() => setTab("Preso")}
                // onTabClick={(key) => {
                //   setTab(key);
                // }}
                // style={{ fontSize: "15px", fontWeight: "500" }}
              >
                <TabPane tab="Dia 1" key="15-08">
                  <Dia1 />
                </TabPane>

                <TabPane tab="Dia 2" key="16-08">
                  <Dia2 />
                </TabPane>

                <TabPane tab="Dia 3" key="17-08">
                  <Dia3 />
                </TabPane>
                <TabPane tab="Dia 4" key="18-08">
                  <Dia4 />
                </TabPane>
                <TabPane tab="Dia 5" key="19-08">
                  <Dia5 />
                </TabPane>
                <TabPane tab="Dia 6" key="20-08">
                  <Dia6 />
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
            <Image
              width={20}
              //height={400}
              src={Logo}
              alt={"Logo"}
            />
            <TextoSmall>Comunidade Católica Ebenezer</TextoSmall>
          </div>
        </Container>
      </>
    );
  }
}
