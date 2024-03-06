import React from 'react'
import { IFilterButton } from '../../types/types'

const FilterButton: React.FC<IFilterButton> =
({ children, onGetFilter, recordCount }) => {
  return <button className={ `flex justify-center items-center
  rounded-[5px] hover:text-[#fff]`
  }
  onClick={onGetFilter}>{children}
    <span
      className={ `rounded-[4px] ml-[0.5rem] p-[0.25rem_0.5rem]
bg-[#0f61ef] text-[#fff] text-[0.7rem]`
      }>
      {recordCount.length}
    </span>
  </button>
}
export default FilterButton
