import React, { forwardRef, RefForwardingComponent } from 'react'
import classNames from 'classnames'

import { useTestingContext, useHeadContext } from '../context'
import { TABLE_HEADER_HEIGHT } from '../hooks/useTableMeasures'
import Row from './Row'
import Cell from './Cell'
import { Column } from '../types'

const Thead: RefForwardingComponent<HTMLTableSectionElement> = (_, ref) => {
  const { testId } = useTestingContext()
  const { sorting, columns } = useHeadContext()
  return (
    <thead
      ref={ref}
      data-testid={`${testId}__header`}
      className="w-100 ph4 truncate overflow-x-hidden c-muted-2 f6">
      <Row height={TABLE_HEADER_HEIGHT}>
        {columns.map((columnData: Column, headerIndex: number) => {
          const { id, title, width, sortable } = columnData
          const cellClassName = classNames('bt normal', { pointer: sortable })
          const active = sorting && sorting.sorted && sorting.sorted.by === id
          const ascending = sorting && sorting.sorted.order !== 'DSC'
          const onclick =
            sortable && sorting ? { onClick: () => sorting.sort(id) } : {}
          return (
            <Cell
              {...onclick}
              active={active}
              className={cellClassName}
              key={headerIndex}
              width={width}
              header>
              {title}
              {sortable && (
                <Cell.Suffix active={active} ascending={ascending} />
              )}
            </Cell>
          )
        })}
      </Row>
    </thead>
  )
}

export default forwardRef(Thead)
