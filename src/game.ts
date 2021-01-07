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
  position: new Vector3(24.231826782226562, 13.022706031799316, 3.059324264526367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.946615219116211, 5.946615219116211, 5.946615219116211)
})
imageFromURL.addComponentOrReplace(transform2)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(21.532146453857422, 12.474886894226074, 3.0423145294189453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink.addComponentOrReplace(transform3)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(7.841752052307129, 13.022706031799316, 3.059326171875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.946615219116211, 5.946615219116211, 5.946615219116211)
})
imageFromURL2.addComponentOrReplace(transform4)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(5.151345252990723, 12.474886894226074, 3.0423173904418945),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink2.addComponentOrReplace(transform5)

const externalLink4 = new Entity('externalLink4')
engine.addEntity(externalLink4)
externalLink4.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(28.87394142150879, 12.500471115112305, 4.991162300109863),
  rotation: new Quaternion(-3.6769259783176605e-15, 0.7160437703132629, -8.535905493545215e-8, -0.6980554461479187),
  scale: new Vector3(1.0000052452087402, 1, 1.0000052452087402)
})
externalLink4.addComponentOrReplace(transform6)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(28.951683044433594, 13.08889102935791, 7.671137809753418),
  rotation: new Quaternion(-9.934926730102126e-16, -0.7077084183692932, 8.43654035520558e-8, 0.7065047025680542),
  scale: new Vector3(5.946667671203613, 5.946615219116211, 5.946667671203613)
})
imageFromURL5.addComponentOrReplace(transform7)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(28.951683044433594, 13.08889102935791, 24.25603485107422),
  rotation: new Quaternion(-9.934926730102126e-16, -0.7077084183692932, 8.43654035520558e-8, 0.7065047025680542),
  scale: new Vector3(5.946679592132568, 5.946615219116211, 5.946679592132568)
})
imageFromURL6.addComponentOrReplace(transform8)

const externalLink6 = new Entity('externalLink6')
engine.addEntity(externalLink6)
externalLink6.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(28.87394142150879, 12.500471115112305, 21.487768173217773),
  rotation: new Quaternion(-3.6769259783176605e-15, 0.7160437703132629, -8.535905493545215e-8, -0.6980554461479187),
  scale: new Vector3(1.0000054836273193, 1, 1.0000054836273193)
})
externalLink6.addComponentOrReplace(transform9)

const imageFromURL11 = new Entity('imageFromURL11')
engine.addEntity(imageFromURL11)
imageFromURL11.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(7.790816307067871, 13.08479118347168, 28.959455490112305),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(5.946669578552246, 5.946615219116211, 5.946669578552246)
})
imageFromURL11.addComponentOrReplace(transform10)

const externalLink8 = new Entity('externalLink8')
engine.addEntity(externalLink8)
externalLink8.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(10.49048900604248, 12.536972045898438, 28.97757339477539),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
externalLink8.addComponentOrReplace(transform11)

const externalLink10 = new Entity('externalLink10')
engine.addEntity(externalLink10)
externalLink10.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(26.827667236328125, 12.536972045898438, 28.97757339477539),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
externalLink10.addComponentOrReplace(transform12)

const imageFromURL8 = new Entity('imageFromURL8')
engine.addEntity(imageFromURL8)
imageFromURL8.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(24.12799072265625, 13.08479118347168, 28.959455490112305),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(5.946683406829834, 5.946615219116211, 5.946683406829834)
})
imageFromURL8.addComponentOrReplace(transform13)

const radio = new Entity('radio')
engine.addEntity(radio)
radio.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(3.773129463195801, 21.38869857788086, 15.994067192077637),
  rotation: new Quaternion(-1.507594471082587e-14, -0.7087974548339844, 8.449523392073388e-8, -0.7054121494293213),
  scale: new Vector3(1.0000054836273193, 1, 1.0000054836273193)
})
radio.addComponentOrReplace(transform14)

const verticalPlatform = new Entity('verticalPlatform')
engine.addEntity(verticalPlatform)
verticalPlatform.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(4.57075309753418, 0, 27.474231719970703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4646409749984741, 0.8969731330871582, 1.2279930114746094)
})
verticalPlatform.addComponentOrReplace(transform15)

const blueLightButton = new Entity('blueLightButton')
engine.addEntity(blueLightButton)
blueLightButton.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(2.9227981567382812, 2.0727789402008057, 27.504507064819336),
  rotation: new Quaternion(0, 0, -0.7082528471946716, 0.705958902835846),
  scale: new Vector3(1.0000011920928955, 1.0000011920928955, 1)
})
blueLightButton.addComponentOrReplace(transform16)

const dropChandelier = new Entity('dropChandelier')
engine.addEntity(dropChandelier)
dropChandelier.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(16, 12.25937271118164, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9495412111282349, 1.9495412111282349, 1.9495412111282349)
})
dropChandelier.addComponentOrReplace(transform17)

const sofaRound = new Entity('sofaRound')
engine.addEntity(sofaRound)
sofaRound.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(21.419462203979492, 20.22064971923828, 26.24155616760254),
  rotation: new Quaternion(-2.613790023450139e-14, -0.9740148782730103, 1.1611161454538887e-7, 0.22648435831069946),
  scale: new Vector3(1.0000089406967163, 1, 1.0000089406967163)
})
sofaRound.addComponentOrReplace(transform18)
const gltfShape = new GLTFShape("models/RoundSofa.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
sofaRound.addComponentOrReplace(gltfShape)

const floorLampPaperLight2 = new Entity('floorLampPaperLight2')
engine.addEntity(floorLampPaperLight2)
floorLampPaperLight2.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(21.509525299072266, 20.274768829345703, 28.010910034179688),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorLampPaperLight2.addComponentOrReplace(transform19)

const crossTable = new Entity('crossTable')
engine.addEntity(crossTable)
crossTable.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(24.02577781677246, 20.26089096069336, 25.35536766052246),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
crossTable.addComponentOrReplace(transform20)
const gltfShape2 = new GLTFShape("models/CrossTable.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
crossTable.addComponentOrReplace(gltfShape2)

const skullDecoPink = new Entity('skullDecoPink')
engine.addEntity(skullDecoPink)
skullDecoPink.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(3.0571508407592773, 25.464811325073242, 11.133918762207031),
  rotation: new Quaternion(5.3948066276547895e-15, 0.7144691944122314, -8.517134375551905e-8, 0.6996669769287109),
  scale: new Vector3(15.19405746459961, 15.193995475769043, 15.19405746459961)
})
skullDecoPink.addComponentOrReplace(transform21)
const gltfShape3 = new GLTFShape("models/HWN20_SkullDeco_DDLM_03.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
skullDecoPink.addComponentOrReplace(gltfShape3)

const skullDeco = new Entity('skullDeco')
engine.addEntity(skullDeco)
skullDeco.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(3.119783401489258, 25.443031311035156, 20.970314025878906),
  rotation: new Quaternion(1.3447189291715313e-14, 0.7023752331733704, -8.372963833380709e-8, 0.7118069529533386),
  scale: new Vector3(14.933128356933594, 14.983298301696777, 12.414631843566895)
})
skullDeco.addComponentOrReplace(transform22)
const gltfShape4 = new GLTFShape("models/HWN20_SkullDeco_DDLM_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
skullDeco.addComponentOrReplace(gltfShape4)

const diamond = new Entity('diamond')
engine.addEntity(diamond)
diamond.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 15.924493789672852),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond.addComponentOrReplace(transform23)
const gltfShape5 = new GLTFShape("models/diamond.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
diamond.addComponentOrReplace(gltfShape5)

const diamond2 = new Entity('diamond2')
engine.addEntity(diamond2)
diamond2.setParent(_scene)
diamond2.addComponentOrReplace(gltfShape5)
const transform24 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 18.857051849365234),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond2.addComponentOrReplace(transform24)

const diamond3 = new Entity('diamond3')
engine.addEntity(diamond3)
diamond3.setParent(_scene)
diamond3.addComponentOrReplace(gltfShape5)
const transform25 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 19.773345947265625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond3.addComponentOrReplace(transform25)

const diamond4 = new Entity('diamond4')
engine.addEntity(diamond4)
diamond4.setParent(_scene)
diamond4.addComponentOrReplace(gltfShape5)
const transform26 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 20.709304809570312),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond4.addComponentOrReplace(transform26)

const diamond5 = new Entity('diamond5')
engine.addEntity(diamond5)
diamond5.setParent(_scene)
diamond5.addComponentOrReplace(gltfShape5)
const transform27 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 16.91292381286621),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond5.addComponentOrReplace(transform27)

const diamond6 = new Entity('diamond6')
engine.addEntity(diamond6)
diamond6.setParent(_scene)
diamond6.addComponentOrReplace(gltfShape5)
const transform28 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 17.885108947753906),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond6.addComponentOrReplace(transform28)

const diamond7 = new Entity('diamond7')
engine.addEntity(diamond7)
diamond7.setParent(_scene)
diamond7.addComponentOrReplace(gltfShape5)
const transform29 = new Transform({
  position: new Vector3(8.43301773071289, 20.257122039794922, 21.644689559936523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond7.addComponentOrReplace(transform29)

const diamond8 = new Entity('diamond8')
engine.addEntity(diamond8)
diamond8.setParent(_scene)
diamond8.addComponentOrReplace(gltfShape5)
const transform30 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 10.219237327575684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond8.addComponentOrReplace(transform30)

const diamond9 = new Entity('diamond9')
engine.addEntity(diamond9)
diamond9.setParent(_scene)
diamond9.addComponentOrReplace(gltfShape5)
const transform31 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 11.207667350769043),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond9.addComponentOrReplace(transform31)

const diamond10 = new Entity('diamond10')
engine.addEntity(diamond10)
diamond10.setParent(_scene)
diamond10.addComponentOrReplace(gltfShape5)
const transform32 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 12.179851531982422),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond10.addComponentOrReplace(transform32)

const diamond11 = new Entity('diamond11')
engine.addEntity(diamond11)
diamond11.setParent(_scene)
diamond11.addComponentOrReplace(gltfShape5)
const transform33 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 13.15179443359375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond11.addComponentOrReplace(transform33)

const diamond12 = new Entity('diamond12')
engine.addEntity(diamond12)
diamond12.setParent(_scene)
diamond12.addComponentOrReplace(gltfShape5)
const transform34 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 14.06808853149414),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond12.addComponentOrReplace(transform34)

const diamond13 = new Entity('diamond13')
engine.addEntity(diamond13)
diamond13.setParent(_scene)
diamond13.addComponentOrReplace(gltfShape5)
const transform35 = new Transform({
  position: new Vector3(8.426931381225586, 20.257122039794922, 15.004047393798828),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond13.addComponentOrReplace(transform35)

const diamond14 = new Entity('diamond14')
engine.addEntity(diamond14)
diamond14.setParent(_scene)
diamond14.addComponentOrReplace(gltfShape5)
const transform36 = new Transform({
  position: new Vector3(7.4394307136535645, 20.257122039794922, 10.219237327575684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond14.addComponentOrReplace(transform36)

const diamond16 = new Entity('diamond16')
engine.addEntity(diamond16)
diamond16.setParent(_scene)
diamond16.addComponentOrReplace(gltfShape5)
const transform37 = new Transform({
  position: new Vector3(5.4369025230407715, 20.257122039794922, 10.219237327575684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond16.addComponentOrReplace(transform37)

const diamond17 = new Entity('diamond17')
engine.addEntity(diamond17)
diamond17.setParent(_scene)
diamond17.addComponentOrReplace(gltfShape5)
const transform38 = new Transform({
  position: new Vector3(4.505265712738037, 20.257122039794922, 10.219237327575684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond17.addComponentOrReplace(transform38)

const diamond18 = new Entity('diamond18')
engine.addEntity(diamond18)
diamond18.setParent(_scene)
diamond18.addComponentOrReplace(gltfShape5)
const transform39 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 10.219237327575684),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond18.addComponentOrReplace(transform39)

const diamond19 = new Entity('diamond19')
engine.addEntity(diamond19)
diamond19.setParent(_scene)
diamond19.addComponentOrReplace(gltfShape5)
const transform40 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 11.207667350769043),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond19.addComponentOrReplace(transform40)

const diamond20 = new Entity('diamond20')
engine.addEntity(diamond20)
diamond20.setParent(_scene)
diamond20.addComponentOrReplace(gltfShape5)
const transform41 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 12.179851531982422),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond20.addComponentOrReplace(transform41)

const diamond21 = new Entity('diamond21')
engine.addEntity(diamond21)
diamond21.setParent(_scene)
diamond21.addComponentOrReplace(gltfShape5)
const transform42 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 13.15179443359375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond21.addComponentOrReplace(transform42)

const diamond22 = new Entity('diamond22')
engine.addEntity(diamond22)
diamond22.setParent(_scene)
diamond22.addComponentOrReplace(gltfShape5)
const transform43 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 14.06808853149414),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond22.addComponentOrReplace(transform43)

const diamond23 = new Entity('diamond23')
engine.addEntity(diamond23)
diamond23.setParent(_scene)
diamond23.addComponentOrReplace(gltfShape5)
const transform44 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 15.004047393798828),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond23.addComponentOrReplace(transform44)

const diamond24 = new Entity('diamond24')
engine.addEntity(diamond24)
diamond24.setParent(_scene)
diamond24.addComponentOrReplace(gltfShape5)
const transform45 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 15.924493789672852),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond24.addComponentOrReplace(transform45)

const diamond25 = new Entity('diamond25')
engine.addEntity(diamond25)
diamond25.setParent(_scene)
diamond25.addComponentOrReplace(gltfShape5)
const transform46 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 16.91292381286621),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond25.addComponentOrReplace(transform46)

const diamond26 = new Entity('diamond26')
engine.addEntity(diamond26)
diamond26.setParent(_scene)
diamond26.addComponentOrReplace(gltfShape5)
const transform47 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 17.885108947753906),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond26.addComponentOrReplace(transform47)

const diamond27 = new Entity('diamond27')
engine.addEntity(diamond27)
diamond27.setParent(_scene)
diamond27.addComponentOrReplace(gltfShape5)
const transform48 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 18.857051849365234),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond27.addComponentOrReplace(transform48)

const diamond28 = new Entity('diamond28')
engine.addEntity(diamond28)
diamond28.setParent(_scene)
diamond28.addComponentOrReplace(gltfShape5)
const transform49 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 19.773345947265625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond28.addComponentOrReplace(transform49)

const diamond29 = new Entity('diamond29')
engine.addEntity(diamond29)
diamond29.setParent(_scene)
diamond29.addComponentOrReplace(gltfShape5)
const transform50 = new Transform({
  position: new Vector3(3.5750226974487305, 20.257122039794922, 20.709304809570312),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond29.addComponentOrReplace(transform50)

const diamond30 = new Entity('diamond30')
engine.addEntity(diamond30)
diamond30.setParent(_scene)
diamond30.addComponentOrReplace(gltfShape5)
const transform51 = new Transform({
  position: new Vector3(3.581109046936035, 20.257122039794922, 21.644689559936523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond30.addComponentOrReplace(transform51)

const diamond31 = new Entity('diamond31')
engine.addEntity(diamond31)
diamond31.setParent(_scene)
diamond31.addComponentOrReplace(gltfShape5)
const transform52 = new Transform({
  position: new Vector3(7.4394307136535645, 20.257122039794922, 21.666614532470703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond31.addComponentOrReplace(transform52)

const diamond33 = new Entity('diamond33')
engine.addEntity(diamond33)
diamond33.setParent(_scene)
diamond33.addComponentOrReplace(gltfShape5)
const transform53 = new Transform({
  position: new Vector3(5.4369025230407715, 20.257122039794922, 21.666614532470703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond33.addComponentOrReplace(transform53)

const diamond34 = new Entity('diamond34')
engine.addEntity(diamond34)
diamond34.setParent(_scene)
diamond34.addComponentOrReplace(gltfShape5)
const transform54 = new Transform({
  position: new Vector3(4.505265712738037, 20.257122039794922, 21.666614532470703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.128663420677185, 1)
})
diamond34.addComponentOrReplace(transform54)

const rainLight = new Entity('rainLight')
engine.addEntity(rainLight)
rainLight.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(3.482358455657959, 21.293794631958008, 11.013375282287598),
  rotation: new Quaternion(1.2103919762971476e-15, 0.7019416093826294, -8.367794634978054e-8, -0.7122345566749573),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
rainLight.addComponentOrReplace(transform55)

const stoolHigh = new Entity('stoolHigh')
engine.addEntity(stoolHigh)
stoolHigh.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(9.324102401733398, 20.192119598388672, 10.703217506408691),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh.addComponentOrReplace(transform56)
const gltfShape6 = new GLTFShape("models/HighStool.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
stoolHigh.addComponentOrReplace(gltfShape6)

const stoolHigh2 = new Entity('stoolHigh2')
engine.addEntity(stoolHigh2)
stoolHigh2.setParent(_scene)
stoolHigh2.addComponentOrReplace(gltfShape6)
const transform57 = new Transform({
  position: new Vector3(9.324102401733398, 20.192119598388672, 13.394387245178223),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh2.addComponentOrReplace(transform57)

const stoolHigh4 = new Entity('stoolHigh4')
engine.addEntity(stoolHigh4)
stoolHigh4.setParent(_scene)
stoolHigh4.addComponentOrReplace(gltfShape6)
const transform58 = new Transform({
  position: new Vector3(9.324102401733398, 20.192119598388672, 15.588115692138672),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh4.addComponentOrReplace(transform58)

const stoolHigh5 = new Entity('stoolHigh5')
engine.addEntity(stoolHigh5)
stoolHigh5.setParent(_scene)
stoolHigh5.addComponentOrReplace(gltfShape6)
const transform59 = new Transform({
  position: new Vector3(9.324102401733398, 20.192119598388672, 18.320600509643555),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh5.addComponentOrReplace(transform59)

const stoolHigh6 = new Entity('stoolHigh6')
engine.addEntity(stoolHigh6)
stoolHigh6.setParent(_scene)
stoolHigh6.addComponentOrReplace(gltfShape6)
const transform60 = new Transform({
  position: new Vector3(9.324102401733398, 20.192119598388672, 20.26388168334961),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stoolHigh6.addComponentOrReplace(transform60)

const sofaRound2 = new Entity('sofaRound2')
engine.addEntity(sofaRound2)
sofaRound2.setParent(_scene)
sofaRound2.addComponentOrReplace(gltfShape)
const transform61 = new Transform({
  position: new Vector3(26.915925979614258, 20.239782333374023, 10.182351112365723),
  rotation: new Quaternion(1.151181980415996e-14, 0.48469844460487366, -5.7780571438570405e-8, -0.8746813535690308),
  scale: new Vector3(1.0000076293945312, 1, 1.0000076293945312)
})
sofaRound2.addComponentOrReplace(transform61)

const rainLight2 = new Entity('rainLight2')
engine.addEntity(rainLight2)
rainLight2.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(3.482358455657959, 21.293794631958008, 20.847490310668945),
  rotation: new Quaternion(1.2103919762971476e-15, 0.7019416093826294, -8.367794634978054e-8, -0.7122345566749573),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
rainLight2.addComponentOrReplace(transform62)

const imageFromURL13 = new Entity('imageFromURL13')
engine.addEntity(imageFromURL13)
imageFromURL13.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(3.0493526458740234, 13.002758026123047, 7.999205589294434),
  rotation: new Quaternion(-1.0454056071057104e-14, 0.7065719366073608, -8.422993857948313e-8, 0.7076412439346313),
  scale: new Vector3(5.946714878082275, 5.946615219116211, 5.946714878082275)
})
imageFromURL13.addComponentOrReplace(transform63)

const externalLink13 = new Entity('externalLink13')
engine.addEntity(externalLink13)
externalLink13.setParent(_scene)
const transform64 = new Transform({
  position: new Vector3(3.0403223037719727, 12.414339065551758, 10.751426696777344),
  rotation: new Quaternion(1.0225679894851347e-14, -0.698123574256897, 8.322282241124412e-8, -0.7159773707389832),
  scale: new Vector3(1.000009298324585, 1, 1.000009298324585)
})
externalLink13.addComponentOrReplace(transform64)

const classicChandelier = new Entity('classicChandelier')
engine.addEntity(classicChandelier)
classicChandelier.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(15.664117813110352, 23.190074920654297, 17.809185028076172),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.7488840818405151, 1.7488840818405151, 1.7488840818405151)
})
classicChandelier.addComponentOrReplace(transform65)

const externalLink12 = new Entity('externalLink12')
engine.addEntity(externalLink12)
externalLink12.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(3.0386524200439453, 12.414339065551758, 26.85804557800293),
  rotation: new Quaternion(1.0225679894851347e-14, -0.698123574256897, 8.322282241124412e-8, -0.7159773707389832),
  scale: new Vector3(1.000009536743164, 1, 1.000009536743164)
})
externalLink12.addComponentOrReplace(transform66)

const imageFromURL12 = new Entity('imageFromURL12')
engine.addEntity(imageFromURL12)
imageFromURL12.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(3.0493526458740234, 13.002758026123047, 24.105825424194336),
  rotation: new Quaternion(-1.0454056071057104e-14, 0.7065719366073608, -8.422993857948313e-8, 0.7076412439346313),
  scale: new Vector3(5.946708679199219, 5.946615219116211, 5.946708679199219)
})
imageFromURL12.addComponentOrReplace(transform67)

const floorLampPaperLight = new Entity('floorLampPaperLight')
engine.addEntity(floorLampPaperLight)
floorLampPaperLight.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(27.736730575561523, 20.274768829345703, 21.749225616455078),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorLampPaperLight.addComponentOrReplace(transform68)

const blueAcaciaTree = new Entity('blueAcaciaTree')
engine.addEntity(blueAcaciaTree)
blueAcaciaTree.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(25.892292022705078, 20.266529083251953, 4.9554548263549805),
  rotation: new Quaternion(-2.717226425891987e-15, 0.9959880709648132, -1.1873100902448641e-7, 0.0894869714975357),
  scale: new Vector3(0.9706452488899231, 0.9706442356109619, 0.9706452488899231)
})
blueAcaciaTree.addComponentOrReplace(transform69)
const gltfShape7 = new GLTFShape("models/Tree_Forest_Blue_01/Tree_Forest_Blue_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
blueAcaciaTree.addComponentOrReplace(gltfShape7)

const crossTable2 = new Entity('crossTable2')
engine.addEntity(crossTable2)
crossTable2.setParent(_scene)
crossTable2.addComponentOrReplace(gltfShape2)
const transform70 = new Transform({
  position: new Vector3(25.41983413696289, 20.26089096069336, 7.9822845458984375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
crossTable2.addComponentOrReplace(transform70)

const stairsSpiral4 = new Entity('stairsSpiral4')
engine.addEntity(stairsSpiral4)
stairsSpiral4.setParent(_scene)
const gltfShape8 = new GLTFShape("models/SpiralStairs.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
stairsSpiral4.addComponentOrReplace(gltfShape8)
const transform71 = new Transform({
  position: new Vector3(16.083131790161133, 35.276580810546875, 6.307870864868164),
  rotation: new Quaternion(1.0777869990528845e-14, -0.7005386352539062, 8.351069880063733e-8, 0.7136145234107971),
  scale: new Vector3(1.000111699104309, 1.2433000802993774, 1.3074476718902588)
})
stairsSpiral4.addComponentOrReplace(transform71)

const stairsSpiral = new Entity('stairsSpiral')
engine.addEntity(stairsSpiral)
stairsSpiral.setParent(_scene)
stairsSpiral.addComponentOrReplace(gltfShape8)
const transform72 = new Transform({
  position: new Vector3(16.083131790161133, 30.31056785583496, 6.307870864868164),
  rotation: new Quaternion(1.0777869990528845e-14, -0.7005386352539062, 8.351069880063733e-8, 0.7136145234107971),
  scale: new Vector3(1.0001128911972046, 1.2433000802993774, 1.3074488639831543)
})
stairsSpiral.addComponentOrReplace(transform72)

const stairsSpiral2 = new Entity('stairsSpiral2')
engine.addEntity(stairsSpiral2)
stairsSpiral2.setParent(_scene)
stairsSpiral2.addComponentOrReplace(gltfShape8)
const transform73 = new Transform({
  position: new Vector3(16.083131790161133, 25.3480281829834, 6.307870864868164),
  rotation: new Quaternion(1.0777869990528845e-14, -0.7005386352539062, 8.351069880063733e-8, 0.7136145234107971),
  scale: new Vector3(1.0001131296157837, 1.2433000802993774, 1.3074491024017334)
})
stairsSpiral2.addComponentOrReplace(transform73)

const stairsSpiral3 = new Entity('stairsSpiral3')
engine.addEntity(stairsSpiral3)
stairsSpiral3.setParent(_scene)
stairsSpiral3.addComponentOrReplace(gltfShape8)
const transform74 = new Transform({
  position: new Vector3(16.083131790161133, 20.07587432861328, 6.307870864868164),
  rotation: new Quaternion(1.0777869990528845e-14, -0.7005386352539062, 8.351069880063733e-8, 0.7136145234107971),
  scale: new Vector3(1.0001174211502075, 1.3029506206512451, 1.3074533939361572)
})
stairsSpiral3.addComponentOrReplace(transform74)

const hoveringCrystalCandelabra = new Entity('hoveringCrystalCandelabra')
engine.addEntity(hoveringCrystalCandelabra)
hoveringCrystalCandelabra.setParent(_scene)
const transform75 = new Transform({
  position: new Vector3(16.020889282226562, 10.244304656982422, 15.850269317626953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
hoveringCrystalCandelabra.addComponentOrReplace(transform75)
const gltfShape9 = new GLTFShape("models/CrystalTotem_01/CrystalTotem_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
hoveringCrystalCandelabra.addComponentOrReplace(gltfShape9)

const greenStar = new Entity('greenStar')
engine.addEntity(greenStar)
greenStar.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(15.921262741088867, 42.79351043701172, 18.426597595214844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenStar.addComponentOrReplace(transform76)
const gltfShape10 = new GLTFShape("models/Star_01/Star_01.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
greenStar.addComponentOrReplace(gltfShape10)

const couchCurved = new Entity('couchCurved')
engine.addEntity(couchCurved)
couchCurved.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(9.364827156066895, 20.178119659423828, 24.71357536315918),
  rotation: new Quaternion(-2.830111142047278e-15, -0.8585376739501953, 1.0234565195332834e-7, -0.5127506256103516),
  scale: new Vector3(1.0000048875808716, 1, 1.0000048875808716)
})
couchCurved.addComponentOrReplace(transform77)
const gltfShape11 = new GLTFShape("models/CurvedCouch.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
couchCurved.addComponentOrReplace(gltfShape11)

const purpleWeepingWillowTree = new Entity('purpleWeepingWillowTree')
engine.addEntity(purpleWeepingWillowTree)
purpleWeepingWillowTree.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(6.7106781005859375, 40.312599182128906, 3.982546806335449),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6841220855712891, 0.6841220855712891, 0.6841220855712891)
})
purpleWeepingWillowTree.addComponentOrReplace(transform78)
const gltfShape12 = new GLTFShape("models/Tree_Leafs_01/Tree_Leafs_01.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
purpleWeepingWillowTree.addComponentOrReplace(gltfShape12)

const clusteredPinkAcaciaTree = new Entity('clusteredPinkAcaciaTree')
engine.addEntity(clusteredPinkAcaciaTree)
clusteredPinkAcaciaTree.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(6.411943435668945, 40.299530029296875, 29.57198715209961),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4522293210029602, 0.4522293210029602, 0.4522293210029602)
})
clusteredPinkAcaciaTree.addComponentOrReplace(transform79)
const gltfShape13 = new GLTFShape("models/Tree_Forest_Pink_03/Tree_Forest_Pink_03.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
clusteredPinkAcaciaTree.addComponentOrReplace(gltfShape13)

const imageFromURL18 = new Entity('imageFromURL18')
engine.addEntity(imageFromURL18)
imageFromURL18.setParent(_scene)
const transform80 = new Transform({
  position: new Vector3(3.0493531227111816, 33.019046783447266, 7.041301727294922),
  rotation: new Quaternion(-1.0454056071057104e-14, 0.7065719366073608, -8.422993857948313e-8, 0.7076412439346313),
  scale: new Vector3(5.946690559387207, 5.946615219116211, 5.946690559387207)
})
imageFromURL18.addComponentOrReplace(transform80)

const externalLink18 = new Entity('externalLink18')
engine.addEntity(externalLink18)
externalLink18.setParent(_scene)
const transform81 = new Transform({
  position: new Vector3(3.0148448944091797, 32.43062973022461, 9.793522834777832),
  rotation: new Quaternion(1.0225679894851347e-14, -0.698123574256897, 8.322282241124412e-8, -0.7159773707389832),
  scale: new Vector3(1.0000102519989014, 1, 1.0000102519989014)
})
externalLink18.addComponentOrReplace(transform81)

const imageFromURL19 = new Entity('imageFromURL19')
engine.addEntity(imageFromURL19)
imageFromURL19.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(3.075474262237549, 35.34917068481445, 15.68497085571289),
  rotation: new Quaternion(-1.2542247666472552e-15, 0.7218804359436035, -8.60548254877358e-8, 0.6920179128646851),
  scale: new Vector3(3.5676910877227783, 3.567676305770874, 3.0175318717956543)
})
imageFromURL19.addComponentOrReplace(transform82)

const externalLink19 = new Entity('externalLink19')
engine.addEntity(externalLink19)
externalLink19.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(3.118591785430908, 34.81322479248047, 17.10811996459961),
  rotation: new Quaternion(-1.2542247666472552e-15, 0.7218804359436035, -8.60548254877358e-8, 0.6920179128646851),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
externalLink19.addComponentOrReplace(transform83)

const imageFromURL21 = new Entity('imageFromURL21')
engine.addEntity(imageFromURL21)
imageFromURL21.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(3.0493531227111816, 33.019046783447266, 25.064590454101562),
  rotation: new Quaternion(-1.0454056071057104e-14, 0.7065719366073608, -8.422993857948313e-8, 0.7076412439346313),
  scale: new Vector3(5.9466872215271, 5.946615219116211, 5.9466872215271)
})
imageFromURL21.addComponentOrReplace(transform84)

const externalLink21 = new Entity('externalLink21')
engine.addEntity(externalLink21)
externalLink21.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(3.017657995223999, 32.43062973022461, 27.816810607910156),
  rotation: new Quaternion(1.0225679894851347e-14, -0.698123574256897, 8.322282241124412e-8, -0.7159773707389832),
  scale: new Vector3(1.0000102519989014, 1, 1.0000102519989014)
})
externalLink21.addComponentOrReplace(transform85)

const imageFromURL22 = new Entity('imageFromURL22')
engine.addEntity(imageFromURL22)
imageFromURL22.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(15.741052627563477, 25.003679275512695, 28.962291717529297),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(3.5676963329315186, 3.567676305770874, 3.0175318717956543)
})
imageFromURL22.addComponentOrReplace(transform86)

const externalLink22 = new Entity('externalLink22')
engine.addEntity(externalLink22)
externalLink22.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(17.28711700439453, 24.467729568481445, 28.979936599731445),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.000002384185791, 1, 1.000002384185791)
})
externalLink22.addComponentOrReplace(transform87)

const imageFromURL25 = new Entity('imageFromURL25')
engine.addEntity(imageFromURL25)
imageFromURL25.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(28.949506759643555, 25.055021286010742, 16.077241897583008),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(3.567697763442993, 3.567676305770874, 3.0175299644470215)
})
imageFromURL25.addComponentOrReplace(transform88)

const externalLink25 = new Entity('externalLink25')
engine.addEntity(externalLink25)
externalLink25.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(28.93500518798828, 24.519071578979492, 14.531143188476562),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(1.0000032186508179, 1, 1.0000032186508179)
})
externalLink25.addComponentOrReplace(transform89)

const imageFromURL26 = new Entity('imageFromURL26')
engine.addEntity(imageFromURL26)
imageFromURL26.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(28.951683044433594, 32.97753143310547, 24.747848510742188),
  rotation: new Quaternion(-9.934926730102126e-16, -0.7077084183692932, 8.43654035520558e-8, 0.7065047025680542),
  scale: new Vector3(5.946658611297607, 5.946615219116211, 5.946658611297607)
})
imageFromURL26.addComponentOrReplace(transform90)

const externalLink26 = new Entity('externalLink26')
engine.addEntity(externalLink26)
externalLink26.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(28.87394142150879, 32.38911056518555, 21.979581832885742),
  rotation: new Quaternion(-3.6769259783176605e-15, 0.7160437703132629, -8.535905493545215e-8, -0.6980554461479187),
  scale: new Vector3(1.0000059604644775, 1, 1.0000059604644775)
})
externalLink26.addComponentOrReplace(transform91)

const imageFromURL27 = new Entity('imageFromURL27')
engine.addEntity(imageFromURL27)
imageFromURL27.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(28.949506759643555, 35.24831771850586, 16.174654006958008),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(3.567697763442993, 3.567676305770874, 3.0175318717956543)
})
imageFromURL27.addComponentOrReplace(transform92)

const externalLink27 = new Entity('externalLink27')
engine.addEntity(externalLink27)
externalLink27.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(28.93500518798828, 34.71236801147461, 14.628555297851562),
  rotation: new Quaternion(7.31987492402211e-15, -0.6998637914657593, 8.343025115209457e-8, 0.7142763733863831),
  scale: new Vector3(1.0000032186508179, 1, 1.0000032186508179)
})
externalLink27.addComponentOrReplace(transform93)

const imageFromURL29 = new Entity('imageFromURL29')
engine.addEntity(imageFromURL29)
imageFromURL29.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(28.951683044433594, 32.97753143310547, 6.878249645233154),
  rotation: new Quaternion(-9.934926730102126e-16, -0.7077084183692932, 8.43654035520558e-8, 0.7065047025680542),
  scale: new Vector3(5.946652412414551, 5.946615219116211, 5.946652412414551)
})
imageFromURL29.addComponentOrReplace(transform94)

const externalLink29 = new Entity('externalLink29')
engine.addEntity(externalLink29)
externalLink29.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(28.87394142150879, 32.38911056518555, 4.198273658752441),
  rotation: new Quaternion(-3.6769259783176605e-15, 0.7160437703132629, -8.535905493545215e-8, -0.6980554461479187),
  scale: new Vector3(1.0000057220458984, 1, 1.0000057220458984)
})
externalLink29.addComponentOrReplace(transform95)

const imageFromURL30 = new Entity('imageFromURL30')
engine.addEntity(imageFromURL30)
imageFromURL30.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(24.716707229614258, 33.09819030761719, 3.0387563705444336),
  rotation: new Quaternion(1.2710813575723262e-14, 0.0002047419548034668, -2.441072691206081e-11, -1),
  scale: new Vector3(5.946661949157715, 5.946615219116211, 5.946661949157715)
})
imageFromURL30.addComponentOrReplace(transform96)

const externalLink30 = new Entity('externalLink30')
engine.addEntity(externalLink30)
externalLink30.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(22.01703453063965, 32.55036926269531, 3.2228145599365234),
  rotation: new Quaternion(1.2710813575723262e-14, 0.0002047419548034668, -2.441072691206081e-11, -1),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
externalLink30.addComponentOrReplace(transform97)

const imageFromURL33 = new Entity('imageFromURL33')
engine.addEntity(imageFromURL33)
imageFromURL33.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(6.916759014129639, 33.09819030761719, 3.048508644104004),
  rotation: new Quaternion(1.268281236055293e-14, -0.007261632010340691, 8.656502181736414e-10, -0.999973714351654),
  scale: new Vector3(5.946657657623291, 5.946615219116211, 5.946657657623291)
})
imageFromURL33.addComponentOrReplace(transform98)

const externalLink33 = new Entity('externalLink33')
engine.addEntity(externalLink33)
externalLink33.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(4.141162395477295, 32.55036926269531, 3.038022994995117),
  rotation: new Quaternion(1.2710813575723262e-14, 0.0002047419548034668, -2.441072691206081e-11, -1),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
externalLink33.addComponentOrReplace(transform99)

const videoStream2 = new Entity('videoStream2')
engine.addEntity(videoStream2)
videoStream2.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(3.067686080932617, 25.006914138793945, 16.00077247619629),
  rotation: new Quaternion(-2.2640707871327513e-15, 0.7077744603157043, -8.43733118927048e-8, 0.7064385414123535),
  scale: new Vector3(2.014162063598633, 2.0141518115997314, 2.1334729194641113)
})
videoStream2.addComponentOrReplace(transform100)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape14 = new GLTFShape("models/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
entity.addComponentOrReplace(gltfShape14)
const transform101 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform101)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape14)
const transform102 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform102)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape14)
const transform103 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform103)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape14)
const transform104 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform104)

const blueAcaciaTree2 = new Entity('blueAcaciaTree2')
engine.addEntity(blueAcaciaTree2)
blueAcaciaTree2.setParent(_scene)
const transform105 = new Transform({
  position: new Vector3(27.23755645751953, 40.389034271240234, 4.861242294311523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.587049663066864, 0.587049663066864, 0.587049663066864)
})
blueAcaciaTree2.addComponentOrReplace(transform105)
blueAcaciaTree2.addComponentOrReplace(gltfShape7)

const blueAcaciaTree3 = new Entity('blueAcaciaTree3')
engine.addEntity(blueAcaciaTree3)
blueAcaciaTree3.setParent(_scene)
blueAcaciaTree3.addComponentOrReplace(gltfShape7)
const transform106 = new Transform({
  position: new Vector3(6.547363758087158, 20.266529083251953, 6.619909286499023),
  rotation: new Quaternion(3.4995901440409635e-14, -0.5467007756233215, 6.517180395348987e-8, -0.8373280763626099),
  scale: new Vector3(0.9706469178199768, 0.9706442356109619, 0.9706469178199768)
})
blueAcaciaTree3.addComponentOrReplace(transform106)

const pinkAcaciaTree2 = new Entity('pinkAcaciaTree2')
engine.addEntity(pinkAcaciaTree2)
pinkAcaciaTree2.setParent(_scene)
const gltfShape15 = new GLTFShape("models/Tree_Forest_Pink_01/Tree_Forest_Pink_01.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
pinkAcaciaTree2.addComponentOrReplace(gltfShape15)
const transform107 = new Transform({
  position: new Vector3(8.580743789672852, 20.334291458129883, 27.327892303466797),
  rotation: new Quaternion(-1.5792039916961813e-14, -0.012494265101850033, 1.4894447897262353e-9, 0.999921977519989),
  scale: new Vector3(0.9442368149757385, 0.9442322850227356, 0.9442368149757385)
})
pinkAcaciaTree2.addComponentOrReplace(transform107)

const solidWhite = new Entity('solidWhite')
engine.addEntity(solidWhite)
solidWhite.setParent(_scene)
const transform108 = new Transform({
  position: new Vector3(6.541816234588623, 20.243993759155273, 6.4729437828063965),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6934038400650024, 0.31946125626564026, 1.6334466934204102)
})
solidWhite.addComponentOrReplace(transform108)
const gltfShape16 = new GLTFShape("models/solid_white.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
solidWhite.addComponentOrReplace(gltfShape16)

const turquoiseAcaciaTree = new Entity('turquoiseAcaciaTree')
engine.addEntity(turquoiseAcaciaTree)
turquoiseAcaciaTree.setParent(_scene)
const transform109 = new Transform({
  position: new Vector3(27.305797576904297, 20.32172203063965, 25.525127410888672),
  rotation: new Quaternion(-1.6460158329932324e-15, 0.7327812910079956, -8.735431578088537e-8, 0.6804643273353577),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447)
})
turquoiseAcaciaTree.addComponentOrReplace(transform109)
const gltfShape17 = new GLTFShape("models/Tree_Forest_Turquoise_01/Tree_Forest_Turquoise_01.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
turquoiseAcaciaTree.addComponentOrReplace(gltfShape17)

const armchairWhiteModern = new Entity('armchairWhiteModern')
engine.addEntity(armchairWhiteModern)
armchairWhiteModern.setParent(_scene)
const transform110 = new Transform({
  position: new Vector3(9.119510650634766, 20.22156524658203, 4.982404708862305),
  rotation: new Quaternion(-6.454443997636972e-16, 0.45324063301086426, -5.40304938567715e-8, 0.8913882374763489),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
armchairWhiteModern.addComponentOrReplace(transform110)
const gltfShape18 = new GLTFShape("models/WhiteModernArmchair.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
armchairWhiteModern.addComponentOrReplace(gltfShape18)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(28.951683044433594, 13.08889102935791, 16.04444122314453),
  rotation: new Quaternion(-9.934926730102126e-16, -0.7077084183692932, 8.43654035520558e-8, 0.7065047025680542),
  scale: new Vector3(5.946677207946777, 5.946615219116211, 5.946677207946777)
})
imageFromURL3.addComponentOrReplace(transform111)

const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
externalLink3.setParent(_scene)
const transform112 = new Transform({
  position: new Vector3(28.87394142150879, 12.500471115112305, 13.276174545288086),
  rotation: new Quaternion(-3.6769259783176605e-15, 0.7160437703132629, -8.535905493545215e-8, -0.6980554461479187),
  scale: new Vector3(1.0000054836273193, 1, 1.0000054836273193)
})
externalLink3.addComponentOrReplace(transform112)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform113 = new Transform({
  position: new Vector3(16.137197494506836, 13.022706031799316, 3.059324264526367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.946615219116211, 5.946615219116211, 5.946615219116211)
})
imageFromURL4.addComponentOrReplace(transform113)

const externalLink5 = new Entity('externalLink5')
engine.addEntity(externalLink5)
externalLink5.setParent(_scene)
const transform114 = new Transform({
  position: new Vector3(13.437517166137695, 12.474886894226074, 3.0423145294189453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink5.addComponentOrReplace(transform114)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform115 = new Transform({
  position: new Vector3(3.0493526458740234, 13.002758026123047, 16.158218383789062),
  rotation: new Quaternion(-1.0454056071057104e-14, 0.7065719366073608, -8.422993857948313e-8, 0.7076412439346313),
  scale: new Vector3(5.946712493896484, 5.946615219116211, 5.946712493896484)
})
imageFromURL7.addComponentOrReplace(transform115)

const externalLink7 = new Entity('externalLink7')
engine.addEntity(externalLink7)
externalLink7.setParent(_scene)
const transform116 = new Transform({
  position: new Vector3(3.0403223037719727, 12.414339065551758, 18.910438537597656),
  rotation: new Quaternion(1.0225679894851347e-14, -0.698123574256897, 8.322282241124412e-8, -0.7159773707389832),
  scale: new Vector3(1.000009298324585, 1, 1.000009298324585)
})
externalLink7.addComponentOrReplace(transform116)

const imageFromURL9 = new Entity('imageFromURL9')
engine.addEntity(imageFromURL9)
imageFromURL9.setParent(_scene)
const transform117 = new Transform({
  position: new Vector3(15.806207656860352, 13.08479118347168, 28.959455490112305),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(5.946667194366455, 5.946615219116211, 5.946667194366455)
})
imageFromURL9.addComponentOrReplace(transform117)

const externalLink9 = new Entity('externalLink9')
engine.addEntity(externalLink9)
externalLink9.setParent(_scene)
const transform118 = new Transform({
  position: new Vector3(18.50588035583496, 12.536972045898438, 28.97757339477539),
  rotation: new Quaternion(3.068332117501176e-16, -1, 1.1920926823449918e-7, -0.00020487976144067943),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
externalLink9.addComponentOrReplace(transform118)

const studzdragonmoonroofFinal = new Entity('studzdragonmoonroofFinal')
engine.addEntity(studzdragonmoonroofFinal)
studzdragonmoonroofFinal.setParent(_scene)
const transform119 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
studzdragonmoonroofFinal.addComponentOrReplace(transform119)
const gltfShape19 = new GLTFShape("models/StudzDragonMoonRoof_Final_17.gltf")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
studzdragonmoonroofFinal.addComponentOrReplace(gltfShape19)

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
script2.spawn(externalLink4, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/9","name":"Buy Here"}, createChannel(channelId, externalLink4, channelBus))
script1.spawn(imageFromURL5, {"image":"https://lh3.googleusercontent.com/TtjsvdRmeiYTcbAVCLCxglHa5As8475UHRzR0CpU2RaZjcd7PfoXaiEpCgIQejw_bmzmxho4_RwjjZrX9A3V7N5R=s992"}, createChannel(channelId, imageFromURL5, channelBus))
script1.spawn(imageFromURL6, {"image":"https://lh3.googleusercontent.com/eeBh53LmznWnU36NJbpVVSPTKefxHTmtN1mnzGR3V1ZJ2DkE8HCyEe-tdcDnIEtpI8vHlaYtvuPcioFFVlauGa1z=s992"}, createChannel(channelId, imageFromURL6, channelBus))
script2.spawn(externalLink6, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/3","name":"Buy Here"}, createChannel(channelId, externalLink6, channelBus))
script1.spawn(imageFromURL11, {"image":"https://lh3.googleusercontent.com/It9vOD7dPT6SLbPkIIGM82SGtJxjN5LRghFHytrxMs3PCao3v7CdhKDfcv0OdcWGH9WBVl2ibTgPFluUBiua2TlE=s0"}, createChannel(channelId, imageFromURL11, channelBus))
script2.spawn(externalLink8, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/2","name":"Buy Here"}, createChannel(channelId, externalLink8, channelBus))
script2.spawn(externalLink10, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/4","name":"Buy Here"}, createChannel(channelId, externalLink10, channelBus))
script1.spawn(imageFromURL8, {"image":"https://lh3.googleusercontent.com/Io_hiQzLp6NzwMfH47-9kK1wpsAZGXKDJJ-IPdbxh3pA21s0tGn1mkGnkYTQtYRsAdT8jfjfpJI2GLKZVDeRi5kT=s992"}, createChannel(channelId, imageFromURL8, channelBus))
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
script2.spawn(externalLink12, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/1","name":"Buy Here"}, createChannel(channelId, externalLink12, channelBus))
script1.spawn(imageFromURL12, {"image":"https://lh3.googleusercontent.com/caiF4yzPXfy6zF4x9UeuzA6Ay7BTV5T-yY0gtwx725BLjg-J_0oE1c8J_ru0DYwHsFK6Sn5ws3zQJke4iENrX70=s992"}, createChannel(channelId, imageFromURL12, channelBus))
script7.spawn(floorLampPaperLight, {"startOn":true,"clickable":true}, createChannel(channelId, floorLampPaperLight, channelBus))
script1.spawn(imageFromURL18, {"image":"https://lh3.googleusercontent.com/caiF4yzPXfy6zF4x9UeuzA6Ay7BTV5T-yY0gtwx725BLjg-J_0oE1c8J_ru0DYwHsFK6Sn5ws3zQJke4iENrX70=s992"}, createChannel(channelId, imageFromURL18, channelBus))
script2.spawn(externalLink18, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/1","name":"Buy Here"}, createChannel(channelId, externalLink18, channelBus))
script1.spawn(imageFromURL19, {"image":"https://lh3.googleusercontent.com/6GcBE43adeSaAtkFSwgsA0zjDuAZyywZLs3xPFFYyLLsD-7rdGy9Ar8kTtEz10LkkQyfX2Yk-xGe9Dk2HVMjxuum=s992"}, createChannel(channelId, imageFromURL19, channelBus))
script2.spawn(externalLink19, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/32","name":"Buy Here"}, createChannel(channelId, externalLink19, channelBus))
script1.spawn(imageFromURL21, {"image":"https://lh3.googleusercontent.com/caiF4yzPXfy6zF4x9UeuzA6Ay7BTV5T-yY0gtwx725BLjg-J_0oE1c8J_ru0DYwHsFK6Sn5ws3zQJke4iENrX70=s992"}, createChannel(channelId, imageFromURL21, channelBus))
script2.spawn(externalLink21, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/1","name":"Buy Here"}, createChannel(channelId, externalLink21, channelBus))
script1.spawn(imageFromURL22, {"image":"https://lh3.googleusercontent.com/mITk97j5f5ae7NTc1_f8U8EleVs3J_dbZfSmgYPI10nSvup2AjeZ3ZISr5DvGfK0W2S34tJmh-_scdZVgDRJYJSC=s992"}, createChannel(channelId, imageFromURL22, channelBus))
script2.spawn(externalLink22, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/38","name":"Buy Here"}, createChannel(channelId, externalLink22, channelBus))
script1.spawn(imageFromURL25, {"image":"https://lh3.googleusercontent.com/mITk97j5f5ae7NTc1_f8U8EleVs3J_dbZfSmgYPI10nSvup2AjeZ3ZISr5DvGfK0W2S34tJmh-_scdZVgDRJYJSC=s992"}, createChannel(channelId, imageFromURL25, channelBus))
script2.spawn(externalLink25, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/38","name":"Buy Here"}, createChannel(channelId, externalLink25, channelBus))
script1.spawn(imageFromURL26, {"image":"https://lh3.googleusercontent.com/eeBh53LmznWnU36NJbpVVSPTKefxHTmtN1mnzGR3V1ZJ2DkE8HCyEe-tdcDnIEtpI8vHlaYtvuPcioFFVlauGa1z=s992"}, createChannel(channelId, imageFromURL26, channelBus))
script2.spawn(externalLink26, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/3","name":"Buy Here"}, createChannel(channelId, externalLink26, channelBus))
script1.spawn(imageFromURL27, {"image":"https://lh3.googleusercontent.com/mITk97j5f5ae7NTc1_f8U8EleVs3J_dbZfSmgYPI10nSvup2AjeZ3ZISr5DvGfK0W2S34tJmh-_scdZVgDRJYJSC=s992"}, createChannel(channelId, imageFromURL27, channelBus))
script2.spawn(externalLink27, {"url":"https://opensea.io/assets/0x2a09916bc9e91a7763ed69a743412058cfa95378/38","name":"Buy Here"}, createChannel(channelId, externalLink27, channelBus))
script1.spawn(imageFromURL29, {"image":"https://lh3.googleusercontent.com/TtjsvdRmeiYTcbAVCLCxglHa5As8475UHRzR0CpU2RaZjcd7PfoXaiEpCgIQejw_bmzmxho4_RwjjZrX9A3V7N5R=s992"}, createChannel(channelId, imageFromURL29, channelBus))
script2.spawn(externalLink29, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/9","name":"Buy Here"}, createChannel(channelId, externalLink29, channelBus))
script1.spawn(imageFromURL30, {"image":"https://lh3.googleusercontent.com/It9vOD7dPT6SLbPkIIGM82SGtJxjN5LRghFHytrxMs3PCao3v7CdhKDfcv0OdcWGH9WBVl2ibTgPFluUBiua2TlE=s0"}, createChannel(channelId, imageFromURL30, channelBus))
script2.spawn(externalLink30, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/2","name":"Buy Here"}, createChannel(channelId, externalLink30, channelBus))
script1.spawn(imageFromURL33, {"image":"https://lh3.googleusercontent.com/Io_hiQzLp6NzwMfH47-9kK1wpsAZGXKDJJ-IPdbxh3pA21s0tGn1mkGnkYTQtYRsAdT8jfjfpJI2GLKZVDeRi5kT=s992"}, createChannel(channelId, imageFromURL33, channelBus))
script2.spawn(externalLink33, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/4","name":"Buy Here"}, createChannel(channelId, externalLink33, channelBus))
script10.spawn(videoStream2, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream2","actionId":"toggle","values":{}}],"station":"https://theuniverse.club/live/consensys/index.m3u8"}, createChannel(channelId, videoStream2, channelBus))
script1.spawn(imageFromURL3, {"image":"https://lh3.googleusercontent.com/eeBh53LmznWnU36NJbpVVSPTKefxHTmtN1mnzGR3V1ZJ2DkE8HCyEe-tdcDnIEtpI8vHlaYtvuPcioFFVlauGa1z=s992"}, createChannel(channelId, imageFromURL3, channelBus))
script2.spawn(externalLink3, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/3","name":"Buy Here"}, createChannel(channelId, externalLink3, channelBus))
script1.spawn(imageFromURL4, {"image":"https://lh3.googleusercontent.com/t7IpdopCxCfDxZePRXnmnTsao8Bwig7sjtL6sXZTI_bdHw8dJW42Fw1Ts2TkSUweQzlcawANbdc6xVz5aeVgU1cT=s992"}, createChannel(channelId, imageFromURL4, channelBus))
script2.spawn(externalLink5, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/7","name":"Buy Here"}, createChannel(channelId, externalLink5, channelBus))
script1.spawn(imageFromURL7, {"image":"https://lh3.googleusercontent.com/caiF4yzPXfy6zF4x9UeuzA6Ay7BTV5T-yY0gtwx725BLjg-J_0oE1c8J_ru0DYwHsFK6Sn5ws3zQJke4iENrX70=s992"}, createChannel(channelId, imageFromURL7, channelBus))
script2.spawn(externalLink7, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/1","name":"Buy Here"}, createChannel(channelId, externalLink7, channelBus))
script1.spawn(imageFromURL9, {"image":"https://lh3.googleusercontent.com/It9vOD7dPT6SLbPkIIGM82SGtJxjN5LRghFHytrxMs3PCao3v7CdhKDfcv0OdcWGH9WBVl2ibTgPFluUBiua2TlE=s0"}, createChannel(channelId, imageFromURL9, channelBus))
script2.spawn(externalLink9, {"url":"https://opensea.io/assets/0xd7033cc4fd21b49fa2227d50c21638b6a708c994/2","name":"Buy Here"}, createChannel(channelId, externalLink9, channelBus))