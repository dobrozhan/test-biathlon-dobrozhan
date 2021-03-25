import React, { useState, useEffect } from "react";
import Person from './Person'
import { persons } from './personList';

const App = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [sortedField, setSortedField] = React.useState('id');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = persons.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.surname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);

    persons.sort((a, b) => (a[sortedField] < b[sortedField]) ? -1 : 1);

    if (sortedField === 'accuracy' || sortedField === 'rate') {
      persons.sort((a, b) => (a[sortedField] > b[sortedField]) ? -1 : 1);
    }

    setData(persons);
    
  }, [searchTerm, sortedField]);

  return (
    <div className="App">
        <h2>Shooting 2020/2021. First 5 places. Data taken from <a href="https://www.biathlon.com.ua/en/shooting.php" rel="noreferrer" target="_blank">Biathlon.com.ua</a></h2>
        <br />
        <input
          type="text"
          placeholder="Search by surname or name"
          value={searchTerm}
          onChange={handleChange} />
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th onClick={() => setSortedField('id')}>#</th>
              <th onClick={() => setSortedField('surname')}>Surname</th>
              <th onClick={() => setSortedField('name')}>Name</th>
              <th onClick={() => setSortedField('accuracy')}>Accuracy</th>
              <th onClick={() => setSortedField('rate')}>Rate</th>
            </tr>
          </thead>
          <tbody>
            {(searchTerm === '') ? <Person persons={data} />  : <Person persons={searchResults} /> }
          </tbody>
        </table>
    </div>
  );
}

export default App;
