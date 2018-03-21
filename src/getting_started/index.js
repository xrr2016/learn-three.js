const scene = new THREE.Scene()
const assept = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera(75, assept, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff })
const cube = new THREE.Mesh(geometry, material)

scene.add(cube)
camera.position.z = 5

const anime = function() {
  requestAnimationFrame(anime)

  cube.rotation.x += 0.1
  cube.rotation.y += 0.1

  renderer.render(scene, camera)
}

anime()
