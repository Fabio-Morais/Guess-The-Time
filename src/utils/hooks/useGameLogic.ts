import { useState } from 'react'

import Timer from '@/utils/interfaces/Timer'

const useGameLogic = () => {
  const initialState: Timer = { days: 0, hours: 0, minutes: 0 }
  const [timer, setTimer] = useState<Timer>(initialState)

  const setDay = (day: number) => setTimer({ ...timer, days: day })
  const setHours = (hours: number) => setTimer({ ...timer, hours: hours })
  const setMinutes = (minutes: number) =>
    setTimer({ ...timer, minutes: minutes })

  const printTimer = () => {}

  return [timer, setDay, setHours, setMinutes, printTimer] as const
}

export default useGameLogic
