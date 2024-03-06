import React, { ReactNode, MouseEvent } from 'react'

export interface IButtonProps {
  'children': ReactNode
  onAddRecord: (event: MouseEvent<HTMLButtonElement>) => void
}

export interface IRecord {
  'name': string
  'description': string
  'filter': string | undefined
  'id': string
}

export interface IFilterButton {
  'children': ReactNode
  'onGetFilter': (event: React.MouseEvent<HTMLButtonElement>) => void
  'recordCount': Array<IRecord>
}

export interface IInitialState {
  'records': Array<IRecord>
  'renderedAllRecords': Array<IRecord>
  'renderedCurRecords': Array<IRecord>
  'renderedCompRecords': Array<IRecord>
}

export type RecordWithoutFilter = Omit<IRecord, 'filter'>
