import { AuthContextProvider } from './context/AuthContext'
import { MeetContextProvider } from './context/MeetContext'
import App from './App'

function Root() {
  return (
    <AuthContextProvider>
      <MeetContextProvider>
        <App />
      </MeetContextProvider>
    </AuthContextProvider>
  )
}

export default Root
