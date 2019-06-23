// item example
// {
//   name: 'Name', 
//   description: 'Description', 
//   expirationDate: '01-30-1999' 
// }

const filterByExpiration = (items) => {
  // change this function to return only current items
  // where expirationDate > today's date
  let today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);
  return items.filter((i) => {
      if ('expirationDate' in i) {
          let iD = new Date(i['expirationDate']);
          iD.setHours(0);
          iD.setMinutes(0);
          iD.setSeconds(0);
          iD.setMilliseconds(0);
          if (+iD > +today) return i;
      }
  });
};