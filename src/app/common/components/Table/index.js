import React, {Fragment, useCallback} from 'react'
import PropTypes from 'prop-types'

/* Visual mapping of column preferences */
const Column = ({
  id,
  header,
  headerClassName,
  cell,
  children,
  onCellClick,
  onHeaderClick,
  ...props
}) => ({...props})

Column.propTypes = {
  id: PropTypes.string.isRequired,
  header: PropTypes.string,
  headerClassName: PropTypes.string,
  cell: PropTypes.func,
  onCellClick: PropTypes.func,
  onHeaderClick: PropTypes.func,
}

Column.defaultProps = {
  cell: () => {},
  onCellClick: () => {},
  onHeaderClick: () => {}
}

const ColumnGroup = ({children}) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

ColumnGroup.propTypes = {

}

ColumnGroup.defaultProps = {

}


const THead = ({tableId, rowId, headers, showHeaders, columnPrefs}) => {
  if (!showHeaders)
    return null

  if (columnPrefs.length) {
    const headerContent = []
    columnPrefs.forEach(({id, header = '', onHeaderClick = () => {}, headerClassName = ''}, i) => {
      headerContent.push(
        <th
          className={`d-table-cell ${headerClassName}`}
          onClick={onHeaderClick}
          scope='col'
          key={`${tableId}-${header}-${i}`}
        >
          {header || id}
        </th>
      )
    })
    return (
      <thead>
        <tr className='d-table-row'>
          {headerContent.map(content => content)}
        </tr>
      </thead>
    )
  }

  return (
    <thead>{
      <tr>
        {headers.map((header, i) => (
          <th
            className=''
            scope='col'
            key={`${tableId}-${header}-${i}`}
          >
            {header}
          </th>
        ))}
      </tr>
    }</thead>
  )
}

THead.propTypes = {
  tableId: PropTypes.string,
  headers: PropTypes.arrayOf(PropTypes.string),
  columnPrefs: PropTypes.array.isRequired,
  rowId: PropTypes.string
}

const TBody = ({tableId, rowId, rows, tableNumbered, columnPrefs}) => {
  if (Boolean(columnPrefs.length)) {
    return (
      <tbody>{
        rows.map((row, index) => {
          const rowContent = []
          if (tableNumbered) {
            rowContent.push(
              <td
                id={`${tableId}-row-index-td-${index}`}
                key={`${tableId}-row-index-td-${index}`}
                className='d-table-cell'
              >
                {index + 1}
              </td>
            )
          }
          columnPrefs.forEach((column, i) => {
            const {
              id,
              onCellClick = () => {},
              cell = () => null
            } = column
            const customCell = cell(row)
            rowContent.push(
              <td
                onClick={() => onCellClick(row)}
                id={`${tableId}-td-${i}`}
                key={`${tableId}-td-${i}`}
                className='d-table-cell'
              >
                {customCell || row[id]}
              </td>
            )
          })
          return (
            <tr className='d-table-row' key={`${tableId}-row-${index}`}>
              {rowContent}
            </tr>
          )
        })
      }</tbody>
    )
  }

  return (
    <tbody>{
      rows.map((row, index) => {
        const columns = Object.keys(row)
        const rowContent = []
        if (tableNumbered) {
          rowContent.push(
            <td
              id={`${tableId}-row-index-td-${index}`}
              key={`${tableId}-row-index-td-${index}`}
              className='d-table-cell'
            >
              {index + 1}
            </td>
          )
        }
        columns.forEach((col, i) => {
          rowContent.push((
            <td
              id={`${tableId}-${col}-td-${index}-${i}`}
              key={`${tableId}-${col}-td-${index}-${i}`}
              className='d-table-cell'
            >
              {row[col]}
            </td>
          ))
        })
        return (
          <tr className='d-table-row' key={`${tableId}-row-${index}`}>
            {rowContent}
          </tr>
        )
      })
    }</tbody>
  )
}

TBody.propTypes = {
  tableId: PropTypes.string,
  rowId: PropTypes.string,
  rows: PropTypes.array,
  tableNumbered: PropTypes.bool,
  columnPrefs: PropTypes.array
}

const Table = ({id, rowId, data, className, style, showHeaders, tableNumbered, onRowClick, children}) => {
  const columnPrefs = []
  if (!id) {
    throw Error('"id" required to utilize Table component.')
  }
  else {
    if (children) {
      // Get children that are columns
      (children)
        .filter(child => child.type.name === 'Column')
        .forEach(child => {columnPrefs.push({...(child.props)})})
    }
  }

  // base headers off of the first piece of tableData
  const headers = Object.keys(data.find(data => data) || {})

  return (
    <table
      id={id}
      className={`table ${className}`}
      style={style}
    >
      <THead
        tableId={id}
        headers={headers}
        showHeaders={showHeaders}
        columnPrefs={columnPrefs}
        rowId={rowId}
      />
      <TBody
        tableId={id}
        rows={data}
        onRowClick={onRowClick}
        tableNumbered={tableNumbered}
        columnPrefs={columnPrefs}
        rowId={rowId}
      />
    </table>
  )
}

Table.propTypes = {
  id: PropTypes.string.isRequired,
  rowId: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  onRowClick: PropTypes.func,
  showHeaders: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  tableNumbered: PropTypes.bool,
  children: PropTypes.any
}

Table.defaultProps = {
  onRowClick: () => {},
  showHeaders: true,
  className: '',
  headerClassName: '',
  style: {}
}

export {
  Table,
  ColumnGroup,
  Column
}
