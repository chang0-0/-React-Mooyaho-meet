import { useHistory } from 'react-router'
import { createMeet } from '../api/Meet'
import { useMeetState } from '../context/MeetContext'

export function useCreateMeet() {
  const [meet, setMeet] = useMeetState()
  const history = useHistory()

  /**
   * @param {string} code
   * @param {string} name
   */

  const create = async (code, name) => {
    try {
      await createMeet(code)
      setMeet((prev) => ({ ...prev, meet }))

      if (name !== '') {
        setMeet((prev) => ({ ...prev, name }))
      }

      history.push(`/meet/:${code}`)
    } catch (e) {
      console.error(e)
    }
  }

  return create
}
