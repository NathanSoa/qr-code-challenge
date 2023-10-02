import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./presentation/styles/Theme";
import { GlobalTheme } from "./presentation/styles/Global";
import { QrCode } from "./presentation/components/qrCode";

export function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <QrCode />
        <GlobalTheme />
      </ ThemeProvider>
    </>
  )
}
