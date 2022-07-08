import { pivotScene } from './pivot'
import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import { AliceDialog } from './dialogData'

export const alice = new NPC(
    {
      position: new Vector3(0, 2.0, 1.0),
      rotation: Quaternion.Euler(45, 0, 0)
    },
    'models/robots/betty.glb',
    () => {
      // animations
      alice.playAnimation('Hello', true, 2)
  
      const dummyent = new Entity()
      dummyent.addComponent(
        new NPCDelay(2, () => {
          alice.playAnimation('Talk')
        })
      )
      dummyent.setParent(pivotScene)
      
      // sound
      alice.addComponentOrReplace(new AudioSource(new AudioClip('sounds/alice.mp3')))
      alice.getComponent(AudioSource).playOnce()
  
      // dialog UI
      alice.talk(AliceDialog)
    },
    {
      faceUser: true,
      portrait: {
        path: 'images/portraits/betty.png',
        height: 256,
        width: 256,
        section: {
          sourceHeight: 512,
          sourceWidth: 512
        }
      },
      onWalkAway: () => {
        alice.playAnimation('Goodbye', true, 2)
      }
    }
  )

export function addRobot() {
    alice.setParent(pivotScene)
}