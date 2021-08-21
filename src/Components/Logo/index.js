import logo from  "../../logo.svg"
import { LogoStyled } from "./style"

export const Logo = () => {
    return (
        <LogoStyled>
            <img src = {logo} alt = "logo" />
        </LogoStyled>
    )
}
