const cube_points = [ //outer to inner, clockwise from top left
    {x: -0.25, y: 0.25, z: 0.25}, 
    {x: 0.25, y: 0.25, z: 0.25},
    {x: 0.25, y: -0.25, z: 0.25},
    {x: -0.25, y: -0.25, z: 0.25},

    {x: -0.25, y: 0.25, z: -0.25}, 
    {x: 0.25, y: 0.25, z: -0.25},
    {x: 0.25, y: -0.25, z: -0.25},
    {x: -0.25, y: -0.25, z: -0.25},
]

const fs = [
    // each array represents the set of lines to be drawn from element i -> i + 1 
    // (code implementation goes from i <- i -1 to prevent overflow)
    // lines are drawn for the closer surface of the cube, then further surface, then are joined together
    [0, 1, 2, 3],
    [3, 0],
    [4, 5, 6, 7],
    [7, 4],
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7],
]