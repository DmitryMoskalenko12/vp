import React, { useState } from 'react'
import Button from '../../ui/button/button'
import { useDispatch } from 'react-redux'
import {
  onAddRecord,
  onFilteredAllRecords,
  onFilteredCompRecords,
  onFilteredCurrentRecords,
} from '../../slices/main-slices'

const InputRecordHeader:React.FC = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('')

  const predicate = name.length > 1 && name.length <= 50 &&
  (description.length > 1 && description.length <= 50)
  const dispatch = useDispatch()

  const onSetName = (event:React.ChangeEvent<HTMLInputElement>):void => {
    setName(event.target.value)
  }

  const onSetDescription = (event:React.ChangeEvent<HTMLInputElement>):void => {
    setDescription(event.target.value)
  }

  const onAddRecordToArr = ():string | void => {
    if (predicate) {
      dispatch(onAddRecord({
        name,
        description,
        'filter': 'All',
        'id': Date.now(),
      }))
      dispatch(onFilteredAllRecords())
      dispatch(onFilteredCurrentRecords())
      dispatch(onFilteredCompRecords())
      setName('')
      setDescription('')
      setMessage('')
    } else {
      setMessage('Maintaining from 1 to 50 characters')
    }
  }

  return <header
    className=" flex justify-center items-center gap-[20px] mb-[30px]">
    <input onChange={onSetDescription}
      value={description}
      className={ `w-[150px] h-[40px] p-[15px] rounded-[6px] text-[black]
      placeholder:text-[black] placeholder:text-[15px]`}
      type="text"
      placeholder="Name"/>
    <input
      className={ `w-[200px] h-[40px] p-[15px] rounded-[6px] text-[black]
      placeholder:text-[black] placeholder:text-[15px]`}
      onChange={onSetName}
      value={name} type="text"
      placeholder="Record description"/>
    <div>
      <Button onAddRecord={onAddRecordToArr}>Add record</Button>
      <div className="text-[red] text-[13px] font-medium">{message}</div>
    </div>
  </header>
}

export default InputRecordHeader
