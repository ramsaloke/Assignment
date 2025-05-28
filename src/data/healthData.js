const healthData = {
  anatomyIndicators: [
    {
      id: 1,
      position: { top: '30%', left: '30%' },
      status: 'healthy',
      name: 'Healthy Heart'
    },
    {
      id: 2,
      position: { top: '65%', left: '37%' },
      status: 'healthy',
      name: 'Healthy Leg'
    }
  ],
  healthStatus: [
    {
      id: 1,
      name: 'Lungs',
      date: '20 Oct 2021',
      status: 'warning',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/3022/3022552.png',
      progress: 60
    },
    {
      id: 2,
      name: 'Teeth',
      date: '26 Oct 2021',
      status: 'healthy',
      icon: '🦷',
      progress: 90
    },
    {
      id: 3,
      name: 'Bone',
      date: '26 Oct 2021',
      status: 'warning',
      icon: '🦴',
      progress: 65
    }
  ]
};

export default healthData;