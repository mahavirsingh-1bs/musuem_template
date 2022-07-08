import { Dialog } from '@dcl/npc-scene-utils'
import { alice } from './robot'

export const AliceDialog: Dialog[] = [
  {
    text: "Hi, I'm Chatbot - welcome to Fidelity's history wall. Please select your language:"
  },
  {
    text: 'Please select your language:',
    isQuestion: true,
    buttons: [
      { label: 'English', goToDialog: 2 },
      { label: 'हिन्दी', goToDialog: 3 },
      { label: '中国人', goToDialog: 4 }
    ]
  },
  {
    text: "FIL entered the ETF market in 2017, through the launch of two income-focused smart beta ETFs.",
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    text: 'FIL ने 2017 में दो आय-केंद्रित स्मार्ट बीटा ETF के लॉन्च के माध्यम से ETF बाजार में प्रवेश किया।',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('अलविदा', true, 2)
    }
  },
  {
    text: 'FIL 于 2017 年通过推出两款专注于收益的 smart beta ETF 进入 ETF 市场。',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('再见', true, 2)
    }
  },
  {
    text: 'FIL entered the ETF market in 2017, through the launch of two income-focused smart beta ETFs.'
  },
  {
    text: 'Do you want to explore the rest of Genesis Plaza or explore the rest of the world?',
    isQuestion: true,
    buttons: [
      { label: 'PLAZA', goToDialog: 7 },
      { label: 'WORLD', goToDialog: 18 }
    ]
  },
  {
    text: 'Great! There’s a lot to see right here.'
  },
  {
    text: 'If you walk around you might run into my buddies and each is an expert on a different topic.'
  },
  {
    text: 'You can learn a lot from them about how Decentraland works and what makes it special.'
  },
  {
    text: 'I recommend you start at that boat-shaped building to the North!'
  },
  {
    text: "Do you also want to learn about what's beyond Genesis Plaza?",
    isQuestion: true,
    buttons: [
      { label: 'YES', goToDialog: 12 },
      { label: 'NO', goToDialog: 28 }
    ]
  },
  {
    text: 'There’s a big world to explore out there!',
    offsetY: 18
  },
  {
    text: "Around Genesis Plaza you'll find several teleports that can take you directly to special scenes marked as points of interest."
  },
  {
    text: "There's also the 'crowd' teleport, which takes you to the biggest gathering of people in Decentraland so you can meet up and hang out."
  },
  {
    text: "If you press the 'M' key, you’ll open the map. You'll see markers for points of interest that are worth visiting."
  },
  {
    text: "Or simply explore the virtual world by foot and plot your own adventure. Just keep in mind that there's a LOT of ground to cover."
  },
  {
    text: 'So what are you waiting for? Go and explore the world!',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    text: 'There’s a big world to explore out there!'
  },
  {
    text: "Around Genesis Plaza you'll find several teleports that can take you directly to special scenes marked as points of interest."
  },
  {
    text: "There's also the 'crowd' teleport, which takes you to the biggest gathering of people in Decentraland so you can meet up and hang out."
  },
  {
    text: "If you press the 'M' key, you’ll open the map. You'll see markers for points of interest that are worth visiting."
  },
  {
    text: "Or simply explore the virtual world by foot and plot your own adventure. Just keep in mind that there's a LOT of ground to cover."
  },
  {
    text: "Do you also want to find out what's here in Genesis Plaza?",
    isQuestion: true,
    buttons: [
      { label: 'YES', goToDialog: 24 },
      { label: 'NO', goToDialog: 28 }
    ]
  },
  {
    text: 'Great! There’s a lot to see right here.'
  },
  {
    text: 'If you walk around you might run into my buddies and each is an expert on a different topic.'
  },
  {
    text: 'You can learn a lot from them about how Decentraland works and what makes it special.'
  },
  {
    text: 'I recommend you start at that boat-shaped building to the North!'
  },
  {
    text: "Well that's it from me. So what are you waiting for? Go and explore the world!",
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    },
    isEndOfDialog: true
  }
]
