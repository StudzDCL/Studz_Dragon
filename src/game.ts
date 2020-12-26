import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script2 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script3 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"
import Script4 from "../58dc566a-2add-4326-b61c-0fdf46903195/src/item"
import Script5 from "../51ff7609-407f-481d-991b-8449ef59b390/src/item"
import Script6 from "../03829f2d-a9ab-4292-aa97-6f51a02b3ba9/src/item"
import Script7 from "../80116ece-2384-437c-b2e6-c856bb212a61/src/item"
import Script8 from "../85cf3207-2792-4349-9938-21fd82ea2168/src/item"
import Script9 from "../185999c0-f441-4130-ba8d-e3c3eafce59c/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(25.40715789794922, 12.159131050109863, 0.46857261657714844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.946615219116211, 5.946615219116211, 5.946615219116211)
})
imageFromURL.addComponentOrReplace(transform2)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(22.707477569580078, 11.611311912536621, 0.4515630602836609),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink.addComponentOrReplace(transform3)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(6.734234809875488, 12.159131050109863, 0.4685748815536499),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.946615219116211, 5.946615219116211, 5.946615219116211)
})
imageFromURL2.addComponentOrReplace(transform4)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(4.043827056884766, 11.611311912536621, 0.4515654444694519),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink2.addComponentOrReplace(transform5)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(18.48130989074707, 15.773839950561523, 0.4685733914375305),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.567676305770874, 3.567676305770874, 3.017524003982544)
})
imageFromURL3.addComponentOrReplace(transform6)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(13.914010047912598, 15.773839950561523, 0.46857377886772156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.567676305770874, 3.567676305770874, 3.017524003982544)
})
imageFromURL4.addComponentOrReplace(transform7)

const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
externalLink3.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(16.935239791870117, 15.237892150878906, 0.45156359672546387),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink3.addComponentOrReplace(transform8)

const externalLink4 = new Entity('externalLink4')
engine.addEntity(externalLink4)
externalLink4.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(31.03038787841797, 11.508976936340332, 3.6602606773376465),
  rotation: new Quaternion(-3.6769259783176605e-15, 0.7160437703132629, -8.535905493545215e-8, -0.6980554461479187),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
externalLink4.addComponentOrReplace(transform9)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(31.108129501342773, 12.097396850585938, 6.340235710144043),
  rotation: new Quaternion(-9.934926730102126e-16, -0.7077084183692932, 8.43654035520558e-8, 0.7065047025680542),
  scale: new Vector3(5.946630001068115, 5.946615219116211, 5.946630001068115)
})
imageFromURL5.addComponentOrReplace(transform10)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(31.108129501342773, 12.097396850585938, 25.192237854003906),
  rotation: new Quaternion(-9.934926730102126e-16, -0.7077084183692932, 8.43654035520558e-8, 0.7065047025680542),
  scale: new Vector3(5.946630954742432, 5.946615219116211, 5.946630954742432)
})
imageFromURL6.addComponentOrReplace(transform11)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(31.108129501342773, 15.546963691711426, 15.528375625610352),
  rotation: new Quaternion(-9.934926730102126e-16, -0.7077084183692932, 8.43654035520558e-8, 0.7065047025680542),
  scale: new Vector3(8.780349731445312, 3.972255229949951, 3.972283124923706)
})
imageFromURL7.addComponentOrReplace(transform12)

const externalLink5 = new Entity('externalLink5')
engine.addEntity(externalLink5)
externalLink5.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(12.49030876159668, 15.237892150878906, 0.4515639543533325),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink5.addComponentOrReplace(transform13)

const externalLink6 = new Entity('externalLink6')
engine.addEntity(externalLink6)
externalLink6.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(31.03038787841797, 11.508976936340332, 22.42397117614746),
  rotation: new Quaternion(-3.6769259783176605e-15, 0.7160437703132629, -8.535905493545215e-8, -0.6980554461479187),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447)
})
externalLink6.addComponentOrReplace(transform14)

const externalLink7 = new Entity('externalLink7')
engine.addEntity(externalLink7)
externalLink7.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(31.03038787841797, 14.980494499206543, 11.423254013061523),
  rotation: new Quaternion(-3.6769259783176605e-15, 0.7160437703132629, -8.535905493545215e-8, -0.6980554461479187),
  scale: new Vector3(1.0000050067901611, 1, 1.0000050067901611)
})
externalLink7.addComponentOrReplace(transform15)

const imageFromURL10 = new Entity('imageFromURL10')
engine.addEntity(imageFromURL10)
imageFromURL10.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(13.672767639160156, 15.952034950256348, 31.353124618530273),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(3.5676803588867188, 3.567676305770874, 3.0175280570983887)
})
imageFromURL10.addComponentOrReplace(transform16)

const imageFromURL11 = new Entity('imageFromURL11')
engine.addEntity(imageFromURL11)
imageFromURL11.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(6.746918678283691, 12.337326049804688, 31.35028839111328),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(5.94663143157959, 5.946615219116211, 5.94663143157959)
})
imageFromURL11.addComponentOrReplace(transform17)

const externalLink8 = new Entity('externalLink8')
engine.addEntity(externalLink8)
externalLink8.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(9.446592330932617, 11.789506912231445, 31.368406295776367),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
externalLink8.addComponentOrReplace(transform18)

const externalLink9 = new Entity('externalLink9')
engine.addEntity(externalLink9)
externalLink9.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(15.218831062316895, 15.41608715057373, 31.370769500732422),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
externalLink9.addComponentOrReplace(transform19)

const externalLink10 = new Entity('externalLink10')
engine.addEntity(externalLink10)
externalLink10.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(28.259206771850586, 11.789506912231445, 31.368406295776367),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.0000015497207642, 1, 1.0000015497207642)
})
externalLink10.addComponentOrReplace(transform20)

const imageFromURL8 = new Entity('imageFromURL8')
engine.addEntity(imageFromURL8)
imageFromURL8.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(25.559532165527344, 12.337326049804688, 31.35028839111328),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(5.946633338928223, 5.946615219116211, 5.946633338928223)
})
imageFromURL8.addComponentOrReplace(transform21)

const externalLink11 = new Entity('externalLink11')
engine.addEntity(externalLink11)
externalLink11.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(19.770431518554688, 15.41608715057373, 31.370769500732422),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.0000015497207642, 1, 1.0000015497207642)
})
externalLink11.addComponentOrReplace(transform22)

const imageFromURL9 = new Entity('imageFromURL9')
engine.addEntity(imageFromURL9)
imageFromURL9.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(18.224369049072266, 15.952034950256348, 31.353124618530273),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(3.5676815509796143, 3.567676305770874, 3.017528533935547)
})
imageFromURL9.addComponentOrReplace(transform23)

const radio = new Entity('radio')
engine.addEntity(radio)
radio.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(2.6090335845947266, 21.10145378112793, 15.994067192077637),
  rotation: new Quaternion(-1.507594471082587e-14, -0.7087974548339844, 8.449523392073388e-8, -0.7054121494293213),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
radio.addComponentOrReplace(transform24)

const purpleWeepingWillowTree = new Entity('purpleWeepingWillowTree')
engine.addEntity(purpleWeepingWillowTree)
purpleWeepingWillowTree.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(5.4414381980896, 20.665271759033203, 4.464543342590332),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8093609809875488, 0.8093609809875488, 0.8093609809875488)
})
purpleWeepingWillowTree.addComponentOrReplace(transform25)
const gltfShape = new GLTFShape("models/Tree_Leafs_01/Tree_Leafs_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
purpleWeepingWillowTree.addComponentOrReplace(gltfShape)

const turquoiseAcaciaTree = new Entity('turquoiseAcaciaTree')
engine.addEntity(turquoiseAcaciaTree)
turquoiseAcaciaTree.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(27.580286026000977, 20.085182189941406, 27.520875930786133),
  rotation: new Quaternion(8.530447106578785e-16, -0.718471884727478, 8.564852294057346e-8, 0.6955560445785522),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
turquoiseAcaciaTree.addComponentOrReplace(transform26)
const gltfShape2 = new GLTFShape("models/Tree_Forest_Turquoise_01/Tree_Forest_Turquoise_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
turquoiseAcaciaTree.addComponentOrReplace(gltfShape2)

const pinkAcaciaTree2 = new Entity('pinkAcaciaTree2')
engine.addEntity(pinkAcaciaTree2)
pinkAcaciaTree2.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(27.66880989074707, 20.13199234008789, 4.417128562927246),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pinkAcaciaTree2.addComponentOrReplace(transform27)
const gltfShape3 = new GLTFShape("models/Tree_Forest_Pink_01/Tree_Forest_Pink_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
pinkAcaciaTree2.addComponentOrReplace(gltfShape3)

const blueWeepingWillowTree = new Entity('blueWeepingWillowTree')
engine.addEntity(blueWeepingWillowTree)
blueWeepingWillowTree.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(5.417530059814453, 20.5574951171875, 27.95557975769043),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
blueWeepingWillowTree.addComponentOrReplace(transform28)
const gltfShape4 = new GLTFShape("models/Tree_Leafs_02/Tree_Leafs_02.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
blueWeepingWillowTree.addComponentOrReplace(gltfShape4)

const bluePinkMysticalMushroomTree = new Entity('bluePinkMysticalMushroomTree')
engine.addEntity(bluePinkMysticalMushroomTree)
bluePinkMysticalMushroomTree.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(26.955049514770508, 20.217864990234375, 2.839315414428711),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4957847595214844, 0.4957847595214844, 0.4957847595214844)
})
bluePinkMysticalMushroomTree.addComponentOrReplace(transform29)
const gltfShape5 = new GLTFShape("models/Tree_02/Tree_02.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
bluePinkMysticalMushroomTree.addComponentOrReplace(gltfShape5)

const magicGemstoneTorch2 = new Entity('magicGemstoneTorch2')
engine.addEntity(magicGemstoneTorch2)
magicGemstoneTorch2.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(30.30069351196289, 21.3262996673584, 20.581140518188477),
  rotation: new Quaternion(-9.097578545808494e-16, -0.7364249229431152, 8.77886918715376e-8, 0.6765193343162537),
  scale: new Vector3(2.778116226196289, 2.778109312057495, 2.778116226196289)
})
magicGemstoneTorch2.addComponentOrReplace(transform30)
const gltfShape6 = new GLTFShape("models/Torch_01/Torch_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
magicGemstoneTorch2.addComponentOrReplace(gltfShape6)

const magicGemstoneTorch3 = new Entity('magicGemstoneTorch3')
engine.addEntity(magicGemstoneTorch3)
magicGemstoneTorch3.setParent(_scene)
magicGemstoneTorch3.addComponentOrReplace(gltfShape6)
const transform31 = new Transform({
  position: new Vector3(30.30069351196289, 21.3262996673584, 10.137048721313477),
  rotation: new Quaternion(-9.097578545808494e-16, -0.7364249229431152, 8.77886918715376e-8, 0.6765193343162537),
  scale: new Vector3(2.7781169414520264, 2.778109312057495, 2.7781169414520264)
})
magicGemstoneTorch3.addComponentOrReplace(transform31)

const magicGemstoneTorch4 = new Entity('magicGemstoneTorch4')
engine.addEntity(magicGemstoneTorch4)
magicGemstoneTorch4.setParent(_scene)
magicGemstoneTorch4.addComponentOrReplace(gltfShape6)
const transform32 = new Transform({
  position: new Vector3(21.55426597595215, 21.3262996673584, 1.0607351064682007),
  rotation: new Quaternion(-2.5685937429890124e-15, -0.022718725726008415, 2.7082853737425694e-9, 0.9997419118881226),
  scale: new Vector3(2.778110980987549, 2.778109312057495, 2.778110980987549)
})
magicGemstoneTorch4.addComponentOrReplace(transform32)

const magicGemstoneTorch5 = new Entity('magicGemstoneTorch5')
engine.addEntity(magicGemstoneTorch5)
magicGemstoneTorch5.setParent(_scene)
magicGemstoneTorch5.addComponentOrReplace(gltfShape6)
const transform33 = new Transform({
  position: new Vector3(10.579365730285645, 21.3262996673584, 1.0607355833053589),
  rotation: new Quaternion(-2.5685937429890124e-15, -0.022718725726008415, 2.7082853737425694e-9, 0.9997419118881226),
  scale: new Vector3(2.7781107425689697, 2.778109312057495, 2.7781107425689697)
})
magicGemstoneTorch5.addComponentOrReplace(transform33)

const magicGemstoneTorch6 = new Entity('magicGemstoneTorch6')
engine.addEntity(magicGemstoneTorch6)
magicGemstoneTorch6.setParent(_scene)
magicGemstoneTorch6.addComponentOrReplace(gltfShape6)
const transform34 = new Transform({
  position: new Vector3(10.579934120178223, 21.3262996673584, 30.64299964904785),
  rotation: new Quaternion(3.360284733843269e-15, -0.9998800754547119, 1.1919497922008304e-7, -0.015486609190702438),
  scale: new Vector3(2.7781105041503906, 2.778109312057495, 2.7781105041503906)
})
magicGemstoneTorch6.addComponentOrReplace(transform34)

const magicGemstoneTorch7 = new Entity('magicGemstoneTorch7')
engine.addEntity(magicGemstoneTorch7)
magicGemstoneTorch7.setParent(_scene)
magicGemstoneTorch7.addComponentOrReplace(gltfShape6)
const transform35 = new Transform({
  position: new Vector3(21.427650451660156, 21.3262996673584, 30.486055374145508),
  rotation: new Quaternion(3.360284733843269e-15, -0.9998800754547119, 1.1919497922008304e-7, -0.015486609190702438),
  scale: new Vector3(2.7781083583831787, 2.778109312057495, 2.7781083583831787)
})
magicGemstoneTorch7.addComponentOrReplace(transform35)

const verticalPlatform = new Entity('verticalPlatform')
engine.addEntity(verticalPlatform)
verticalPlatform.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(3.5, 0, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
verticalPlatform.addComponentOrReplace(transform36)

const blueLightButton = new Entity('blueLightButton')
engine.addEntity(blueLightButton)
blueLightButton.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(1.9631028175354004, 1.4642516374588013, 26.067686080932617),
  rotation: new Quaternion(0, 0, -0.7082528471946716, 0.705958902835846),
  scale: new Vector3(1.000000238418579, 1.000000238418579, 1)
})
blueLightButton.addComponentOrReplace(transform37)

const owlStatue = new Entity('owlStatue')
engine.addEntity(owlStatue)
owlStatue.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(4.275097846984863, 40.17106246948242, 29.457548141479492),
  rotation: new Quaternion(-5.841810213178558e-17, 0.40545105934143066, -4.833352917898992e-8, -0.9141167998313904),
  scale: new Vector3(2.3492860794067383, 2.3492817878723145, 2.3492860794067383)
})
owlStatue.addComponentOrReplace(transform38)
const gltfShape7 = new GLTFShape("models/StatueOwl_01/StatueOwl_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
owlStatue.addComponentOrReplace(gltfShape7)

const loveseat = new Entity('loveseat')
engine.addEntity(loveseat)
loveseat.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(8.08304500579834, 20.007905960083008, 5.587254524230957),
  rotation: new Quaternion(5.207297673571684e-15, -0.961237907409668, 1.1458847382073145e-7, -0.2757204473018646),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656)
})
loveseat.addComponentOrReplace(transform39)
const gltfShape8 = new GLTFShape("models/Couch_01/Couch_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
loveseat.addComponentOrReplace(gltfShape8)

const owlStatue2 = new Entity('owlStatue2')
engine.addEntity(owlStatue2)
owlStatue2.setParent(_scene)
owlStatue2.addComponentOrReplace(gltfShape7)
const transform40 = new Transform({
  position: new Vector3(28.627286911010742, 40.17106246948242, 29.519187927246094),
  rotation: new Quaternion(-3.4774725891288487e-15, 0.3874770700931549, -4.6190869795736944e-8, 0.9218794107437134),
  scale: new Vector3(2.3492860794067383, 2.3492817878723145, 2.3492860794067383)
})
owlStatue2.addComponentOrReplace(transform40)

const dropChandelier = new Entity('dropChandelier')
engine.addEntity(dropChandelier)
dropChandelier.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(16, 15.957586288452148, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dropChandelier.addComponentOrReplace(transform41)

const armchairPurple = new Entity('armchairPurple')
engine.addEntity(armchairPurple)
armchairPurple.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(10.865384101867676, 19.99793243408203, 2.5252532958984375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
armchairPurple.addComponentOrReplace(transform42)
const gltfShape9 = new GLTFShape("models/PurpleArmchair.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
armchairPurple.addComponentOrReplace(gltfShape9)

const armchairRed = new Entity('armchairRed')
engine.addEntity(armchairRed)
armchairRed.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(9.865474700927734, 20.064504623413086, 28.45999526977539),
  rotation: new Quaternion(1.0621436345939895e-15, 0.999613881111145, -1.19163246381504e-7, 0.027786854654550552),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
armchairRed.addComponentOrReplace(transform43)
const gltfShape10 = new GLTFShape("models/RedArmchair.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
armchairRed.addComponentOrReplace(gltfShape10)

const sofaRound = new Entity('sofaRound')
engine.addEntity(sofaRound)
sofaRound.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(22.74332046508789, 20.080791473388672, 27.931472778320312),
  rotation: new Quaternion(-2.7005175575129173e-14, -0.9444645643234253, 1.1258894261345631e-7, 0.3286134600639343),
  scale: new Vector3(1.0000052452087402, 1, 1.0000052452087402)
})
sofaRound.addComponentOrReplace(transform44)
const gltfShape11 = new GLTFShape("models/RoundSofa.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
sofaRound.addComponentOrReplace(gltfShape11)

const floorLampPaperLight2 = new Entity('floorLampPaperLight2')
engine.addEntity(floorLampPaperLight2)
floorLampPaperLight2.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(23.575815200805664, 20.090808868408203, 29.48056411743164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorLampPaperLight2.addComponentOrReplace(transform45)

const loveseat2 = new Entity('loveseat2')
engine.addEntity(loveseat2)
loveseat2.setParent(_scene)
loveseat2.addComponentOrReplace(gltfShape8)
const transform46 = new Transform({
  position: new Vector3(8.2379789352417, 20.007905960083008, 26.578121185302734),
  rotation: new Quaternion(5.210853517884258e-15, -0.9640889763832092, 1.1492834772752758e-7, 0.265579491853714),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
loveseat2.addComponentOrReplace(transform46)

const crossTable = new Entity('crossTable')
engine.addEntity(crossTable)
crossTable.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(24.872968673706055, 20.287574768066406, 26.32910919189453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
crossTable.addComponentOrReplace(transform47)
const gltfShape12 = new GLTFShape("models/CrossTable.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
crossTable.addComponentOrReplace(gltfShape12)

const skullDecoPink = new Entity('skullDecoPink')
engine.addEntity(skullDecoPink)
skullDecoPink.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(2.1348257064819336, 23.88887596130371, 11.457674026489258),
  rotation: new Quaternion(5.3948066276547895e-15, 0.7144691944122314, -8.517134375551905e-8, 0.6996669769287109),
  scale: new Vector3(15.194038391113281, 15.193995475769043, 15.194038391113281)
})
skullDecoPink.addComponentOrReplace(transform48)
const gltfShape13 = new GLTFShape("models/HWN20_SkullDeco_DDLM_03.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
skullDecoPink.addComponentOrReplace(gltfShape13)

const skullDeco = new Entity('skullDeco')
engine.addEntity(skullDeco)
skullDeco.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(1.9836812019348145, 23.867095947265625, 20.815746307373047),
  rotation: new Quaternion(1.3447189291715313e-14, 0.7023752331733704, -8.372963833380709e-8, 0.7118069529533386),
  scale: new Vector3(14.933069229125977, 14.983298301696777, 12.414618492126465)
})
skullDeco.addComponentOrReplace(transform49)
const gltfShape14 = new GLTFShape("models/HWN20_SkullDeco_DDLM_01.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
skullDeco.addComponentOrReplace(gltfShape14)

const diamond = new Entity('diamond')
engine.addEntity(diamond)
diamond.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(7.599048614501953, 20.06850814819336, 16.291412353515625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond.addComponentOrReplace(transform50)
const gltfShape15 = new GLTFShape("models/diamond.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
diamond.addComponentOrReplace(gltfShape15)

const diamond2 = new Entity('diamond2')
engine.addEntity(diamond2)
diamond2.setParent(_scene)
diamond2.addComponentOrReplace(gltfShape15)
const transform51 = new Transform({
  position: new Vector3(7.599048614501953, 20.06850814819336, 19.223970413208008),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond2.addComponentOrReplace(transform51)

const diamond3 = new Entity('diamond3')
engine.addEntity(diamond3)
diamond3.setParent(_scene)
diamond3.addComponentOrReplace(gltfShape15)
const transform52 = new Transform({
  position: new Vector3(7.599048614501953, 20.06850814819336, 20.1402645111084),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond3.addComponentOrReplace(transform52)

const diamond4 = new Entity('diamond4')
engine.addEntity(diamond4)
diamond4.setParent(_scene)
diamond4.addComponentOrReplace(gltfShape15)
const transform53 = new Transform({
  position: new Vector3(7.599048614501953, 20.06850814819336, 21.076223373413086),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond4.addComponentOrReplace(transform53)

const diamond5 = new Entity('diamond5')
engine.addEntity(diamond5)
diamond5.setParent(_scene)
diamond5.addComponentOrReplace(gltfShape15)
const transform54 = new Transform({
  position: new Vector3(7.599048614501953, 20.06850814819336, 17.279842376708984),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond5.addComponentOrReplace(transform54)

const diamond6 = new Entity('diamond6')
engine.addEntity(diamond6)
diamond6.setParent(_scene)
diamond6.addComponentOrReplace(gltfShape15)
const transform55 = new Transform({
  position: new Vector3(7.599048614501953, 20.06850814819336, 18.25202751159668),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond6.addComponentOrReplace(transform55)

const diamond7 = new Entity('diamond7')
engine.addEntity(diamond7)
diamond7.setParent(_scene)
diamond7.addComponentOrReplace(gltfShape15)
const transform56 = new Transform({
  position: new Vector3(7.605134963989258, 20.06850814819336, 22.011608123779297),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond7.addComponentOrReplace(transform56)

const diamond8 = new Entity('diamond8')
engine.addEntity(diamond8)
diamond8.setParent(_scene)
diamond8.addComponentOrReplace(gltfShape15)
const transform57 = new Transform({
  position: new Vector3(7.599048614501953, 20.06850814819336, 10.586155891418457),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond8.addComponentOrReplace(transform57)

const diamond9 = new Entity('diamond9')
engine.addEntity(diamond9)
diamond9.setParent(_scene)
diamond9.addComponentOrReplace(gltfShape15)
const transform58 = new Transform({
  position: new Vector3(7.599048614501953, 20.06850814819336, 11.574585914611816),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond9.addComponentOrReplace(transform58)

const diamond10 = new Entity('diamond10')
engine.addEntity(diamond10)
diamond10.setParent(_scene)
diamond10.addComponentOrReplace(gltfShape15)
const transform59 = new Transform({
  position: new Vector3(7.599048614501953, 20.06850814819336, 12.546770095825195),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond10.addComponentOrReplace(transform59)

const diamond11 = new Entity('diamond11')
engine.addEntity(diamond11)
diamond11.setParent(_scene)
diamond11.addComponentOrReplace(gltfShape15)
const transform60 = new Transform({
  position: new Vector3(7.599048614501953, 20.06850814819336, 13.518712997436523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond11.addComponentOrReplace(transform60)

const diamond12 = new Entity('diamond12')
engine.addEntity(diamond12)
diamond12.setParent(_scene)
diamond12.addComponentOrReplace(gltfShape15)
const transform61 = new Transform({
  position: new Vector3(7.599048614501953, 20.06850814819336, 14.435007095336914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond12.addComponentOrReplace(transform61)

const diamond13 = new Entity('diamond13')
engine.addEntity(diamond13)
diamond13.setParent(_scene)
diamond13.addComponentOrReplace(gltfShape15)
const transform62 = new Transform({
  position: new Vector3(7.599048614501953, 20.06850814819336, 15.370965957641602),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond13.addComponentOrReplace(transform62)

const diamond14 = new Entity('diamond14')
engine.addEntity(diamond14)
diamond14.setParent(_scene)
diamond14.addComponentOrReplace(gltfShape15)
const transform63 = new Transform({
  position: new Vector3(6.611547946929932, 20.06850814819336, 10.586155891418457),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond14.addComponentOrReplace(transform63)

const diamond16 = new Entity('diamond16')
engine.addEntity(diamond16)
diamond16.setParent(_scene)
diamond16.addComponentOrReplace(gltfShape15)
const transform64 = new Transform({
  position: new Vector3(4.609019756317139, 20.06850814819336, 10.586155891418457),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond16.addComponentOrReplace(transform64)

const diamond17 = new Entity('diamond17')
engine.addEntity(diamond17)
diamond17.setParent(_scene)
diamond17.addComponentOrReplace(gltfShape15)
const transform65 = new Transform({
  position: new Vector3(3.6773829460144043, 20.06850814819336, 10.586155891418457),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond17.addComponentOrReplace(transform65)

const diamond18 = new Entity('diamond18')
engine.addEntity(diamond18)
diamond18.setParent(_scene)
diamond18.addComponentOrReplace(gltfShape15)
const transform66 = new Transform({
  position: new Vector3(2.7471399307250977, 20.06850814819336, 10.586155891418457),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond18.addComponentOrReplace(transform66)

const diamond19 = new Entity('diamond19')
engine.addEntity(diamond19)
diamond19.setParent(_scene)
diamond19.addComponentOrReplace(gltfShape15)
const transform67 = new Transform({
  position: new Vector3(2.7471399307250977, 20.06850814819336, 11.574585914611816),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond19.addComponentOrReplace(transform67)

const diamond20 = new Entity('diamond20')
engine.addEntity(diamond20)
diamond20.setParent(_scene)
diamond20.addComponentOrReplace(gltfShape15)
const transform68 = new Transform({
  position: new Vector3(2.7471399307250977, 20.06850814819336, 12.546770095825195),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond20.addComponentOrReplace(transform68)

const diamond21 = new Entity('diamond21')
engine.addEntity(diamond21)
diamond21.setParent(_scene)
diamond21.addComponentOrReplace(gltfShape15)
const transform69 = new Transform({
  position: new Vector3(2.7471399307250977, 20.06850814819336, 13.518712997436523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond21.addComponentOrReplace(transform69)

const diamond22 = new Entity('diamond22')
engine.addEntity(diamond22)
diamond22.setParent(_scene)
diamond22.addComponentOrReplace(gltfShape15)
const transform70 = new Transform({
  position: new Vector3(2.7471399307250977, 20.06850814819336, 14.435007095336914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond22.addComponentOrReplace(transform70)

const diamond23 = new Entity('diamond23')
engine.addEntity(diamond23)
diamond23.setParent(_scene)
diamond23.addComponentOrReplace(gltfShape15)
const transform71 = new Transform({
  position: new Vector3(2.7471399307250977, 20.06850814819336, 15.370965957641602),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond23.addComponentOrReplace(transform71)

const diamond24 = new Entity('diamond24')
engine.addEntity(diamond24)
diamond24.setParent(_scene)
diamond24.addComponentOrReplace(gltfShape15)
const transform72 = new Transform({
  position: new Vector3(2.7471399307250977, 20.06850814819336, 16.291412353515625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond24.addComponentOrReplace(transform72)

const diamond25 = new Entity('diamond25')
engine.addEntity(diamond25)
diamond25.setParent(_scene)
diamond25.addComponentOrReplace(gltfShape15)
const transform73 = new Transform({
  position: new Vector3(2.7471399307250977, 20.06850814819336, 17.279842376708984),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond25.addComponentOrReplace(transform73)

const diamond26 = new Entity('diamond26')
engine.addEntity(diamond26)
diamond26.setParent(_scene)
diamond26.addComponentOrReplace(gltfShape15)
const transform74 = new Transform({
  position: new Vector3(2.7471399307250977, 20.06850814819336, 18.25202751159668),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond26.addComponentOrReplace(transform74)

const diamond27 = new Entity('diamond27')
engine.addEntity(diamond27)
diamond27.setParent(_scene)
diamond27.addComponentOrReplace(gltfShape15)
const transform75 = new Transform({
  position: new Vector3(2.7471399307250977, 20.06850814819336, 19.223970413208008),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond27.addComponentOrReplace(transform75)

const diamond28 = new Entity('diamond28')
engine.addEntity(diamond28)
diamond28.setParent(_scene)
diamond28.addComponentOrReplace(gltfShape15)
const transform76 = new Transform({
  position: new Vector3(2.7471399307250977, 20.06850814819336, 20.1402645111084),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond28.addComponentOrReplace(transform76)

const diamond29 = new Entity('diamond29')
engine.addEntity(diamond29)
diamond29.setParent(_scene)
diamond29.addComponentOrReplace(gltfShape15)
const transform77 = new Transform({
  position: new Vector3(2.7471399307250977, 20.06850814819336, 21.076223373413086),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond29.addComponentOrReplace(transform77)

const diamond30 = new Entity('diamond30')
engine.addEntity(diamond30)
diamond30.setParent(_scene)
diamond30.addComponentOrReplace(gltfShape15)
const transform78 = new Transform({
  position: new Vector3(2.7532262802124023, 20.06850814819336, 22.011608123779297),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond30.addComponentOrReplace(transform78)

const diamond31 = new Entity('diamond31')
engine.addEntity(diamond31)
diamond31.setParent(_scene)
diamond31.addComponentOrReplace(gltfShape15)
const transform79 = new Transform({
  position: new Vector3(6.611547946929932, 20.06850814819336, 22.033533096313477),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond31.addComponentOrReplace(transform79)

const diamond33 = new Entity('diamond33')
engine.addEntity(diamond33)
diamond33.setParent(_scene)
diamond33.addComponentOrReplace(gltfShape15)
const transform80 = new Transform({
  position: new Vector3(4.609019756317139, 20.06850814819336, 22.033533096313477),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond33.addComponentOrReplace(transform80)

const diamond34 = new Entity('diamond34')
engine.addEntity(diamond34)
diamond34.setParent(_scene)
diamond34.addComponentOrReplace(gltfShape15)
const transform81 = new Transform({
  position: new Vector3(3.6773829460144043, 20.06850814819336, 22.033533096313477),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
diamond34.addComponentOrReplace(transform81)

const rainLight = new Entity('rainLight')
engine.addEntity(rainLight)
rainLight.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(2.5600337982177734, 19.480941772460938, 11.337130546569824),
  rotation: new Quaternion(1.2103919762971476e-15, 0.7019416093826294, -8.367794634978054e-8, -0.7122345566749573),
  scale: new Vector3(1.000001311302185, 1, 1.000001311302185)
})
rainLight.addComponentOrReplace(transform82)

const stoolHigh = new Entity('stoolHigh')
engine.addEntity(stoolHigh)
stoolHigh.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(8.932159423828125, 19.983625411987305, 10.703217506408691),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh.addComponentOrReplace(transform83)
const gltfShape16 = new GLTFShape("models/HighStool.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
stoolHigh.addComponentOrReplace(gltfShape16)

const stoolHigh2 = new Entity('stoolHigh2')
engine.addEntity(stoolHigh2)
stoolHigh2.setParent(_scene)
stoolHigh2.addComponentOrReplace(gltfShape16)
const transform84 = new Transform({
  position: new Vector3(8.932159423828125, 19.983625411987305, 13.394387245178223),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh2.addComponentOrReplace(transform84)

const stoolHigh4 = new Entity('stoolHigh4')
engine.addEntity(stoolHigh4)
stoolHigh4.setParent(_scene)
stoolHigh4.addComponentOrReplace(gltfShape16)
const transform85 = new Transform({
  position: new Vector3(8.932159423828125, 19.983625411987305, 15.588115692138672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh4.addComponentOrReplace(transform85)

const stoolHigh5 = new Entity('stoolHigh5')
engine.addEntity(stoolHigh5)
stoolHigh5.setParent(_scene)
stoolHigh5.addComponentOrReplace(gltfShape16)
const transform86 = new Transform({
  position: new Vector3(8.932159423828125, 19.983625411987305, 18.320600509643555),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh5.addComponentOrReplace(transform86)

const stoolHigh6 = new Entity('stoolHigh6')
engine.addEntity(stoolHigh6)
stoolHigh6.setParent(_scene)
stoolHigh6.addComponentOrReplace(gltfShape16)
const transform87 = new Transform({
  position: new Vector3(8.932159423828125, 19.983625411987305, 20.26388168334961),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh6.addComponentOrReplace(transform87)

const elixir = new Entity('elixir')
engine.addEntity(elixir)
elixir.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(2.97567081451416, 21.10820960998535, 18.457015991210938),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
elixir.addComponentOrReplace(transform88)
const gltfShape17 = new GLTFShape("models/Bottle_01/Bottle_01.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
elixir.addComponentOrReplace(gltfShape17)

const floorLampPaperLight = new Entity('floorLampPaperLight')
engine.addEntity(floorLampPaperLight)
floorLampPaperLight.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(26.968721389770508, 20.090808868408203, 21.905105590820312),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorLampPaperLight.addComponentOrReplace(transform89)

const sofaRound2 = new Entity('sofaRound2')
engine.addEntity(sofaRound2)
sofaRound2.setParent(_scene)
sofaRound2.addComponentOrReplace(gltfShape11)
const transform90 = new Transform({
  position: new Vector3(26.520263671875, 20.080791473388672, 8.93221378326416),
  rotation: new Quaternion(-1.3527663350935103e-14, -0.5400487184524536, 6.437884536580896e-8, 0.8416337966918945),
  scale: new Vector3(1.0000053644180298, 1, 1.0000053644180298)
})
sofaRound2.addComponentOrReplace(transform90)

const crossTable2 = new Entity('crossTable2')
engine.addEntity(crossTable2)
crossTable2.setParent(_scene)
crossTable2.addComponentOrReplace(gltfShape12)
const transform91 = new Transform({
  position: new Vector3(24.888656616210938, 20.287574768066406, 6.848705291748047),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
crossTable2.addComponentOrReplace(transform91)

const rainLight2 = new Entity('rainLight2')
engine.addEntity(rainLight2)
rainLight2.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(2.5600337982177734, 19.480941772460938, 20.692922592163086),
  rotation: new Quaternion(1.2103919762971476e-15, 0.7019416093826294, -8.367794634978054e-8, -0.7122345566749573),
  scale: new Vector3(1.0000015497207642, 1, 1.0000015497207642)
})
rainLight2.addComponentOrReplace(transform92)

const imageFromURL13 = new Entity('imageFromURL13')
engine.addEntity(imageFromURL13)
imageFromURL13.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(2.084243059158325, 12.097393989562988, 8.174722671508789),
  rotation: new Quaternion(-1.0454056071057104e-14, 0.7065719366073608, -8.422993857948313e-8, 0.7076412439346313),
  scale: new Vector3(5.946648597717285, 5.946615219116211, 5.946648597717285)
})
imageFromURL13.addComponentOrReplace(transform93)

const externalLink13 = new Entity('externalLink13')
engine.addEntity(externalLink13)
externalLink13.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(1.9896495342254639, 11.5089750289917, 10.926944732666016),
  rotation: new Quaternion(1.0225679894851347e-14, -0.698123574256897, 8.322282241124412e-8, -0.7159773707389832),
  scale: new Vector3(1.0000064373016357, 1, 1.0000064373016357)
})
externalLink13.addComponentOrReplace(transform94)

const imageFromURL12 = new Entity('imageFromURL12')
engine.addEntity(imageFromURL12)
imageFromURL12.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(2.084243059158325, 12.097393989562988, 23.736831665039062),
  rotation: new Quaternion(-1.0454056071057104e-14, 0.7065719366073608, -8.422993857948313e-8, 0.7076412439346313),
  scale: new Vector3(5.946649074554443, 5.946615219116211, 5.946649074554443)
})
imageFromURL12.addComponentOrReplace(transform95)

const externalLink12 = new Entity('externalLink12')
engine.addEntity(externalLink12)
externalLink12.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(1.9896495342254639, 11.5089750289917, 26.489055633544922),
  rotation: new Quaternion(1.0225679894851347e-14, -0.698123574256897, 8.322282241124412e-8, -0.7159773707389832),
  scale: new Vector3(1.0000066757202148, 1, 1.0000066757202148)
})
externalLink12.addComponentOrReplace(transform96)

const imageFromURL14 = new Entity('imageFromURL14')
engine.addEntity(imageFromURL14)
imageFromURL14.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(2.084243059158325, 22.6217041015625, 16.02587890625),
  rotation: new Quaternion(-1.0454056071057104e-14, 0.7065719366073608, -8.422993857948313e-8, 0.7076412439346313),
  scale: new Vector3(4.097883701324463, 4.097860336303711, 4.165007591247559)
})
imageFromURL14.addComponentOrReplace(transform97)

const externalLink14 = new Entity('externalLink14')
engine.addEntity(externalLink14)
externalLink14.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(1.9896495342254639, 22.030799865722656, 17.792823791503906),
  rotation: new Quaternion(1.0225679894851347e-14, -0.698123574256897, 8.322282241124412e-8, -0.7159773707389832),
  scale: new Vector3(1.0000081062316895, 1, 1.0000081062316895)
})
externalLink14.addComponentOrReplace(transform98)

const identicalTONeonLightTube = new Entity('identicalTONeonLightTube')
engine.addEntity(identicalTONeonLightTube)
identicalTONeonLightTube.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(7.01909875869751, 20.03977394104004, 16.24237632751465),
  rotation: new Quaternion(6.679290481672402e-16, 0.7090917229652405, -8.453032762645307e-8, 0.705116331577301),
  scale: new Vector3(7.080977916717529, 0.6975312829017639, 0.6977647542953491)
})
identicalTONeonLightTube.addComponentOrReplace(transform99)
const gltfShape18 = new GLTFShape("models/NeonLightTube_07/NeonLightTube_07.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
identicalTONeonLightTube.addComponentOrReplace(gltfShape18)

const identicalTONeonLightTube2 = new Entity('identicalTONeonLightTube2')
engine.addEntity(identicalTONeonLightTube2)
identicalTONeonLightTube2.setParent(_scene)
identicalTONeonLightTube2.addComponentOrReplace(gltfShape18)
const transform100 = new Transform({
  position: new Vector3(3.2792694568634033, 20.03977394104004, 16.24237632751465),
  rotation: new Quaternion(6.679290481672402e-16, 0.7090917229652405, -8.453032762645307e-8, 0.705116331577301),
  scale: new Vector3(7.080979347229004, 0.6975312829017639, 0.6977648735046387)
})
identicalTONeonLightTube2.addComponentOrReplace(transform100)

const wallLight = new Entity('wallLight')
engine.addEntity(wallLight)
wallLight.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(1.9580106735229492, 17.797285079956055, 8.305462837219238),
  rotation: new Quaternion(-1.607153829024307e-16, 0.7556915283203125, -9.008544310518118e-8, 0.6549277901649475),
  scale: new Vector3(1.0000008344650269, 1, 1.0000008344650269)
})
wallLight.addComponentOrReplace(transform101)

const wallLight3 = new Entity('wallLight3')
engine.addEntity(wallLight3)
wallLight3.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(1.9580106735229492, 17.797374725341797, 23.654796600341797),
  rotation: new Quaternion(-1.607153829024307e-16, 0.7556915283203125, -9.008544310518118e-8, 0.6549277901649475),
  scale: new Vector3(1.0000017881393433, 1, 1.0000017881393433)
})
wallLight3.addComponentOrReplace(transform102)

const wallLight4 = new Entity('wallLight4')
engine.addEntity(wallLight4)
wallLight4.setParent(_scene)
const transform103 = new Transform({
  position: new Vector3(1.9580106735229492, 17.797285079956055, 16.25834846496582),
  rotation: new Quaternion(-1.607153829024307e-16, 0.7556915283203125, -9.008544310518118e-8, 0.6549277901649475),
  scale: new Vector3(1.000001311302185, 1, 1.000001311302185)
})
wallLight4.addComponentOrReplace(transform103)

const imageFromURL15 = new Entity('imageFromURL15')
engine.addEntity(imageFromURL15)
imageFromURL15.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(2.084243059158325, 12.097393989562988, 16.127609252929688),
  rotation: new Quaternion(-1.0454056071057104e-14, 0.7065719366073608, -8.422993857948313e-8, 0.7076412439346313),
  scale: new Vector3(5.946652889251709, 5.946615219116211, 5.946652889251709)
})
imageFromURL15.addComponentOrReplace(transform104)

const externalLink15 = new Entity('externalLink15')
engine.addEntity(externalLink15)
externalLink15.setParent(_scene)
const transform105 = new Transform({
  position: new Vector3(1.9896495342254639, 11.5089750289917, 18.87982940673828),
  rotation: new Quaternion(1.0225679894851347e-14, -0.698123574256897, 8.322282241124412e-8, -0.7159773707389832),
  scale: new Vector3(1.000006914138794, 1, 1.000006914138794)
})
externalLink15.addComponentOrReplace(transform105)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape19 = new GLTFShape("models/FloorBasePebbles_01/FloorBasePebbles_01.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
entity.addComponentOrReplace(gltfShape19)
const transform106 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform106)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape19)
const transform107 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform107)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape19)
const transform108 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform108)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape19)
const transform109 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform109)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script1.spawn(imageFromURL, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL, channelBus))
script2.spawn(externalLink, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink, channelBus))
script1.spawn(imageFromURL2, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL2, channelBus))
script2.spawn(externalLink2, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink2, channelBus))
script1.spawn(imageFromURL3, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL3, channelBus))
script1.spawn(imageFromURL4, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL4, channelBus))
script2.spawn(externalLink3, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink3, channelBus))
script2.spawn(externalLink4, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink4, channelBus))
script1.spawn(imageFromURL5, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL5, channelBus))
script1.spawn(imageFromURL6, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL6, channelBus))
script1.spawn(imageFromURL7, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL7, channelBus))
script2.spawn(externalLink5, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink5, channelBus))
script2.spawn(externalLink6, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink6, channelBus))
script2.spawn(externalLink7, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink7, channelBus))
script1.spawn(imageFromURL10, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL10, channelBus))
script1.spawn(imageFromURL11, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL11, channelBus))
script2.spawn(externalLink8, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink8, channelBus))
script2.spawn(externalLink9, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink9, channelBus))
script2.spawn(externalLink10, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink10, channelBus))
script1.spawn(imageFromURL8, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL8, channelBus))
script2.spawn(externalLink11, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink11, channelBus))
script1.spawn(imageFromURL9, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL9, channelBus))
script3.spawn(radio, {"startOn":false,"volume":1,"onClickText":"Radio On/Off","onClick":[{"entityName":"radio","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"rainLight","actionId":"activate","values":{}}]}, createChannel(channelId, radio, channelBus))
script4.spawn(verticalPlatform, {"distance":50,"speed":2,"autoStart":false,"onReachEnd":[{"entityName":"verticalPlatform","actionId":"goToStart","values":{}}],"onReachStart":[]}, createChannel(channelId, verticalPlatform, channelBus))
script5.spawn(blueLightButton, {"onClick":[{"entityName":"verticalPlatform","actionId":"goToEnd","values":{}}]}, createChannel(channelId, blueLightButton, channelBus))
script6.spawn(dropChandelier, {"startOn":true,"clickable":true,"onActivate":[]}, createChannel(channelId, dropChandelier, channelBus))
script7.spawn(floorLampPaperLight2, {"startOn":true,"clickable":true}, createChannel(channelId, floorLampPaperLight2, channelBus))
script8.spawn(rainLight, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight, channelBus))
script7.spawn(floorLampPaperLight, {"startOn":true,"clickable":true}, createChannel(channelId, floorLampPaperLight, channelBus))
script8.spawn(rainLight2, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight2, channelBus))
script1.spawn(imageFromURL13, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL13, channelBus))
script2.spawn(externalLink13, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink13, channelBus))
script1.spawn(imageFromURL12, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL12, channelBus))
script2.spawn(externalLink12, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink12, channelBus))
script1.spawn(imageFromURL14, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL14, channelBus))
script2.spawn(externalLink14, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink14, channelBus))
script9.spawn(wallLight, {"startOn":true,"clickable":true}, createChannel(channelId, wallLight, channelBus))
script9.spawn(wallLight3, {"startOn":true,"clickable":true}, createChannel(channelId, wallLight3, channelBus))
script9.spawn(wallLight4, {"startOn":true,"clickable":true}, createChannel(channelId, wallLight4, channelBus))
script1.spawn(imageFromURL15, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL15, channelBus))
script2.spawn(externalLink15, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink15, channelBus))