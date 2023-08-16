import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import pt_Br from "antd/lib/locale/pt_BR";
import theme from "@/shared/theme";
import { ConfigProvider } from "antd/lib";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider
        locale={pt_Br}
        theme={{
          token: {
            colorIcon: `${theme.colors.colorPrimary}`,
            colorPrimary: `${theme.colors.colorPrimary}`,
          },
          components: {
            DatePicker: {
              borderRadius: 15,
              fontFamily: theme.fonts.family.principal,
              fontSize: theme.fonts.sizes.small,
            },
            Select: {
              borderRadius: 15,
              fontFamily: theme.fonts.family.principal,
              fontSize: theme.fonts.sizes.small,
            },
            Input: {
              borderRadius: 15,
              fontFamily: theme.fonts.family.principal,
              fontSize: theme.fonts.sizes.small,
            },
            InputNumber: {
              borderRadius: 15,
              fontFamily: theme.fonts.family.principal,
              fontSize: theme.fonts.sizes.small,
            },
            Button: {
              borderRadius: 15,
              fontFamily: "Lexend, sans-serif",
              fontSize: theme.fonts.sizes.small,
            },
            Table: {
              borderRadius: 15,
            },

            Tabs: {
              borderRadius: 15,
              inkBarColor: "#9a2300",
              itemActiveColor: "#9a2300",
              itemHoverColor: "#9a2300",
              itemSelectedColor: "#9a2300",
            },
          },
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider>
    </ThemeProvider>
  );
}
