import { useAppSelector } from '../../store/store'
import React, { useState } from 'react'
import RecordList from '../record-list/record-list'
import FilterButton from '../../ui/filter-button/filter-button'

const Filters:React.FC = () => {
  const [filter, setFilter] = useState<string | undefined>('All')
  const allRecords = useAppSelector((state) => state.records.renderedAllRecords)
  const curRecord = useAppSelector((state) => state.records.renderedCurRecords)
  const comRecord = useAppSelector((state) => state.records.renderedCompRecords)

  const onGetFilter = (event: React.MouseEvent<HTMLButtonElement>):void => {
    if (event.currentTarget.tagName === 'BUTTON') {
      setFilter(event.currentTarget.textContent?.replaceAll(/\d/ug, ''))
    }
  }

  return <div className={ `w-[100%] w-max-[90%] rounded-[6px]
  bg-[#3e5d6c] p-[1rem]`
  }>
    <div className=" w-[min-content] flex gap-[15px] mb-[30px]">
      <FilterButton
        onGetFilter={onGetFilter}
        recordCount={allRecords}>
        All
      </FilterButton>
      <FilterButton
        onGetFilter={onGetFilter}
        recordCount={curRecord}>
        Current
      </FilterButton>
      <FilterButton
        onGetFilter={onGetFilter}
        recordCount={comRecord}>
        Completed
      </FilterButton>
    </div>
    <RecordList filter={filter}/>
  </div>
}

export default Filters
