import { createSlice } from '@reduxjs/toolkit'
import { IInitialState } from '../types/types'

const initialState: IInitialState = {
  'records': [],
  'renderedAllRecords': [],
  'renderedCurRecords': [],
  'renderedCompRecords': [],
}

const mainSlicesRecords = createSlice({
  'name': 'records',
  initialState,
  'reducers': {
    'onAddRecord': (state, action) => {
      state.records = [...state.records, action.payload]
    },
    'onToggleStatusRecord': (state, action) => {
      state.records = state.records.map((rec) => {
        if (rec.id === action.payload) {
          return {
            ...rec,
            'filter': rec.filter === 'Current' ? 'Completed' : 'Current',
          }
        }
        return rec
      })
    },
    'onFilteredAllRecords': (state) => {
      state.renderedAllRecords = state.records.filter((rec) => {
        return rec.filter
      })
    },
    'onFilteredCompRecords': (state) => {
      state.renderedCompRecords = state.records.filter((rec) => {
        return rec.filter === 'Completed'
      })
    },
    'onFilteredCurrentRecords': (state) => {
      state.renderedCurRecords = state.records.filter((rec) => {
        return rec.filter === 'Current'
      })
    },
  },
})

const { actions, reducer } = mainSlicesRecords

export const {
  onAddRecord,
  onFilteredAllRecords,
  onFilteredCurrentRecords,
  onFilteredCompRecords,
  onToggleStatusRecord,
} = actions

export default reducer
