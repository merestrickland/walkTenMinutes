function isValidWalk(walk) {

  let originalPosition = [0, 0]
  let n = 1
  let s = -1
  let w = -1
  let e = 1

  // console.log(walk.length === 10)

  if(walk.length === 10){
    walk.map(coordinate => {

        coordinate == 'n' ? (originalPosition[0]++, console.log(originalPosition))
      : coordinate == 's' ? originalPosition[0]--
      : coordinate == 'w' ? originalPosition[1]--
      : coordinate == 'e' ? originalPosition[1]++
      : originalPosition[0]++ })
    
  } else return false

  return (originalPosition[0] === 0 && originalPosition[1] === 0)
}

// //return true
// isValidWalk(['n','s','n','s','n','s','n','s','n','s'])

//return false
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])