import {useEffect, useState,useRef} from 'react'
import {getRandomNumber} from './../utils/utils.ts'

interface Item {
  id: number,
  label: string,
  active: boolean,
}

export default function MapUpdatesTest() {

  const generateItems = (count: number) => {
    const items = new Map()
    for (let i = 0; i < count; i++) {
      items.set(i, {
        id: i,
        label: `${i}`,
        active: false,
      })
    }
    return items
  }

  const [items, setItems] = useState<Map<number, Item>>(generateItems(5000))

  const lastUpdated = useRef<number[]>([])

  const updateMapItems = () => {
    setItems((prevItems) => {
      const newMap = new Map(prevItems)
      const updated: number[] = []

      for (const itemKey of lastUpdated.current) {
        const item = newMap.get(itemKey)!
        item.active = false
      }

      for (let i = 0; i < 20; i++) {
        const randomNumber = getRandomNumber(0, 4999, 0)
        const item = newMap.get(randomNumber)!
        item.active = true
        updated.push(randomNumber)
      }

      lastUpdated.current = updated
      return newMap
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateMapItems()
    }, 50)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="w-full flex flex-row flex-wrap gap-0.5">
      {[...items.entries()].map(([key, item]) => (
        <div key={key} className={'rounded-md p-1 ' + (item.active ? 'bg-green-300' : 'bg-gray-200')}>
          {item.label}
        </div>
      ))}
    </div>
)
}
