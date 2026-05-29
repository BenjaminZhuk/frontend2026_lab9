import React, { useState } from 'react';
import { mockTrains } from '../data/trains';
import TrainList from '../components/TrainList';

const Home = () => {
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');

  const filteredTrains = mockTrains.filter(train => {
    const matchesFrom = train.from.toLowerCase().includes(searchFrom.toLowerCase()) || 
                        train.trainNumber.toLowerCase().includes(searchFrom.toLowerCase());
    const matchesTo = train.to.toLowerCase().includes(searchTo.toLowerCase());
    
    return matchesFrom && matchesTo;
  });

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ textTransform: 'uppercase', textAlign: 'center', marginBottom: '30px', borderBottom: '3px solid #0057b7', paddingBottom: '10px' }}>
        <h1 style={{ color: '#0057b7', margin: 0 }}>Укрзалізниця</h1>
        <p style={{ color: '#718096', margin: '5px 0 0 0', letterSpacing: '1px', fontSize: '12px', fontWeight: 'bold' }}>
          Моделювання системи бронювання
        </p>
      </header>

      {/* Панель пошуку */}
      <div style={{
        backgroundColor: '#f7fafc',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
        marginBottom: '30px'
      }}>
        <div style={{ flex: '1', minWidth: '200px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#4a5568' }}>Звідки (або № потяга):</label>
          <input 
            type="text" 
            placeholder="Наприклад: Київ" 
            value={searchFrom}
            onChange={(e) => setSearchFrom(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ flex: '1', minWidth: '200px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#4a5568' }}>Куди:</label>
          <input 
            type="text" 
            placeholder="Наприклад: Перемишль" 
            value={searchTo}
            onChange={(e) => setSearchTo(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }}
          />
        </div>
      </div>

      <h2 style={{ color: '#2d3748', marginBottom: '15px' }}>Доступні рейси</h2>
      <TrainList trains={filteredTrains} />
    </div>
  );
};

export default Home;