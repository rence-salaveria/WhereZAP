import Image from 'next/image'
import {
  Button,
  Label,
  Table,
  TextInput,
} from 'flowbite-react'
import { useEffect, useState } from 'react'
import DataTableRow from '@/components/DataTableRow'
import { dataRecord } from '@/stores/global.store'
import { generateResults } from '@/util/computations'

export default function Home() {
  const [voltage, setVoltage] = useState('')
  const [motorLoad, setMotorLoad] = useState('')
  const [current, setCurrent] = useState('')
  const [houseLoc, setHouseLoc] = useState('')
  const [data, setData] = useState([])

  // T-27 add delete button beside each record

  useEffect(() => {
    if (localStorage.getItem('dataRecord') !== null) {
      setData(
        JSON.parse(localStorage.getItem('dataRecord'))
      )
    }
  }, [])

  useEffect(() => {
    // T-28 change color of input if entered value is invalid
  }, [voltage, current])

  function handleDeleteFromRow(id) {
    const newData = data.filter(item => item.id !== id)
    setData(newData)
  }

  function handleLoadSampleData() {
    alert('This will overwrite all current data')
    setData(dataRecord)
  }

  function handleInputData() {
    // if parseint(voltage) returns an error, stop function and alert user
    // if current is not a number, stop function and alert user
    // if voltage or current is less than 0, stop function and alert user

    if (isNaN(voltage) || isNaN(current)) {
      alert('Please enter a valid number')
      return
    }
    const computedData = generateResults(voltage, current)
    const newData = {
      id: data.length + 1,
      voltage,
      motorLoad,
      current,
      location: houseLoc,
      resistance: computedData.resistance,
      groundVoltage: computedData.groundVoltage,
      power: computedData.power,
      faultType: computedData.caseResult,
    }
    setData([...data, newData])
  }

  function handleSaveData() {
    alert('This will save all current data')
    localStorage.setItem('dataRecord', JSON.stringify(data))
  }

  function handleDeleteData() {
    alert('This will delete all data on the table')
    setData([])
  }

  const tableHeaders = [
    'ID',
    'Motor Load',
    'Location',
    'Voltage (V)',
    'Current (A)',
    'Resistance',
    'Power',
    'Type of Fault',
    '',
  ]

  return (
    <div className='mx-[5%] mt-[1rem] mb-[5%]'>
      <form className='flex flex-col gap-8 items-center justify-center'>
        <div className='flex gap-10'>
          <div>
            <div className='mb-2 block'>
              <Label
                htmlFor='voltage'
                value='Voltage (V)'
              />
            </div>
            <TextInput
              id='voltage'
              type='text'
              placeholder=''
              required={true}
              onChange={e => setVoltage(e.target.value)}
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label
                htmlFor='current'
                value='Current (A)'
              />
            </div>
            <TextInput
              id='current'
              type='text'
              placeholder=''
              required={true}
              onChange={e => setCurrent(e.target.value)}
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label
                htmlFor='motorLoad'
                value='Motor Load'
              />
            </div>
            <TextInput
              id='motorLoad'
              type='text'
              placeholder=''
              required={true}
              onChange={e => setMotorLoad(e.target.value)}
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label
                htmlFor='houseLocation'
                value='In House Location'
              />
            </div>
            <TextInput
              id='houseLocation'
              type='text'
              placeholder=''
              required={true}
              onChange={e => setHouseLoc(e.target.value)}
            />
          </div>
        </div>
        <div className='flex gap-10'>
          <Button
            className='w-[6rem]'
            onClick={handleInputData}
          >
            Input
          </Button>
          <Button
            className='w-[6rem]'
            color='warning'
            type='reset'
          >
            Clear
          </Button>
          <Button
            className='w-[6rem]'
            onClick={handleDeleteData}
            color='failure'
          >
            Delete
          </Button>
        </div>
        <div className='flex gap-10'>
          <Button
            className='w-auto'
            gradientDuoTone='greenToBlue'
            onClick={handleSaveData}
          >
            Save Current Data
          </Button>
          <Button
            className='w-auto'
            gradientDuoTone='purpleToBlue'
            onClick={handleLoadSampleData}
          >
            Load Sample Data
          </Button>
        </div>
      </form>

      <div className='mt-[1rem] mb-[1rem]'>
        <h1 className='text-2xl font-bold'>Data Records</h1>
      </div>

      {data.length !== 0 ? (
        <Table>
          <Table.Head>
            {tableHeaders.map((header, index) => (
              <Table.HeadCell key={index}>
                {header}
              </Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body>
            {data.map((row, index) => (
              <DataTableRow
                key={index}
                data={row}
                deleteHandler={handleDeleteFromRow}
              />
            ))}
          </Table.Body>
        </Table>
      ) : (
        <div className='flex justify-center items-center font-bold text-xl text-red-600'>
          No Data Yet. Click Load Sample Data to load sample
          data.
        </div>
      )}
    </div>
  )
}
