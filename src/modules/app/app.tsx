import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import
InputRecordHeader
  from '../../components/input-record-header/record-header'
import Filters from '../../components/filters/filters'

const App:React.FC = () => {
  return <Provider store={store}>
    <div className={ ` w-[700px] flex justify-center 
    items-start flex-col m-[0_auto] p-[30px]`}>
      <InputRecordHeader/>
      <Filters/>
    </div>
  </Provider>
}

export default App
