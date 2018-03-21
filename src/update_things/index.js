const scene = new THREE.Scene()
const assept = window.innerWidth / window.innerHeight
const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(45, assept, 0.1, 10000)

camera.position.set(0, 0, 1000)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

let drawCount = 2
const MAX_POINTS = 1000
const geometry = new THREE.BufferGeometry()
const positions = new Float32Array(MAX_POINTS * 3)

geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3))
geometry.setDrawRange(0, drawCount)

const material = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 })
const line = new THREE.Line(geometry, material)
scene.add(line)

updatePositions()

function render() {
  renderer.render(scene, camera)
}

function updatePositions() {
  let positions = line.geometry.attributes.position.array

  let x = (y = z = index = 0)

  for (let i = 0; i < MAX_POINTS; i++) {
    positions[index++] = x
    positions[index++] = y
    positions[index++] = z

    x += (Math.random() - 0.5) * 30
    y += (Math.random() - 0.5) * 30
    z += (Math.random() - 0.5) * 30
  }
}

function animate() {
  requestAnimationFrame(animate)
  drawCount = (drawCount + 1) % MAX_POINTS
  line.geometry.setDrawRange(0, drawCount)

  if (drawCount === 0) {
    updatePositions()
    line.geometry.attributes.position.needsUpdate = true
    line.material.color.setHSL(Math.random(), 1, 0.5)
  }

  render()
}

animate()
