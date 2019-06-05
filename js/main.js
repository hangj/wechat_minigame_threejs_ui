import * as THREE from './libs/threejs/three.min'
import {Sprite, Text2D} from './libs/threejs/text2d'
import UI from './ui'


export default class Main{
  constructor(){
    this.init()
    this.ui = new UI()

    // add a cube
    let geo = new THREE.BoxGeometry(1, 1, 1)
    let mat = new THREE.MeshNormalMaterial()
    this.mesh = new THREE.Mesh(geo, mat)
    this.scene.add(this.mesh)

    // add text to UI
    let png = new Sprite('images/hero.png', res=>{
      png.position.set(0, - png.height - 50, 0)
    })
    this.ui.add(png)
    

    let arr = ['悠然', '落霞与孤鹜齐飞', '秋水共长天一色', 'https://youran.de', 'YOURAN.DE']
    let getRandomText = () => { return arr[Math.ceil(Math.random() * arr.length - 1)] }

    let text = new Text2D(getRandomText(), { font: '15px Arial', _bgColor: 'rgba(204, 204, 204, 0.5)' })
    this.ui.add(text)
    text.position.set(0, text.height + 80, 1)

    wx.onTouchStart(e=>{
      text.text = getRandomText()
    })


    requestAnimationFrame(this.loop.bind(this))
  }

  init(){
    this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.shadowMap.enabled = true
    this.renderer.autoClear = false

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, .1, 2000)
    this.camera.position.set(0, 0, 10)
    this.camera.lookAt(new THREE.Vector3(0, 0, 0))
  }

  loop(){
    this.update()

    this.renderer.clear()
    this.renderer.render(this.scene, this.camera)
    this.ui.render(this.renderer)

    requestAnimationFrame(this.loop.bind(this))
  }

  update(){
    this.mesh.rotation.x += .01
    this.mesh.rotation.y += .02
  }
}