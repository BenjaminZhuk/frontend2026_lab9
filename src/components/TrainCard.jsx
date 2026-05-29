import React from 'react';

const TrainCard = ({ train }) => {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '20px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.2s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <span style={{ backgroundColor: '#0057b7', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px' }}>
          Потяг {train.trainNumber}
        </span>
        <span style={{ fontWeight: 'bold', color: '#ffcc00', fontSize: '18px' }}>
          {train.price} ₴
        </span>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <strong style={{ fontSize: '16px', color: '#1a202c' }}>{train.from} → {train.to}</strong>
      </div>

      <div style={{ fontSize: '14px', color: '#4a5568', lineHeight: '1.6' }}>
        <div>Дата: {train.departureDate}</div>
        <div>Відправлення: <strong>{train.departureTime}</strong></div>
        <div>В дорозі: {train.duration}</div>
      </div>

      <button style={{
        marginTop: '15px',
        backgroundColor: '#0057b7',
        color: 'white',
        border: 'none',
        padding: '10px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.2s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#004494'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0057b7'}
      >
        Вибрати місця
      </button>
    </div>
  );
};

export default TrainCard;