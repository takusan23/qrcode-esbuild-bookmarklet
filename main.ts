import QRCode from "qrcode"

// QRコードを描画する Canvas を用意
const qrCodeCanvas = document.createElement('canvas')

// 真ん中に出す
// https://stackoverflow.com/questions/2005954/
qrCodeCanvas.style.position = 'fixed'
qrCodeCanvas.style.top = '50%'
qrCodeCanvas.style.left = '50%'
qrCodeCanvas.style.transform = 'translate(-50%, -50%)'
// z-index は一番上に出てきてほしいので、あんまり良くないかもだけど
qrCodeCanvas.style.zIndex = 'calc(infinity)'

// 追加する
document.body.appendChild(qrCodeCanvas)

// クリックで消したい
qrCodeCanvas.onclick = () => {
    document.body.removeChild(qrCodeCanvas)
}

// QRコードを生成する
QRCode.toCanvas(qrCodeCanvas, location.href, (error) => {
    if (error) {
        alert('QRコードの生成に失敗しました')
    }
})
