import { ChangeEvent } from "react";
import { useState, useEffect } from 'react';
import CatType from './type/single/cat.single.type';
import CatListComponent from './components/list/cat-list/cat.list.component';
import './App.style.scss'
import SearchBoxComponent from './components/single/searchbox/searchbox.single.component';

function App() {
  const [searchText, setSearchText] = useState('');
  const [cardList, setCardList] = useState([] as CatType[]);

  const onFilterChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }

  useEffect(() => {
    const catList: Array<CatType> = [
      {
        id: 'CT0001',
        name: 'Mew',
        price: 199
      },
      {
        id: 'CT0002',
        name: 'Catherine',
        price: 399
      },
      {
        id: 'CT0003',
        name: 'Mona',
        price: 159
      },
      {
        id: 'CT0004',
        name: 'Jill',
        price: 139
      },
      {
        id: 'CT0005',
        name: 'Arena',
        price: 119
      },
      {
        id: 'CT0006',
        name: 'Zola',
        price: 669
      },
      {
        id: 'CT0007',
        name: 'Mumu',
        price: 129
      }
    ];

    const filterCardList = catList.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchText)
    });

    setCardList(filterCardList);
  }, [searchText]);

  return (
    <div className="App">
      <h1>Cat gallery</h1>
      <SearchBoxComponent placeholder='Enter a word to filter...' onTextChange={onFilterChanged} textboxValue={searchText}></SearchBoxComponent>
      <CatListComponent list={cardList} ></CatListComponent>
    </div>
  );
}

export default App;
