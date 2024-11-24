import {useEffect, useState,useRef} from 'react'
import {v4 as uuidv4} from 'uuid'
import {getRandomNumber, shuffle} from './utils/utils.ts';

interface Item {
  id: string,
  color: {
    l: number,
    c: number,
    h: number,
  },
}

function App() {
  const [items, setItems] = useState<Item[]>([])
  const itemsRef = useRef(items)

  useEffect(() => {
    itemsRef.current = items
  }, [items]);

  const generateItems = () => {
    const numberOfItems = 2000
    const items = []
    for (let i = 0; i < numberOfItems; i++) {
      const item: Item = {
        id: uuidv4(),
        color: {
          l: getRandomNumber(0, 1),
          c: getRandomNumber(0, 0.4),
          h: getRandomNumber(0, 360),
        },
      }
      items.push(item)
    }
    setItems(items)
  }

  const changeItemsPositions = () => {
    const shuffledItems = shuffle(itemsRef.current)
    setItems([...shuffledItems])
  }

  useEffect(() => {
    generateItems()
    const interval = setInterval(() => {
      changeItemsPositions()
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <div className={'w-full h-full flex flex-row flex-wrap'}>
        {items.map((item) => (
          <div
            key={item.id}
            className={'w-5 h-5'}
            style={{
              backgroundColor: `oklch(${item.color.l} ${item.color.c} ${item.color.h})`
            }}
          >
          </div>
        ))}
      </div>
    </>
  )
}

export default App
