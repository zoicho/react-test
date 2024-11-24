import {useEffect, useState, useRef} from 'react'
import {generateDeepItems} from './../utils/utils.ts'
import type {DeepItem} from './../utils/utils.ts'


export default function DeepStateUpdatesTest() {

  const [items, setItems] = useState<DeepItem[]>(generateDeepItems(5))
  const itemsRef = useRef(items)

  const iteration = useRef(0)

  const updateItems = () => {
    iteration.current = iteration.current + 1
    if (iteration.current > 100) {
      iteration.current = 0
    }
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.items) {
          item.items = item.items.map((iItem) => {
            if (iItem.items) {
              iItem.items = iItem.items.map((iiItem) => ({
                ...iiItem,
                label: `Item ${iteration.current}`,
              }));
            }
            return iItem;
          });
        }
        return item;
      });
      return [...updatedItems];
    });
  }

  useEffect(() => {
    itemsRef.current = items
  }, [items]);

  useEffect(() => {

    const interval = setInterval(() => {
      updateItems()
    }, 200)

    return () => {
      clearInterval(interval)
    }
  }, []);

  return (
    <ul className={'px-4'}>
      {items.map((item) => (
        <li key={item.id}>
          {item.label}
          {item.items && (
            <ul className={'px-4'}>
              {item.items.map((iItem) => (
                <li key={iItem.id}>
                  {iItem.label}
                  {iItem.items && (
                    <ul className={'px-4'}>
                      {iItem.items.map((iiItem) => (
                        <li key={iiItem.id}>
                          {iiItem.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}