import { useCallback, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import useDebounce from './hooks/useDebounce'
import axios from 'axios';
import Image from './components/Image';

function App() {
  const [searchVal, setSearchVal] = useState<string>('');
  const fetchImages = useCallback(async () => axios.get('http://localhost:3000', {
    params: {
      search: searchVal,
    }
  }).then(r => r.data), [searchVal]);
  const {
    result,
  } = useDebounce({value: searchVal, effect: fetchImages});

  return (
    <div>
      <h1 className='text-4xl font-bold underline'>Image Search Engine</h1>
      <SearchBar searchValue={searchVal} setSearchValue={setSearchVal} />
      <div className='grid grid-rows-2 grid-cols-5 gap-4'>
      {
        result?.data?.map(d => (
          <Image imageUrl={d.imageUrl}/>
        ))
      }
      </div>
    </div>
  )
}

export default App
