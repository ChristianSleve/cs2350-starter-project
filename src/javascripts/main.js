//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"


function render() {
    let z = document.querySelector('canvas')
    if (z.getContext) {
        let x = z.getContext('2d')
        x.clearRect(0, 0, 800, 800)

        //Sky
        if (document.getElementById("skyColor")) {
            x.fillStyle = document.getElementById("skyColor").value
            x.fillRect(0, 0, 800, 800)
        }else{
            console.log("Missing skyColor input field")
        }


        //Grass
        if (document.getElementById('grassColor')) {
            let currX = 0
            const maxBW = 20 //max blade width
            const minBW = 7 //min blade width
            const minBH = 50 //min blade height
            const maxBH = 80 //max blade height
            x.fillStyle = document.getElementById('grassColor').value
            x.beginPath()
            x.moveTo(0, 150)
            while (currX < 300) {
                let h = (Math.random() * (maxBH - minBH)) + minBH;
                let w = (Math.random() * (maxBW - minBW)) + minBW;
                x.lineTo(currX + (w / 2), 150 - h);
                x.lineTo(currX + w, 149);
                currX = currX + w;
            }
            x.lineTo(300, 150)
            x.closePath()
            x.fill()
        }else{
            console.log("Missing grassColor input field")
        }

        if (document.getElementById('antColor')) {
            //Ant
            let y = 70
            x.fillStyle = document.getElementById('antColor').value
            let sliderX = Number(document.getElementById('x').value)
            //antenna
            x.beginPath()
            x.moveTo(sliderX, y - 10)
            x.lineTo(sliderX - 10, y - 15)
            x.lineTo(sliderX - 30, y - 20)
            x.lineTo(sliderX - 9, y - 14)

            //head
            x.moveTo(sliderX, y)
            x.ellipse(sliderX, y, 15, 10, 0, 0, 2 * Math.PI, true)
            //midsection
            y = 80
            sliderX += 15
            x.moveTo(sliderX, y)
            x.ellipse(sliderX, y, 15, 5, 0, 0, 2 * Math.PI, true)
            //backsection
            x.ellipse(sliderX + 25, y, 20, 7, 0, 0, 2 * Math.PI, true)
            x.fill()

            //legs
            x.fillStyle = document.getElementById('antColor').value
            x.beginPath()
            x.moveTo(sliderX, y)
            let off = 15
            for (let i = 0; i < 7; i++) {
                x.lineTo(sliderX - (off * 3) + (off * i), y + 20)
                x.lineTo(sliderX, y + 4)
                x.lineTo(sliderX, y)
            }
            x.closePath()
            x.fill()
        }
        else{
            console.log("Missing antColor input field")
        }
    }else{
        console.log("Missing canvas context")
    }
}


document.getElementById('x').onchange = render
document.getElementById('antColor').onchange = render
document.getElementById('grassColor').onchange = render
document.getElementById('skyColor').onchange = render
document.getElementById('reset').onclick = location.reload


document.body.onload = render