const scene = new THREE.Scene()
const assept = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera(45, assept, 1, 600)
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
camera.position.set(0, 0, 200)
camera.lookAt(new THREE.Vector3(0, 0, 0))

const material = new THREE.LineBasicMaterial({ color: 0xffffff })

const geometry = new THREE.Geometry()
geometry.vertices.push(new THREE.Vector3(-50, 0, 0))
geometry.vertices.push(new THREE.Vector3(0, 50, 0))
geometry.vertices.push(new THREE.Vector3(50, 0, 0))

const line = new THREE.Line(geometry, material)

scene.add(line)

renderer.render(scene, camera)

console.log('111')
