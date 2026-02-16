console.log(game)
game.width = 1600
game.height = 1600

const ctx = game.getContext("2d")
console.log(ctx)

const BACKGROUND = "#101010"
const FOREGROUND = "#90EE90"

function clear(){
    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0, 0, game.width, game.height);
}

function point({x, y}) {
    const s = 25
    ctx.fillStyle = FOREGROUND;
    ctx.fillRect(x - s/2, y - s/2 , s, s);
}

function screen(p) {
    //to normalize our screen from whatever is the assigned width and height, into our mathematical reference of a 2 by 2 square centered in the origin
    //set of transformations: -1 to 1 -> 0 to 2 -> 0 to 1 -> 0 to w/h
    return {
        x: (p.x + 1)/2*game.width,
        y: (1 - (p.y + 1)/2)*game.height
    }
}

const FPS= 60  //frames per second
const TIME = 4 //time to rotate 2pi degrees
const dt = 1000/FPS //ms per frame
const dx = Math.PI*2/(FPS*TIME) //rotation per frame
const dz = 1 //change in z axis

let angle = 0;

function line(p1, p2) {
    ctx.lineWidth = 15
    ctx.strokeStyle = FOREGROUND
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y)
    ctx.lineTo(p2.x, p2.y)
    ctx.stroke()
}

function frame() {
    angle += dx
    clear()

    //draws each point
    // for (const p of cube_points) { 
    //     const a = screen(project(translate_z(rotate_zx(p, angle), dz)))
    //     point(a)
    // }

    for (const f of fs) { //draws line from each point
        for (let i = 1; i < f.length; ++i) {
            const a = screen(project(translate_z(rotate_zx(cube_points[f[i-1]], angle), dz)))
            const b = screen(project(translate_z(rotate_zx(cube_points[f[(i)]], angle), dz)))
            line(a, b)
        }
    }
    setTimeout(frame, dt)
}
setTimeout(frame, dt)