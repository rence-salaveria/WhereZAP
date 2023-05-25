import React from 'react'
import { Table } from 'flowbite-react'
import { AiFillDelete } from 'react-icons/ai'

export default function DataTableRow({
  data,
  deleteHandler,
}) {
  return (
    <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
      <Table.Cell>{data.id}</Table.Cell>
      <Table.Cell>{data.motorLoad}</Table.Cell>
      <Table.Cell>{data.location}</Table.Cell>
      <Table.Cell>{data.voltage}</Table.Cell>
      <Table.Cell>{data.current}</Table.Cell>
      <Table.Cell>{data.resistance}</Table.Cell>
      <Table.Cell>{data.groundVoltage}</Table.Cell>
      <Table.Cell>{data.power}</Table.Cell>
      <Table.Cell>{data.faultType}</Table.Cell>
      <Table.Cell>
        <button onClick={e => deleteHandler(data.id)}>
          <AiFillDelete className='text-red-600' />
        </button>
      </Table.Cell>
    </Table.Row>
  )
}
