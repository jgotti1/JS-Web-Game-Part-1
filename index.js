function newimage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position ='fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newitem (url, left, bottom){
 let object = newimage (url, left, bottom)
 object.addEventListener('dblclick', function() {
    object.remove() })
 }
 



/*let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)
sword.addEventListener('click', function(){
    sword.remove()
})
/*let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pinetree = document.createElement('img')
pinetree.src = 'assets/pine-tree.png'
pinetree.style.position ='fixed'
pinetree.style.left = '450px'
pinetree.style.bottom = '200px'
document.body.append(pinetree)
*/

newimage('assets/pine-tree.png', 450, 200)
newimage('assets/green-character.gif', 100, 100)
newimage('assets/tree.png', 200, 300)
newimage('assets/pillar.png', 350, 100)
newimage('assets/crate.png', 150, 200)
newimage('assets/well.png', 500, 425)
newitem('assets/sheild.png', 175, 185)
newitem('assets/staff.png', 600, 100)
