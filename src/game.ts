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
import Script9 from "../310e908c-751e-4045-ac88-2d6b1fbadf85/src/item"
import Script10 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"

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
  position: new Vector3(24.950305938720703, 12.687470436096191, 3.059324264526367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.946615219116211, 5.946615219116211, 5.946615219116211)
})
imageFromURL.addComponentOrReplace(transform2)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(22.250625610351562, 12.13965129852295, 3.0423145294189453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink.addComponentOrReplace(transform3)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(7.095556259155273, 12.687470436096191, 3.059326648712158),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.946615219116211, 5.946615219116211, 5.946615219116211)
})
imageFromURL2.addComponentOrReplace(transform4)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(4.405149459838867, 12.13965129852295, 3.0423173904418945),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink2.addComponentOrReplace(transform5)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(18.603857040405273, 14.99764633178711, 3.0593252182006836),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.567676305770874, 3.567676305770874, 3.017524003982544)
})
imageFromURL3.addComponentOrReplace(transform6)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(13.487115859985352, 14.99764633178711, 3.0593252182006836),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.567676305770874, 3.567676305770874, 3.017524003982544)
})
imageFromURL4.addComponentOrReplace(transform7)

const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
externalLink3.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(17.05778694152832, 14.461698532104492, 3.0423154830932617),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink3.addComponentOrReplace(transform8)

const externalLink4 = new Entity('externalLink4')
engine.addEntity(externalLink4)
externalLink4.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(28.87394142150879, 12.16523551940918, 4.1982741355896),
  rotation: new Quaternion(-3.6769259783176605e-15, 0.7160437703132629, -8.535905493545215e-8, -0.6980554461479187),
  scale: new Vector3(1.000004768371582, 1, 1.000004768371582)
})
externalLink4.addComponentOrReplace(transform9)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(28.951683044433594, 12.753655433654785, 6.878249645233154),
  rotation: new Quaternion(-9.934926730102126e-16, -0.7077084183692932, 8.43654035520558e-8, 0.7065047025680542),
  scale: new Vector3(5.946648597717285, 5.946615219116211, 5.946648597717285)
})
imageFromURL5.addComponentOrReplace(transform10)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(28.951683044433594, 12.753655433654785, 24.747848510742188),
  rotation: new Quaternion(-9.934926730102126e-16, -0.7077084183692932, 8.43654035520558e-8, 0.7065047025680542),
  scale: new Vector3(5.946654796600342, 5.946615219116211, 5.946654796600342)
})
imageFromURL6.addComponentOrReplace(transform11)

const externalLink5 = new Entity('externalLink5')
engine.addEntity(externalLink5)
externalLink5.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(12.063414573669434, 14.461698532104492, 3.0423154830932617),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink5.addComponentOrReplace(transform12)

const externalLink6 = new Entity('externalLink6')
engine.addEntity(externalLink6)
externalLink6.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(28.87394142150879, 12.16523551940918, 21.979581832885742),
  rotation: new Quaternion(-3.6769259783176605e-15, 0.7160437703132629, -8.535905493545215e-8, -0.6980554461479187),
  scale: new Vector3(1.0000050067901611, 1, 1.0000050067901611)
})
externalLink6.addComponentOrReplace(transform13)

const imageFromURL10 = new Entity('imageFromURL10')
engine.addEntity(imageFromURL10)
imageFromURL10.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(13.672767639160156, 15.024441719055176, 28.962291717529297),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(3.567692518234253, 3.567676305770874, 3.0175304412841797)
})
imageFromURL10.addComponentOrReplace(transform14)

const imageFromURL11 = new Entity('imageFromURL11')
engine.addEntity(imageFromURL11)
imageFromURL11.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(7.142253875732422, 12.749555587768555, 28.959455490112305),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(5.946648597717285, 5.946615219116211, 5.946648597717285)
})
imageFromURL11.addComponentOrReplace(transform15)

const externalLink8 = new Entity('externalLink8')
engine.addEntity(externalLink8)
externalLink8.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(9.841926574707031, 12.201736450195312, 28.97757339477539),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
externalLink8.addComponentOrReplace(transform16)

const externalLink9 = new Entity('externalLink9')
engine.addEntity(externalLink9)
externalLink9.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(15.218831062316895, 14.488493919372559, 28.979936599731445),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.0000020265579224, 1, 1.0000020265579224)
})
externalLink9.addComponentOrReplace(transform17)

const externalLink10 = new Entity('externalLink10')
engine.addEntity(externalLink10)
externalLink10.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(27.536842346191406, 12.201736450195312, 28.97757339477539),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.0000020265579224, 1, 1.0000020265579224)
})
externalLink10.addComponentOrReplace(transform18)

const imageFromURL8 = new Entity('imageFromURL8')
engine.addEntity(imageFromURL8)
imageFromURL8.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(24.837167739868164, 12.749555587768555, 28.959455490112305),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(5.94665002822876, 5.946615219116211, 5.94665002822876)
})
imageFromURL8.addComponentOrReplace(transform19)

const externalLink11 = new Entity('externalLink11')
engine.addEntity(externalLink11)
externalLink11.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(19.770431518554688, 14.488493919372559, 28.979936599731445),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
externalLink11.addComponentOrReplace(transform20)

const imageFromURL9 = new Entity('imageFromURL9')
engine.addEntity(imageFromURL9)
imageFromURL9.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(18.224369049072266, 15.024441719055176, 28.962291717529297),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(3.567692756652832, 3.567676305770874, 3.017530918121338)
})
imageFromURL9.addComponentOrReplace(transform21)

const radio = new Entity('radio')
engine.addEntity(radio)
radio.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(3.773129463195801, 21.38869857788086, 15.994067192077637),
  rotation: new Quaternion(-1.507594471082587e-14, -0.7087974548339844, 8.449523392073388e-8, -0.7054121494293213),
  scale: new Vector3(1.0000054836273193, 1, 1.0000054836273193)
})
radio.addComponentOrReplace(transform22)

const verticalPlatform = new Entity('verticalPlatform')
engine.addEntity(verticalPlatform)
verticalPlatform.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(4.57075309753418, 0, 27.474231719970703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4646409749984741, 0.8969731330871582, 1.2279930114746094)
})
verticalPlatform.addComponentOrReplace(transform23)

const blueLightButton = new Entity('blueLightButton')
engine.addEntity(blueLightButton)
blueLightButton.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(2.9227981567382812, 2.0727789402008057, 27.504507064819336),
  rotation: new Quaternion(0, 0, -0.7082528471946716, 0.705958902835846),
  scale: new Vector3(1.0000011920928955, 1.0000011920928955, 1)
})
blueLightButton.addComponentOrReplace(transform24)

const dropChandelier = new Entity('dropChandelier')
engine.addEntity(dropChandelier)
dropChandelier.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(16, 12.25937271118164, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9495412111282349, 1.9495412111282349, 1.9495412111282349)
})
dropChandelier.addComponentOrReplace(transform25)

const sofaRound = new Entity('sofaRound')
engine.addEntity(sofaRound)
sofaRound.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(21.419462203979492, 20.22064971923828, 26.24155616760254),
  rotation: new Quaternion(-2.613790023450139e-14, -0.9740148782730103, 1.1611161454538887e-7, 0.22648435831069946),
  scale: new Vector3(1.0000089406967163, 1, 1.0000089406967163)
})
sofaRound.addComponentOrReplace(transform26)
const gltfShape = new GLTFShape("models/RoundSofa.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
sofaRound.addComponentOrReplace(gltfShape)

const floorLampPaperLight2 = new Entity('floorLampPaperLight2')
engine.addEntity(floorLampPaperLight2)
floorLampPaperLight2.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(21.509525299072266, 20.274768829345703, 28.010910034179688),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorLampPaperLight2.addComponentOrReplace(transform27)

const crossTable = new Entity('crossTable')
engine.addEntity(crossTable)
crossTable.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(24.02577781677246, 20.26089096069336, 25.35536766052246),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
crossTable.addComponentOrReplace(transform28)
const gltfShape2 = new GLTFShape("models/CrossTable.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
crossTable.addComponentOrReplace(gltfShape2)

const skullDecoPink = new Entity('skullDecoPink')
engine.addEntity(skullDecoPink)
skullDecoPink.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(3.0571508407592773, 25.464811325073242, 11.133918762207031),
  rotation: new Quaternion(5.3948066276547895e-15, 0.7144691944122314, -8.517134375551905e-8, 0.6996669769287109),
  scale: new Vector3(15.19405746459961, 15.193995475769043, 15.19405746459961)
})
skullDecoPink.addComponentOrReplace(transform29)
const gltfShape3 = new GLTFShape("models/HWN20_SkullDeco_DDLM_03.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
skullDecoPink.addComponentOrReplace(gltfShape3)

const skullDeco = new Entity('skullDeco')
engine.addEntity(skullDeco)
skullDeco.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(3.119783401489258, 25.443031311035156, 20.970314025878906),
  rotation: new Quaternion(1.3447189291715313e-14, 0.7023752331733704, -8.372963833380709e-8, 0.7118069529533386),
  scale: new Vector3(14.933128356933594, 14.983298301696777, 12.414631843566895)
})
skullDeco.addComponentOrReplace(transform30)
const gltfShape4 = new GLTFShape("models/HWN20_SkullDeco_DDLM_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
skullDeco.addComponentOrReplace(gltfShape4)

const diamond = new Entity('diamond')
engine.addEntity(diamond)
diamond.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 15.924493789672852),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond.addComponentOrReplace(transform31)
const gltfShape5 = new GLTFShape("models/diamond.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
diamond.addComponentOrReplace(gltfShape5)

const diamond2 = new Entity('diamond2')
engine.addEntity(diamond2)
diamond2.setParent(_scene)
diamond2.addComponentOrReplace(gltfShape5)
const transform32 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 18.857051849365234),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond2.addComponentOrReplace(transform32)

const diamond3 = new Entity('diamond3')
engine.addEntity(diamond3)
diamond3.setParent(_scene)
diamond3.addComponentOrReplace(gltfShape5)
const transform33 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 19.773345947265625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond3.addComponentOrReplace(transform33)

const diamond4 = new Entity('diamond4')
engine.addEntity(diamond4)
diamond4.setParent(_scene)
diamond4.addComponentOrReplace(gltfShape5)
const transform34 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 20.709304809570312),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond4.addComponentOrReplace(transform34)

const diamond5 = new Entity('diamond5')
engine.addEntity(diamond5)
diamond5.setParent(_scene)
diamond5.addComponentOrReplace(gltfShape5)
const transform35 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 16.91292381286621),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond5.addComponentOrReplace(transform35)

const diamond6 = new Entity('diamond6')
engine.addEntity(diamond6)
diamond6.setParent(_scene)
diamond6.addComponentOrReplace(gltfShape5)
const transform36 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 17.885108947753906),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond6.addComponentOrReplace(transform36)

const diamond7 = new Entity('diamond7')
engine.addEntity(diamond7)
diamond7.setParent(_scene)
diamond7.addComponentOrReplace(gltfShape5)
const transform37 = new Transform({
  position: new Vector3(8.43301773071289, 20.257122039794922, 21.644689559936523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond7.addComponentOrReplace(transform37)

const diamond8 = new Entity('diamond8')
engine.addEntity(diamond8)
diamond8.setParent(_scene)
diamond8.addComponentOrReplace(gltfShape5)
const transform38 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 10.219237327575684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond8.addComponentOrReplace(transform38)

const diamond9 = new Entity('diamond9')
engine.addEntity(diamond9)
diamond9.setParent(_scene)
diamond9.addComponentOrReplace(gltfShape5)
const transform39 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 11.207667350769043),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond9.addComponentOrReplace(transform39)

const diamond10 = new Entity('diamond10')
engine.addEntity(diamond10)
diamond10.setParent(_scene)
diamond10.addComponentOrReplace(gltfShape5)
const transform40 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 12.179851531982422),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond10.addComponentOrReplace(transform40)

const diamond11 = new Entity('diamond11')
engine.addEntity(diamond11)
diamond11.setParent(_scene)
diamond11.addComponentOrReplace(gltfShape5)
const transform41 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 13.15179443359375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond11.addComponentOrReplace(transform41)

const diamond12 = new Entity('diamond12')
engine.addEntity(diamond12)
diamond12.setParent(_scene)
diamond12.addComponentOrReplace(gltfShape5)
const transform42 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 14.06808853149414),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond12.addComponentOrReplace(transform42)

const diamond13 = new Entity('diamond13')
engine.addEntity(diamond13)
diamond13.setParent(_scene)
diamond13.addComponentOrReplace(gltfShape5)
const transform43 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 15.004047393798828),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond13.addComponentOrReplace(transform43)

const diamond14 = new Entity('diamond14')
engine.addEntity(diamond14)
diamond14.setParent(_scene)
diamond14.addComponentOrReplace(gltfShape5)
const transform44 = new Transform({
  position: new Vector3(7.4394307136535645, 20.257122039794922, 10.219237327575684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond14.addComponentOrReplace(transform44)

const diamond16 = new Entity('diamond16')
engine.addEntity(diamond16)
diamond16.setParent(_scene)
diamond16.addComponentOrReplace(gltfShape5)
const transform45 = new Transform({
  position: new Vector3(5.4369025230407715, 20.257122039794922, 10.219237327575684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond16.addComponentOrReplace(transform45)

const diamond17 = new Entity('diamond17')
engine.addEntity(diamond17)
diamond17.setParent(_scene)
diamond17.addComponentOrReplace(gltfShape5)
const transform46 = new Transform({
  position: new Vector3(4.505265712738037, 20.257122039794922, 10.219237327575684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond17.addComponentOrReplace(transform46)

const diamond18 = new Entity('diamond18')
engine.addEntity(diamond18)
diamond18.setParent(_scene)
diamond18.addComponentOrReplace(gltfShape5)
const transform47 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 10.219237327575684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond18.addComponentOrReplace(transform47)

const diamond19 = new Entity('diamond19')
engine.addEntity(diamond19)
diamond19.setParent(_scene)
diamond19.addComponentOrReplace(gltfShape5)
const transform48 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 11.207667350769043),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond19.addComponentOrReplace(transform48)

const diamond20 = new Entity('diamond20')
engine.addEntity(diamond20)
diamond20.setParent(_scene)
diamond20.addComponentOrReplace(gltfShape5)
const transform49 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 12.179851531982422),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond20.addComponentOrReplace(transform49)

const diamond21 = new Entity('diamond21')
engine.addEntity(diamond21)
diamond21.setParent(_scene)
diamond21.addComponentOrReplace(gltfShape5)
const transform50 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 13.15179443359375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond21.addComponentOrReplace(transform50)

const diamond22 = new Entity('diamond22')
engine.addEntity(diamond22)
diamond22.setParent(_scene)
diamond22.addComponentOrReplace(gltfShape5)
const transform51 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 14.06808853149414),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond22.addComponentOrReplace(transform51)

const diamond23 = new Entity('diamond23')
engine.addEntity(diamond23)
diamond23.setParent(_scene)
diamond23.addComponentOrReplace(gltfShape5)
const transform52 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 15.004047393798828),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond23.addComponentOrReplace(transform52)

const diamond24 = new Entity('diamond24')
engine.addEntity(diamond24)
diamond24.setParent(_scene)
diamond24.addComponentOrReplace(gltfShape5)
const transform53 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 15.924493789672852),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond24.addComponentOrReplace(transform53)

const diamond25 = new Entity('diamond25')
engine.addEntity(diamond25)
diamond25.setParent(_scene)
diamond25.addComponentOrReplace(gltfShape5)
const transform54 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 16.91292381286621),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond25.addComponentOrReplace(transform54)

const diamond26 = new Entity('diamond26')
engine.addEntity(diamond26)
diamond26.setParent(_scene)
diamond26.addComponentOrReplace(gltfShape5)
const transform55 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 17.885108947753906),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond26.addComponentOrReplace(transform55)

const diamond27 = new Entity('diamond27')
engine.addEntity(diamond27)
diamond27.setParent(_scene)
diamond27.addComponentOrReplace(gltfShape5)
const transform56 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 18.857051849365234),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond27.addComponentOrReplace(transform56)

const diamond28 = new Entity('diamond28')
engine.addEntity(diamond28)
diamond28.setParent(_scene)
diamond28.addComponentOrReplace(gltfShape5)
const transform57 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 19.773345947265625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond28.addComponentOrReplace(transform57)

const diamond29 = new Entity('diamond29')
engine.addEntity(diamond29)
diamond29.setParent(_scene)
diamond29.addComponentOrReplace(gltfShape5)
const transform58 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 20.709304809570312),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond29.addComponentOrReplace(transform58)

const diamond30 = new Entity('diamond30')
engine.addEntity(diamond30)
diamond30.setParent(_scene)
diamond30.addComponentOrReplace(gltfShape5)
const transform59 = new Transform({
  position: new Vector3(3.581109046936035, 20.257122039794922, 21.644689559936523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond30.addComponentOrReplace(transform59)

const diamond31 = new Entity('diamond31')
engine.addEntity(diamond31)
diamond31.setParent(_scene)
diamond31.addComponentOrReplace(gltfShape5)
const transform60 = new Transform({
  position: new Vector3(7.4394307136535645, 20.257122039794922, 21.666614532470703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond31.addComponentOrReplace(transform60)

const diamond33 = new Entity('diamond33')
engine.addEntity(diamond33)
diamond33.setParent(_scene)
diamond33.addComponentOrReplace(gltfShape5)
const transform61 = new Transform({
  position: new Vector3(5.4369025230407715, 20.257122039794922, 21.666614532470703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond33.addComponentOrReplace(transform61)

const diamond34 = new Entity('diamond34')
engine.addEntity(diamond34)
diamond34.setParent(_scene)
diamond34.addComponentOrReplace(gltfShape5)
const transform62 = new Transform({
  position: new Vector3(4.505265712738037, 20.257122039794922, 21.666614532470703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond34.addComponentOrReplace(transform62)

const rainLight = new Entity('rainLight')
engine.addEntity(rainLight)
rainLight.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(3.482358455657959, 21.293794631958008, 11.013375282287598),
  rotation: new Quaternion(1.2103919762971476e-15, 0.7019416093826294, -8.367794634978054e-8, -0.7122345566749573),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
rainLight.addComponentOrReplace(transform63)

const stoolHigh = new Entity('stoolHigh')
engine.addEntity(stoolHigh)
stoolHigh.setParent(_scene)
const transform64 = new Transform({
  position: new Vector3(9.324102401733398, 20.192119598388672, 10.703217506408691),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh.addComponentOrReplace(transform64)
const gltfShape6 = new GLTFShape("models/HighStool.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
stoolHigh.addComponentOrReplace(gltfShape6)

const stoolHigh2 = new Entity('stoolHigh2')
engine.addEntity(stoolHigh2)
stoolHigh2.setParent(_scene)
stoolHigh2.addComponentOrReplace(gltfShape6)
const transform65 = new Transform({
  position: new Vector3(9.324102401733398, 20.192119598388672, 13.394387245178223),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh2.addComponentOrReplace(transform65)

const stoolHigh4 = new Entity('stoolHigh4')
engine.addEntity(stoolHigh4)
stoolHigh4.setParent(_scene)
stoolHigh4.addComponentOrReplace(gltfShape6)
const transform66 = new Transform({
  position: new Vector3(9.324102401733398, 20.192119598388672, 15.588115692138672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh4.addComponentOrReplace(transform66)

const stoolHigh5 = new Entity('stoolHigh5')
engine.addEntity(stoolHigh5)
stoolHigh5.setParent(_scene)
stoolHigh5.addComponentOrReplace(gltfShape6)
const transform67 = new Transform({
  position: new Vector3(9.324102401733398, 20.192119598388672, 18.320600509643555),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh5.addComponentOrReplace(transform67)

const stoolHigh6 = new Entity('stoolHigh6')
engine.addEntity(stoolHigh6)
stoolHigh6.setParent(_scene)
stoolHigh6.addComponentOrReplace(gltfShape6)
const transform68 = new Transform({
  position: new Vector3(9.324102401733398, 20.192119598388672, 20.26388168334961),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh6.addComponentOrReplace(transform68)

const sofaRound2 = new Entity('sofaRound2')
engine.addEntity(sofaRound2)
sofaRound2.setParent(_scene)
sofaRound2.addComponentOrReplace(gltfShape)
const transform69 = new Transform({
  position: new Vector3(26.915925979614258, 20.239782333374023, 10.182351112365723),
  rotation: new Quaternion(1.151181980415996e-14, 0.48469844460487366, -5.7780571438570405e-8, -0.8746813535690308),
  scale: new Vector3(1.0000076293945312, 1, 1.0000076293945312)
})
sofaRound2.addComponentOrReplace(transform69)

const rainLight2 = new Entity('rainLight2')
engine.addEntity(rainLight2)
rainLight2.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(3.482358455657959, 21.293794631958008, 20.847490310668945),
  rotation: new Quaternion(1.2103919762971476e-15, 0.7019416093826294, -8.367794634978054e-8, -0.7122345566749573),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
rainLight2.addComponentOrReplace(transform70)

const imageFromURL13 = new Entity('imageFromURL13')
engine.addEntity(imageFromURL13)
imageFromURL13.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(3.0493531227111816, 12.667522430419922, 7.374041557312012),
  rotation: new Quaternion(-1.0454056071057104e-14, 0.7065719366073608, -8.422993857948313e-8, 0.7076412439346313),
  scale: new Vector3(5.94668436050415, 5.946615219116211, 5.94668436050415)
})
imageFromURL13.addComponentOrReplace(transform71)

const externalLink13 = new Entity('externalLink13')
engine.addEntity(externalLink13)
externalLink13.setParent(_scene)
const transform72 = new Transform({
  position: new Vector3(3.0403225421905518, 12.079103469848633, 10.126262664794922),
  rotation: new Quaternion(1.0225679894851347e-14, -0.698123574256897, 8.322282241124412e-8, -0.7159773707389832),
  scale: new Vector3(1.0000088214874268, 1, 1.0000088214874268)
})
externalLink13.addComponentOrReplace(transform72)

const classicChandelier = new Entity('classicChandelier')
engine.addEntity(classicChandelier)
classicChandelier.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(16.058231353759766, 22.86130714416504, 15.960025787353516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.7488840818405151, 1.7488840818405151, 1.7488840818405151)
})
classicChandelier.addComponentOrReplace(transform73)

const imageFromURL15 = new Entity('imageFromURL15')
engine.addEntity(imageFromURL15)
imageFromURL15.setParent(_scene)
const transform74 = new Transform({
  position: new Vector3(3.075474262237549, 14.99764633178711, 13.50759506225586),
  rotation: new Quaternion(-1.2542247666472552e-15, 0.7218804359436035, -8.60548254877358e-8, 0.6920179128646851),
  scale: new Vector3(3.5676822662353516, 3.567676305770874, 3.0175275802612305)
})
imageFromURL15.addComponentOrReplace(transform74)

const externalLink15 = new Entity('externalLink15')
engine.addEntity(externalLink15)
externalLink15.setParent(_scene)
const transform75 = new Transform({
  position: new Vector3(3.118591785430908, 14.461698532104492, 14.930745124816895),
  rotation: new Quaternion(-1.2542247666472552e-15, 0.7218804359436035, -8.60548254877358e-8, 0.6920179128646851),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
externalLink15.addComponentOrReplace(transform75)

const imageFromURL16 = new Entity('imageFromURL16')
engine.addEntity(imageFromURL16)
imageFromURL16.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(3.075474262237549, 14.99764633178711, 18.155275344848633),
  rotation: new Quaternion(-1.2542247666472552e-15, 0.7218804359436035, -8.60548254877358e-8, 0.6920179128646851),
  scale: new Vector3(3.567683458328247, 3.567676305770874, 3.0175282955169678)
})
imageFromURL16.addComponentOrReplace(transform76)

const externalLink16 = new Entity('externalLink16')
engine.addEntity(externalLink16)
externalLink16.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(3.118591785430908, 14.461698532104492, 19.578426361083984),
  rotation: new Quaternion(-1.2542247666472552e-15, 0.7218804359436035, -8.60548254877358e-8, 0.6920179128646851),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
externalLink16.addComponentOrReplace(transform77)

const externalLink12 = new Entity('externalLink12')
engine.addEntity(externalLink12)
externalLink12.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(3.0386528968811035, 12.079103469848633, 27.816810607910156),
  rotation: new Quaternion(1.0225679894851347e-14, -0.698123574256897, 8.322282241124412e-8, -0.7159773707389832),
  scale: new Vector3(1.0000090599060059, 1, 1.0000090599060059)
})
externalLink12.addComponentOrReplace(transform78)

const imageFromURL12 = new Entity('imageFromURL12')
engine.addEntity(imageFromURL12)
imageFromURL12.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(3.0493531227111816, 12.667522430419922, 25.064590454101562),
  rotation: new Quaternion(-1.0454056071057104e-14, 0.7065719366073608, -8.422993857948313e-8, 0.7076412439346313),
  scale: new Vector3(5.946684837341309, 5.946615219116211, 5.946684837341309)
})
imageFromURL12.addComponentOrReplace(transform79)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform80 = new Transform({
  position: new Vector3(28.949506759643555, 15.024441719055176, 18.521747589111328),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(3.567695379257202, 3.567676305770874, 3.0175323486328125)
})
imageFromURL7.addComponentOrReplace(transform80)

const externalLink7 = new Entity('externalLink7')
engine.addEntity(externalLink7)
externalLink7.setParent(_scene)
const transform81 = new Transform({
  position: new Vector3(28.93500518798828, 14.488493919372559, 16.975648880004883),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
externalLink7.addComponentOrReplace(transform81)

const imageFromURL17 = new Entity('imageFromURL17')
engine.addEntity(imageFromURL17)
imageFromURL17.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(28.949506759643555, 15.024441719055176, 13.787576675415039),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(3.5676958560943604, 3.567676305770874, 3.0175325870513916)
})
imageFromURL17.addComponentOrReplace(transform82)

const externalLink17 = new Entity('externalLink17')
engine.addEntity(externalLink17)
externalLink17.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(28.93500518798828, 14.488493919372559, 12.241477966308594),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(1.0000027418136597, 1, 1.0000027418136597)
})
externalLink17.addComponentOrReplace(transform83)

const floorLampPaperLight = new Entity('floorLampPaperLight')
engine.addEntity(floorLampPaperLight)
floorLampPaperLight.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(27.736730575561523, 20.274768829345703, 21.749225616455078),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorLampPaperLight.addComponentOrReplace(transform84)

const blueAcaciaTree = new Entity('blueAcaciaTree')
engine.addEntity(blueAcaciaTree)
blueAcaciaTree.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(25.892292022705078, 20.266529083251953, 4.9554548263549805),
  rotation: new Quaternion(-2.717226425891987e-15, 0.9959880709648132, -1.1873100902448641e-7, 0.0894869714975357),
  scale: new Vector3(0.9706452488899231, 0.9706442356109619, 0.9706452488899231)
})
blueAcaciaTree.addComponentOrReplace(transform85)
const gltfShape7 = new GLTFShape("models/Tree_Forest_Blue_01/Tree_Forest_Blue_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
blueAcaciaTree.addComponentOrReplace(gltfShape7)

const crossTable2 = new Entity('crossTable2')
engine.addEntity(crossTable2)
crossTable2.setParent(_scene)
crossTable2.addComponentOrReplace(gltfShape2)
const transform86 = new Transform({
  position: new Vector3(25.41983413696289, 20.26089096069336, 7.9822845458984375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
crossTable2.addComponentOrReplace(transform86)

const stairsSpiral4 = new Entity('stairsSpiral4')
engine.addEntity(stairsSpiral4)
stairsSpiral4.setParent(_scene)
const gltfShape8 = new GLTFShape("models/SpiralStairs.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
stairsSpiral4.addComponentOrReplace(gltfShape8)
const transform87 = new Transform({
  position: new Vector3(16.083131790161133, 35.276580810546875, 6.307870864868164),
  rotation: new Quaternion(1.0777869990528845e-14, -0.7005386352539062, 8.351069880063733e-8, 0.7136145234107971),
  scale: new Vector3(1.000111699104309, 1.2433000802993774, 1.3074476718902588)
})
stairsSpiral4.addComponentOrReplace(transform87)

const stairsSpiral = new Entity('stairsSpiral')
engine.addEntity(stairsSpiral)
stairsSpiral.setParent(_scene)
stairsSpiral.addComponentOrReplace(gltfShape8)
const transform88 = new Transform({
  position: new Vector3(16.083131790161133, 30.31056785583496, 6.307870864868164),
  rotation: new Quaternion(1.0777869990528845e-14, -0.7005386352539062, 8.351069880063733e-8, 0.7136145234107971),
  scale: new Vector3(1.0001128911972046, 1.2433000802993774, 1.3074488639831543)
})
stairsSpiral.addComponentOrReplace(transform88)

const stairsSpiral2 = new Entity('stairsSpiral2')
engine.addEntity(stairsSpiral2)
stairsSpiral2.setParent(_scene)
stairsSpiral2.addComponentOrReplace(gltfShape8)
const transform89 = new Transform({
  position: new Vector3(16.083131790161133, 25.3480281829834, 6.307870864868164),
  rotation: new Quaternion(1.0777869990528845e-14, -0.7005386352539062, 8.351069880063733e-8, 0.7136145234107971),
  scale: new Vector3(1.0001131296157837, 1.2433000802993774, 1.3074491024017334)
})
stairsSpiral2.addComponentOrReplace(transform89)

const stairsSpiral3 = new Entity('stairsSpiral3')
engine.addEntity(stairsSpiral3)
stairsSpiral3.setParent(_scene)
stairsSpiral3.addComponentOrReplace(gltfShape8)
const transform90 = new Transform({
  position: new Vector3(16.083131790161133, 20.07587432861328, 6.307870864868164),
  rotation: new Quaternion(1.0777869990528845e-14, -0.7005386352539062, 8.351069880063733e-8, 0.7136145234107971),
  scale: new Vector3(1.0001174211502075, 1.3029506206512451, 1.3074533939361572)
})
stairsSpiral3.addComponentOrReplace(transform90)

const hoveringCrystalCandelabra = new Entity('hoveringCrystalCandelabra')
engine.addEntity(hoveringCrystalCandelabra)
hoveringCrystalCandelabra.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(16.020889282226562, 10.244304656982422, 15.850269317626953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
hoveringCrystalCandelabra.addComponentOrReplace(transform91)
const gltfShape9 = new GLTFShape("models/CrystalTotem_01/CrystalTotem_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
hoveringCrystalCandelabra.addComponentOrReplace(gltfShape9)

const greenStar = new Entity('greenStar')
engine.addEntity(greenStar)
greenStar.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(15.921262741088867, 42.79351043701172, 18.426597595214844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenStar.addComponentOrReplace(transform92)
const gltfShape10 = new GLTFShape("models/Star_01/Star_01.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
greenStar.addComponentOrReplace(gltfShape10)

const couchCurved = new Entity('couchCurved')
engine.addEntity(couchCurved)
couchCurved.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(9.060060501098633, 20.178119659423828, 24.986970901489258),
  rotation: new Quaternion(-2.830111142047278e-15, -0.8585376739501953, 1.0234565195332834e-7, -0.5127506256103516),
  scale: new Vector3(1.0000039339065552, 1, 1.0000039339065552)
})
couchCurved.addComponentOrReplace(transform93)
const gltfShape11 = new GLTFShape("models/CurvedCouch.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
couchCurved.addComponentOrReplace(gltfShape11)

const purpleWeepingWillowTree = new Entity('purpleWeepingWillowTree')
engine.addEntity(purpleWeepingWillowTree)
purpleWeepingWillowTree.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(6.7106781005859375, 40.312599182128906, 3.982546806335449),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6841220855712891, 0.6841220855712891, 0.6841220855712891)
})
purpleWeepingWillowTree.addComponentOrReplace(transform94)
const gltfShape12 = new GLTFShape("models/Tree_Leafs_01/Tree_Leafs_01.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
purpleWeepingWillowTree.addComponentOrReplace(gltfShape12)

const clusteredPinkAcaciaTree = new Entity('clusteredPinkAcaciaTree')
engine.addEntity(clusteredPinkAcaciaTree)
clusteredPinkAcaciaTree.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(6.411943435668945, 40.299530029296875, 29.57198715209961),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4522293210029602, 0.4522293210029602, 0.4522293210029602)
})
clusteredPinkAcaciaTree.addComponentOrReplace(transform95)
const gltfShape13 = new GLTFShape("models/Tree_Forest_Pink_03/Tree_Forest_Pink_03.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
clusteredPinkAcaciaTree.addComponentOrReplace(gltfShape13)

const imageFromURL18 = new Entity('imageFromURL18')
engine.addEntity(imageFromURL18)
imageFromURL18.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(3.0493531227111816, 33.019046783447266, 7.374041557312012),
  rotation: new Quaternion(-1.0454056071057104e-14, 0.7065719366073608, -8.422993857948313e-8, 0.7076412439346313),
  scale: new Vector3(5.946686744689941, 5.946615219116211, 5.946686744689941)
})
imageFromURL18.addComponentOrReplace(transform96)

const externalLink18 = new Entity('externalLink18')
engine.addEntity(externalLink18)
externalLink18.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(3.0148448944091797, 32.43062973022461, 10.126262664794922),
  rotation: new Quaternion(1.0225679894851347e-14, -0.698123574256897, 8.322282241124412e-8, -0.7159773707389832),
  scale: new Vector3(1.0000100135803223, 1, 1.0000100135803223)
})
externalLink18.addComponentOrReplace(transform97)

const imageFromURL19 = new Entity('imageFromURL19')
engine.addEntity(imageFromURL19)
imageFromURL19.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(3.075474262237549, 35.34917068481445, 13.50759506225586),
  rotation: new Quaternion(-1.2542247666472552e-15, 0.7218804359436035, -8.60548254877358e-8, 0.6920179128646851),
  scale: new Vector3(3.567688226699829, 3.567676305770874, 3.017531156539917)
})
imageFromURL19.addComponentOrReplace(transform98)

const externalLink19 = new Entity('externalLink19')
engine.addEntity(externalLink19)
externalLink19.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(3.118591785430908, 34.81322479248047, 14.930745124816895),
  rotation: new Quaternion(-1.2542247666472552e-15, 0.7218804359436035, -8.60548254877358e-8, 0.6920179128646851),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
externalLink19.addComponentOrReplace(transform99)

const imageFromURL20 = new Entity('imageFromURL20')
engine.addEntity(imageFromURL20)
imageFromURL20.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(3.075474262237549, 35.34917068481445, 18.155275344848633),
  rotation: new Quaternion(-1.2542247666472552e-15, 0.7218804359436035, -8.60548254877358e-8, 0.6920179128646851),
  scale: new Vector3(3.5676894187927246, 3.567676305770874, 3.0175318717956543)
})
imageFromURL20.addComponentOrReplace(transform100)

const externalLink20 = new Entity('externalLink20')
engine.addEntity(externalLink20)
externalLink20.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(3.118591785430908, 34.81322479248047, 19.578426361083984),
  rotation: new Quaternion(-1.2542247666472552e-15, 0.7218804359436035, -8.60548254877358e-8, 0.6920179128646851),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
externalLink20.addComponentOrReplace(transform101)

const imageFromURL21 = new Entity('imageFromURL21')
engine.addEntity(imageFromURL21)
imageFromURL21.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(3.0493531227111816, 33.019046783447266, 25.064590454101562),
  rotation: new Quaternion(-1.0454056071057104e-14, 0.7065719366073608, -8.422993857948313e-8, 0.7076412439346313),
  scale: new Vector3(5.9466872215271, 5.946615219116211, 5.9466872215271)
})
imageFromURL21.addComponentOrReplace(transform102)

const externalLink21 = new Entity('externalLink21')
engine.addEntity(externalLink21)
externalLink21.setParent(_scene)
const transform103 = new Transform({
  position: new Vector3(3.017657995223999, 32.43062973022461, 27.816810607910156),
  rotation: new Quaternion(1.0225679894851347e-14, -0.698123574256897, 8.322282241124412e-8, -0.7159773707389832),
  scale: new Vector3(1.0000102519989014, 1, 1.0000102519989014)
})
externalLink21.addComponentOrReplace(transform103)

const imageFromURL22 = new Entity('imageFromURL22')
engine.addEntity(imageFromURL22)
imageFromURL22.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(13.672767639160156, 25.003679275512695, 28.962291717529297),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(3.5676939487457275, 3.567676305770874, 3.017531394958496)
})
imageFromURL22.addComponentOrReplace(transform104)

const externalLink22 = new Entity('externalLink22')
engine.addEntity(externalLink22)
externalLink22.setParent(_scene)
const transform105 = new Transform({
  position: new Vector3(15.218831062316895, 24.467729568481445, 28.979936599731445),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.0000022649765015, 1, 1.0000022649765015)
})
externalLink22.addComponentOrReplace(transform105)

const imageFromURL23 = new Entity('imageFromURL23')
engine.addEntity(imageFromURL23)
imageFromURL23.setParent(_scene)
const transform106 = new Transform({
  position: new Vector3(18.224369049072266, 25.003679275512695, 28.962291717529297),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(3.5676941871643066, 3.567676305770874, 3.0175318717956543)
})
imageFromURL23.addComponentOrReplace(transform106)

const externalLink23 = new Entity('externalLink23')
engine.addEntity(externalLink23)
externalLink23.setParent(_scene)
const transform107 = new Transform({
  position: new Vector3(19.770431518554688, 24.467729568481445, 28.979936599731445),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
externalLink23.addComponentOrReplace(transform107)

const externalLink24 = new Entity('externalLink24')
engine.addEntity(externalLink24)
externalLink24.setParent(_scene)
const transform108 = new Transform({
  position: new Vector3(28.93500518798828, 24.519071578979492, 16.975648880004883),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
externalLink24.addComponentOrReplace(transform108)

const imageFromURL24 = new Entity('imageFromURL24')
engine.addEntity(imageFromURL24)
imageFromURL24.setParent(_scene)
const transform109 = new Transform({
  position: new Vector3(28.949506759643555, 25.055021286010742, 18.521747589111328),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(3.5676963329315186, 3.567676305770874, 3.0175328254699707)
})
imageFromURL24.addComponentOrReplace(transform109)

const imageFromURL25 = new Entity('imageFromURL25')
engine.addEntity(imageFromURL25)
imageFromURL25.setParent(_scene)
const transform110 = new Transform({
  position: new Vector3(28.949506759643555, 25.055021286010742, 13.787576675415039),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(3.5676968097686768, 3.567676305770874, 3.01753306388855)
})
imageFromURL25.addComponentOrReplace(transform110)

const externalLink25 = new Entity('externalLink25')
engine.addEntity(externalLink25)
externalLink25.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(28.93500518798828, 24.519071578979492, 12.241477966308594),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(1.0000029802322388, 1, 1.0000029802322388)
})
externalLink25.addComponentOrReplace(transform111)

const imageFromURL26 = new Entity('imageFromURL26')
engine.addEntity(imageFromURL26)
imageFromURL26.setParent(_scene)
const transform112 = new Transform({
  position: new Vector3(28.951683044433594, 32.97753143310547, 24.747848510742188),
  rotation: new Quaternion(-9.934926730102126e-16, -0.7077084183692932, 8.43654035520558e-8, 0.7065047025680542),
  scale: new Vector3(5.946658611297607, 5.946615219116211, 5.946658611297607)
})
imageFromURL26.addComponentOrReplace(transform112)

const externalLink26 = new Entity('externalLink26')
engine.addEntity(externalLink26)
externalLink26.setParent(_scene)
const transform113 = new Transform({
  position: new Vector3(28.87394142150879, 32.38911056518555, 21.979581832885742),
  rotation: new Quaternion(-3.6769259783176605e-15, 0.7160437703132629, -8.535905493545215e-8, -0.6980554461479187),
  scale: new Vector3(1.0000059604644775, 1, 1.0000059604644775)
})
externalLink26.addComponentOrReplace(transform113)

const imageFromURL27 = new Entity('imageFromURL27')
engine.addEntity(imageFromURL27)
imageFromURL27.setParent(_scene)
const transform114 = new Transform({
  position: new Vector3(28.949506759643555, 35.24831771850586, 18.521747589111328),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(3.567697286605835, 3.567676305770874, 3.017533302307129)
})
imageFromURL27.addComponentOrReplace(transform114)

const externalLink27 = new Entity('externalLink27')
engine.addEntity(externalLink27)
externalLink27.setParent(_scene)
const transform115 = new Transform({
  position: new Vector3(28.93500518798828, 34.71236801147461, 16.975648880004883),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
externalLink27.addComponentOrReplace(transform115)

const imageFromURL28 = new Entity('imageFromURL28')
engine.addEntity(imageFromURL28)
imageFromURL28.setParent(_scene)
const transform116 = new Transform({
  position: new Vector3(28.949506759643555, 35.24831771850586, 13.787576675415039),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(3.567697763442993, 3.567676305770874, 3.017533540725708)
})
imageFromURL28.addComponentOrReplace(transform116)

const externalLink28 = new Entity('externalLink28')
engine.addEntity(externalLink28)
externalLink28.setParent(_scene)
const transform117 = new Transform({
  position: new Vector3(28.93500518798828, 34.71236801147461, 12.241477966308594),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(1.0000032186508179, 1, 1.0000032186508179)
})
externalLink28.addComponentOrReplace(transform117)

const imageFromURL29 = new Entity('imageFromURL29')
engine.addEntity(imageFromURL29)
imageFromURL29.setParent(_scene)
const transform118 = new Transform({
  position: new Vector3(28.951683044433594, 32.97753143310547, 6.878249645233154),
  rotation: new Quaternion(-9.934926730102126e-16, -0.7077084183692932, 8.43654035520558e-8, 0.7065047025680542),
  scale: new Vector3(5.946652412414551, 5.946615219116211, 5.946652412414551)
})
imageFromURL29.addComponentOrReplace(transform118)

const externalLink29 = new Entity('externalLink29')
engine.addEntity(externalLink29)
externalLink29.setParent(_scene)
const transform119 = new Transform({
  position: new Vector3(28.87394142150879, 32.38911056518555, 4.198273658752441),
  rotation: new Quaternion(-3.6769259783176605e-15, 0.7160437703132629, -8.535905493545215e-8, -0.6980554461479187),
  scale: new Vector3(1.0000057220458984, 1, 1.0000057220458984)
})
externalLink29.addComponentOrReplace(transform119)

const imageFromURL30 = new Entity('imageFromURL30')
engine.addEntity(imageFromURL30)
imageFromURL30.setParent(_scene)
const transform120 = new Transform({
  position: new Vector3(7.142253875732422, 33.09819030761719, 28.959455490112305),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(5.946651458740234, 5.946615219116211, 5.946651458740234)
})
imageFromURL30.addComponentOrReplace(transform120)

const externalLink30 = new Entity('externalLink30')
engine.addEntity(externalLink30)
externalLink30.setParent(_scene)
const transform121 = new Transform({
  position: new Vector3(9.841926574707031, 32.55036926269531, 28.97757339477539),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.0000022649765015, 1, 1.0000022649765015)
})
externalLink30.addComponentOrReplace(transform121)

const imageFromURL31 = new Entity('imageFromURL31')
engine.addEntity(imageFromURL31)
imageFromURL31.setParent(_scene)
const transform122 = new Transform({
  position: new Vector3(13.672767639160156, 35.373077392578125, 28.962291717529297),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(3.567694664001465, 3.567676305770874, 3.0175318717956543)
})
imageFromURL31.addComponentOrReplace(transform122)

const externalLink31 = new Entity('externalLink31')
engine.addEntity(externalLink31)
externalLink31.setParent(_scene)
const transform123 = new Transform({
  position: new Vector3(15.218831062316895, 34.837127685546875, 28.979936599731445),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
externalLink31.addComponentOrReplace(transform123)

const imageFromURL32 = new Entity('imageFromURL32')
engine.addEntity(imageFromURL32)
imageFromURL32.setParent(_scene)
const transform124 = new Transform({
  position: new Vector3(18.224369049072266, 35.373077392578125, 28.962291717529297),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(3.567694902420044, 3.567676305770874, 3.0175323486328125)
})
imageFromURL32.addComponentOrReplace(transform124)

const externalLink32 = new Entity('externalLink32')
engine.addEntity(externalLink32)
externalLink32.setParent(_scene)
const transform125 = new Transform({
  position: new Vector3(19.770431518554688, 34.837127685546875, 28.979936599731445),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.0000025033950806, 1, 1.0000025033950806)
})
externalLink32.addComponentOrReplace(transform125)

const imageFromURL33 = new Entity('imageFromURL33')
engine.addEntity(imageFromURL33)
imageFromURL33.setParent(_scene)
const transform126 = new Transform({
  position: new Vector3(24.837167739868164, 33.09819030761719, 28.959455490112305),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(5.946652889251709, 5.946615219116211, 5.946652889251709)
})
imageFromURL33.addComponentOrReplace(transform126)

const externalLink33 = new Entity('externalLink33')
engine.addEntity(externalLink33)
externalLink33.setParent(_scene)
const transform127 = new Transform({
  position: new Vector3(27.536842346191406, 32.55036926269531, 28.97757339477539),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
externalLink33.addComponentOrReplace(transform127)

const videoStream2 = new Entity('videoStream2')
engine.addEntity(videoStream2)
videoStream2.setParent(_scene)
const transform128 = new Transform({
  position: new Vector3(3.067686080932617, 25.006914138793945, 16.00077247619629),
  rotation: new Quaternion(-2.2640707871327513e-15, 0.7077744603157043, -8.43733118927048e-8, 0.7064385414123535),
  scale: new Vector3(2.014162063598633, 2.0141518115997314, 2.1334729194641113)
})
videoStream2.addComponentOrReplace(transform128)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape14 = new GLTFShape("models/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
entity.addComponentOrReplace(gltfShape14)
const transform129 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform129)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape14)
const transform130 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform130)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape14)
const transform131 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform131)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape14)
const transform132 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform132)

const blueAcaciaTree2 = new Entity('blueAcaciaTree2')
engine.addEntity(blueAcaciaTree2)
blueAcaciaTree2.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(27.23755645751953, 40.389034271240234, 4.861242294311523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.587049663066864, 0.587049663066864, 0.587049663066864)
})
blueAcaciaTree2.addComponentOrReplace(transform133)
blueAcaciaTree2.addComponentOrReplace(gltfShape7)

const blueAcaciaTree3 = new Entity('blueAcaciaTree3')
engine.addEntity(blueAcaciaTree3)
blueAcaciaTree3.setParent(_scene)
blueAcaciaTree3.addComponentOrReplace(gltfShape7)
const transform134 = new Transform({
  position: new Vector3(6.547363758087158, 20.266529083251953, 6.619909286499023),
  rotation: new Quaternion(3.4995901440409635e-14, -0.5467007756233215, 6.517180395348987e-8, -0.8373280763626099),
  scale: new Vector3(0.9706469178199768, 0.9706442356109619, 0.9706469178199768)
})
blueAcaciaTree3.addComponentOrReplace(transform134)

const pinkAcaciaTree2 = new Entity('pinkAcaciaTree2')
engine.addEntity(pinkAcaciaTree2)
pinkAcaciaTree2.setParent(_scene)
const gltfShape15 = new GLTFShape("models/Tree_Forest_Pink_01/Tree_Forest_Pink_01.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
pinkAcaciaTree2.addComponentOrReplace(gltfShape15)
const transform135 = new Transform({
  position: new Vector3(7.833202362060547, 20.334291458129883, 27.327892303466797),
  rotation: new Quaternion(-1.5792039916961813e-14, -0.012494265101850033, 1.4894447897262353e-9, 0.999921977519989),
  scale: new Vector3(0.9442368149757385, 0.9442322850227356, 0.9442368149757385)
})
pinkAcaciaTree2.addComponentOrReplace(transform135)

const solidWhite = new Entity('solidWhite')
engine.addEntity(solidWhite)
solidWhite.setParent(_scene)
const transform136 = new Transform({
  position: new Vector3(6.541816234588623, 20.243993759155273, 6.4729437828063965),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6934038400650024, 0.31946125626564026, 1.6334466934204102)
})
solidWhite.addComponentOrReplace(transform136)
const gltfShape16 = new GLTFShape("models/solid_white.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
solidWhite.addComponentOrReplace(gltfShape16)

const turquoiseAcaciaTree = new Entity('turquoiseAcaciaTree')
engine.addEntity(turquoiseAcaciaTree)
turquoiseAcaciaTree.setParent(_scene)
const transform137 = new Transform({
  position: new Vector3(27.305797576904297, 20.32172203063965, 25.525127410888672),
  rotation: new Quaternion(-1.6460158329932324e-15, 0.7327812910079956, -8.735431578088537e-8, 0.6804643273353577),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447)
})
turquoiseAcaciaTree.addComponentOrReplace(transform137)
const gltfShape17 = new GLTFShape("models/Tree_Forest_Turquoise_01/Tree_Forest_Turquoise_01.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
turquoiseAcaciaTree.addComponentOrReplace(gltfShape17)

const armchairWhiteModern = new Entity('armchairWhiteModern')
engine.addEntity(armchairWhiteModern)
armchairWhiteModern.setParent(_scene)
const transform138 = new Transform({
  position: new Vector3(9.119510650634766, 20.22156524658203, 4.982404708862305),
  rotation: new Quaternion(-6.454443997636972e-16, 0.45324063301086426, -5.40304938567715e-8, 0.8913882374763489),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
armchairWhiteModern.addComponentOrReplace(transform138)
const gltfShape18 = new GLTFShape("models/WhiteModernArmchair.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
armchairWhiteModern.addComponentOrReplace(gltfShape18)

const studzdragonmoonroof = new Entity('studzdragonmoonroof')
engine.addEntity(studzdragonmoonroof)
studzdragonmoonroof.setParent(_scene)
const transform139 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
studzdragonmoonroof.addComponentOrReplace(transform139)
const gltfShape19 = new GLTFShape("models/StudzDragonMoonRoof_15.gltf")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
studzdragonmoonroof.addComponentOrReplace(gltfShape19)

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
const script10 = new Script10()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script10.init(options)
script1.spawn(imageFromURL, {"image":"https://lh3.googleusercontent.com/t7IpdopCxCfDxZePRXnmnTsao8Bwig7sjtL6sXZTI_bdHw8dJW42Fw1Ts2TkSUweQzlcawANbdc6xVz5aeVgU1cT=s992"}, createChannel(channelId, imageFromURL, channelBus))
script2.spawn(externalLink, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/7","name":"Buy Here"}, createChannel(channelId, externalLink, channelBus))
script1.spawn(imageFromURL2, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL2, channelBus))
script2.spawn(externalLink2, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink2, channelBus))
script1.spawn(imageFromURL3, {"image":"https://lh3.googleusercontent.com/vdZFbcnGXyJVk3kIQCZZnhPX0L0dzJhGDoQZ0-NV8KPWWaaHleNUYE9oQmNoX31_V3UmFNpSHXcIGg-4Z_Bz3h8=s992"}, createChannel(channelId, imageFromURL3, channelBus))
script1.spawn(imageFromURL4, {"image":"https://lh3.googleusercontent.com/6GcBE43adeSaAtkFSwgsA0zjDuAZyywZLs3xPFFYyLLsD-7rdGy9Ar8kTtEz10LkkQyfX2Yk-xGe9Dk2HVMjxuum=s992"}, createChannel(channelId, imageFromURL4, channelBus))
script2.spawn(externalLink3, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/20","name":"Buy Here"}, createChannel(channelId, externalLink3, channelBus))
script2.spawn(externalLink4, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/9","name":"Buy Here"}, createChannel(channelId, externalLink4, channelBus))
script1.spawn(imageFromURL5, {"image":"https://lh3.googleusercontent.com/TtjsvdRmeiYTcbAVCLCxglHa5As8475UHRzR0CpU2RaZjcd7PfoXaiEpCgIQejw_bmzmxho4_RwjjZrX9A3V7N5R=s992"}, createChannel(channelId, imageFromURL5, channelBus))
script1.spawn(imageFromURL6, {"image":"https://lh3.googleusercontent.com/eeBh53LmznWnU36NJbpVVSPTKefxHTmtN1mnzGR3V1ZJ2DkE8HCyEe-tdcDnIEtpI8vHlaYtvuPcioFFVlauGa1z=s992"}, createChannel(channelId, imageFromURL6, channelBus))
script2.spawn(externalLink5, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/32","name":"Buy Here"}, createChannel(channelId, externalLink5, channelBus))
script2.spawn(externalLink6, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/3","name":"Buy Here"}, createChannel(channelId, externalLink6, channelBus))
script1.spawn(imageFromURL10, {"image":"https://lh3.googleusercontent.com/mITk97j5f5ae7NTc1_f8U8EleVs3J_dbZfSmgYPI10nSvup2AjeZ3ZISr5DvGfK0W2S34tJmh-_scdZVgDRJYJSC=s992"}, createChannel(channelId, imageFromURL10, channelBus))
script1.spawn(imageFromURL11, {"image":"https://lh3.googleusercontent.com/It9vOD7dPT6SLbPkIIGM82SGtJxjN5LRghFHytrxMs3PCao3v7CdhKDfcv0OdcWGH9WBVl2ibTgPFluUBiua2TlE=s0"}, createChannel(channelId, imageFromURL11, channelBus))
script2.spawn(externalLink8, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/2","name":"Buy Here"}, createChannel(channelId, externalLink8, channelBus))
script2.spawn(externalLink9, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/38","name":"Buy Here"}, createChannel(channelId, externalLink9, channelBus))
script2.spawn(externalLink10, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/4","name":"Buy Here"}, createChannel(channelId, externalLink10, channelBus))
script1.spawn(imageFromURL8, {"image":"https://lh3.googleusercontent.com/Io_hiQzLp6NzwMfH47-9kK1wpsAZGXKDJJ-IPdbxh3pA21s0tGn1mkGnkYTQtYRsAdT8jfjfpJI2GLKZVDeRi5kT=s992"}, createChannel(channelId, imageFromURL8, channelBus))
script2.spawn(externalLink11, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink11, channelBus))
script1.spawn(imageFromURL9, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL9, channelBus))
script3.spawn(radio, {"startOn":true,"volume":1,"onClickText":"Radio On/Off","onClick":[{"entityName":"radio","actionId":"toggle","values":{}}],"onActivate":[],"station":"https://icecast.ravepartyradio.org/ravepartyradio-192.mp3"}, createChannel(channelId, radio, channelBus))
script4.spawn(verticalPlatform, {"distance":50,"speed":2,"autoStart":false,"onReachEnd":[{"entityName":"verticalPlatform","actionId":"goToStart","values":{}}],"onReachStart":[]}, createChannel(channelId, verticalPlatform, channelBus))
script5.spawn(blueLightButton, {"onClick":[{"entityName":"verticalPlatform","actionId":"goToEnd","values":{}}]}, createChannel(channelId, blueLightButton, channelBus))
script6.spawn(dropChandelier, {"startOn":true,"clickable":true,"onActivate":[]}, createChannel(channelId, dropChandelier, channelBus))
script7.spawn(floorLampPaperLight2, {"startOn":true,"clickable":true}, createChannel(channelId, floorLampPaperLight2, channelBus))
script8.spawn(rainLight, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight, channelBus))
script8.spawn(rainLight2, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight2, channelBus))
script1.spawn(imageFromURL13, {"image":"https://lh3.googleusercontent.com/caiF4yzPXfy6zF4x9UeuzA6Ay7BTV5T-yY0gtwx725BLjg-J_0oE1c8J_ru0DYwHsFK6Sn5ws3zQJke4iENrX70=s992"}, createChannel(channelId, imageFromURL13, channelBus))
script2.spawn(externalLink13, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/1","name":"Buy Here"}, createChannel(channelId, externalLink13, channelBus))
script9.spawn(classicChandelier, {"startOn":true,"clickable":true}, createChannel(channelId, classicChandelier, channelBus))
script1.spawn(imageFromURL15, {"image":"https://lh3.googleusercontent.com/6GcBE43adeSaAtkFSwgsA0zjDuAZyywZLs3xPFFYyLLsD-7rdGy9Ar8kTtEz10LkkQyfX2Yk-xGe9Dk2HVMjxuum=s992"}, createChannel(channelId, imageFromURL15, channelBus))
script2.spawn(externalLink15, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/32","name":"Buy Here"}, createChannel(channelId, externalLink15, channelBus))
script1.spawn(imageFromURL16, {"image":"https://lh3.googleusercontent.com/6GcBE43adeSaAtkFSwgsA0zjDuAZyywZLs3xPFFYyLLsD-7rdGy9Ar8kTtEz10LkkQyfX2Yk-xGe9Dk2HVMjxuum=s992"}, createChannel(channelId, imageFromURL16, channelBus))
script2.spawn(externalLink16, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/32","name":"Buy Here"}, createChannel(channelId, externalLink16, channelBus))
script2.spawn(externalLink12, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/1","name":"Buy Here"}, createChannel(channelId, externalLink12, channelBus))
script1.spawn(imageFromURL12, {"image":"https://lh3.googleusercontent.com/caiF4yzPXfy6zF4x9UeuzA6Ay7BTV5T-yY0gtwx725BLjg-J_0oE1c8J_ru0DYwHsFK6Sn5ws3zQJke4iENrX70=s992"}, createChannel(channelId, imageFromURL12, channelBus))
script1.spawn(imageFromURL7, {"image":"https://lh3.googleusercontent.com/mITk97j5f5ae7NTc1_f8U8EleVs3J_dbZfSmgYPI10nSvup2AjeZ3ZISr5DvGfK0W2S34tJmh-_scdZVgDRJYJSC=s992"}, createChannel(channelId, imageFromURL7, channelBus))
script2.spawn(externalLink7, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/38","name":"Buy Here"}, createChannel(channelId, externalLink7, channelBus))
script1.spawn(imageFromURL17, {"image":"https://lh3.googleusercontent.com/mITk97j5f5ae7NTc1_f8U8EleVs3J_dbZfSmgYPI10nSvup2AjeZ3ZISr5DvGfK0W2S34tJmh-_scdZVgDRJYJSC=s992"}, createChannel(channelId, imageFromURL17, channelBus))
script2.spawn(externalLink17, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/38","name":"Buy Here"}, createChannel(channelId, externalLink17, channelBus))
script7.spawn(floorLampPaperLight, {"startOn":true,"clickable":true}, createChannel(channelId, floorLampPaperLight, channelBus))
script1.spawn(imageFromURL18, {"image":"https://lh3.googleusercontent.com/caiF4yzPXfy6zF4x9UeuzA6Ay7BTV5T-yY0gtwx725BLjg-J_0oE1c8J_ru0DYwHsFK6Sn5ws3zQJke4iENrX70=s992"}, createChannel(channelId, imageFromURL18, channelBus))
script2.spawn(externalLink18, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/1","name":"Buy Here"}, createChannel(channelId, externalLink18, channelBus))
script1.spawn(imageFromURL19, {"image":"https://lh3.googleusercontent.com/6GcBE43adeSaAtkFSwgsA0zjDuAZyywZLs3xPFFYyLLsD-7rdGy9Ar8kTtEz10LkkQyfX2Yk-xGe9Dk2HVMjxuum=s992"}, createChannel(channelId, imageFromURL19, channelBus))
script2.spawn(externalLink19, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/32","name":"Buy Here"}, createChannel(channelId, externalLink19, channelBus))
script1.spawn(imageFromURL20, {"image":"https://lh3.googleusercontent.com/6GcBE43adeSaAtkFSwgsA0zjDuAZyywZLs3xPFFYyLLsD-7rdGy9Ar8kTtEz10LkkQyfX2Yk-xGe9Dk2HVMjxuum=s992"}, createChannel(channelId, imageFromURL20, channelBus))
script2.spawn(externalLink20, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/32","name":"Buy Here"}, createChannel(channelId, externalLink20, channelBus))
script1.spawn(imageFromURL21, {"image":"https://lh3.googleusercontent.com/caiF4yzPXfy6zF4x9UeuzA6Ay7BTV5T-yY0gtwx725BLjg-J_0oE1c8J_ru0DYwHsFK6Sn5ws3zQJke4iENrX70=s992"}, createChannel(channelId, imageFromURL21, channelBus))
script2.spawn(externalLink21, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/1","name":"Buy Here"}, createChannel(channelId, externalLink21, channelBus))
script1.spawn(imageFromURL22, {"image":"https://lh3.googleusercontent.com/mITk97j5f5ae7NTc1_f8U8EleVs3J_dbZfSmgYPI10nSvup2AjeZ3ZISr5DvGfK0W2S34tJmh-_scdZVgDRJYJSC=s992"}, createChannel(channelId, imageFromURL22, channelBus))
script2.spawn(externalLink22, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/38","name":"Buy Here"}, createChannel(channelId, externalLink22, channelBus))
script1.spawn(imageFromURL23, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL23, channelBus))
script2.spawn(externalLink23, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink23, channelBus))
script2.spawn(externalLink24, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/38","name":"Buy Here"}, createChannel(channelId, externalLink24, channelBus))
script1.spawn(imageFromURL24, {"image":"https://lh3.googleusercontent.com/mITk97j5f5ae7NTc1_f8U8EleVs3J_dbZfSmgYPI10nSvup2AjeZ3ZISr5DvGfK0W2S34tJmh-_scdZVgDRJYJSC=s992"}, createChannel(channelId, imageFromURL24, channelBus))
script1.spawn(imageFromURL25, {"image":"https://lh3.googleusercontent.com/mITk97j5f5ae7NTc1_f8U8EleVs3J_dbZfSmgYPI10nSvup2AjeZ3ZISr5DvGfK0W2S34tJmh-_scdZVgDRJYJSC=s992"}, createChannel(channelId, imageFromURL25, channelBus))
script2.spawn(externalLink25, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/38","name":"Buy Here"}, createChannel(channelId, externalLink25, channelBus))
script1.spawn(imageFromURL26, {"image":"https://lh3.googleusercontent.com/eeBh53LmznWnU36NJbpVVSPTKefxHTmtN1mnzGR3V1ZJ2DkE8HCyEe-tdcDnIEtpI8vHlaYtvuPcioFFVlauGa1z=s992"}, createChannel(channelId, imageFromURL26, channelBus))
script2.spawn(externalLink26, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/3","name":"Buy Here"}, createChannel(channelId, externalLink26, channelBus))
script1.spawn(imageFromURL27, {"image":"https://lh3.googleusercontent.com/mITk97j5f5ae7NTc1_f8U8EleVs3J_dbZfSmgYPI10nSvup2AjeZ3ZISr5DvGfK0W2S34tJmh-_scdZVgDRJYJSC=s992"}, createChannel(channelId, imageFromURL27, channelBus))
script2.spawn(externalLink27, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/38","name":"Buy Here"}, createChannel(channelId, externalLink27, channelBus))
script1.spawn(imageFromURL28, {"image":"https://lh3.googleusercontent.com/mITk97j5f5ae7NTc1_f8U8EleVs3J_dbZfSmgYPI10nSvup2AjeZ3ZISr5DvGfK0W2S34tJmh-_scdZVgDRJYJSC=s992"}, createChannel(channelId, imageFromURL28, channelBus))
script2.spawn(externalLink28, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/38","name":"Buy Here"}, createChannel(channelId, externalLink28, channelBus))
script1.spawn(imageFromURL29, {"image":"https://lh3.googleusercontent.com/TtjsvdRmeiYTcbAVCLCxglHa5As8475UHRzR0CpU2RaZjcd7PfoXaiEpCgIQejw_bmzmxho4_RwjjZrX9A3V7N5R=s992"}, createChannel(channelId, imageFromURL29, channelBus))
script2.spawn(externalLink29, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/9","name":"Buy Here"}, createChannel(channelId, externalLink29, channelBus))
script1.spawn(imageFromURL30, {"image":"https://lh3.googleusercontent.com/It9vOD7dPT6SLbPkIIGM82SGtJxjN5LRghFHytrxMs3PCao3v7CdhKDfcv0OdcWGH9WBVl2ibTgPFluUBiua2TlE=s0"}, createChannel(channelId, imageFromURL30, channelBus))
script2.spawn(externalLink30, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/2","name":"Buy Here"}, createChannel(channelId, externalLink30, channelBus))
script1.spawn(imageFromURL31, {"image":"https://lh3.googleusercontent.com/mITk97j5f5ae7NTc1_f8U8EleVs3J_dbZfSmgYPI10nSvup2AjeZ3ZISr5DvGfK0W2S34tJmh-_scdZVgDRJYJSC=s992"}, createChannel(channelId, imageFromURL31, channelBus))
script2.spawn(externalLink31, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/38","name":"Buy Here"}, createChannel(channelId, externalLink31, channelBus))
script1.spawn(imageFromURL32, {"image":"https://lh3.googleusercontent.com/ZaIGK9i6C37-7Z2kxqVJ3YiJW9a_4jjkjM5ce9xzW7BLIY6iyA-VcPtorRzktglouZaqdObyYVwzcvr3kFYoaG8=s0"}, createChannel(channelId, imageFromURL32, channelBus))
script2.spawn(externalLink32, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/11","name":"Buy Here"}, createChannel(channelId, externalLink32, channelBus))
script1.spawn(imageFromURL33, {"image":"https://lh3.googleusercontent.com/Io_hiQzLp6NzwMfH47-9kK1wpsAZGXKDJJ-IPdbxh3pA21s0tGn1mkGnkYTQtYRsAdT8jfjfpJI2GLKZVDeRi5kT=s992"}, createChannel(channelId, imageFromURL33, channelBus))
script2.spawn(externalLink33, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/4","name":"Buy Here"}, createChannel(channelId, externalLink33, channelBus))
script10.spawn(videoStream2, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream2","actionId":"toggle","values":{}}],"station":"https://theuniverse.club/live/consensys/index.m3u8"}, createChannel(channelId, videoStream2, channelBus))