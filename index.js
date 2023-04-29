
let emp = [
  {
    name: 'akhil',
    age: 22,
  },
  {
    name: 'jasw',
    age: 35,
  },
  {
    name: 'Jaswanth',
    age: 25,
  },
  {
    name: 'xxxx',
    age: 29,
  },
];

const app = document.getElementById('app');

app.addEventListener('click', () => {
  const res = emp.filter((value) => value.age < 26);
  const res1 = res.map((e) => `{name: ${e.name}, age: ${e.age}}`);
  app.innerHTML = res1.join('<br>');
});
