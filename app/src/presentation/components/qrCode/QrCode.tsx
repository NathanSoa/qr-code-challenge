import { QrCodeContainer } from "./Styles";
import Code from '../../../assets/images/image-qr-code.png'

export function QrCode() {
    return (
        <QrCodeContainer>
            <img src={Code} alt="qr-code" title="qr-code"/>
            <h1>Improve you front-end skills by building projects</h1>
            <span>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</span>
        </ QrCodeContainer>
    )
}