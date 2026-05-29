import React from 'react';
import TrainCard from './TrainCard';

const TrainList = ({ trains }) => {
  if (trains.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#718096', fontWeight: 'bold' }}>
        Рейсів за вашим запитом не знайдено. Спробуйте змінити параметри пошуку.
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '25px',
      marginTop: '20px'
    }}>
      {trains.map(train => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
};

export default TrainList;