
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LikeButton from './LikeButton'

function App() {

  return (
    <>
      <LikeButton
        key={'1'}
        initialLike={false}
      />

      <LikeButton
        key={'2'}
        initialLike={true}
      />

      <LikeButton
        key={'3'}
        initialLike={false}
      />
    </>
  )
}

export default App
