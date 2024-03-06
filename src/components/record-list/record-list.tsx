import React from 'react'
import Record from '../record/record'
import { useAppSelector } from '../../store/store'
import { IRecord } from '../../types/types'

const RecordList: React.FC<{filter: string | undefined}> = ({ filter }) => {
  const allRecords = useAppSelector((state) => state.records.renderedAllRecords)
  const current = useAppSelector((state) => state.records.renderedCurRecords)
  const completed = useAppSelector((state) => state.records.renderedCompRecords)
  let records: Array<IRecord>

  switch (filter) {
    case 'All': {
      records = allRecords
      break
    }
    case 'Current': {
      records = current
      break
    }
    case 'Completed': {
      records = completed
      break
    }
    default: {
      records = []
      break
    }
  }

  return <ul className={ `w-[100%] flex flex-col justify-center
    items-center gap-[10px] p-[0]`}>
    {
      records.length > 0 ? records.map((rec) => {
        return <Record
          key={rec.id}
          name={rec.name}
          description={rec.description}
          id={rec.id}/>
      }) : <div>No records found</div>
    }
  </ul>
}

export default RecordList
