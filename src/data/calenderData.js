const calendarData = {
  month: 'October 2021',
  days: [
    { day: 'Mon', date: 25, appointments: ['10:00', '11:00', '12:00'] },
    { day: 'Tue', date: 26, appointments: ['08:00', '09:00', '10:00'] },
    { day: 'Wed', date: 27, appointments: ['12:00', '13:00'] },
    { day: 'Thu', date: 28, appointments: ['10:00', '11:00'] },
    { day: 'Fri', date: 29, appointments: ['14:00', '16:00'] },
    { day: 'Sat', date: 30, appointments: ['12:00', '14:00', '15:00'] },
    { day: 'Sun', date: 31, appointments: ['09:00', '10:00', '11:00'] }
  ],
  appointments: [
    {
      id: 1,
      title: 'Dentist',
      doctor: 'Dr. Cameron Williamson',
      time: '09:00-11:00',
      icon: '🦷'
    },
    {
      id: 2,
      title: 'Physiotherapy Appointment',
      doctor: 'Dr. Kevin Bones',
      time: '11:00-12:00',
      icon: '🏃'
    }
  ]
};

export default calendarData;