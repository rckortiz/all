const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

document.addEventListener('DOMContentLoaded', main)

const suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades']
const ranks = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]

const deck = []

const makeDeck = () => {
  for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
    for (let ranksIndex = 0; ranksIndex < ranks.length; ranksIndex++) {
      const newSuit = suits[suitsIndex]
      const newRank = ranks[ranksIndex]

      deck.push(`${newRank} ${'of'} ${newSuit}`)
    }
  }
}

const shuffleDeck = () => {
  for (let i = deck.length - 1; i >= 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
    console.log(deck)
  }
}

const deal = () => {
  document.querySelector('.result').innerHTML(deal)
}

makeDeck()
shuffleDeck()
