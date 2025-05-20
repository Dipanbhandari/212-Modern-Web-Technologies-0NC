const _ = require('lodash');

const holidays = [
  { name: 'Christmas', date: '2025-12-25' },
  { name: 'Canada Day', date: '2025-07-01' },
  { name: 'New Year', date: '2026-01-01' },
  { name: 'Thanksgiving', date: '2025-10-13' }
];

// Calculate days until each holidays
console.log('\n📅 Days until holidays:');
holidays.forEach(holiday => {
  const today = new Date();  
  const hDate = new Date(holiday.date);
  const diffTime = hDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(`${holiday.name}: ${diffDays} days remaining`);
});

// Pick a random holiday using lodash
const randomHoliday = _.sample(holidays);
console.log('\n🎉 Random Holiday Selected:');
console.log(`${randomHoliday.name} on ${randomHoliday.date}`);

// Get index of specific holidays
const holidayNames = holidays.map(h => h.name);
console.log('\n🔍 Holiday Indexes:');
console.log('Christmas index:', _.indexOf(holidayNames, 'Christmas'));
console.log('Canada Day index:', _.indexOf(holidayNames, 'Canada Day'));
