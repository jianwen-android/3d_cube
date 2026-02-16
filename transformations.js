function project({x, y, z}){
    //performs 3d to 2d point projection
    const d = 1 //focal distance from observer (origin) to screen
    //this presumes that the z-axis is perpendicular to the screen
    return {
        x: d*x/z,
        y: d*y/z
    }
}

function translate_z({x, y ,z}, dz) {
    return {
        x,
        y,
        z: z + dz
    }
}

function rotate_zx({x, y, z}, angle){
    s = Math.sin(angle)
    c = Math.cos(angle)
    //applies basic rotation transformation
    return {
        x: x*c - z*s,
        y,
        z: x*s + z*c,
    }
}

function rotate_xy({x, y, z}, angle){
    s = Math.sin(angle)
    c = Math.cos(angle)
    //applies basic rotation transformation
    return {
        x: x*c - y*s,
        y: x*s + y*c,
        z
    }
}

function rotate_zy({x, y, z}, angle){
    s = Math.sin(angle)
    c = Math.cos(angle)
    //applies basic rotation transformation
    return {
        x,
        y: y*c - z*s,
        z: y*s + z*c,
    }
}