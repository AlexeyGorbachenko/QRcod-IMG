const canvasEl = document.querySelector('#canvas');
const formEl = document.querySelector('.form');
const textInput = formEl.querySelector('[name="text"]');
const fileInput = formEl.querySelector('[name="logo"]');

formEl.addEventListener('submit', generateQrCode);

function generateQrCode(e)   {
    e.preventDefault();

    const data = textInput.value;
    const reader = new FileReader();
    const fileLink = fileInput.files[0];
    let qrcode;

    reader.addEventListener("load", function () {
        qrcode = new QrCodeWithLogo({
            canvas: canvasEl,
            content: data,
            width: 380,
            logo: {
                scr: reader.result
            }
        });

        qrcode.toCanvas();        
    }, false);

    if (fileLink)   {
        reader.readAsDataURL(fileLink);
    } else {
        // Если файл недобавили

        qrcode = new QrCodeWithLogo({
            canvas: canvasEl,
            content: data,
            width: 380,
        });

        qrcode.toCanvas();        
    }

    console.log({ data, fileLink });
}

