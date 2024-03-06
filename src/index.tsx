import ReactDOM from 'react-dom/client'
import './index.css'
import App from './modules/app/app'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <>
    <App />
  </>,
)
