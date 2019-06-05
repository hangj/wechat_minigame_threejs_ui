import * as THREE from './libs/threejs/three.min'

let instance

export default class UI {
  constructor(){
    if(instance) return instance
    instance = this

    let w = window.innerWidth
    let h = window.innerHeight

    this.scene = new THREE.Scene()
    this.camera = new THREE.OrthographicCamera(w/-2, w/2, h/2, h/-2, 0, 10000)
    this.camera.position.z = 10000
  }

  add(obj){
    return this.scene.add(obj)
  }

  render(renderer) {
    renderer.clearDepth()
    renderer.render(this.scene, this.camera)
  }

}

